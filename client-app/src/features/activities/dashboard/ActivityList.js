import React from 'react'
import { useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react'

export default function ActivityList(props) {

 const [target,setTarget]=useState('');
 function handleActivityDelete(e,id){
    setTarget(e.target.name);
    props.deleteActivity(id);
 }

    return (
        <>
            <Segment>
                <Item.Group divided>
                    {props.activities.map(activity => (
                    <Item key={activity.actId} >
                         <Item.Content>
                              <Item.Header as='a'> {activity.title}</Item.Header>
                              <Item.Meta>{activity.entryDate}</Item.Meta>
                              <Item.Description>
                                   <div>{activity.descript}</div>
                                   <div>{activity.city},{activity.venue}</div>
                              </Item.Description>
                               <Item.Extra>
                                     <Button onClick={()=>props.selectActivity(activity.actId)}  floated='right' content='view' color='blue'></Button>
                                     <Button name={activity.actId} loading={props.submitting && target===activity.actId} onClick={(e)=>handleActivityDelete(e,activity.actId)}  floated='right' content='Delete' color='red'></Button>
                                     <Label basic content={activity.category}></Label>
                               </Item.Extra>
                         </Item.Content>
                    </Item>
                 ))}
                </Item.Group>
            </Segment>

        </>
    )
}
// actId: number
// entryDate: string
// title: string
// descript: string
// category: string
// city: string
// venue: string