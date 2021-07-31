import { Data } from "../../pages/CreateEmployeePage/types";

export function ValidateCustomField(data: Data) {
  let errors = [];

  if (data.fullname === "john doe") {
    errors.push("Enter valid full name");
  }
  return errors;
}
