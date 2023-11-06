import ChangePasswordForm from "../../components/passRecoveryForm/ChangePassword.js";
import "../../components/passRecoveryForm/passRecovery.css";

const PassRecovery = () => {
    return ( 
        <div className="passRecoveryContainer">
            <h3>Recuperar contraseña</h3>
            <ChangePasswordForm/>
        </div>
     );
}
 
export default PassRecovery;