import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Header} from 'semantic-ui-react'
import {useState,useEffect} from 'react';
function App() {
  const [activities,Setactivities]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/test/getusers')
    .then(Response=>{
      console.log(Response);
      Setactivities(Response.data);
    })
  },[])
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <Header as='h2' icon='users' content='Reactivities' ></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map(activity=>(
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      {/* </header> */}
    </div>
  );
}

export default App;
