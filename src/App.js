import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';
import CryptoContext from './Pages/CryptoContext.js';
const useStyles= makeStyles(() =>
({
  App:{
 backgroundColor: "#14161",
 color:"white",
 minHeight:"100vh",
  },
}));
function App() {
  const classes =useStyles();
  return (
   <BrowserRouter>
    <div className={classes.App}>
      <CryptoContext><Header /></CryptoContext><Routes>
      <Route path="/" component={Homepage} exact />
      <Route path="/coins/:id" component={CoinPage} />
      </Routes></div>
   </BrowserRouter>
  );
}

export default App;
