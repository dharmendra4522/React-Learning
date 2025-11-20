import React from 'react'

const Students = () => {
    const students = [
    { id: 1, name: "Dharm", course: "React" },
    { id: 2, name: "Aman", course: "Node.js" },
    { id: 3, name: "Riya", course: "MongoDB" },
    ];
  return (
    <div>
        <h1>Students Details</h1>
        <ul>
            {students.map((student)=>(
                <li key={student.id}>
                    {student.id}. {student.name} - {student.course}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Students