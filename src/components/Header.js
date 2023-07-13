import { AppBar , Select , Container , MenuItem , Toolbar , Typography } from "@material-ui/core";
import React from "react";
import { makeStyles,createTheme, ThemeProvider } from "@material-ui/core/styles";

import  {useNavigate} from "react-router-dom";
import {CryptoState} from "../Pages/CryptoContext";
const useStyles = makeStyles((theme) => ({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer",
    },
}));
const darkTheme = createTheme({
    palette:{
        primary:{
            main:"#fff",
        },
        type: "dark",
        },
     });
function Header () {

    const classes=useStyles();
    const navigate = useNavigate();
    const {currency,setCurrency}=CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
   <Container>
    <Toolbar>
        <Typography 
        onClick={() => navigate.push("/")} 
        className={classes.title}
        variant='h6'
        >
            Crypto Hunter
        </Typography>

        <Select variant="outlined"
        value={currency} 
        style={{

            width:100,
            height:40,
            marginRight:15,
        }}
        onChange={(e)=> setCurrency(e.target.value)}
        >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
        </Select>

    </Toolbar>
   </Container>

    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
