import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useApi } from "../../hooks/useApi";

import Title from "../../style-guide/title";
import { StatusBadge } from "../../style-guide/badge/Badge";
import TicketDetailsWrapper from "./style/TicketDetailsWrapper";
import Button from "../../style-guide/button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Form } from "antd";
import Divider from "../../style-guide/divider";
import PATHS from "../constants/paths";
import TicketCard from "./components/TicketCard";
import ReplyCard from "./components/ReplyCard";
import ReplyForm from "./components/replyForm";

const TicketDetail = () => {
  const [ticket, setTicket] = useState([]);
  const { id } = useParams();
  const { get, post, patch } = useApi();
  const navigate = useNavigate();
  const isOpenTicket = ticket.status === "open";

  const { replies } = ticket || [];
  const [form] = Form.useForm();

  const addReply = async (data) => {
    try {
      const payload = { ...data, ticketId: +id };
      const response = await post("/replies", payload);

      form.resetFields(["message"]);

      if (response?.createdAt) {
        const updatedTicket = await get(`/tickets/${id}`);
        setTicket(updatedTicket);
      }
    } catch (error) {
      console.error("Failed to add reply:", error);
    }
  };

  const closeTicket = async () => {
    try {
      const newStatus = ticket.status === "open" ? "closed" : "open";
      const response = await patch(`/tickets/${id}`, { status: newStatus });

      form.resetFields(["message"]);

      if (response?.createdAt) {
        const updatedTicket = await get(`/tickets/${id}`);
        setTicket(updatedTicket);
      }
    } catch (error) {
      console.error("Failed to toggle ticket status:", error);
    }
  };
  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await get(`/tickets/${id}`);
        setTicket(data);
      } catch (error) {
        console.error("Failed to fetch ticket:", error);
      }
    };

    fetchTicket();
  }, [id, setTicket]);

  return (
    <TicketDetailsWrapper className="row">
      <div className="col-12 back-button-container">
        <ArrowLeftOutlined className="back-icon" />
        <Button type="link" onClick={() => navigate(PATHS.HOME)}>
          Back to tickets
        </Button>
      </div>
      <div className="col-12 ticket-title-container">
        <Title size="big">{ticket?.title}</Title>
        <div>
          <StatusBadge className="ticket-status" status={ticket?.status} />
          <Button onClick={closeTicket}>
            {isOpenTicket ? "Close ticket" : "Reopen ticket"}
          </Button>
        </div>
      </div>
      <TicketCard ticket={ticket} />
      <div className="divider-container">
        <Divider className="first-divider" />
        <Title size="small" className="divider-text">
          Replies
        </Title>
        <Divider />
      </div>
      {replies?.map((reply, index) => {
        return (
          <ReplyCard
            repliesCount={replies?.length}
            key={reply?.id}
            reply={reply}
            index={index}
          />
        );
      })}
      <div className="add-divider-container">
        <Divider className="first-divider" />
        <Title size="small" className="divider-text">
          Add Reply
        </Title>
        <Divider />
      </div>
      <ReplyForm form={form} addReply={addReply} />
    </TicketDetailsWrapper>
  );
};

export default TicketDetail;
