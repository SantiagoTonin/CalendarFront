import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { apiCreateCells } from "../../api/axiosApi.js";
import Post from "../post/Post.js";
import "./addPublications.css";

const AddPublications = ({ date, user }) => {
  const { register, handleSubmit } = useForm();

  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.toLocaleString('en-US', { month: 'long' });

  console.log(day);
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="file-uploader">
        <div className="box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="inputPost"
              type="text"
              placeholder="Escribe tu mensaje aquí"
              {...register("mensaje")}
            />
            <div className="buttonContainer">
              <label htmlFor="file-input">
                <FaCamera className="icon" />
              </label>
              <input
                {...register("images")}
                type="file"
                id="file-input"
                name="images"
              />
              <button className="buttonPost" type="submit">
                Post
              </button>
            </div>
          </form>
        </div>
        <div className="date-container">
          <h3 className="date">{day} {month}</h3>
        </div>
      <Post />
      </div>
    </div>
  );
};

export default AddPublications;
