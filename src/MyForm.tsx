import React, { useState } from "react";
import Final from "./Final";
import PersonalInfo from "./PersonalInfo";
import Signup from "./Signup";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

export type FormProps = {
  formData: {
    email: string;
    password: string;
    name: string;
    age: string;
    number: string;
    yourDataIsCorrect: boolean;
  };
};

export interface CompleteFormState {
  email: string;
  password: string;
  name: string;
  age: string;
  number: string;
  yourDataIsCorrect: boolean;
}

export interface FormDataProps extends FormProps {
  setFormData: React.Dispatch<React.SetStateAction<CompleteFormState>>;
}

const MyForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    number: "",
    email: "",
    password: "",
    yourDataIsCorrect: false,
  });

  const formTitles = ["SignUp", "PersonalInfo", "Confirm"];

  const formDisplay = () => {
    if (page === 0) {
      return <Signup formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Final formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div
      style={{ width: "500px" }}
      className="m-auto shadow rounded p-5 bg-white"
    >
      <ProgressBar
        now={formTitles.length - 1 === page ? 100 : (page + 1) * 33}
        label={`${formTitles.length - 1 === page ? 100 : (page + 1) * 33}%`}
      />
      <h3>{formTitles[page]}</h3>
      {formDisplay()}
      <Button
        className="mx-2"
        disabled={page === 0}
        onClick={() => setPage((prev) => prev - 1)}
        variant="danger"
      >
        Previous
      </Button>
      <Button
        disabled={!formData.yourDataIsCorrect && formTitles.length - 1 === page}
        className="mx-2"
        onClick={() => {
          if (page === formTitles.length - 1) {
            alert("Form submitted");
          } else {
            setPage((prev) => prev + 1);
          }
        }}
        variant="primary"
      >
        {page === formTitles.length - 1 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default MyForm;
