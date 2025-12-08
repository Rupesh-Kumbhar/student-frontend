import './viewAllStudent.scss'
import api from '../api';
import { useState, useEffect } from 'react';


function ViewAllStudent(){
      const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/students/all")
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

    return(
        <div className="col-sm-12 dark-bg">
            <h1 className='text-center'>List of Students</h1>
            
            <div className="col-sm-12">
                <div className="d-flex justify-content-evenly">

                {
                    students.map(s => (
                        <div class="card text-bg-dark w-25" key={s.id} >
                            <div class="card-body">
                                {s.id}
                                <h5 class="card-title">{s.name}</h5>
                                <p class="card-text">{s.email}</p>
                            </div>
                        </div>
                    )
                    )
                }
                </div>
                <div className='text-center mt-5'>
                    <a class="btn btn-secondary" href="/home" role="button">Back to Home</a>
                </div>
            </div>
        </div>
    )
}

export default ViewAllStudent;