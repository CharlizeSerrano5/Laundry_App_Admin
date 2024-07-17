import { Stack, Box } from "@mui/material";
import './Calendar.css'
function Calendar() {
    const currentDate = new Date();
    const weekdayArr = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY', 'SATURDAY']
    
    // starting from today print the next week
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
        let tempDate = new Date(currentDate);
        tempDate.setDate(currentDate.getDate() + i);
        currentWeek.push(tempDate);
    }

    const times = [
        {id: 0, time: '9:00 am', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 1, time: '9:30 am', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 2, time: '10:00 am', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 3, time: '10:00 am', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 4, time: '11:00 am', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 5, time: '11:30 am', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 6, time: '12:00 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 7, time: '12:30 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 8, time: '1:00 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 9, time: '1:30 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 10, time: '2:00 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 11, time: '2:30 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 12, time: '3:00 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 13, time: '3:30 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},
        {id: 14, time: '4:00 pm', day0: '', day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''},

    ];
    return (
        <div>
                <table className="CalendarTable"  rules="rows columns">
                    <th> </th>
                    {currentWeek.map((weekday) => (
                        <th>
                            <h2 className="CalendarWeekday">{weekdayArr[weekday.getDay()].slice(0, 3)}</h2>
                            <h2 className="CalendarNumber">{weekday.getDate()}</h2>
                        </th>                             
                            ))}

                    {times.map((week) => (
                        <tr>
                            <td> {week.time}</td>
                            {week.id === 0 ? (
                                <td rowSpan="2">{week.day0}</td>
                            ) : (
                                week.id > 1 && <td>{week.day0}</td>
                            )}
                            {/* <td>{week.day0}</td> */}
                            <td> {week.day1}</td>
                            <td>{week.day2}</td>
                            <td>{week.day3}</td>
                            <td>{week.day4}</td>
                            <td>{week.day5}</td>
                            <td>{week.day6}</td>
                        </tr>
                    ))}
                    <tr>
                        
                    </tr>
                    
                </table>
        </div>
    )
}

export default Calendar;