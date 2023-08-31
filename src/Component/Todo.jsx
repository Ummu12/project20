import React,{useState} from "react";
import {Card, CardContent,TextField,Grid,Button} from "@mui/material";


export const Todo=()=>{
    const[data,setData]=useState([]);
    const[txt,setTxt]=useState("");
    return(
        <Card>
            <CardContent>
            <Grid container spacing={2}>
            <Grid item xs={8} >
            <TextField onChange={(e)=> setTxt(e.target.value)} variant="outlined" label="Add word" fullWidth />
            </Grid>
            
           <Grid item xs={4}>
           <Button onClick={()=> setData([...data, txt])} sx={{height:55}} variant="contained" fullWidth>Add</Button>
           </Grid>
           {
             data.map(item=>
                <Grid item xs={12}>
                    <Card sx={{bgcolor:"lightsalmon",textAlign:"center"}}>
                        <CardContent>
                           <h1> {item.toUpperCase()}</h1>
                        </CardContent>
                    </Card>

                </Grid>
                )

           }
        </Grid>
            </CardContent>
        </Card>
    )
}