import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>Welcome to About page</p>
                <p>Here we will find out how code works</p>
                <p>I use a simple request to the server, which returns the correct value</p>
                <img src="../../Знімок екрана 2023-03-13 184240.png" style={{ height: "40%", aspectRatio:"4/5" }}></img>
            </div>
        );
    }
}