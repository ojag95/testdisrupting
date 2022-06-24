import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Edit, Delete } from "@mui/icons-material";

const UserCard = (props) => {
  const { selectedUser, setOpen, setModalMode, setUsersData, usersData } =
    props;
  const handleEdit = () => {
    setModalMode("edit");
    setOpen(true);
  };

  const deleteUser = () => {
    let modifiedUsers = usersData;
    let indexToDelete = modifiedUsers.findIndex(
      (user) => user.id === selectedUser.id
    );
    let result = [];
    for (let index = 0; index < modifiedUsers.length; index++) {
      const element = modifiedUsers[index];
      if (index === indexToDelete) {
      } else {
        result.push(element);
      }
    }

    setUsersData(result);
  };
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label=""></Avatar>}
        action={<IconButton aria-label=""></IconButton>}
        title={
          selectedUser.nombres +
          " " +
          selectedUser.apellidoPaterno +
          " " +
          selectedUser.apellidoMaterno
        }
        subheader={selectedUser.rol}
      />
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8} sx={{ padding: "10px" }}>
            <Typography variant="body1" color="initial">
              Información General
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <IconButton aria-label="Editar" onClick={() => handleEdit()}>
              <Edit color="secondary" />
            </IconButton>
            <IconButton aria-label="Eliminar" onClick={() => deleteUser()}>
              <Delete color="error" />
            </IconButton>
          </Grid>
        </Grid>

        <Typography variant="caption" color="initial">
          Registrado el {selectedUser.fechaRegistro}
        </Typography>
      </Box>
    </Card>
  );
};

export default UserCard;
