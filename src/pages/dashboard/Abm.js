import React, { useState, useEffect } from "react";
import axios from "../../config/axiosInit";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./abm.css";
import axiosInstance from "../../config/axiosInit";

const Abm = () => {
  const url = "http://localhost:3000/user";
  const [dataForTable, setDataForTable] = useState([]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    async function listUsers() {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.log("Error al traer los datos", error);
        throw error;
      }
    }

    const fetchUsers = async () => {
      const userList = await listUsers();
      const initializedUserList = userList.map((user) => ({
        ...user,
        editedRole: user.rol,
        isEditing: false,
      }));
      setDataForTable(initializedUserList);
    };

    fetchUsers();
  }, []);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...dataForTable].sort((a, b) => {
    let aValue = a[sortConfig.key] || "";
    let bValue = b[sortConfig.key] || "";

    if (typeof aValue === "boolean" && typeof bValue === "boolean") {
      if (sortConfig.direction === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    }

    aValue = String(aValue || "");
    bValue = String(bValue || "");

    if (sortConfig.direction === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(sortedData.length / usersPerPage);

  const handleDoubleClick = (userId) => {
    const newDataForTable = dataForTable.map((user) =>
      user.userId === userId ? { ...user, isEditing: true } : user
    );
    setDataForTable(newDataForTable);
  };

  const handleRoleChange = (event, userId) => {
    const newDataForTable = dataForTable.map((user) =>
      user.userId === userId
        ? { ...user, editedRole: event.target.value }
        : user
    );
    setDataForTable(newDataForTable);
  };

  const saveRoleChanges = (userId) => {
    const userToUpdate = dataForTable.find((user) => user.userId === userId);
    let newRole = userToUpdate.editedRole;
    newRole = newRole.toUpperCase();
    const data = { userId: userId, userRol: newRole };

    axiosInstance
      .post("/createAdmin", data)
      .then((res) => {
        console.log(res.response.data);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
    // window.location.reload();
  };

  return (
    <>
      <main className="usersTableMainContainer">
        <section className="homeSide">
          <Sidebar />
        </section>
        <div className="containerDashboard">
          <h1 className="title">DASHBOARD</h1>
          <div className="boxUser">
            <h2 className="boxTitle">USER</h2>
            <div className="boxContainer table-responsive">
              <table className="abmTable">
                <thead>
                  <tr className="boxColumn">
                    <th onClick={() => requestSort("userId")}>User ID</th>
                    <th onClick={() => requestSort("name")}>Name</th>
                    <th onClick={() => requestSort("email")}>Email</th>
                    <th onClick={() => requestSort("nationality")}>
                      Nationality
                    </th>
                    <th onClick={() => requestSort("birthdate")}>Birthdate</th>
                    <th onClick={() => requestSort("age")}>Age</th>
                    <th onClick={() => requestSort("rol")}>Role</th>
                    <th onClick={() => requestSort("checkEmail")}>
                      Check Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.userId}>
                      <td>{user.userId}</td>
                      <td>
                        {user.name} {user.lastName}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.nationality}</td>
                      <td>{user.birthdate}</td>
                      <td>{user.age}</td>
                      <td onDoubleClick={() => handleDoubleClick(user.userId)}>
                        {user.isEditing ? (
                          <input
                            className="textEdit"
                            type="text"
                            value={user.editedRole}
                            onChange={(e) => handleRoleChange(e, user.userId)}
                            onBlur={() => saveRoleChanges(user.userId)}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                saveRoleChanges(user.userId);
                              }
                            }}
                          />
                        ) : (
                          user.rol
                        )}
                      </td>
                      <td>{user.checkEmail ? <FaCheck /> : <FaTimes />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    className={currentPage === index + 1 ? "active" : ""}
                    key={index}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="boxContainer">
              <h2 className="boxTitle">INFO</h2>
              <div className="containerInfo">
                <div className="infoItem">
                  <span className="infoNumber">{dataForTable.length}</span>
                  <span className="infoLabel">total users</span>
                </div>
                <div className="infoItem">
                  <span className="infoNumber">1</span>
                  <span className="infoLabel">online users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Abm;
