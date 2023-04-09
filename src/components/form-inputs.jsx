import { useField } from "formik";
import Form from "react-bootstrap/Form";
import "../css/forms.css";

export const InputField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group className="mb-2">
        <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
        <Form.Control
          {...field}
          {...props}
          
          isInvalid={meta.touched && meta.error}
          isValid={meta.touched && !meta.error}
        />
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
