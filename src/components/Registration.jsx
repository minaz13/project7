import React from "react";
import {Grid,Button,TextField} from "@mui/material"
import { UploadButton } from "./common/UploadButton";

export const Registration=()=>{
    return(
      <Grid container spacing={2} sx={{border:"5px solid gray",padding:2}}>
        <Grid item xs={4}>
            <TextField variant="outlined" label="First Name" fullWidth  />    
        </Grid> 
        <Grid item xs={4}>
            <TextField  variant="outlined" label="Middle Name" fullWidth/>
        </Grid>
        <Grid item xs={4}>
            <TextField variant="outlined" label="Last Name" fullWidth />
        </Grid>
        <Grid item xs={6}>
            <TextField  variant="outlined" label="Mobile" fullWidth/>
        </Grid>
        <Grid item xs={6}>
            <TextField variant="outlined" label="Email" fullWidth/>
        </Grid>
        <Grid item xs={3}>
            <TextField variant="outlined" label="H.No" fullWidth/>
        </Grid>
        <Grid item xs={3}>
            <TextField variant="outlined" label="Area Loaction" fullWidth/>
        </Grid>
        <Grid item xs={3}>
            <TextField variant="outlined" label="city" fullWidth/>
        </Grid>
        <Grid item xs={3}>
            <TextField variant="outlined" label="PIN Code" fullWidth/>
        </Grid>
        <Grid item xs={4}>
          <UploadButton  title="Upload Profile Photo"/>
        </Grid>
        <Grid item xs={4}>
          <UploadButton title="Upload Aadhar Card"/>   
        </Grid>
        <Grid item xs={4}>
            <UploadButton title="Upload Pan card"/>
        </Grid>
        <Grid item xs={6}>
            <Button variant="contained" color="success" fullWidth>Submit</Button>
        </Grid>
        <Grid item xs={6}>
            <Button variant="contained" color="error" fullWidth>Cancel</Button>

        </Grid>

      </Grid>
    )
}