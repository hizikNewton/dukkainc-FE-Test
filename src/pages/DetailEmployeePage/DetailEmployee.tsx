import { useParams } from "react-router-dom";
import { Container } from "../../components/contaianer";
import { Header } from "../../components/header";
import localStorage from "../../utils/localStorage";
import { Card, Detail, ThumbNail } from "../ListEmployeePage/styles";
import pic from "../../assets/image/pic_50.jpg";
import { LoanData, loanData } from "./loanData";
import { FC } from "react";
import LoanCard from "./LoanCard";
import { HRule } from "./style";

interface Props {}
type paramType = {
  id: string;
};

interface LoanBodyProps {
  loans: Array<LoanData>;
}
const LoanBody: FC<LoanBodyProps> = ({ loans }: LoanBodyProps) => {
  return (
    <>
      {loans.map(({ date, borrowed, received }) => {
        return (
          <LoanCard
            month={date.toLocaleString("en-US", { month: "short" })}
            borrowed={Math.floor(borrowed)}
            received={Math.floor(received)}
          />
        );
      })}
    </>
  );
};

export const DetailEmployee = (props: Props) => {
  const { id } = useParams<paramType>();

  const employee = localStorage.getItem("employee")![parseInt(id) - 1];
  const groupedLoan = loanData();
  return (
    <Container>
      <Header />

      {[employee!]?.map((i) => (
        <Card>
          <ThumbNail>
            <img src={pic} alt="profile" />
          </ThumbNail>
          <Detail>
            <ul>
              <li>{i.fullname.toUpperCase()}</li>
              <li>{i.position}</li>
              <li>{i.phoneNumber}</li>
              <li>{i.email}</li>
            </ul>
          </Detail>
        </Card>
      ))}
      <h3>LOAN RECORD</h3>
      {groupedLoan.map(({ date, loans }) => {
        return (
          <>
            <HRule>
              <span>
                {date}
                <hr />
              </span>
            </HRule>
            <LoanBody loans={loans} />
          </>
        );
      })}
    </Container>
  );
};
