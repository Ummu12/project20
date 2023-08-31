import React,{useState} from "react";
import { Card,CardContent,Grid,Button,TextField, colors } from "@mui/material";
import { Color } from "./Color";


export const Name=()=>{
    const[data,setData]=useState([]);
    const[txt,setTxt]=useState("");
    return(
        <Card>
            <CardContent>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                 <TextField onChange={(e)=>setTxt(e.target.value)} variant="outlined" fullWidth label="Add Name" />      
                    </Grid>

                    <Grid item xs={4}>
                      <Button onClick={()=>setData([...data,txt])}
                      variant="contained" fullWidth sx={{height:55}}
                      >     Add Name                
                      </Button>
                    </Grid>
                              
                                    
                                    {data.map((item)=>
                                    <Grid item xs={4}>   
                                    <Card  sx={{bgcolor:"yellowgreen",textAlign:"center", color:"white",fontWeight:"bold"}}>
                                      <CardContent>
                                       {"Mr.  "+ item}
                                    </CardContent>
                                   </Card>
                            </Grid>

                                    )} 

                                     
                                 

                            
                </Grid>
            </CardContent>
        </Card>
    )
   
}