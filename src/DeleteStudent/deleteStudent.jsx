import './deleteStudent.scss'
import api from '../api';
import { useState, useEffect } from 'react';

function DeleteStudent() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        api.get("/students/all")
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this student?");
        if (confirmed) {
            api.delete(`/students/deleteStudent/${id}`)
                .then(() => {
                    setStudents(students.filter(s => s.id !== id));
                })
                .catch(error => console.error(error));
        }
    };
    return (
        <div className="col-sm-12 dark-bg">
            <h1 className='text-center'> Delete Student </h1>

            <div className='col-sm-12 '>
                <h2>Students</h2>
                <ul>
                    {students.map(s => (
                        <li key={s.id}>
                            {s.name} - {s.email}
                            <button onClick={() => handleDelete(s.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='text-center mt-5'>
                <a class="btn btn-secondary" href="/" role="button">Back to Home</a>
            </div>

        </div>
    )
}

export default DeleteStudent;