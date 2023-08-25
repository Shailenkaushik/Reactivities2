import axios from 'axios';

import {useState,useEffect} from 'react';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

// import { Activity } from '../../features/activity';
function App() {
  const [activities,SetActivities]=useState([]);
  const [selectedActivity,setSelectedActivity]=useState(undefined);
  const [editMode,setEditMode]=useState(false);
  // const [activities,SetActivities]=useState<Array<Activity>>([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/test/getusers')
    .then(Response=>{
      console.log(Response);
      SetActivities(Response.data);
    })
  },[])

  function handleSelectActivity(id){
        setSelectedActivity(activities.find(x=>x.actId===id));
  }
  function handelCancelActivity(){
    setSelectedActivity(undefined);
  }
  function handleFormOpen(id){
    id?handleSelectActivity(id):handelCancelActivity();
    setEditMode(true);
  }
  function handleFormClose(){
    setEditMode(false);
  }
  
   function handleCreateOrEditActivity(activity){
    activity.actId
    ? SetActivities([...activities.filter(x=>x.actId!==activity.actId),activity])
    :SetActivities([...activities,activity]);
    setEditMode(false);
    setSelectedActivity(activity);
   }
    
   function deleteActivity(id){
    SetActivities([...activities.filter(x=>x.actId!==id)])
   }

  return (
    <>
      {/* <header className="App-header"> */}
      <Navbar openForm={handleFormOpen}></Navbar>
      <Container style={{marginTop:'75px'}} >
             <p> I an very    good at this</p>
            <ActivityDashboard
             activities={activities}
             selectedActivity={selectedActivity}
             selectActivity={handleSelectActivity}
             cancelSelectActivity={handelCancelActivity}
             editMode={editMode}
             openForm={handleFormOpen}
             closeForm={handleFormClose}
             createOrEdit={handleCreateOrEditActivity}
             deleteActivity={deleteActivity}
             ></ActivityDashboard>
            
        </Container>
      
    </>
  );
}

export default App;
