import Form from "react-bootstrap/Form";
import "../css/forms.css";

export const InputField = ({ label,error, ...props }) => {
  return (
    <>
      <Form.Group className="mb-2">
        {label && <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>}
        <Form.Control {...props} />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
