import { Container, Grid, Box } from '@mui/material';
// import './ServicePage.css';
import ServiceAppView from '../Components/ServiceAppView';
import ServiceDetails from '../Components/ServiceDetails';
import TopBar from '../Components/TopBar';
import ServiceContext from '../Components/ServiceContext';
import React from 'react';

function ServicePage() {

  const [serviceTitle, setServiceTitle] = React.useState('Service Details');
  const defineServiceTitle = (title) => {
      setServiceTitle(title);
  }

  return (
    <div className="ServicePage">
      

        <TopBar></TopBar>
        <Container maxWidth={'100%'} style={{ margin: '24px 0'}}>
        <ServiceContext.Provider value={{serviceTitle, defineServiceTitle}}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ServiceAppView></ServiceAppView>

            </Grid>
            <Grid item xs={8}>
              <ServiceDetails></ServiceDetails>

            </Grid>
          </Grid>
        </ServiceContext.Provider>
        </Container>
    </div>
  );
}

export default ServicePage;
