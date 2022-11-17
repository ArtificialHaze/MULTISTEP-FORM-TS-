import { FormDataProps } from "./MyForm";
import Form from "react-bootstrap/Form";

const Final = ({ formData, setFormData }: FormDataProps) => {
  return (
    <Form>
      <Form.Group
        className="mb-3 d-flex flex-column align-items-start"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>Is everything correct? </Form.Label>
        <Form.Check
          onChange={() =>
            setFormData({
              ...formData,
              yourDataIsCorrect: !formData.yourDataIsCorrect,
            })
          }
          checked={formData.yourDataIsCorrect}
          type="checkbox"
          key={"yourDataIsCorrect"}
        ></Form.Check>
      </Form.Group>
    </Form>
  );
};

export default Final;
