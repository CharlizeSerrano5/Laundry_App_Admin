import { Box, Container, Stack } from "@mui/material";
import ServiceAccordian from "./ServiceAccordian";
import WasherIcon from '../Assets/DefaultLaundryIcon.svg';
import DryerIcon from '../Assets/DefaultDryerIcon.svg';
import ClubhouseIcon from '../Assets/ClubHouseIcon.svg'
import BBQIcon from '../Assets/BarIcon.svg'

import './ServiceAppView.css'
function ServiceAppView() {
    return (
        <Box style={{backgroundColor: '#F2F2F2', borderRadius: '5px', padding: 'auto'}}>
            <h1 className="Title">All Services</h1>
            <Container>
                <Stack spacing={2}>
                    <Box style={{backgroundColor: '#79CBF9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">Washers</h2>
                            <ServiceAccordian icon={WasherIcon}></ServiceAccordian>
                        </Container>
                    </Box>
                    <Box style={{backgroundColor: '#7CEBDE', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">Dryers</h2>
                            <ServiceAccordian icon={DryerIcon}></ServiceAccordian>
                        </Container>
                    </Box>
                    <Box style={{backgroundColor: '#D893F9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">Clubhouse</h2>
                            <ServiceAccordian icon={ClubhouseIcon}></ServiceAccordian>
                        </Container>
                    </Box>
                    <Box style={{backgroundColor: '#FE9A9A', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}}>
                        <Container>
                            <h2 className="ServiceTitle">BBQ Grill</h2>
                            <ServiceAccordian icon={BBQIcon}></ServiceAccordian>
                        </Container>
                    </Box>
                </Stack>
                
            </Container>
            
        </Box>
    )
}

export default ServiceAppView;