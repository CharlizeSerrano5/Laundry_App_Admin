import { Box, Grid, Stack, Container } from "@mui/material";
import Calendar from "./Calendar";
import './ServiceDetails.css'
import React from "react";
import ServiceContext from "./ServiceContext";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SortIcon from '@mui/icons-material/Sort';
function ServiceDetails() {
    const {serviceTitle} = React.useContext(ServiceContext);
    return (
        <div className="ServiceDetails">
            <Box style={{backgroundColor: '#F2F2F2', borderRadius: '5px', padding: 'auto'}}>
                <h1 className="Title">{serviceTitle}</h1>
                <Container>
                    <Box style={{backgroundColor: 'white', borderRadius: '10px', padding: 'auto', justifyContent: 'center', alignItems: 'center'}}>
                        <Box width={'50%'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} justifyItems={'center'} style={{
                            justifyContent: 'center', alignItems: 'center'}}>
                                <Grid container spacing={1} justifyContent={'center'} alignContent={'center'}>
                                    <Grid item xs={6}>
                                        <div className="ServiceTopDetails">
                                            <CalendarTodayIcon className="ServiceTopDetails"></CalendarTodayIcon>
                                            <h2 className="ServiceTopDetails">Select Days</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Stack
                                            direction="row"
                                            alignItems="stretch"
                                            container
                                            spacing={0.5}
                                            padding={'0px'}
                                            className="ServiceTopDetails">
                                            <SortIcon className="ServiceTopDetails"></SortIcon>
                                            <h2 className="ServiceTopDetails">Rebook Tenants</h2>
                                            </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h2>Closed Hours</h2>
                                    </Grid>
                                    <Grid item xs={6}>

                                        <h2>Maintenance Hours</h2>
                                    </Grid>
                                </Grid>
                            </Box>
                        
                        {/* TODO: put the closed and maintenance buttons */}
                        <Container>
                            <Calendar></Calendar>
                        </Container>

                        </Box>

                </Container>
                

            </Box>
        </div>
    )
}

export default ServiceDetails;