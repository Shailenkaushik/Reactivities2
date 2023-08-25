import axios from 'axios';

import {useState,useEffect} from 'react';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
// import { Activity } from '../../features/activity';
function App() {
  const [activities,SetActivities]=useState([]);
  // const [activities,SetActivities]=useState<Array<Activity>>([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/test/getusers')
    .then(Response=>{
      console.log(Response);
      SetActivities(Response.data);
    })
  },)
  return (
    <>
      {/* <header className="App-header"> */}
      <Navbar></Navbar>
      <Container style={{marginTop:'75px'}} >
             <p> I an very    good at this</p>
            <ActivityDashboard activities={activities}></ActivityDashboard>
            
        </Container>
      
    </>
  );
}

export default App;
