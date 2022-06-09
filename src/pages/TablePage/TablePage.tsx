import { TableEstructure } from "./TablePage.styled";
import { SearchContainer } from "../../components";
import { Table } from "../../components";

export const TablePage: React.FC = () => {
  return (
    <>
      <h1>Página Da Tabela</h1>
      <TableEstructure>
        <SearchContainer />
        <Table />
      </TableEstructure>
    </>
  );
};
