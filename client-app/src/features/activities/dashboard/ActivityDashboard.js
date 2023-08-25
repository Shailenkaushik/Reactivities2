import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../Forms/ActivityForm'

export default function ActivityDashboard(props) {
    return (
        <div>
            <Grid>
                <Grid.Column width='10'>
                   <ActivityList activities={props.activities} selectActivity={props.selectActivity} deleteActivity={props.deleteActivity} ></ActivityList>
                </Grid.Column>
                <Grid.Column width='6'>
                {props.selectedActivity && !props.editMode &&
                <ActivityDetails activity={props.selectedActivity}
                      cancelSelectActivity={props.cancelSelectActivity}
                       openForm={props.openForm}  
                         ></ActivityDetails>}
                {props.editMode && 
                   <ActivityForm  closeForm={props.closeForm} activity={props.selectedActivity} createOrEdit={props.createOrEdit} ></ActivityForm>}
              </Grid.Column>
            </Grid>
              
        </div>
    )
}
