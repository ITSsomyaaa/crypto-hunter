import { makeStyles } from "@material-ui/core";
import { useEffect,useState } from "react";
import React from 'react'
import axios from "axios";
import { CryptoState }  from "../../Pages/CryptoContext";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";


const Carousel = () => {
    const[trending,setTrending]=useState([]);
    const classes = useStyles();
    const {currency,symbol }=  CryptoState();
    
    const fetchTrendingCoins = async () => {
        const {data }= await axios.get(TrendingCoins(currency));
        console.log(data);
        setTrending(data);
    };
    
    useEffect(()=> {
        fetchTrendingCoins();
    },[currency]);
    const useStyles = makeStyles((theme) =>({
        carousel:{
            height:"50%",
            display:"flex",
            alignItems:"center",
        },
        carouselItem:{
            display:"flex",

            flexDirection:"column",
            alignItems:"center",
            cursor:"pointer",
            textTransform:"uppercase",
            color:"white",
        },
    }));
    const items=trending.map((coin)=> {
      return(
         <Link
        className={classes.carouselItem}
        to={
          `/coins/${coin.id}`
        }>
        <img
        src={coin?.image}
        alt={coin.name}
        height="80"
        style={{ marginBottom: 10}} 

        />
        
      </Link>
      );

    });
    const responsive={
      0:{
        items:2,
      },
      512:{
        items:4,
      },
    };
  return (
    <div className={classes.carousel}>
    
      <AliceCarousel 
       mouseTracking
       infinite 
       autoPlayInterval={1000}
       animationDuration={1500}
       disableDotsControls
       disableButtonsControls
       responsive={responsive}
       autoPlay
       items={items} />
    </div>
  );
};

export default Carousel;
