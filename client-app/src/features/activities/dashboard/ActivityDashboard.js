import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'

export default function ActivityDashboard(props) {
    return (
        <div>
            <Grid>
                <Grid.Column width='10'>
                   <ActivityList activities={props.activities} ></ActivityList>
                </Grid.Column>
                <Grid.Column width='6'>
                {props.activities[0] &&
                <ActivityDetails activity={props.activities[0]}></ActivityDetails>}
              </Grid.Column>
            </Grid>
              
        </div>
    )
}
