export interface IEmployee {
  fullname: string;
  phoneNumber: number;
  email: string;
  position: string;
  Salary: number;
}

export interface IRule {
  [x: string]: Partial<rules>;
}
export interface IData {
  [x: string]: any;
}

export interface IErrors {
  [field: string]: Array<string>;
}

type rules = {
  required: boolean;
  minlength: number;
  alpha: boolean;
  email: boolean;
  numeric: boolean;
  strAlpha: boolean;
  alphanumeric: boolean;
  phoneNumber: boolean;
};
