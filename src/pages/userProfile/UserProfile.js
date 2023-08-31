import ProfileForm from "../../components/profileForm/ProfileForm";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../components/profileForm/profileForm.css";

const UserProfile = () => {
  return (
    <main className="profileMainContainer">
      <aside className="homeSide">
        <Sidebar />
      </aside>
      <section className="userProfileContainer">
        <h3>Mi perfil</h3>
        <ProfileForm />
      </section>
    </main>
  );
};

export default UserProfile;
