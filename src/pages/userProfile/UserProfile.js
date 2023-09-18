import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ProfileForm from "../../components/profileForm/ProfileForm";
import Sidebar from "../../components/sidebar/Sidebar";
import profileImage from "../../assets/images/profile/emptyProfileImage.png";
import "../../components/profileForm/profileForm.css";

const UserProfile = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <main className="profileMainContainer">
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <section className={lightMode ? "userProfileContainerLight" : "userProfileContainer"}>
        <h2>
        <img src={profileImage} alt="imagen de perfil" className="profileImg"/>
        Mi perfil
        </h2>
        <ProfileForm />
      </section>
    </main>
  );
};

export default UserProfile;
