import React, { Component } from 'react'
import axios from 'axios'
import TicketsSummary from './tickets-summary'

import '../style/main.scss'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tickets: [],
          showResolved: false
        } 
        this.handleTicketClick =this.handleTicketClick.bind(this)
        this.handleShowResolved = this.handleShowResolved.bind(this)
    }



handleTicketClick() {
  this.setState({
    ticketModalIsOpen: true
  })
}

handleShowResolved() {
  this.setState({
    showResolved: true
  })
}


      ticketSummary() {
        
        return this.state.tickets.map(ticket => {
          return (
            <div key={ticket.id}>
             <TicketsSummary 
                id={ticket.id}
                title={ticket.title}
                description={ticket.description}
                ticket_type={ticket.ticket_type}
                resolved={ticket.resolved}
                notes={ticket.notes}
                priority={ticket.priority}
                owner={ticket.owner}
                showResolved={this.state.showResolved}
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
                <button className="show-archived" onClick={this.handleShowResolved}>Show Archived</button>
            </div>
        </div>
        
    )



    }
}