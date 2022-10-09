import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Typography sx={{ mb: 2 }}>
      <Link to="/"> &lt;&lt; Retourner aux posts</Link>
    </Typography>
  );
};

export default GoBack;
