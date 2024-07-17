import { Grid, Container, Box } from '@mui/material'
import ManifestLogo from '../Assets/ManifestLogo.svg'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CallIcon from '@mui/icons-material/Call';

import './TopBar.css'
export default function TopBar(){
    return (
        <div className='TopBar'>
            <Container  sx={{ top: 0, bottom: 'auto' }}>
                <Box >
                    <Grid container spacing={2} textAlign={'left'}>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item xs={3.5} textAlign={'right'} alignContent={'end'}>
                                    <img src={ManifestLogo}></img>
                                </Grid>
                                <Grid item xs={5} justifyContent={'center'} margin={'0'}>
                                    <h1 className='TopBarTitle'>Manifest</h1>
                                    <p className='TopBarSubtitle'>BUY.SELL.RENT.MANAGE.FINANCE.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <HomeIcon></HomeIcon>
                                    <h2>Dashboard</h2>
                                </Grid>
                                <Grid item xs={3}>
                                    <AccountCircleIcon></AccountCircleIcon>
                                    <h2>Profile</h2>
                                </Grid>
                                <Grid item xs={3}>
                                    <NotificationsIcon></NotificationsIcon>
                                    <h2>Alerts</h2>
                                </Grid>
                                <Grid item xs={3}>
                                    <CallIcon></CallIcon>
                                    <h2>Contacts</h2>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>   
            </Container>
        </div>        
    )
};