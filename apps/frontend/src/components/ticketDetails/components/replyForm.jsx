import Container from "../../../style-guide/container";
import { Form } from "antd";
import StyledTextArea from "../../../style-guide/textArea";
import Button from "../../../style-guide/button";

const ReplyForm = ({ addReply, form }) => {
  return (
    <Container className="form-container">
      <Form form={form} onFinish={addReply}>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter a reply" }]}
        >
          <StyledTextArea
            placeholder="Type your reply here..."
            className="reply-text-area"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add reply
        </Button>
      </Form>
    </Container>
  );
};

export default ReplyForm;
