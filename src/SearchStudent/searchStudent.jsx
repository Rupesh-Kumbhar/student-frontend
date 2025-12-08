import '../SearchStudent/searchStudent.scss'
import api from '../api';
import { useState } from 'react';

function SearchStudent(){
      const [id, setId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

const handleSearch = (e) => {
  e.preventDefault();
  api.get(`/students/${id}`)
    .then(response => {
      if (response.data) {
        setStudent(response.data);
        setError("");
      } else {
        setStudent(null);
        setError("Studentwwww not found");
      }
    })
    .catch(err => {
      setStudent(null);
      setError("Student not found");
    });
};


    return(
        <div className="col-sm-12 dark-bg">
            <h1 className='text-center'>Search Student By Id</h1>

            <div className="col-sm-6">
          <form onSubmit={handleSearch}>
            <div className="mb-3">
              <label htmlFor="studentId" className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="studentId"
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </form>

            {student && (
            <div className="mt-4">
                <h3>Result:</h3>
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Email:</strong> {student.email}</p>
            </div>
            )}
          {error && <p className="mt-4 text-danger">{error}</p>}
        </div>
        </div>
    )
}

export default SearchStudent;