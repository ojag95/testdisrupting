import "./App.css";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme";
import AppBar from "./Components/AppBar";
import { Grid, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React,{useState} from "react";
import UsersTable from "./Components/UserTable";
import UserCard from "./Components/UserCard";
import UserModal from "./Components/UserModal";
import {UsersData as data} from "./Mock/UsersData"
import EmptyCard from "./Components/EmptyCard";

function App() {


  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [usersData, setUsersData] = useState(data);
  const [selectedUser, setSelectedUser] = useState(null)
  const [modalMode, setModalMode] = useState('register')

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar title='Test Disrupting'/>
        <Box sx={{ flex: 1, padding: "20px" }}>
          <Typography variant="h3" component="div" gutterBottom>
            Usuarios
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            Consulte la información de sus Usuarios
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <UsersTable usersData={usersData} handleSelectedUser={setSelectedUser}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box>
                  {
                    selectedUser===null?
                      <EmptyCard/>
                    :<UserCard selectedUser={selectedUser} setOpen={setOpen} setModalMode={setModalMode}/>

                  }
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", bottom: "20px", right: "20px" }}
        onClick={()=>setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <UserModal
        open={open}
        onClose={handleClose}
        setUsersData={setUsersData}
        usersData={usersData}
        mode={modalMode}
        selectedUser={selectedUser}
      />
    </ThemeProvider>
  );
}

export default App;
