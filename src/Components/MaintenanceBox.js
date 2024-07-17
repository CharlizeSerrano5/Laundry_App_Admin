import { Box } from "@mui/material";

const activeStyle = {
    backgroundColor: '#A52A2A',
    color:'white',
    borderRadius: '5px',
    padding: '2px'
}

const inactiveStyle = {
    backgroundColor: '#CB8E8E',
    color: 'white',
    borderRadius: '5px',
    padding: '2px'
}

function MaintenanceBar() {
    return (
        <Box style={activeStyle}>
            Maintenance
        </Box>
    )
}

export default MaintenanceBar;