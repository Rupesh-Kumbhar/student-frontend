import '../Home/home.scss';

function Home(){
    // return "Hello from Home";
    return(
        <div className="col-sm-12 home-bg">
            <div className="text-center">
                <h1>Hello from Home</h1>
            </div>
            <div className="col-sm-12">
                <ul>
                    <li> <a href="/addStudent"> Add Student</a> </li>
                    <li> <a href="/allStudents"> List Student</a> </li>
                    <li> <a href="/deleteStudent"> Delete Student</a> </li>
                    <li> <a href="/searchStudent"> Search Student</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;