import React, { Component } from "react";
import { FormCtx, ValidationCtx } from "../../context";
import { ValidateData } from "./validate";
import { IData, IRule } from "../../interface";
import localStorage from "../../utils/localStorage";
import history from "../../utils/history";
import { SaveButton } from "./styles";

type errors = Array<string>;

interface Props {
  data: any;
  rules: IRule;
  validateForm(data: IData): errors;
  setErrorState?: (error: any) => void;
  submitText?: string;
}
interface State {
  errors: {
    [fields: string]: any;
  };
  dirty: {
    [fields: string]: any;
  };
  formSubmitted: boolean;
  formValid: boolean;
  getMessagesForField: (field: string) => [];
}

export class FormValidator extends Component<Props, State> {
  static defaultProps = {
    submitText: "SAVE",
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {},
      dirty: {},
      formSubmitted: false,
      formValid: false,
      getMessagesForField: this.getMessagesForField,
    };
  }
  static contextType = FormCtx;
  context!: React.ContextType<typeof FormCtx>;

  static getDerivedStateFromProps(props: Props, state: State) {
    state.errors = ValidateData(props.data, props.rules);
    if (state.formSubmitted && Object.keys(state.errors).length === 0) {
      let formErrors = props.validateForm(props.data);
      if (formErrors.length > 0) {
        state.errors.form = formErrors;
      }
    }
    return state;
  }
  get formValid() {
    return Object.keys(this.state.errors).length === 0;
  }

  getMessagesForField = (field: string) => {
    return this.state.formSubmitted || this.state.dirty[field]
      ? this.state.errors[field] || []
      : [];
  };

  handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let name = ev.target.name;
    this.setState((state) => {
      state.dirty[name] = true;
    });
    this.props.setErrorState?.(this.state.errors);
  };

  handleClick = () => {
    this.setState({ formSubmitted: true }, () => {
      if (this.formValid) {
        let formErrors = this.props.validateForm(this.props.data);
        if (formErrors.length === 0) {
          let empList = localStorage.getItem("employee");
          if (empList && empList.length > 0) {
            empList.push(this.props.data);
            localStorage.setItem("employee", empList);
          } else {
            localStorage.setItem("employee", [this.props.data]);
          }
          history.push("/employees");
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <ValidationCtx.Provider value={this.state}>
          <div onChange={this.handleChange}>{this.props.children}</div>

          <div>
            <SaveButton onClick={this.handleClick} disabled={!this.formValid}>
              {this.props.submitText}
            </SaveButton>
          </div>
        </ValidationCtx.Provider>
      </React.Fragment>
    );
  }
}
