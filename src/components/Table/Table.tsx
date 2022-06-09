import { TableContainer } from "./Table.styled";
import { DescColumn } from "../DescColumn";
import { Category } from "../Category";
import { RowsFruitsContainer } from "../RowsFruitsContainer";
import { RowsVegetablesContainer } from "../RowsVegetablesContainer";

export const Table: React.FC = () => {
  return (
    <TableContainer>
      <Category desc="Frutas" />
      <DescColumn />
      <RowsFruitsContainer />
      <Category desc="Vegetais" />
      <DescColumn />
      <RowsVegetablesContainer />
    </TableContainer>
  );
};
