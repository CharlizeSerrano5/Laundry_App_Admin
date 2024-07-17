import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MaintenanceBox from './MaintenanceBox';
import { DataGrid } from '@mui/x-data-grid';

import { Grid } from '@mui/material';
import React from 'react';

const columns = [
    { field: 'Name', headerName: 'Name', width: 130 },
    {
      field: 'Time',
      headerName: 'Booked Time',
      width: 150,
    },
    {
        field: 'Status',
        headerName: 'Status',
        width: 90,
      },
  ];
  
  const rows = [
    { id: 1, Name: 'Robert Smith', Time: '10 AM - 11 AM' },
    { id: 2, Name: 'Steve Albini', Time: '11:30 AM - 12:30 PM' },
    { id: 3, Name: 'Thom Yorke', Time: '1 PM - 2 PM' },
    { id: 4, Name: 'Brian Wilson', Time: '5:30 PM - 6:30 PM' },
  ];


function ServiceAccordian({icon}) {  
  return (
        <Accordion style={{backgroundColor: '#FFFFFF', borderRadius: '10px'}} onChange={() => {}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={3}>
            {/* icon */}
            <img src={icon}></img>
            </Grid>
            <Grid item xs={9} textAlign={'left'}>
                <div>9 Bookings Today</div>
                <div>Utilization: 87% (Frequently Used)</div>
                <MaintenanceBox></MaintenanceBox>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </AccordionDetails>
      </Accordion>
    );
}

export default ServiceAccordian;