import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import Container from "../../style-guide/container";
import Title from "../../style-guide/title";
import { StatusBadge } from "../../style-guide/badge/Badge";
import TicketDetailsWrapper from "./style/TicketDetailsWrapper";
import Button from "../../style-guide/button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Text from "../../style-guide/text";
import Divider from "../../style-guide/divider";
import { Form } from "antd";
import StyledTextArea from "../../style-guide/textArea";

export const formatDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const TicketDetail = () => {
  const { id } = useParams();
  const { get, post } = useApi();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState([]);
  const { replies } = ticket || [];

  const onFinish = async (data) => {
    try {
      const response = await post("/replies", { ...data, ticketId: +id });
      if (response.createdAt) {
        get(`/tickets/${id}`).then((data) => setTicket(data));
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  useEffect(() => {
    try {
      get(`/tickets/${id}`).then((data) => setTicket(data));
    } catch (error) {
      console.log(error);
    }
  }, [setTicket]);

  return (
    <TicketDetailsWrapper className="row">
      <div className="col-12 back-button-container">
        <ArrowLeftOutlined className="back-icon" style={{ fontSize: "12px" }} />
        <Button type="link" onClick={() => navigate("/")}>
          Back to tickets
        </Button>
      </div>
      <div className="ticket-title-container">
        <Title size="big">{ticket?.title}</Title>
        <div>
          <StatusBadge className="ticket-status" status={ticket?.status} />
          <Button>Close ticket</Button>
        </div>
      </div>
      <Container>
        <div className="ticket-date-container">
          <Text
            className="meta-data-text"
            size="small"
            color="rgba(0, 0, 0, 0.45)"
          >
            {formatDate(ticket?.createdAt)}
          </Text>
          <Text size="small" color="rgba(0, 0, 0, 0.45)">
            ID: {ticket?.id}
          </Text>
        </div>
        <Text
          className="description-text"
          size="small"
          color="rgba(0, 0, 0, 0.88)"
        >
          {ticket?.description}
        </Text>
      </Container>
      <div className="divider-container">
        <Divider className="first-divider" />
        <Title size="small" className="divider-text">
          Replies
        </Title>
        <Divider />
      </div>
      {replies?.map((reply, index) => {
        return (
          <div key={reply?.id}>
            <Container>
              <div className="reply-date-container">
                <Text
                  className="meta-data-text"
                  size="small"
                  color="rgba(0, 0, 0, 0.45)"
                >
                  {formatDate(reply?.createdAt)}
                </Text>
              </div>
              <Text
                className="description-text"
                size="small"
                color="rgba(0, 0, 0, 0.88)"
              >
                {reply?.message}
              </Text>
            </Container>
            {index !== replies?.length - 1 && (
              <Divider className="reply-divider" />
            )}
          </div>
        );
      })}
      <div className="add-divider-container">
        <Divider className="first-divider" />
        <Title size="small" className="divider-text">
          Add Reply
        </Title>
        <Divider />
      </div>
      <Container className="form-container">
        <Form onFinish={onFinish}>
          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter a reply" }]}
          >
            <StyledTextArea
              placeholder="Type your reply here..."
              className="ticket-text-area"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Ticket
          </Button>
        </Form>
      </Container>
    </TicketDetailsWrapper>
  );
};

export default TicketDetail;
