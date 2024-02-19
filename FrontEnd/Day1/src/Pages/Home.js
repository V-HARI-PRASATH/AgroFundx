import React from "react";
import Custbtn from "../Components/Custbtn";
import "./Home.css";
import { Link } from "react-router-dom";

function Home()
{
    return(
        <div className="home">
            <div className="hero">
                <img className="himg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRbklVPURcPABSTymrwakoCemXl83G4RN9g&usqp=CAU"/>
                <div className="htext">
                <h1>Efficient Fitness Trainer Management</h1>
                <h2>Streamline your client management, scheduling, and workouts.</h2>
                <Link to="/"><Custbtn lable="Get Started"></Custbtn></Link>
                </div>
            </div>
            <div className="features">
                {/* <center><h1>Features and Benefits</h1></center> */}
                <img className="himg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqoVwswbvbG78LEFHBTkUFE0X5tQMCNnziw&usqp=CAU"/>
                <div className="htext">
                <h1>Client Management</h1>
                <h2>Easily manage client profiles, track progress, and set goals. Keep all client information organized and accessible in one place.</h2>
                </div>
                <img className="himg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0-4_qFkeFtXWabplQ9ETjhGVA-zapyHDyg&usqp=CAU"/>
                <div className="htext">
                <h1>Scheduling and Appointments</h1>
                <h2>Effortlessly create and manage training sessions, appointments, and availability. Stay organized and never miss a session with automated reminders.</h2>
                </div>
                <img className="himg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPy_BSUByMWYSxrr8Z-CxyFAlmlh4n4SwnYsOeUKwAG36iWUlUwqfxQJeZlUlFGYEnCF0&usqp=CAU"/>
                <div className="htext">
                <h1>Workout Programs</h1>
                <h2>Create and assign customized workout programs to clients. Easily track progress, adjust workouts, and provide real-time feedback.</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;