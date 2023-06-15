import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "./usersTable.css";

const UsersTable = (props) => {
  const { data, handleDelete, editTrigger } = props;

  const [dataForTable, setDataForTable] = useState([]);

  useEffect(() => {
    setDataForTable(data);
  }, [data]);

  return (
    <Table responsive id="mainTable">
      <thead>
        <tr className="tHeadTr">
          <th className="align-middle">AVATAR</th>
          <th className="align-middle">USUARIO</th>
          <th className="align-middle">NOMBRE</th>
          <th className="align-middle">APELLIDO</th>
          <th className="align-middle">EDAD</th>
          <th className="align-middle">EMAIL</th>
          <th className="align-middle">CIUDAD</th>
          <th className="align-middle">PAIS</th>
          <th className="align-middle">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {dataForTable?.map((product) => (
          <tr key={product._id} className="tBodyTr">
            <td className="align-middle">{product.category}</td>
            <td className="align-middle">{product.name}</td>
            <td className="align-middle">{product.brand}</td>
            <td className="align-middle">{product.description}</td>
            <td className="align-middle">{product.price}</td>
            <td className="align-middle">{product.stock}</td>
            <td className="d-flex flex-row align-items-center justify-content-center border-0">
              <Button id="deleteBtn" onClick={() => handleDelete(product)}>
                Borrar
              </Button>
              <Button id="editBtn" onClick={() => editTrigger(product)}>
                Editar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default UsersTable;
