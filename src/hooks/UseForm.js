import { useEffect, useState } from "react";

export const useForm = (initialValues, submit, validations) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submiting, setSubmiting] = useState(false);

  useEffect(() => {
    if (submiting) {
      if (Object.keys(errors).length === 0) {
        submit(values);
      }
      setSubmiting(false);
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
  }, [errors]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validations) {
      setErrors(validations(values));
    } else {
      setErrors({});
    }
    setSubmiting(true);
  };

  return { handleChange, handleSubmit, values, errors, setValues };
};

export default useForm;
