import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useEffect, useState } from "react";

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState([]);
  const { get } = useApi();

  useEffect(() => {
    try {
      get(`/tickets/${id}`).then((data) => setTicket(data));
    } catch (error) {
      console.log(error);
    }
  }, [setTicket]);

  return (
    <div className="p-4">
      <p>TicketDetail </p>
    </div>
  );
};

export default TicketDetail;
