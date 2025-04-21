import Container from "../../../style-guide/container";
import Text from "../../../style-guide/text";
import theme from "../../../style-guide/theme";
import { formatDate } from "../../helpers";

const TicketCard = ({ ticket }) => {
  return (
    <Container className="col-12">
      <div className="ticket-date-container">
        <Text
          className="meta-data-text"
          size="small"
          color={theme.colors.gray[10]}
        >
          {formatDate(ticket?.createdAt)}
        </Text>
        <Text size="small" color={theme.colors.gray[10]}>
          ID: {ticket?.id}
        </Text>
      </div>
      <Text
        className="description-text"
        size="small"
        color={theme.colors.black[80]}
      >
        {ticket?.description}
      </Text>
    </Container>
  );
};

export default TicketCard;
