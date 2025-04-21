import { useNavigate } from "react-router-dom";
import Container from "../../../style-guide/container";
import { StatusBadge } from "../../../style-guide/badge/Badge";
import Divider from "../../../style-guide/divider";
import Title from "../../../style-guide/title";
import Text from "../../../style-guide/text";
import { changeFormatDate } from "../../helpers";
import theme from "../../../style-guide/theme";

const Tickets = ({ ticket }) => {
  const navigate = useNavigate();
  const goToTicket = (id) => {
    navigate(`ticket/${id}`);
  };
  return (
    <Container
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
          color={theme.colors.gray[10]}
          className="meta-data-text"
          size="small"
        >
          ID: {ticket?.id} | Created: {changeFormatDate(ticket?.createdAt)}
        </Text>
        <Text className="description-text" size="small">
          {ticket?.description}
        </Text>
        <Text color={theme.colors.gray[10]} size="small">
          {ticket?.replies.length} replies
        </Text>
      </div>
    </Container>
  );
};
export default Tickets;
