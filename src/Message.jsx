/* eslint-disable react/prop-types */
import React from 'react';

function Message({heading, name, message}) {

    return (
        <div>
            <h2>Du skrev:</h2>
            <p>{heading}</p>
            <p>{name}</p>
            <p>{message}</p>
        </div>
    );
}

export default Message;