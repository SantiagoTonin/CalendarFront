import {AiOutlineLike} from "react-icons/ai";
import {BsFillChatTextFill} from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./post.css";

//npm install react-slick slick-carousel

function Post({ post, user }) {
  const images = post?.images || [];

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="postContainer">
      <div className="infoPostContainer">
        <span className="user">
          {user.name} {user.lastName}
        </span>
        <span className="nameIconPost">
          <BsFillChatTextFill />
        </span>
      </div>
      <div className="tasksContainer">
        <span className="tasksPost">{post?.tasks[0]?.postMessage}</span>
      </div>
      {images.length === 0 ? (
        <span className="iconPost">
          <AiOutlineLike className="likeBtn" />
        </span>
      ) : (
        <>
          <div className="imageContainer">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="image">
                  <img
                    src={image.path}
                    alt={`Imagen ${index + 1} del post`}
                    onLoad={() => console.log(`Imagen ${index + 1} cargada`)}
                  />
                  <span className="title">{image.name}</span>
                </div>
              ))}
            </Slider>
          </div>
          <div className="dataPost">
            <span className="iconPost">
              <AiOutlineLike className="likeBtn" />
            </span>
            <span className="countComment">1</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;

