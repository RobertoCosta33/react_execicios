import { TableEstructure } from "./TablePage.styled";
import { SearchContainer } from "../SerachContainer";
import { Table } from "../Table";

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
