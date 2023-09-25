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
      console.error("Error fetching user info:", error);
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
  .post(
    `/api/v1/getDataByCell`,
    {
      date: date,
    },
  )
  .catch((error) => {
    console.error("Error fetching user info:", error);
  });
};


export const apiEditProfile = async (Id,data,token) => {
  return await axiosInstance
  .put(
    `/user/${Id}`,
  data,
  {
    headers: {
      Authorization: token,
    },
  }
  )
  .catch((error) => {
    return error;
  });
}

export const apiCreatePicture = async(formData,token) =>{
  return await axiosInstance
  .post(`/picture`, formData, {
    headers: {
      Authorization: token,
    },
  })
  .catch((error) => {
    return error;
  });
}
