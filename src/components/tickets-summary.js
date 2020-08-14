import React, { Component } from "react"
import "../style/main.scss"
import TicketModal from "./ticket-modal"


export default class TicketsSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketModalIsOpen: false
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


    render(props) {
        return (

            <div className="ticket-summary">
                <TicketModal
                    handleModalClose={this.handleModalClose}
                    modalIsOpen={this.state.ticketModalIsOpen}
                 />
                <div className="grid-item"><a onClick={this.handleTicketClick}>{this.props.title}</a></div>
                <div className="grid-item">{this.props.description}</div>
                <div className="grid-item">{this.props.ticket_type}</div>
                <div className="grid-item">{this.props.priority}</div>
            </div>
            
        )
    }
}