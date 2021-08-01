import validator from "validator";
import { IData, IErrors, IRule } from "../../interface";

export function ValidateData(data: IData, rules: IRule) {
  let errors: IErrors = {};
  Object.keys(data).forEach((field) => {
    if (rules.hasOwnProperty(field)) {
      let fielderrors = [];
      let val = data[field];
      if (rules[field].required && validator.isEmpty(val)) {
        fielderrors.push("Value required");
      }
      if (!validator.isEmpty(data[field])) {
        if (
          rules[field].strAlpha &&
          !validator.matches(
            val,
            /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/gi
          )
        ) {
          fielderrors.push("value must be a fullname eg 'John Doe'");
        }
        if (
          rules[field].minlength &&
          !validator.isLength(val, { min: rules[field].minlength })
        ) {
          fielderrors.push(
            `Enter at least ${rules[field].minlength} characters`
          );
        }
        if (rules[field].alphanumeric && !validator.isAlphanumeric(val)) {
          fielderrors.push("field can only contain alphanumeric values");
        }
        if (rules[field].alpha && !validator.isAlpha(val)) {
          fielderrors.push("Enter only letters");
        }
        if (rules[field].email && !validator.isEmail(val)) {
          fielderrors.push("Enter a valid email address");
        }
        if (rules[field].phoneNumber && !validator.isMobilePhone(val)) {
          fielderrors.push("Enter a valid phone number");
        }

        if (rules[field].numeric && !validator.isNumeric(val)) {
          fielderrors.push("Enter only numbers");
        }
      }

      if (fielderrors.length > 0) {
        errors[field] = fielderrors;
      }
    }
  });
  return errors;
}
