import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import Context from "../../context/root";

const DataTable = props => {
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <Table responsive>
      <thead>
        <tr>
          {context.dataTable.titles.map((data, i) => (
            <th key={i} onClick={() => context.dataTableSortBy(data)}>
              {data}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {context.dataTable.contents.map((content, i) => (
          <tr key={i}>
            <td>{content.id}</td>
            <td>{content.name}</td>
            <td>{content.address}</td>
            <td>{content.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
