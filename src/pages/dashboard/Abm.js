import React, { useState, useEffect } from "react";
import axios from "../../config/axiosInit";
import { Button } from "react-bootstrap";
import UsersTable from "../../components/abmTable/table/UsersTable";
import CreateUsersModal from "../../components/abmTable/usersModals/CreateUsersModal";
import DeleteUsersModal from "../../components/abmTable/usersModals/DeleteUsersModal";
import Sidebar from "../../components/sidebar/Sidebar";
import "./abm.css";

const Abm = () => {
  const url = "http://localhost:3000/user";
  const [users, setUsers] = useState([]);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [deleteUser, setDeleteUser] = useState({});
  const [deleteModalShow, setDModalShow] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try{
      const answer = await axios.get(url);
      setUsers(answer.data);
    }
    catch(error){if (error?.response?.data?.error === 'Usuarios no encontrados') {
      setUsers([]);
    } else {
      alert('Algo salio mal, intente mas tarde');
    }
    }
  };

  const generateId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { userId: generateId() };
    for (const target of e.target) {
      if (target.type !== "submit") {
        user[target.name] = target.value;
        target.value = "";
      }
    }
    setUsers([...users, user]);
    setCreateModalShow(false);
  };

  const handleDelete = (users) => {
    setDeleteUser(users);
    setDModalShow(true);
  };

  const confirmDelete = (userId) => {
    const filteredUsers = users.filter(
      (users) => users.userId !== deleteUser.userId
    );
    setUsers(filteredUsers);
    setDModalShow(false);
  };

  return (
    <>
      <main className="usersTableMainContainer">
        <section>
          <Sidebar />
        </section>
        <section>
          <div className="tableContainer">
            <UsersTable
              data={users}
              deleteModalShow={deleteModalShow}
              setDModalShow={setDModalShow}
              handleDelete={handleDelete}
            />
          </div>
          <article className="usersBtnContainer container-fluid">
            <Button
              className="usersTableCreateUserBtn"
              data-bs-toggle="modal"
              data-bs-target="modal"
              onClick={() => setCreateModalShow(true)}
            >
              Crear usuario
            </Button>
          </article>
          <CreateUsersModal
            createModalShow={createModalShow}
            setCreateModalShow={setCreateModalShow}
            handleSubmit={handleSubmit}
          />
          <DeleteUsersModal
            deleteModalShow={deleteModalShow}
            setDModalShow={setDModalShow}
            handleDelete={handleDelete}
            confirmDelete={confirmDelete}
            deleteUserId={deleteUser}
          />
        </section>
      </main>
    </>
  );
};

export default Abm;
