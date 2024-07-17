import { Container, Grid } from '@mui/material';
import './App.css';
import ServiceAppView from './Components/ServiceAppView';
import ServiceDetails from './Components/ServiceDetails';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <ServiceAppView></ServiceAppView>

            </Grid>
            <Grid item xs={8}>
              <ServiceDetails></ServiceDetails>

            </Grid>
          </Grid>
        </Container>
        
    </div>
  );
}

export default App;
