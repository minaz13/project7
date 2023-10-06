import React from "react";
import {Card,CardContent} from "@mui/material"

 export const ServiceItem=({item})=>{
    return(
     <Card sx={{bgcolor:"coral"}}>
        <CardContent>
          {item}
        </CardContent>
     </Card>
    )
}