import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";
import DeleteModal from "./modals/deleteModal";
import UsersTable from "./table/UsersTable";
import Sidebar from "../sidebar/Sidebar";
import axios from "../../config/axiosInit";
import "./abm.css";

const Abm = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState({});
  const [userToEditId, setUserToEditId] = useState({});
  const [deleteUser, setDeleteUser] = useState({});

  const [createModalShow, setCreateModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDModalShow] = useState(false);

  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    getUsers();
  }, [page]); // eslint-disable-line

  const getUsers = async () => {
    try {
      const info = await axios.get("/api/users/user", { params: { page } });
      setPagesCount(info.data.totalPages);
      setUsers(info.data);
    } catch (error) {
      if (error?.response?.data?.error === "Usuarios no encontrados") {
        setUsers([]);
      } else {
        alert("Algo salio mal intente mas tarde");
      }
    }
  };

  const generateId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { id: generateId() };
    for (const target of e.target) {
      if (target.type !== "submit") {
        user[target.name] = target.value;
        target.value = "";
      }
    }
    setUsers([...users, user]);
    setCreateModalShow(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    for (const target of e.target) {
      if (target.type !== "submit") {
        setUserToEdit({
          ...userToEdit,
          [target.name]: target.value,
        });
        target.value = "";
      }
    }
    const newUsers = users.map((user) => {
      if (user._id === userToEdit._id) {
        return userToEdit;
      } else {
        return user;
      }
    });
    setUsers(newUsers);
    setEditModalShow(false);
  };

  const handleDelete = (user) => {
    setDeleteUser(user._id);
    setDModalShow(true);
  };

  const confirmDelete = (deleteUser) => {
    const id = deleteUser;
    axios
      .delete(`/api/users/deleteUser/${id}`)
      .then((response) => {
        const filteredUsers = users.filter((user) => user._id !== deleteUser);
        setUsers(filteredUsers);
        setDModalShow(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editTrigger = (user) => {
    setUserToEdit(user);
    setUserToEditId(user._id);
    setEditModalShow(true);
  };

  return (
    <>
      <main>
        <aside className="homeSide">
          <Sidebar />
        </aside>
        <div>
          <div className="tableContainer">
            <UsersTable
              data={users}
              deleteModalShow={deleteModalShow}
              setDModalShow={setDModalShow}
              handleDelete={handleDelete}
              editTrigger={editTrigger}
            />
          </div>
          <div className="createBtnContainer d-flex justify-content-end align-items-center">
            <Button
              id="createUserBtn"
              variant="success"
              onClick={() => setCreateModalShow(true)}
            >
              Crear usuario
            </Button>
          </div>
          <div className="tablePaginationBtn">
            <Button
              className="prevBtn"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              {"<"}
            </Button>
            <b>Página {page}</b>
            <Button
              className="nextBtn"
              onClick={() => setPage(page + 1)}
              disabled={page === pagesCount}
            >
              {">"}
            </Button>
          </div>
          <CreateModal
            createModalShow={createModalShow}
            setCreateModalShow={setCreateModalShow}
            handleSubmit={handleSubmit}
          />
          <EditModal
            editModalShow={editModalShow}
            setEditModalShow={setEditModalShow}
            handleSubmit={handleEdit}
            isEditForm={true}
            userToEdit={userToEdit}
            userToEditId={userToEditId}
          />
          <DeleteModal
            deleteModalShow={deleteModalShow}
            setDModalShow={setDModalShow}
            handleDelete={handleDelete}
            confirmDelete={confirmDelete}
            deleteUserId={deleteUser}
          />
        </div>
      </main>
    </>
  );
};
export default Abm;
