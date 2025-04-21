import Container from "../../../style-guide/container";
import Divider from "../../../style-guide/divider";
import Text from "../../../style-guide/text";
import theme from "../../../style-guide/theme";
import { formatDate } from "../../helpers";

const ReplyCard = ({ repliesCount, reply, index }) => {
  return (
    <div>
      <Container>
        <div className="reply-date-container">
          <Text
            className="meta-data-text"
            size="small"
            color={theme.colors.gray[10]}
          >
            {formatDate(reply?.createdAt)}
          </Text>
        </div>
        <Text
          className="description-text"
          size="small"
          color={theme.colors.black[80]}
        >
          {reply?.message}
        </Text>
      </Container>
      {index !== repliesCount - 1 && <Divider className="reply-divider" />}
    </div>
  );
};

export default ReplyCard;
