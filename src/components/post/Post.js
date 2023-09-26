import {AiOutlineLike} from "react-icons/ai";
import {BsFillChatTextFill} from "react-icons/bs";
import "./post.css";

function Post({ post, user }) {
  const images = post?.images[0]?.path || "";
  const imageName = post?.images[0]?.name || "";
  return (
    <div className="postContainer">
      <div className="infoPostContainer">
        <span className="user">
          {user.name} {user.lastName}
        </span>
        <span className="nameIconPost"><BsFillChatTextFill/></span>
      </div>
      <div className="tasksContainer">
        <span className="tasksPost">{post.tasks[0].postMessage}</span>
      </div>
        {images === "" ? (
          <span className="iconPost"><AiOutlineLike className="likeBtn"/></span>
        ) : (
          <>
      <div className="imageContainer">
        <img
          className="image"
          src={images}
          alt="Imagen del post"
          onLoad={() => console.log("Imagen cargada")} // Puedes hacer algo cuando la imagen se carga
        />
      </div>
          <span className="title">{imageName}</span>
          <div className="dataPost">
            <span className="iconPost"><AiOutlineLike className="likeBtn"/></span>
            <span className="countComment">1</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
