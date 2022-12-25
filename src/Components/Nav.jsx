import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Link to="/">Home</Link>
        </Grid> 
        <Grid item xs={3}>
          <Link to="/todo">TodoList</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/undoredo">Undoredu</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/counter">Counter</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/api">Api</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/turnary">Turnary</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/classcomponent">Classcomponent</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/classtodo">Classtodo</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/Bulb">Bulb</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/Details">Details</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/Studentslist">Studentslist</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/Stafflist">Stafflist</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/AddStaff">AddStaff</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/AddStudent">AddStudent</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/EditStaff">EditStaff</Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="/Useref1">Useref1</Link>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};
