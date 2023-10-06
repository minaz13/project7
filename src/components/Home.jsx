import React from "react"
import {Grid} from "@mui/material";
import { Registration } from "./Registration";
import { Subscriber } from "./Subscriber";
import { SubscriberList } from "./common/SubscriberList";
import { Services } from "./common/Services";

export const Home=()=>{
    return(
    <Grid container spacing={2}>
     <Grid item xs={8}>
          <Registration />
     </Grid> 
     <Grid item xs={4}>
        <Subscriber />
     </Grid>
     <Grid item xs={4}>
         <SubscriberList />
     </Grid>
     <Grid item xs={8}>
        <Services />
     </Grid>
    </Grid>
    )
}