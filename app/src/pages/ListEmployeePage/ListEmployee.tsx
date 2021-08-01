import { TouchEvent, useEffect, useRef, useState } from "react";
import { IEmployee } from "../../context";
import localStorage from "../../utils/localStorage";
import pic from "../../assets/image/pic_50.jpg";
import { Card, Detail, Icons, ThumbNail } from "./styles";
import { Container } from "../../components/contaianer";
import { Header } from "../../components/header";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/trash-alt.svg";
import { AlertMessage } from "../../components/alertMessage";

interface Props {}

export const ListEmployee = (props: Props) => {
  const [empList, setempList] = useState<Array<IEmployee> | null>([]);
  const [prev, setprev] = useState<number>();
  const actionRef = useRef<Array<HTMLDivElement | null>>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setempList(localStorage.getItem("employee"));
  }, []);

  const handleDelete = (e: React.MouseEvent<SVGSVGElement>, idx: number) => {
    empList?.splice(idx, 1);
    localStorage.setItem("employee", empList);
    setempList([...empList!]);
  };

  const handleUpdate = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };
  const handleHover = (e: TouchEvent<HTMLDivElement>, idx: number) => {
    let toRemove = prev ?? 0;
    actionRef.current[toRemove]!.style.display = "";
    actionRef.current![idx]!.style.display = "flex";
    setprev(idx);
  };
  return (
    <Container>
      <Header title={"EMPLOYEES"} />
      {showMessage && (
        <AlertMessage
          title={"This feature is not available at the moment"}
          onClick={() => {
            setShowMessage(false);
          }}
        />
      )}
      {empList?.map((i, idx) => (
        <Card onTouchStart={(e) => handleHover(e, idx)}>
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
            <Icons ref={(el) => actionRef.current.push(el)}>
              <Edit onClick={(e) => handleUpdate()} />
              <Delete onClick={(e) => handleDelete(e, idx)} />
            </Icons>
          </Detail>
        </Card>
      ))}
    </Container>
  );
};
