import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import "./usersTable.css";

const UsersTable = (props) => {
  const { data, handleDelete } = props;
  const [dataForTable, setDataForTable] = useState([]);

  useEffect(() => {
    setDataForTable(data);
  }, [data]);
  
  return (
    <Table responsive id="usersMainTable">
      <thead>
        <tr className="usersTHeadTr">
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
          <tr key={user.userId} className="usersTBodyTr">
            <td className="align-middle">{user.name}</td>
            <td className="align-middle">{user.lastName}</td>
            <td className="align-middle">{user.email}</td>
            <td className="align-middle">{user.birthdate}</td>
            <td className="align-middle">{user.age}</td>
            <td className="align-middle">{user.nationality}</td>
            <td className="align-middle">{user.rol}</td>
            <td className="d-flex align-items-center justify-content-center">
              <Button id="usersEditBtn">
                <BiEdit />
              </Button>
              <Button id="usersDeleteBtn" onClick={() => handleDelete(user)}>
                <BsTrash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
