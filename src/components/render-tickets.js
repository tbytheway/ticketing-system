import React, { Component } from "react"
import "../style/main.scss"


export default class RenderTickets extends Component {
    render(props) {
        return (
            <div className="ticket">
                <div>Title: {this.props.title}</div>
                <div>Description: {this.props.description}</div>
                <div>Ticket Type: {this.props.ticket_type}</div>
                <div>Resolved: {this.props.resolved}</div>
                <div>Notes: {this.props.notes}</div>
                <div>Priority: {this.props.priority}</div>
                <div>Owner: {this.props.owner}</div>
            </div>
        )
    }
}