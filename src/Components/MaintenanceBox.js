import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
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
        <Link to='/maintenance'>
            <Box style={activeStyle}>
                Maintenance
            </Box>
        </Link>
    )
}

export default MaintenanceBar;