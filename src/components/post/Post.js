import "./post.css";

function Post({ post, user }) {
  const images = post?.images[0]?.path || "";
  const imageName = post?.images[0]?.name || "";
  return (
    <div className="post-container">
      <div className="infoPost-container">
        <span className="user">
          {user.name} {user.lastName}
        </span>
        <span className="iconPost">x</span>
      </div>
      <div className="tasks-container">
        <span className="tasksPost">{post.tasks[0].postMessage}</span>
      </div>
        {images === "" ? (
          <div>MODIFICAR PARA Q SOLO SE MUESTRE EL POSTEO POR TEXTO Y NO ESTO</div>
        ) : (
          <>
      <div className="image-container">
        <img
          className="image"
          src={images}
          alt="Imagen del post"
          onLoad={() => console.log("Imagen cargada")} // Puedes hacer algo cuando la imagen se carga
        />
      </div>
          <span className="title">{imageName}</span>
          <div className="dataPost">
            <span className="iconPost">icono de me gusta</span>
            <span className="countComment">1</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
