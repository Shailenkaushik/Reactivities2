import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export default function LoadingComponent(props) {
    const { inverted = true, content = "Loading..." } = props;
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    );
}
