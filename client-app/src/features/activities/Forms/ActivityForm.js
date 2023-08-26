import React from 'react'
import { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

export default function ActivityForm(props) {

  const initialState=props.activity ??{
    actId: '',
    title: '',
    category: '',
    descript: '',
    entrydate: '',
    city:'',
    venue:''
  }

    const [activity,setActivity]=useState(initialState); 
    function handleSubmit(){
        setActivity(activity);
        console.log(activity);
        props.createOrEdit(activity);
    }
    function handleInputChange(e){
          const {name,value}=e.target;
          setActivity({...activity,[name]:value})
    }
  return (
    <Segment clearing>

     <Form onSubmit={handleSubmit}>
        <Form.Input  placeholder={'Title'} onChange={handleInputChange} value={activity.title} name='title'/>
        <Form.TextArea placeholder='Description'onChange={handleInputChange} value={activity.descript} name='descript'/>
        <Form.Input placeholder='Category' onChange={handleInputChange} value={activity.category} name='category'/>
        <Form.Input type='date' placeholder='Date' onChange={handleInputChange} value={activity.entryDate} name='entryDate'/>
        <Form.Input placeholder='City'onChange={handleInputChange} value={activity.city} name='city'/>
        <Form.Input placeholder='Venue' onChange={handleInputChange} value={activity.venue} name='venue'/>
        <Button loading={props.submitting} floated='right' positive type='submit' content='Submit' ></Button>
        <Button loading={props.submitting} onClick={props.closeForm} floated='right'  type='button' content='Cancel' ></Button>
     </Form>


    </Segment>
  )
}
