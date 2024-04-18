import React, {useState} from 'react'
import { Calendar } from 'react-big-calendar';
import { dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css";
import { startOfWeek, getDay, parse, format  } from 'date-fns';
import DatePicker from 'react-datepicker';


const locales = {
    "en-US": import("date-fns/locale/en-US").then((module) => module.default)

}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Piano",
        allDay: true,
        start: new Date(2024,3,23),
        end: new Date(2024,3,23)
    },
    {
        title: "Guitar",
        start: new Date(2024,3,24),
        end: new Date(2024,3,24)
    },
    {
        title: "Singing",
        start: new Date(2024,3,25),
        end: new Date(2024,3,25)
    }
]

const CalendarLesson = () => {

    const [newEvent, setNewEvent] = useState({title:"", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent])
    }

  return (
    <div className='lesson-container'>
        <h1 className='h1-not-home'>Calendar</h1>
        <h2>Add New Lesson</h2>
        <div className='calendar'>
            <input type='text' placeholder='Add Title' style={{width: "20%", marginRight: "10px"}}
            value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <DatePicker placeholderText='Start Date' style={{marginRight: "10px"}}
            selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
                        <DatePicker placeholderText='End Date' style={{marginRight: "10px"}}
            selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
            <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Lesson</button>
        </div>
     <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height:500, margin:"50px"}}/>

    </div>
  )
}

export default CalendarLesson