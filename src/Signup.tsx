import { FormDataProps } from "./MyForm";
import Form from "react-bootstrap/Form";

const Signup = ({ formData, setFormData }: FormDataProps) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          type="email"
          placeholder="example@example.com.."
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password: </Form.Label>
        <Form.Control
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
          type="password"
          placeholder="Password..."
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Signup;
