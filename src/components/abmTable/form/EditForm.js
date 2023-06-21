import { useState } from "react";
import React from "react";
import axios from "../../../config/axiosInit";
import "./editForm.css";

const EditForm = (props) => {
  const { isEditingForm, userToEdit, userToEditId } = props;

  const [formData, setFormData] = useState({
    category: userToEdit?.category || "",
    type: userToEdit?.type || "",
    image: {
      img1: userToEdit?.image?.img1 || "",
    },
    name: userToEdit?.name || "",
    brand: userToEdit?.brand || "",
    description: userToEdit?.description || "",
    price: userToEdit?.price || "",
    stock: userToEdit?.stock || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("image.")) {
      setFormData({
        ...formData,
        image: {
          ...formData.image,
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
        await axios.put(`/user/${id}`, formData);
        return <h2>usuario editado correctamente</h2>;
      } else {
        await axios.post("/user", formData);
      }
      return <h1>----</h1>;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <b>Avatar:</b>
          <input
            className="inputArea"
            name="img1"
            defaultValue={formData.image.img1}
            onBlur={handleImageChange}
          />
        </div>
        <b>Usuario:</b>
        <input
          className="inputArea"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Nombre:</b>
        <input
          className="inputArea"
          name="type"
          value={formData.type}
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
        <b>Edad:</b>
        <input
          className="inputArea"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Email:</b>
        <input
          className="inputArea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Ciudad:</b>
        <input
          className="inputArea"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>País</b>
        <input
          className="inputArea"
          name="stock"
          value={formData.stock}
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
