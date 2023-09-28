import React, { useEffect, useState, useContext } from "react";
import { FaCamera } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  apiCreateCells,
  apiGetUser,
  apiCreateImages,
  apiCreatePost,
  apiCreateTasks,
} from "../../api/axiosApi.js";
import { getDateInfo } from "../../api/axiosApi";
import Post from "../post/Post.js";
import Loading from "../../components/loading/loading.jsx";
import { ThemeContext } from "../../context/ThemeContext";
import "./addPublications.css";

const AddPublications = ({ date, user }) => {
  const { lightMode } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [userDb, setUserDb] = useState();
  const [imagePost, setImagePost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [charCount, setCharCount] = useState(0);
  const token = sessionStorage.getItem("token");
  const Id = user.userId;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiGetUser(Id, sessionStorage.getItem("token"));
        setUserDb(res.data);
      } catch (error) {
        console.log("Error al traer los datos", error);
      }
    }

    fetchData();
  }, [Id]);

  useEffect(() => {
    if (userDb) {
      callGetInfoIfNeeded();
    }
    // eslint-disable-next-line
  }, [userDb]);

  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.toLocaleString("en-US", { month: "long" });

  const onSubmit = async (data) => {
    if (data.images.length > 0 || data.messages !== "") {
      const formData = new FormData();
      const dateDb = userDb.calendar.cells;
      const postMessage = data.messages || "";
      let result;
      if (postMessage.length <= 200) {
        let dateExists = false;
        for (let i = 0; i < dateDb.length; i++) {
          if (dateDb[i]?.date === date) {
            dateExists = true;
            result = await post(dateDb[i].cellsId);
            break;
          }
        }

        if (!dateExists) {
          const res = await apiCreateCells(
            date,
            userDb.calendar.calendarId,
            token
          );
          const newCellsId = res.data.cellsId;
          result = await post(newCellsId);
        }

        const postSend = { postId: result, postMessage: postMessage };
        await apiCreateTasks(postSend, token);

        if (data.images.length > 0) {
          formData.append("image", data.images[0]);
          formData.append("postId", result);
          await apiCreateImages(formData, sessionStorage.getItem("token"));
        }
        reset();
        window.location.reload();
      }
    }
  };

  const post = async (cellsId) => {
    const results = await apiCreatePost(cellsId, token);
    return results.data.postId;
  };

  const getInfo = async (date) => {
    try {
      const result = await getDateInfo(date);
      return result;
    } catch (error) {
      console.error("Error al obtener información:", error);
    }
  };

  const callGetInfoIfNeeded = async () => {
    if (userDb?.calendar?.cells.length > 0) {
      const dateInfo = await getInfo(date);
      setImagePost(dateInfo);
    }
  };
  useEffect(() => {
    if (userDb && imagePost && imagePost.status !== 404) {
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [imagePost]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setCharCount(inputValue.length);
  };
  const isCharCountRed = charCount >= 200;

  return (
    <div>
      <div className={lightMode ? "fileUploaderLight" : "fileUploader"}>
        <div className={lightMode ? "boxLight" : "box"}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input
        className="inputPost"
        type="text"
        placeholder="Escribe tu mensaje aquí"
        {...register("messages", {
          maxLength: {
            value: 200,
            message: "El mensaje no puede tener más de 200 caracteres",
          },
        })}
        onChange={handleInputChange}
      />
      <div className="infoCharError">
      {errors.messages && <p className="errorInput">*{errors.messages.message}</p>}
      <p className={`charCount ${isCharCountRed ? 'redText' : ''}`}>{charCount}/200</p>
      </div>
            <div className="buttonContainer">
              <div>
                <label htmlFor="file-input">
                  <FaCamera className="icon pb-1" />
                </label>
                <input
                  {...register("images")}
                  multiple
                  type="file"
                  id="file-input"
                  name="images"
                />
              </div>
              <button
                className={lightMode ? "buttonPostLight" : "buttonPost"}
                type="submit"
              >
                Publicar
              </button>
            </div>
          </form>
        </div>
        <div className="dateContainer">
          <h3 className="date">
            {day} {month}
          </h3>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          imagePost &&
          imagePost.data &&
          imagePost.data.data &&
          imagePost.data.data.posts && (
            <div className="imagePost">
              {imagePost.data.data.posts.map((post, index) => (
                <Post key={index} post={post} user={userDb} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AddPublications;
