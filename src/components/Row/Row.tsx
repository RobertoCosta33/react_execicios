import { CRow } from "./Row.styled";
import { propsCRow } from "../../types";

export const Row: React.FC<propsCRow> = (props) => {
  const { name, price } = props;

  return (
    <CRow>
      <p>{name}</p>
      <p>{price}</p>
    </CRow>
  );
};
