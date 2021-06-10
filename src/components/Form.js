import React from 'react';


const Form = (props) => {
    return (
        <div className="form">
            <h4>
                {props.title}
            </h4>
            {props.children}
        </div>
    );
} 
    export default Form; 