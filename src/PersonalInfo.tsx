import Form from "react-bootstrap/Form";
import { FormDataProps } from "./MyForm";

type Props = {};

const PersonalInfo = ({ formData, setFormData }: FormDataProps) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          type="text"
          placeholder="Name.."
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age: </Form.Label>
        <Form.Control
          key={"number"}
          onChange={(e) => {
            const reader = new FileReader();
            setFormData({ ...formData, age: e.target.value });
          }}
          value={formData.age}
          type="number"
          placeholder="Age..."
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number: </Form.Label>
        <Form.Control
          key={"number"}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          value={formData.number}
          type="text"
          placeholder="Phone Number..."
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PersonalInfo;
