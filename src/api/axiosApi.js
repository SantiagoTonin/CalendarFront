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
      console.error("Error fetching user info:", error);
    });
};

export const apiFullInfo = async (dir, token) => {
  return await axiosInstance
  .get(
    dir,
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

export const apiUploadPicture = async(formData,token)=>{
  return await axiosInstance
  .post(
    "/picture",
    {formData},
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


export const apiCreateCalendar = async (userId,token) => {

  return await axiosInstance.post(`/calendar`,{userId},{
    headers: {
      Authorization:token,
    },
  }).catch((error) => {
    console.error("Error fetching user info:", error);
  })
};