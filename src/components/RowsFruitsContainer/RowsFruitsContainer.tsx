import { RowFruitsContainer } from "./RowsFruitsContainer.styled";
import { Row } from "../Row";

export const RowsFruitsContainer: React.FC = () => {
  return (
    <>
      <RowFruitsContainer>
        <Row name="Maçã" price="R$ 1,20" stockedOff />
        <Row name="Pêra" price="R$ 3,90" />
        <Row name="Banana" price="R$ 1.75" />
      </RowFruitsContainer>
    </>
  );
};
