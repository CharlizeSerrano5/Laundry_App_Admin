import { Box, Grid, Stack, Container } from "@mui/material";
import Calendar from "./Calendar";
import './ServiceDetails.css'
function ServiceDetails() {
    const currentDate = new Date();
    const weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']
    
    // starting from today print the next week
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
        let tempDate = new Date(currentDate);
        tempDate.setDate(currentDate.getDate() + i);
        currentWeek.push(tempDate);
    }
    return (
        <div className="ServiceDetails">
            <Box style={{backgroundColor: '#F2F2F2', borderRadius: '5px', padding: 'auto'}}>
                <h1 className="Title">Service Details</h1>
                <Container>
                    <Box style={{backgroundColor: 'white', borderRadius: '10px', padding: 'auto'}}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <h2 className="ServiceTopDetails">Select Days</h2>
                            </Grid>
                            <Grid item xs={6}>

                                <h2 className="ServiceTopDetails">Rebook Tenants</h2>
                            </Grid>
                        </Grid>
                        {/* TODO: put the closed and maintenance buttons */}

                    <Calendar></Calendar>
                        
                    </Box>
                </Container>
                

            </Box>
        </div>
    )
}

export default ServiceDetails;