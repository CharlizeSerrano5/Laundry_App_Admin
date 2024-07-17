import { Container, Grid } from '@mui/material';
import './App.css';
import ServiceAppView from './Components/ServiceAppView';
import ServiceDetails from './Components/ServiceDetails';
import TopBar from './Components/TopBar';
import ServiceContext from './Components/ServiceContext';
import React from 'react';
import Main from './Main';

function App() {

  const [serviceTitle, setServiceTitle] = React.useState('Service Details');
  const defineServiceTitle = (title) => {
      setServiceTitle(title);
      // set a new title
  }

  return (
    <div className="App">
        <Main></Main>
        
    </div>
  );
}

export default App;
