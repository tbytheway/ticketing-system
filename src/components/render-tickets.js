import React, { Component } from "react"
import "../style/main.scss"

const RenderTickets = props => {
    return (
        <div className="ticket">
            <div>Title: {props.title}</div>
            <div>Description: {props.description}</div>
            <div>Ticket Type: {props.ticket_type}</div>
            <div>Resolved: {props.resolved}</div>
            <div>Notes: {props.notes}</div>
            <div>Priority: {props.priority}</div>
            <div>Owner: {props.owner}</div>
        </div>
    );
}


// export default class RenderTickets extends Component {
//     render(props) {
//         return (
//             <div className="ticket">
//                 <div>Title: {this.props.title}</div>
//                 <div>Description: {this.props.description}</div>
//                 <div>Ticket Type: {this.props.ticket_type}</div>
//                 <div>Resolved: {this.props.resolved}</div>
//                 <div>Notes: {this.props.notes}</div>
//                 <div>Priority: {this.props.priority}</div>
//                 <div>Owner: {this.props.owner}</div>
//             </div>
//         )
//     }
// }