import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const useStyles = makeStyles({
    telpo: {
        width: "50%",
        height: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    header:{
        backgroundColor:"#404040",
        color:"white",
    },
    content:{
        margin:"2px 2px 2px 2px",
        textAlign: "center"
    
    },
    link:{
        fontSize:"10rem",

    },
    contactSquare:{
        backgroundColor:"#001F3F",
        paddingBottom:"15px",
        paddingTop:"15px",
        marginLeft:"3rem",
        marginRight:"3rem",
        borderRadius:"20px",
        marginBlock:"10px",
        textAlign:"center"

    },
    spacing:{
        margin:"0px 100px 0px 100px"
    }
});



function LinkTree(props){

    const classes = useStyles();

    return(
        <React.Fragment>
            <Box sx={{ flexGrow: 3 }} className = {classes.header}>
                <Grid container spacing={3}>
                    <Grid item xs={12}  className= {classes.content}>
                        
                        <img src = './img/t.png' alt="telpo" className = {classes.telpo}/>
                        <Typography variant = "h1">
                            Links Utiles:
                        </Typography>

                        <Typography variant = "h4">
                            Necesitas tu cuenta del tec asi como estar dentro el équipo para acceder a algunos de ellos. 
                        </Typography>
                        
                    </Grid> 

                    <Grid item xs={12}>
                        {
                            props.links.map(
                                (link) => (
                                    <div className = {classes.contactSquare}>        
                                        <Link variant="h5" color = "white" href={link.link} target="_blank" underline="none" classes = {classes.link}>
                                            {link.title}   <FontAwesomeIcon icon = {link.icon}/>
                                        </Link>
                                    </div>
                                )
                            )
                        }
                    </Grid> 



                </Grid>
            </Box>

        </React.Fragment>
    );
}

export default LinkTree;