// src/components/TicketsList.jsx
import React, { useEffect, useState } from "react";
import TicketsListWrapper from "./style/TicketsListWrapper";
import Title from "../../style-guide/title";
import Button from "../../style-guide/button";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import Container from "../../style-guide/container";
import Divider from "../../style-guide/divider";
import Text from "../../style-guide/text";
import { StatusBadge } from "../../style-guide/badge/Badge";

export const formatDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  return date.toLocaleDateString("ru-RU");
};

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);
  const { get } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      get("/tickets").then(({ data }) => setTickets(data));
    } catch (error) {
      console.log(error);
    }
  }, [setTickets]);

  const goToTicket = (id) => {
    navigate(`ticket/${id}`);
  };

  return (
    <TicketsListWrapper className="row">
      <div className="col-12 ticket-creation-container">
        <Title size="big">Support Tickets</Title>
        <Button onClick={() => navigate("/create")} type="primary">
          New ticket
        </Button>
      </div>
      {tickets.map((ticket) => {
        return (
          <Container
            key={ticket?.id}
            className="row card-container"
            onClick={() => goToTicket(ticket?.id)}
          >
            <div className="badge-container col-12">
              <StatusBadge status={ticket?.status} />
            </div>
            <Divider />
            <div className="content-container">
              <Title className="main-title" size="small">
                {ticket?.title}
              </Title>
              <Text className="meta-data-text" size="small">
                ID: {ticket?.id} | Created: {formatDate(ticket?.createdAt)}
              </Text>
              <Text size="small">{ticket?.description}</Text>
              <Text size="small">0 replies</Text>
            </div>
          </Container>
        );
      })}
    </TicketsListWrapper>
  );
};

export default TicketsList;
