import { createContext } from "react";
export interface IEmployee {
  fullname: string;
  phoneNumber: number;
  email: string;
  position: string;
  Salary: number;
}
export interface IFormContext {
  submitForm: (employee: IEmployee) => Promise<void | string>;
  loading: boolean;
  message: string;
}
export const FormCtx = createContext<IFormContext>({
  submitForm: (employee) => new Promise(() => {}),
  loading: false,
  message: "",
});
