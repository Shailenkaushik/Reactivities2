// import axios from 'axios';

import {useState,useEffect} from 'react';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/Agent';
import LoadingComponent from './LoadingComponent';

// import { Activity } from '../../features/activity';
function App() {
  const [activities,SetActivities]=useState([]);
  const [selectedActivity,setSelectedActivity]=useState(undefined);
  const [editMode,setEditMode]=useState(false);
  const[loading,setLoading]=useState(true);
  const [submitting,setSubmitting]=useState(false);
  // const [activities,SetActivities]=useState<Array<Activity>>([]);
  useEffect(()=>{
    
    agent.Activities.list().then(response=>{
      let activities=[];
      response.forEach(activity=>{
        activity.entryDate=activity.entryDate.split('T')[0];
        activities.push(activity);
      })
      SetActivities(activities);
      setLoading(false);
    })
  },[])
  
  function handleSelectActivity(id){
        setSelectedActivity(activities.find(x=>x.actId===id));
  }
  function handelCancelActivity(){
    setSelectedActivity(undefined);
  }
  function handleFormOpen(id){
    id=50;
    id?handleSelectActivity(id):handelCancelActivity();
    setEditMode(true);
  }
  function handleFormClose(){
    setEditMode(false);
  }
  
   function handleCreateOrEditActivity(activity){
    setSubmitting(true);
    if(activity.actId){
      agent.Activities.upsert(activity).then(()=>{
        SetActivities([...activities.filter(x=>x.actId!==activity.actId),activity])
        SetActivities([...activities,activity]);
        setEditMode(false);
       setSelectedActivity(activity);
        setSubmitting(false);
      })
      
    }
    else{
      // activity.actId=uuid();
       agent.Activities.upsert(activity).then(()=>{
        SetActivities([...activities,activity])
        setEditMode(false);
      setSelectedActivity(activity);
       setSubmitting(false);
       })
    }
    
   }
    
   function deleteActivity(id){
    setSubmitting(true);
    agent.Activities.delete(id).then(()=>{
      SetActivities([...activities.filter(x=>x.actId!==id)]);
      setSubmitting(false);
    })
    
   }
   if(loading) return <LoadingComponent   />
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
             submitting={submitting}
             ></ActivityDashboard>
            
        </Container>
      
    </>
  );
}

export default App;
