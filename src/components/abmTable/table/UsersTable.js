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
          <th className="align-middle">NOMBRE</th>
          <th className="align-middle">APELLIDO</th>
          <th className="align-middle">EMAIL</th>
          <th className="align-middle">FECHA DE NACIMIENTO</th>
          <th className="align-middle">EDAD</th>
          <th className="align-middle">NACIONALIDAD</th>
          <th className="align-middle">ROL</th>
          <th className="align-middle">ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {dataForTable?.map((user) => (
          <tr key={user._id} className="tBodyTr">
            <td className="align-middle">{user.name}</td>
            <td className="align-middle">{user.name}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.birthdate}</td>
            <td className="align-middle">{user.age}</td>
            <td className="align-middle">{user.nacionality}</td>
            <td className="align-middle">{user.rol}</td>
            <td className="d-flex flex-row align-items-center justify-content-center border-0">
              <Button id="deleteBtn" onClick={() => handleDelete(user)}>
                Borrar
              </Button>
              <Button id="editBtn" onClick={() => editTrigger(user)}>
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
