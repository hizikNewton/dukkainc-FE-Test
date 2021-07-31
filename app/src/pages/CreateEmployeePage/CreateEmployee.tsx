import { Header } from "../../components/header";
import React, { Component } from "react";
import { FormValidator } from "../../components/form/FormValidator";
import { ValidationMessage } from "../../components/form/validateMsg";
import { StyledEmployeeForm, StyledFormField, Title } from "./styles";
import { ValidateCustomField } from "../../components/form/CustomFieldForm";
import { Data, ErrorData } from "./types";
import { IRule } from "../../interface";

interface Props {}
interface State {
  data: Data;
  errors: ErrorData;
}

export class CreateEmployee extends Component<Props, State> {
  rules: IRule;
  label: { [x: string]: any };
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {
        fullname: "",
        phoneNumber: "",
        email: "",
        position: "",
        salary: "",
      },
      errors: {},
    };
    this.rules = {
      fullname: { required: true, minlength: 5, strAlpha: true },
      phoneNumber: { required: true, minlength: 10, phoneNumber: true },
      email: { required: true, email: true },
      position: { required: true, alphanumeric: true },
      salary: { required: true, numeric: true },
    };
    this.label = {
      fullname: "Full Name",
      phoneNumber: "Phone Number",
      email: "Email",
      position: "Position",
      salary: "Salary",
    };
  }
  updateFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ data: { ...this.state.data, [name]: value } });
  };
  setErrorState = (errors: ErrorData) => {
    this.setState({ errors: errors });
  };
  render() {
    const { data } = this.state;
    return (
      <>
        <Header />
        <Title>
          <h3>{"CREATE EMPLOYEE PROFILE"}</h3>
        </Title>
        <FormValidator
          data={data}
          rules={this.rules}
          validateForm={ValidateCustomField}
          setErrorState={this.setErrorState}
        >
          <StyledEmployeeForm>
            <StyledFormField>
              {Object.entries(data).map(([key, value]) => (
                <>
                  <label className={"required"} htmlFor={key}>
                    {this.label[key]}
                  </label>
                  <input
                    name={key}
                    value={value}
                    onChange={this.updateFormValue}
                    required
                  />
                  <ValidationMessage field={key} />
                </>
              ))}
            </StyledFormField>
          </StyledEmployeeForm>
        </FormValidator>
      </>
    );
  }
}
