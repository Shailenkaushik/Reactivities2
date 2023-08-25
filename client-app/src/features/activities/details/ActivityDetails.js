import React from 'react'
import { Image,Card, Icon, Button, } from 'semantic-ui-react'

export default function ActivityDetails(props) {
    return (
        <div> 
            <Card fluid>
                <Image src={`/../../assets/categoryImages/${props.activity.category}.jpg`}  />
                <Card.Content>
                    <Card.Header>{props.activity.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.activity.entryDate}</span>
                    </Card.Meta>
                    <Card.Description>
                     {props.activity.descript}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths='2'>
                        <Button basic color='blue' content='Edit'></Button>
                        <Button basic color='grey' content='Cancel'></Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        </div>
    )
}
// actId: number
// entryDate: string
// title: string
// descript: string
// category: string
// city: string
// venue: string