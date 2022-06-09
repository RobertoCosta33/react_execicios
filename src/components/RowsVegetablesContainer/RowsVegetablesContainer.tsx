import { RowVegetablesContainer } from "./RowsVegetablesContainer.styled";
import { Row } from "../Row";

export const RowsVegetablesContainer: React.FC = () => {
  return (
    <>
      <RowVegetablesContainer>
        <Row name="Cenoura" price="R$ 2,50" />
        <Row name="Batatinha" price="R$ 1,45" />
        <Row name="Cebola" price="R$ 3,75" />
      </RowVegetablesContainer>
    </>
  );
};
