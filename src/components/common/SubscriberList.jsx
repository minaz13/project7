import React,{useState} from "react"; 
import {List,ListItem,Divider} from "@mui/material"

export const SubscriberList=()=>{
    const [data,SetData]=useState(["Sameer Dehadrai","Vikram Singh", "Kunal Singh", "Sharmin Shah","Hanumant Patil"]

    )
    return(
       <List>
        {
            data.map((item)=>
                <ListItem>{item}</ListItem>
            )
        }
       </List>
    )
}