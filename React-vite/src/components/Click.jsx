import React from "react";



function Click(props){

    return <button onClick={props.eventHandler} className="btn btn-primary">{props.children}</button>
}

export default Click;