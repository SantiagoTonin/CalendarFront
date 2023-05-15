import "./home.css";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  return (
    <main>
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <article className="homeContent">
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe quod recusandae quidem, perferendis molestias iure exercitationem praesentium, quibusdam, perspiciatis veniam omnis aspernatur sunt veritatis cumque architecto tempore optio aliquid.
        </div>
      </article>
    </main>
  );
};

export default Home;
