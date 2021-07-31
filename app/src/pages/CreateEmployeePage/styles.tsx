import styled from "styled-components";
export const Title = styled.div`
  h3 {
  }
`;
export const StyledEmployeeForm = styled.form``;
export const StyledFormField = styled.div.attrs({
  className: "form-group",
})`
  padding: 10px;
  label {
    display: block;
    padding: 10px 0px;
  }
  input {
    padding: 10px;
    width: 100%;
  }
  .required:after {
    content: " *";
  }
`;
