import React, { Component } from 'react'
import Create from './create'
import axios from 'axios'
import RenderTickets from './render-tickets'


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            tickets: []
          }
          
    }

renderTickets() {
        
        return this.state.tickets.map(ticket => {
          return (
            <div key={ticket.id}>
             <RenderTickets 
                title={ticket.title}
                description={ticket.description}
                ticket_type={ticket.ticket_type}
                resolved={ticket.resolved}
                notes={ticket.notes}
                priority={ticket.priority}
                owner={ticket.owner}
              />
            </div>
          )
        })
      }
    
      componentDidMount() {
        axios.get("http://localhost:5000/tickets")
        .then(res => {
            this.setState({
            tickets: res.data
          })
        })
        .catch(function (error) {
            console.log(error);
          });
      };


render() {
    return(
        <div>
            
            <div className="header"></div>
            <div className="bodyWrapper">
                <h1>Dashboard</h1>
                {this.renderTickets()}
        {/* <Create /> */}

            </div>
        </div>
        
    )



    }
}