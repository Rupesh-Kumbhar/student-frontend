import './addStudent.scss'
import api from '../api';
import { useState, useEffect } from 'react';

function AddStudent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault(); 
    api.post("/students/addStudent", { name, email })
      .then(response => console.log("Saved:", response.data))
      .catch(error => console.error(error));
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/students/all")
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="col-sm-12 dark-bg">
      <h1 className="text-center">Add Student</h1>
      <div className="d-flex justify-content-center">

        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className='text-center mt-5'>
            <a class="btn btn-secondary" href="/home" role="button">Back to Home</a>
          </div>
        </div>


      </div>
      <div className='col-sm-12'>
        <h2>Students</h2>
        <ul>
          {students.map(s => (
            <li key={s.id}>
              {s.name} - {s.email}
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default AddStudent;
