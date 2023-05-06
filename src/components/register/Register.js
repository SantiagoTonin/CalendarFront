import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addUser, setAddUser] = useState();
  const onSubmit = async (data) => {
    await axios.post("URL DB", data).then((resp) => {
      setAddUser(resp.data);
    });
    alert("El usuario ha sido creado exitosamente");
    window.location.reload();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning mt-2 rounded-0"
        data-bs-toggle="modal"
        data-bs-target="#register"
      >
        Registrarse
      </button>

      <div
        className="modal fade"
        id="register"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0 border-0">
            <div className="modal-body">
              <h4 className="p-2">Registrate</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      maxLength: 35,
                      minLength: 15,
                      pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    })}
                    required
                    maxLenght="35"
                    minLenght="15"
                  />
                  {errors.email && (
                    <span className="mt-1">
                      ⚠️ Debe respetar el formato nombre@mail.com
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Nombre"
                    {...register("name", {
                      required: true,
                      maxLength: 20,
                      minLength: 1,
                    })}
                    required
                    maxLenght="20"
                    minLenght="3"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Apellido"
                    {...register("lastname", {
                      required: true,
                      maxLength: 35,
                      minLength: 1,
                    })}
                    required
                    maxLenght="35"
                    minLenght="3"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control rounded-0"
                    placeholder="Número de teléfono"
                    {...register("phone", {
                      required: true,
                      maxLength: 20,
                      minLength: 9,
                    })}
                    required
                    maxLenght="20"
                    minLenght="9"
                  />
                  {errors.phone && (
                    <span className="mt-1">
                      ⚠️ El número ingresado es demasiado corto. Ingréselo con
                      código de área
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control rounded-0"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    })}
                    required
                    maxLenght="20"
                    minLenght="8"
                  />
                  {errors.password && (
                    <span className="mt-1">
                      ⚠️ Debe tener al menos 1 dígito, 1 mayúscula y 1 minúscula
                    </span>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-danger me-1 rounded-0 border-0"
                    data-bs-dismiss="modal"
                  >
                    Volver
                  </button>
                  <button type="submit" className="btn btn-warning rounded-0">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
