import React, { Component } from 'react'
import axios from 'axios'
import TicketsSummary from './tickets-summary'
import { trackPromise } from 'react-promise-tracker'

import '../style/main.scss'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tickets: [],
          showResolved: false,
          showHide: "Show Archived",
          loading: true
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
    showResolved: !this.state.showResolved,
    showHide: !this.state.showHide
  })
}

handleSuccesfulFormSubmit = updatedObj => {
  this.getTickets()
}

      ticketSummary() {
        return this.state.tickets.map(ticket => {
          return (
          this.state.showResolved ?
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
                handleSuccesfulFormSubmit={this.handleSuccesfulFormSubmit}
              /> 
            </div>
            : ticket.resolved === "False" ? 
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
                handleSuccesfulFormSubmit={this.handleSuccesfulFormSubmit}
              /> 
            </div> : null
          )
        })
      }
    
      getTickets = () => {
        axios.get("https://tdb-ticket-api.herokuapp.com/tickets")
      .then(res => {
        
        this.setState({
          loading: false,
          tickets: res.data
        })
      })
      .catch(function (error) {
          console.log(error);
        })
      }

    componentDidMount() {
        this.getTickets()
    }
  

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
                {this.state.loading ? <h1>Patience Danielson</h1> : <div>{this.ticketSummary()}</div>}
                
                <button className="show-archived" onClick={this.handleShowResolved}>{this.state.showHide ? "Show Archived" : "Hide Archived"}</button>
            </div>
        </div>
        
    )



    }
}