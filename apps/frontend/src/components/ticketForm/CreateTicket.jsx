import Container from "../../style-guide/container";
import Text from "../../style-guide/text";
import Title from "../../style-guide/title";
import TicketFormWrapper from "./style/TicketFormWrapper";
import StyledInput from "../../style-guide/input";
import StyledTextArea from "../../style-guide/textArea";
import Button from "../../style-guide/button";
import { Form } from "antd";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const { post } = useApi();
  const navigate = useNavigate();

  const onFinish = async (value) => {
    try {
      const response = await post("/tickets", { ...value, status: "open" });
      if (response.createdAt) {
        navigate("/");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <TicketFormWrapper>
      <Title size="big" className="ticket-title">
        Create New Support Ticket
      </Title>
      <Text size="small" className="text-muted-foreground">
        Please provide details about the issue you're experiencing. Our support
        team will respond as soon as possible.
      </Text>
      <Container>
        <Form onFinish={onFinish}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please input a title!" }]}
          >
            <StyledInput
              placeholder="Briefly describe your issues"
              required
              label="Title"
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Please input a description" }]}
          >
            <StyledTextArea
              label="Description"
              required
              placeholder="Please provide details about your issue"
              className="ticket-text-area"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Ticket
          </Button>
        </Form>
      </Container>
    </TicketFormWrapper>
  );
};

export default CreateTicket;
