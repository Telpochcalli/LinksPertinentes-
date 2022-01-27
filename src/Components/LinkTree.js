import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const useStyles = makeStyles({
    telpo: {
        width: "30%",
        height: "auto",
    },
    header:{
        backgroundColor:"#404040",
        color:"white",
    },
    content:{
        margin:"50px 50px 50px 50px",
        textAlign: "center"
    
    },
    link:{
        fontSize:100,

    },
    contactSquare:{
        backgroundColor:"#001F3F",
        paddingBottom:"10px",
        paddingTop:"10px",
        marginLeft:"9rem",
        marginRight:"9rem",
        borderRadius:"20px",
        marginBlock:"10px"

    },
    spacing:{
        margin:"0px 100px 0px 100px"
    }
});



function LinkTree(props){

    const classes = useStyles();

    return(
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className = {classes.header}>
                    <Grid item xs={12}>
                        <div classes = {classes.content}>
                        <img className={classes.telpo} src = './img/Telpochcalli.png' alt="telpotcalli" />
                        <Typography variant = "h1">
                            Links Utiles:
                        </Typography>

                        <Typography variant = "h4">
                            Necesitas tu cuenta del tec asi como estar dentro el équipo para acceder a algunos de ellos. 
                        </Typography>
                        </div>
                    </Grid> 

                    <Grid item xs={12}>
                        {
                            props.links.map(
                                (link) => (
                                    <div className = {classes.contactSquare}>        
                                        <Link variant="h3" color = "white" href={link.link} target="_blank" underline="none" classes = {classes.link}>
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