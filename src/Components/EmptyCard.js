import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Edit } from "@mui/icons-material";

const EmptyCard = () => {
  return (
    <Card>
      <Box
        sx={{
          padding: "20px",
          height: 200,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" color="initial" textAlign={'center'}>
          Seleccione un usuario para ver su información
        </Typography>
      </Box>
    </Card>
  );
};

export default EmptyCard;
