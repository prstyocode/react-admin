import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import Context from "../../context/root";
import { Col, Row } from "react-bootstrap";

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
          {context.dataTable.canEdit || context.dataTable.canDelete ? (
            <th>Action</th>
          ) : (
            ""
          )}
        </tr>
      </thead>
      <tbody>
        {context.dataTable.contents.map((content, i) => (
          <tr key={i}>
            <td>{content.id}</td>
            <td>{content.name}</td>
            <td>{content.address}</td>
            <td>{content.createdAt}</td>
            {context.dataTable.canEdit || context.dataTable.canDelete ? (
              <td>
                <Row>
                  {context.dataTable.canEdit ? (
                    <Col>
                      <button className="toggle-button">
                        <i className="far fa-edit mr-2"></i>Edit
                      </button>
                    </Col>
                  ) : (
                    ""
                  )}
                  {context.dataTable.canDelete ? (
                    <Col>
                      <button className="toggle-button">
                        <i className="far fa-trash-alt mr-2"></i>Delete
                      </button>
                    </Col>
                  ) : (
                    ""
                  )}
                </Row>
              </td>
            ) : (
              ""
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
