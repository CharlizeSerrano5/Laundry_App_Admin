import { Grid } from "@mui/material";
import TopBar from "../Components/TopBar";

function MaintenancePage() {
    return (
        <div>
            <TopBar></TopBar>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <h2>Maintenance</h2>

                </Grid>
                <Grid item xs={8}>
                    <h2>Add Maintenance Request</h2>

                </Grid>
            </Grid>
        </div>
    )
}
export default MaintenancePage;