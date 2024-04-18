import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

const Lesson = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [lessons, setLessons]=useState([])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const start = date + "T12:00:00"
    const lesson = {name, start}
    console.log(lesson)
    fetch("http://localhost:8081/lesson/add",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(lesson)
    }).then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
    console.log('Lesson added:', data);
    fetchLessons();
})
.catch(error => {
    console.error('Error adding lesson:', error);
});
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/lesson/delete/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      console.log("Lesson deleted");
      // Update the list of lessons after deleting a lesson
      fetchLessons();
    })
    .catch(error => {
      console.error("Error deleting lesson:", error);
    });
  };

  const fetchLessons = () => {
    fetch("http://localhost:8081/lesson/getAll")
      .then(res => res.json())
      .then((result) => {
        setLessons(result);
      });
  };


  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <div>
      <h1>Add Lesson</h1>
      <form>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Lesson Name" /><br/>
        <input type="date" value={date} onChange={handleDateChange} />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      <h1>Lessons</h1>

        <div>
            {lessons.map(lesson=>(
                <div key={lesson}>
                    Id: {lesson.id} <br/>
                    Name: {lesson.name} <br/>
                    Date: {lesson.start} <br/>
                    <button onClick={() => handleDelete(lesson.id)}>Delete</button>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Lesson;