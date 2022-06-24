import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
