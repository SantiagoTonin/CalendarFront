import { useState } from "react";
import React from "react";
import axios from "../../../config/axiosInit";
import "./editForm.css";

const EditForm = (props) => {
  const { isEditingForm, userToEdit, userToEditId } = props;

  const [formData, setFormData] = useState({
    userName: userToEdit?.name || "",
    name: userToEdit?.name || "",
    lastname: userToEdit?.name || "",
    email: userToEdit?.email || "",
    birthdate: userToEdit?.birthdate || "",
    age: userToEdit?.age || "",
    nacionality: userToEdit?.nationality || "",
    rol: userToEdit?.rol || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("name.")) {
      setFormData({
        ...formData,
        image: {
          ...formData.name,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        image: {
          ...prevState.image,
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = userToEditId;
    try {
      if (isEditingForm) {
        await axios.put(`http://localhost:3000/user/:id`, formData);
        return <h2>usuario editado correctamente</h2>;
      } else {
        await axios.post("http://localhost:3000/user", formData);
      }
      return <h1>----</h1>;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Usuario:</b>
        <input
          className="inputArea"
          name="category"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Nombre:</b>
        <input
          className="inputArea"
          name="type"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Apellido:</b>
        <input
          className="inputArea"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Email:</b>
        <input
          className="inputArea"
          name="description"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Fecha de cumpleaños:</b>
        <input
          className="inputArea"
          name="brand"
          value={formData.birthdate}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Edad:</b>
        <input
          className="inputArea"
          name="brand"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Nacionalidad:</b>
        <input
          className="inputArea"
          name="price"
          value={formData.nationality}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Rol</b>
        <input
          className="inputArea"
          name="stock"
          value={formData.rol}
          onChange={handleChange}
        />
      </div>
      <div>
        <button id="modalsButtons" type="submit">
          {isEditingForm ? "Editar producto" : "Crear"}
        </button>
      </div>
    </form>
  );
};

export default EditForm;
