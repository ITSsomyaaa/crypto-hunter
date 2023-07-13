import { Typography ,Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "./Carousel";
const useStyles=makeStyles((theme)=> ({
    banner:{
        backgroundImage:"url(./banner2.jpg)"
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",
    },
    tagline:{
        display:"flex",
        height:"40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
    },
})
);
function Banner() {
    const classes=useStyles();
  return (
    <div className={classes.banner}>
      <Container classNmae={classes.bannerContent}>
        <div className={classes.tagline}
        >
            <Typography variant="h2"
            style={{
                fontWeight:"bold",
                marginBottom:15,
                fontFamily:"Montserrat",

            }}>
                Crypto Hunter
            </Typography>
            <Typography
            variant="subtitle2"
            style={{
                color:"darkgrey",
                textTransform:"capitalize",
                fontFamily:"Montserrat",

            }}>
            Get all information about your favourite crypto

            </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner;
