import React, { Component } from 'react'


export default class Dashboard extends Component {
    constructor() {
        super()
            this.state = {
                tickets: {}
            }
    }



render() {
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="header"></div>
            <div className="bodyWrapper">
                

            </div>
        </div>
        
    )



    }
}