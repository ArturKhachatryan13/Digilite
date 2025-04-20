import React, { useEffect, useState } from "react";
import TicketsListWrapper from "./style/TicketsListWrapper";
import Title from "../../style-guide/title";
import Button from "../../style-guide/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import Container from "../../style-guide/container";
import Divider from "../../style-guide/divider";
import Text from "../../style-guide/text";
import { StatusBadge } from "../../style-guide/badge/Badge";
import { Radio, Input } from "antd";

export const formatDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  return date.toLocaleDateString("ru-RU");
};

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterStatus = searchParams.get("status") || "all";
  const searchValue = searchParams.get("search") || "";

  const { get } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      const query = {};
      const status = searchParams.get("status");
      const search = searchParams.get("search");

      if (status && status !== "all") {
        query.status = status;
      }

      if (search && search.trim()) {
        query.search = search;
      }

      try {
        const data = await get("/tickets", { query });
        setTickets(data);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
    };

    fetchTickets();
  }, [searchParams]);

  const goToTicket = (id) => {
    navigate(`ticket/${id}`);
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (newStatus === "all") {
      params.delete("status");
    } else {
      params.set("status", newStatus);
    }
    setSearchParams(params);
  };

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams);
    if (!value.trim()) {
      params.delete("search");
    } else {
      params.set("search", value);
    }
    setSearchParams(params);
  };

  return (
    <TicketsListWrapper className="row">
      <div className="col-12 ticket-creation-container">
        <Title size="big">Support Tickets</Title>
        <Button onClick={() => navigate("/create")} type="primary">
          New ticket
        </Button>
      </div>
      <div className="search-container">
        <Input.Search
          placeholder="Search by title"
          allowClear
          defaultValue={searchValue}
          enterButton
          onSearch={handleSearch}
          style={{ width: 200, marginRight: 16 }}
        />
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="open">Open</Radio.Button>
          <Radio.Button value="closed">Closed</Radio.Button>
        </Radio.Group>
      </div>
      {tickets?.map((ticket) => (
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
            <Text
              color="rgba(0, 0, 0, 0.45)"
              className="meta-data-text"
              size="small"
            >
              ID: {ticket?.id} | Created: {formatDate(ticket?.createdAt)}
            </Text>
            <Text className="description-text" size="small">
              {ticket?.description}
            </Text>
            <Text color="rgba(0, 0, 0, 0.45)" size="small">
              {ticket?.replies.length} replies
            </Text>
          </div>
        </Container>
      ))}
    </TicketsListWrapper>
  );
};

export default TicketsList;
