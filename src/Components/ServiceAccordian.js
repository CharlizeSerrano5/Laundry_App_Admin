import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MaintenanceBox from './MaintenanceBox';
import { DataGrid } from '@mui/x-data-grid';

import { Grid, Stack } from '@mui/material';
import React from 'react';
import ServiceContext from "./ServiceContext";
import './ServiceAccordian.css'

function ServiceAccordian({icon, number, type, data}) {  
    const {serviceTitle, defineServiceTitle} = React.useContext(ServiceContext);
    const columns = [
        { field: 'Name', headerName: 'Name', width: 100 },
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
        { id: 1, Name: 'Robert Smith', Time: '10 AM - 11 AM', Status: 'Complete' },
        { id: 2, Name: 'Steve Albini', Time: '11:30 AM - 12:30 PM', Status: 'Incomplete' },
        { id: 3, Name: 'Thom Yorke', Time: '1 PM - 2 PM', Status: 'Incomplete'  },
        { id: 4, Name: 'Brian Wilson', Time: '5:30 PM - 6:30 PM', Status: 'Complete'  },
      ];
      
    const utilizationStyleActive = {
        color: '#76B148',
    }
    const bookings = rows.length;
    return (
        <Accordion style={{backgroundColor: '#FFFFFF', borderRadius: '10px'}} onChange={() => {
            let newTitle = `${type}`
            if (number) {
                newTitle += ` #${number}`
            }
            defineServiceTitle(`${newTitle}`)
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={3}>
            <div className='imageNumberContainer'>
                <img src={icon} className='imageNumber'></img>
                <span className='imageText'>{number}</span>
            </div>
            </Grid>
            <Grid item xs={9} textAlign={'left'}>
                <div>{bookings} Bookings Today</div>
                <div className='ServiceUtilization' style={utilizationStyleActive}>Utilization: 87% (Frequently Used)</div>
                <MaintenanceBox></MaintenanceBox>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
            <DataGrid
                rows={rows}
                columns={columns}
                disableColumnFilter 
                hideFooter
                hideFooterPagination
                showCellVerticalBorder={false}
                showColumnVerticalBorder={false}
                style={{fontSize: '13px', border: 'none', color: '#3D5CAC'}}
            />
        </AccordionDetails>
      </Accordion>
    );
}

export default ServiceAccordian;