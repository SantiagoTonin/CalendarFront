import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Loading from "../../components/loading/loading.jsx";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import "./abm.css";
import axiosInstance from "../../config/axiosInit";

const Abm = () => {
  const [dataForTable, setDataForTable] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { lightMode } = useContext(ThemeContext);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    async function listUsers() {
      try {
        const response = await axiosInstance.get("/user");
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
      setFilterData(initializedUserList);
    };

    fetchUsers();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    filter(inputValue);
  };

  const filter = (input) => {
    const filteredSet = new Set();

    if (input === "") {
      setFilterData(dataForTable);
      return;
    }

    for (const obj of dataForTable) {
      Object.keys(obj).forEach((key) => {
        let value = obj[key];
        value = value.toString();
        if (value === input) {
          filteredSet.add(obj);
        }
      });
    }

    return setFilterData(filteredSet);
  };

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...filterData].sort((a, b) => {
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
          <h2 className="dashboardTitle">PANEL DE USUARIOS</h2>
          <div className={lightMode ? "boxUserLight" : "boxUser"}>
            <div className={lightMode ? "boxTitleLight" : "boxTitle"}>
              <span>USUARIOS</span>
              <div className="search-container">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearchClick();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="rounded-input"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <button className="search-button" type="submit">
                    <FaSearch />
                  </button>
                </form>
              </div>
            </div>

            <div className="boxContainer table-responsive">
              <table className="abmTable">
                <thead>
                  <tr className="boxColumn">
                    <th onClick={() => requestSort("userId")}>Id de usuario</th>
                    <th onClick={() => requestSort("name")}>Nombre</th>
                    <th onClick={() => requestSort("email")}>Email</th>
                    <th onClick={() => requestSort("nationality")}>
                      Nacionalidad
                    </th>
                    <th onClick={() => requestSort("birthdate")}>
                      Fecha de nacimiento
                    </th>
                    <th onClick={() => requestSort("age")}>Edad</th>
                    <th onClick={() => requestSort("rol")}>Rol</th>
                    <th onClick={() => requestSort("checkEmail")}>
                      Check Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataForTable.length === 0 ? (
                    <tr>
                      <td colSpan="100">
                        <Loading />
                      </td>
                    </tr>
                  ) : currentUsers.length === 0 ? (
                    <tr>
                      <td colSpan="100">NO DATA</td>
                    </tr>
                  ) : (
                    currentUsers.map((user) => (
                      <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>
                          {user.name} {user.lastName}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.nationality}</td>
                        <td>{user.birthdate}</td>
                        <td>{user.age}</td>
                        <td
                          onDoubleClick={() => handleDoubleClick(user.userId)}
                        >
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
                    ))
                  )}
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
            <div className="infoBoxContainer">
              <h2 className={lightMode ? "boxTitleLight2" : "boxTitle2"}>
                INFO
              </h2>
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
