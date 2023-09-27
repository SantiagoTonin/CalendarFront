import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ProfileForm from "../../components/profileForm/ProfileForm";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../components/profileForm/profileForm.css";

const UserProfile = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main className="profileMainContainer">
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <section
        className={
          lightMode ? "userProfileContainerLight" : "userProfileContainer"
        }
      >
        <h2>Mi perfil</h2>
        <ProfileForm />
      </section>
    </main>
  );
};

export default UserProfile;
