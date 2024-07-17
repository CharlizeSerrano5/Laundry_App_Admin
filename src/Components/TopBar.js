import { Grid, Container, Box, Stack } from '@mui/material'
import ManifestLogo from '../Assets/ManifestLogo.svg'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CallIcon from '@mui/icons-material/Call';

import './TopBar.css'
export default function TopBar(){
    return (
        <div className='TopBar'>
                    <Grid container spacing={2} textAlign={'left'} width={'100%'}>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={1} textAlign={'right'} alignContent={'end'}>
                                    <img src={ManifestLogo}></img>
                                </Grid>
                                <Grid item xs={10} justifyContent={'center'} margin={'0'}>
                                    <h1 className='TopBarTitle'>Manifest</h1>
                                    <p className='TopBarSubtitle'>BUY.SELL.RENT.MANAGE.FINANCE.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Container>
                            <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="stretch"
                            container
                            spacing={0.5}
                            padding={'0px'}>
                                    <Grid container spacing={1} justifyContent={'center'}>
                                        <Grid item xs={2}>
                                            <HomeIcon></HomeIcon>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <h2>Dashboard</h2>
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2}>
                                            <AccountCircleIcon ></AccountCircleIcon>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <h2>Profile</h2>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2}>
                                            <NotificationsIcon></NotificationsIcon>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <h2>Alerts</h2>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={2}>
                                            <CallIcon></CallIcon>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <h2>Contacts</h2>
                                        </Grid>
                                    </Grid>
                                
                            </Stack>
                            </Container>
                        </Grid>
                    </Grid>
        </div>        
    )
};