import axiosInstance from "../config/axiosInit.js";

export const apiTranslateToken = async (dir, token) => {
  return await axiosInstance
    .post(
      dir,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch((error) => {
      return error;
    });
};

export const apiGetUser = async (userId, token) => {
  return await axiosInstance
    .get(
      `/user/${userId}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });
};

export const apiUploadPicture = async (formData, token) => {
  return await axiosInstance
    .post(
      "/picture",
      { formData },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });
};

export const apiCreateCalendar = async (userId, token) => {
  return await axiosInstance
    .post(
      `/calendar`,
      { userId },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });
};

export const apiCreateCells = async (date, calendarId, token) => {
  return await axiosInstance
    .post(
      `/cells`,
      {
        date: date,
        calendarId: calendarId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });
};

export const apiCreateTasks = async (formData, token) => {
  return await axiosInstance
    .post(`/tasks`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });
};

export const apiCreateImages = async (formData, token) => {
  return await axiosInstance
    .post(`/image`, formData, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      if (error.response.status === 500) {
        return  {message: "El numero de imagen maximo superado"}
      }
    });
};

export const apiCreatePost = async (cellsId, token) => {
  return await axiosInstance
    .post(
      `/post`,
      {
        cellsId: cellsId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch((error) => {
      console.error("Error fetching user info:", error);
    });
};

export const getDateInfo = async (date) => {
  return await axiosInstance
    .post(`/api/v1/getDataByCell`, {
      date: date,
    })
    .catch((error) => {
      console.error("Error fetching user info");
    });
};

export const apiEditProfile = async (Id, data, token) => {
  return await axiosInstance
    .put(`/user/${Id}`, data, {
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      return error;
    });
};

export const apiCreatePicture = async (formData, token) => {
  try {
    const response = await axiosInstance.post(`/picture`, formData, {
      headers: {
        Authorization: token,
      },
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    if (error.response && error.response.data) {
      return { message: error.response.data.message };
    } else {
      return { message: 'Error en la solicitud' };
    }
  }
};



export const apiGetPostByCalendarId = async (calendarId,token) => {
  try {
    return await axiosInstance.post("/api/v1/getDataByPost", {calendarId}, {
      headers: {
        Authorization: token,
      },
    });
    
  } catch (error) {
    return error
  }
};


export const deletePost = async (postId,token)=>{
  try {
    return await axiosInstance.delete(`/postDelete/${postId}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error
  }
};
