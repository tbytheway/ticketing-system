import React, { Component } from "react"
import "../style/main.scss"
import TicketModal from "./ticket-modal"


export default class TicketsSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketModalIsOpen: false,
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            ticket_type: this.props.ticket_type,
            resolved: this.props.resolved,
            notes: this.props.notes,
            priority: this.props.priority,
            owner: this.props.owner,
            showResolved: this.props.showResolved
          }
    this.handleTicketClick = this.handleTicketClick.bind(this) 
    this.handleModalClose = this.handleModalClose.bind(this)
    }

    handleTicketClick() {
        this.setState({
          ticketModalIsOpen: true
        })
      }
      handleModalClose() {
        this.setState({
            ticketModalIsOpen: false
        })
      }
      handleResolvedUpdate() {
        this.setState({
          showResolved: true
      })
    }

    handleSuccesfulFormSubmit = (updatedTicket) => {
      this.setState({
        ticketModalIsOpen: false,
      })
      this.props.handleSuccesfulFormSubmit(updatedTicket)
    }



    render() {
        return (

            <div className="ticket-summary">
                <TicketModal
                    id={this.state.id}
                    title={this.state.title}
                    description={this.state.description}
                    ticket_type={this.state.ticket_type}
                    resolved={this.state.resolved}
                    notes={this.state.notes}
                    priority={this.state.priority}
                    owner={this.state.owner}
                    handleModalClose={this.handleModalClose}
                    modalIsOpen={this.state.ticketModalIsOpen}
                    handleSuccesfulFormSubmit={this.handleSuccesfulFormSubmit}
                 />
                 
                 <div className="ticket-summary-data" onClick={this.handleTicketClick}>
                <div className="grid-item"><a >{this.props.title}</a></div>
                <div className="grid-item">{this.props.description}</div>
                <div className="grid-item">{this.props.ticket_type}</div>
                <div className="grid-item">{this.props.priority}</div>
            </div>
            
          </div>
            
        )
    }
}