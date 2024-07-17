import { Stack, Box } from "@mui/material";
function Calendar() {
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
        <div>
             <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    container
                    padding={'0px'}>
                        {currentWeek.map((weekday) => (
                            <Box style={{backgroundColor: '#D1D1D1'}}>
                                <h2>{weekdayArr[weekday.getDay()].slice(0, 3)}</h2>
                                <h2>{weekday.getDate()}</h2>
                            </Box>
                            
                        ))}

                    </Stack>
        </div>
    )
}

export default Calendar;