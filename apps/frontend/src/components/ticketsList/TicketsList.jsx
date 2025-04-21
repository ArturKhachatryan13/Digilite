import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import TicketsListWrapper from "./style/TicketsListWrapper";
import Title from "../../style-guide/title";
import Button from "../../style-guide/button";

import { useApi } from "../../hooks/useApi";
import PATHS from "../constants/paths";
import SearchTickets from "./components/SearchTickets";
import Tickets from "./components/Tickets";

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterStatus = searchParams.get("status") || "all";
  const searchValue = searchParams.get("search") || "";

  const { get } = useApi();
  const navigate = useNavigate();

  const buildQuery = (params) => {
    const status = params.get("status");
    const search = params.get("search");

    const query = {};
    if (status && status !== "all") query.status = status;
    if (search?.trim()) query.search = search;

    return query;
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const query = buildQuery(searchParams);
        const data = await get("/tickets", { query });
        setTickets(data);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
    };

    fetchTickets();
  }, [searchParams]);

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
        <Button onClick={() => navigate(PATHS.CREATE_TICKET)} type="primary">
          New ticket
        </Button>
      </div>
      <SearchTickets
        handleStatusChange={handleStatusChange}
        filterStatus={filterStatus}
        searchValue={searchValue}
        handleSearch={handleSearch}
      />
      {tickets?.map((ticket) => (
        <Tickets key={ticket?.id} ticket={ticket} />
      ))}
    </TicketsListWrapper>
  );
};

export default TicketsList;
