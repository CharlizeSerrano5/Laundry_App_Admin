import { Box, Container, Grid, Stack } from "@mui/material";
import ServiceAccordian from "./ServiceAccordian";
import WasherIcon from '../Assets/DefaultLaundryIcon.svg';
import DryerIcon from '../Assets/DefaultDryerIcon.svg';
import ClubhouseIcon from '../Assets/ClubHouseIcon.svg'
import BBQIcon from '../Assets/BarIcon.svg'
import AddIcon from '@mui/icons-material/Add';

import './ServiceAppView.css'

const washersArray = [
    [
        { id: 1, Name: 'Robert Smith', Time: '10 AM - 11 AM', Status: 'Complete' },
        { id: 2, Name: 'Steve Albini', Time: '11:30 AM - 12:30 PM', Status: 'Incomplete' },
        { id: 3, Name: 'Thom Yorke', Time: '1 PM - 2 PM', Status: 'Incomplete'  },
        { id: 4, Name: 'Brian Wilson', Time: '5:30 PM - 6:30 PM', Status: 'Complete'  }
    ],
    [
        { id: 1, Name: 'Robert Smith', Time: '10 AM - 11 AM', Status: 'Complete' },
        { id: 2, Name: 'Steve Albini', Time: '11:30 AM - 12:30 PM', Status: 'Incomplete' },
    ],
];

const dryersArray = [
    [
        { id: 1, Name: 'Robert Smith', Time: '10 AM - 11 AM', Status: 'Complete' },
    ],
    [
        { id: 1, Name: 'Robert Smith', Time: '10 AM - 11 AM', Status: 'Complete' },
        { id: 2, Name: 'Steve Albini', Time: '11:30 AM - 12:30 PM', Status: 'Incomplete' },
        { id: 3, Name: 'Daisy Smith', Time: '10 AM - 11 AM', Status: 'Complete' },
    ],
];


function ServiceAppView() {
    const washers = washersArray.length;
    const dryers = dryersArray.length;
    const washersNumbers = [];
    for (let i = 0; i < washers; i++) {
        washersNumbers.push(i+1)
    }

    const dryersNumbers = [];
    for (let i = 0; i < dryers; i++) {
        dryersNumbers.push(i+1)
    }
    return (
        <Box style={{backgroundColor: '#F2F2F2', borderRadius: '5px', padding: 'auto'}}>
            <Grid container spacing={0} style={{height: '50%',  padding: 'auto', margin: '0'}}>
                <Grid item xs={2}>
                    
                </Grid>
                <Grid item xs={8}>
                    <h1 className="Title">All Services</h1>
                </Grid>
                <Grid item xs={2} alignContent={'center'}>
                    <AddIcon></AddIcon>
                </Grid>
            </Grid>
            <Container>
                <Stack spacing={2}>
                    <Box style={{backgroundColor: '#79CBF9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            
                            <h2 className="ServiceTitle">Washers</h2>
                            <Stack spacing={2}>
                                {washersNumbers.map((number) => (
                                    <ServiceAccordian icon={WasherIcon} number={number} type={'Washing Machine'}></ServiceAccordian>

                                ))}
                            </Stack>
                            
                        </Container>
                    </Box>
                    <Box style={{backgroundColor: '#7CEBDE', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">Dryers</h2>
                            <Stack spacing={2}>
                                {dryersNumbers.map((number) => (
                                    <ServiceAccordian icon={DryerIcon} number={number} type={'Drying Machine'}></ServiceAccordian>

                                ))}
                            </Stack>
                        </Container>
                    </Box>
                    <Box style={{backgroundColor: '#D893F9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">Clubhouse</h2>
                            <ServiceAccordian icon={ClubhouseIcon} type={'Clubhouse'}></ServiceAccordian>
                        </Container>
                    </Box>
                    <Box style={{backgroundColor: '#FE9A9A', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">BBQ Grill</h2>
                            <ServiceAccordian icon={BBQIcon} type={'BBQ Grill'}></ServiceAccordian>
                        </Container>
                    </Box>
                </Stack>
                
            </Container>
            
        </Box>
    )
}

export default ServiceAppView;