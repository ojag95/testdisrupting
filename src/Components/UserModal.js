import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import { DialogActions } from "@mui/material";
import { useState } from "react";


const UserModal = (props) => {
    const { onClose, selectedValue, open, mode, setUsersData, usersData,selectedUser } = props;
    const [nombres, setNombres] = useState(mode==='register'?'':selectedUser.nombres)
    const [apellidoPaterno, setApellidoPaterno] = useState(mode==='register'?'':selectedUser.apellidoPaterno)
    const [apellidoMaterno, setApellidoMaterno] = useState(mode==='register'?'':selectedUser.apellidoMaterno)
    const [rol, setRol] = useState(mode==='register'?'':selectedUser.rol)
    const [fechaRegistro, setFechaRegistro] = useState(mode==='register'?'':selectedUser.fechaRegistro)
    const handleClose = () => {
        onClose();
    };

    const resetFields = () => {
        setNombres('')
        setApellidoPaterno('')
        setApellidoMaterno('')
        setRol('')
        setFechaRegistro('')
    }

    const handleSubmit = (nombres, apellidoPaterno, apellidoMaterno, rol, fechaRegistro) => {
        let userData = { id: Math.random(), nombres, apellidoPaterno, apellidoMaterno, rol, fechaRegistro }
        console.log(userData)
        let modifiedUsers = usersData;
        modifiedUsers.push(userData);
        setUsersData(modifiedUsers);
        resetFields()

        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Registrar un nuevo usuario </DialogTitle>
            <DialogContent>
                <DialogContentText>Completa el siguiente formulario para registrar un nuevo usuario</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nombre(s)"
                    type="text"
                    fullWidth
                    variant="filled"
                    value={nombres}
                    onChange={event => setNombres(event.target.value)}
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
                    onChange={event => setApellidoPaterno(event.target.value)}
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
                    onChange={event => setApellidoMaterno(event.target.value)}
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
                    onChange={event => setRol(event.target.value)}
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
                    onChange={event => setFechaRegistro(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button color="secondary" onClick={() => handleSubmit(nombres, apellidoPaterno, apellidoMaterno, rol, fechaRegistro)}>Registrar usuario</Button>
            </DialogActions>
        </Dialog>
    );
};

UserModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setUsersData: PropTypes.func.isRequired,
    usersData: PropTypes.array.isRequired
};

export default UserModal;
