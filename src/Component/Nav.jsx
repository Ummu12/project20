import React from "react";
import { Button,Grid} from "@mui/material";
import { Link } from "react-router-dom";

export const Nav=()=>{
    return(
      <Grid container  spacing={2} sx={{bgcolor:"lightskyblue",height:"100px"}}>
        <Grid item xs={2}>
            <Link to="/Home">
            <Button fullWidth variant="contained">
                Home
            </Button>
            </Link>
    </Grid>

    <Grid item xs={2}>
            <Link to="/Todo">
            <Button fullWidth variant="contained">
                TodoList
            </Button>
            </Link>
    </Grid>

    <Grid item xs={2}>
            <Link to="/Name">
            <Button fullWidth variant="contained">
                Add Name
            </Button>
            </Link>
    </Grid>
 

    <Grid item xs={2}>
            <Link to="/Color">
            <Button fullWidth variant="contained">
                Add Color
            </Button>
            </Link>
    </Grid>


      </Grid>
    )
}