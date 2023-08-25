import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function Navbar(props){
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="..\..\assets\logo.png" alt="logo" style={{marginRight:'10px'}} ></img>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={props.openForm} Positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}