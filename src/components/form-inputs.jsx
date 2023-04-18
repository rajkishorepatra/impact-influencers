import Form from "react-bootstrap/Form";
import { PhoneInput } from "react-contact-number-input";
import "../css/forms.css";

export const InputField = ({ label, error, ...props }) => {
  return (
    <>
      <Form.Group className="mb-2">
        {label && (
          <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
        )}
        <Form.Control {...props} />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export const TextArea = ({ label, error, ...props }) => {
  return (
    <>
      <Form.Group className="mb-2">
        {label && (
          <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
        )}
        <Form.Control as="textarea" rows={3} {...props} />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export const Select = ({ label, error, children, ...props }) => {
  return (
    <>
      <Form.Group className="mb-2">
        {label && (
          <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
        )}
        <Form.Select {...props}>{children}</Form.Select>
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export const Telephone = ({ error, ...props }) => {
  return (
    <>
      <Form.Group className="mb-2">
        <PhoneInput {...props}  />         
        {error && <div className="d-block invalid-feedback">{error}</div>}
      </Form.Group>
    </>
  )
};
