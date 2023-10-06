import React,{useState} from "react";
import {Grid} from "@mui/material"
import { ServiceItem } from "./ServiceItem";

export const Services=()=>{
    const [data,setData]=useState(["Software Development", "Mobile App Development", "Digital Marketing","Maintenance"]
    )
    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>
                <Grid item xs={4}> 
                   <ServiceItem  item={item}/>
                </Grid>
                )
                
            }

        </Grid>
    )
}