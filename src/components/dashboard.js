import React, { Component } from 'react'
import Create from './create'
import axios from 'axios'
import RenderTickets from './render-tickets'
import TicketsSummary from './tickets-summary'


import '../style/main.scss'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tickets: [],
        } 
        this.handleTicketClick =this.handleTicketClick.bind(this)
    }



handleTicketClick() {
  this.setState({
    ticketModalIsOpen: true
  })
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
    
      ticketSummary() {
        
        return this.state.tickets.map(ticket => {
          return (
            <div key={ticket.id}>
             <TicketsSummary 
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
        axios.get("https://tdb-ticket-api.herokuapp.com/tickets")
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
            <h1>Active Tickets</h1>
            <div className="bodyWrapper">
                <div className="columns">
                  
                  <div>Title</div>
                  <div>Description</div>
                  <div>Ticket Type</div>
                  <div>Priority</div>
                </div>
                {this.ticketSummary()}
        

            </div>
        </div>
        
    )



    }
}