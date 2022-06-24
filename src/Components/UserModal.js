import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { DialogActions } from "@mui/material";
import { useState, useEffect } from "react";

const UserModal = (props) => {
  const { onClose, open, mode, setUsersData, usersData, selectedUser } = props;
  const [nombres, setNombres] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [rol, setRol] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    handleFileds();

    return () => {};
  }, [selectedUser, mode]);

  const handleFileds = () => {
    if (mode === "register") {
      resetFields();
    } else {
      setNombres(selectedUser.nombres);
      setApellidoPaterno(selectedUser.apellidoPaterno);
      setApellidoMaterno(selectedUser.apellidoMaterno);
      setRol(selectedUser.rol);
      setFechaRegistro(selectedUser.fechaRegistro);
    }
  };

  const resetFields = () => {
    setNombres("");
    setApellidoPaterno("");
    setApellidoMaterno("");
    setRol("");
    setFechaRegistro("");
  };

  const handleSubmit = (
    nombres,
    apellidoPaterno,
    apellidoMaterno,
    rol,
    fechaRegistro
  ) => {
    let userData = {
      id: Math.random(),
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      rol,
      fechaRegistro,
    };
    let modifiedUsers = usersData;
    modifiedUsers.push(userData);
    setUsersData(modifiedUsers);
    resetFields();

    onClose();
  };

  const handleUpdate = (
    nombres,
    apellidoPaterno,
    apellidoMaterno,
    rol,
    fechaRegistro
  ) => {
    let modifiedUsers = usersData;
    for (const user of modifiedUsers) {
        if (user.id === selectedUser.id) {

        
          user.nombres=nombres;
          user.apellidoPaterno=apellidoPaterno;
          user.apellidoMaterno=apellidoMaterno;
          user.rol=rol;
          user.fechaRegistro=fechaRegistro;
          break;
        }
      }
      setUsersData(modifiedUsers);
      resetFields();

      onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{mode==='register'?'Registrar un nuevo usuario' :'Actualizar un usuario existente'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Completa el siguiente formulario para registrar un nuevo usuario
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre(s)"
          type="text"
          fullWidth
          variant="filled"
          value={nombres}
          onChange={(event) => setNombres(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="ApellidoPaterno"
          type="text"
          fullWidth
          variant="filled"
          value={apellidoPaterno}
          onChange={(event) => setApellidoPaterno(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="ApellidoMaterno"
          type="text"
          fullWidth
          variant="filled"
          value={apellidoMaterno}
          onChange={(event) => setApellidoMaterno(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Rol"
          type="text"
          fullWidth
          variant="filled"
          value={rol}
          onChange={(event) => setRol(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Fecha de Registro"
          type="text"
          fullWidth
          variant="filled"
          value={fechaRegistro}
          onChange={(event) => setFechaRegistro(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          color="secondary"
          onClick={() =>
            mode === "register"
              ? handleSubmit(
                  nombres,
                  apellidoPaterno,
                  apellidoMaterno,
                  rol,
                  fechaRegistro
                )
              : handleUpdate(
                  nombres,
                  apellidoPaterno,
                  apellidoMaterno,
                  rol,
                  fechaRegistro
                )
          }
        >
            {mode==='register'?'Registrar usuario' :'Actualizar Usuario'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setUsersData: PropTypes.func.isRequired,
  usersData: PropTypes.array.isRequired,
};

export default UserModal;
