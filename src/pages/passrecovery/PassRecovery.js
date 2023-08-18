import PassRecoveryForm from "../../components/passRecoveryForm/PassRecoveryForm";
import "../../components/passRecoveryForm/passRecovery.css";

const PassRecovery = () => {
    return ( 
        <div className="passRecoveryContainer">
            <h3>Recuperar contraseña</h3>
            <PassRecoveryForm/>
        </div>
     );
}
 
export default PassRecovery;