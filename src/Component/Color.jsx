import React,{useState} from "react";
import { Card,CardContent,Grid,Button,TextField } from "@mui/material";

export const Color=()=>{
    const[data,setData]=useState([]);
    const[txt,setTxt]=useState("");
    return(
        <Card sx={{color:txt}}>
        <CardContent>
          
           <Grid container spacing={4}>
                    <Grid item xs={8}>
                 <TextField onChange={(e)=>setTxt(e.target.value)} variant="outlined" fullWidth label="Add Color" />      
                    </Grid>

                    <Grid item xs={4}>
                      <Button onClick={()=>setData([...data,txt])}
                      variant="contained" fullWidth sx={{height:55}}
                      >     Add Color               
                      </Button>
                        </Grid>
                        
                        {
                            data.map((item)=>
                            <Grid item xs={3}>
                                <span style={{color:item,fontFamily:"bold",fontSize:35}}>{item.toUpperCase()}</span>
                                                      </Grid>
                            )
                        }
          
          
           </Grid>
        </CardContent>
        </Card>

    )

}