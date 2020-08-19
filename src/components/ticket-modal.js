import React, {Component} from 'react'
import ReactModal from 'react-modal'
import Update from './update'
ReactModal.setAppElement(".app-wrapper")


export default class TicketModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            ticket_type: this.props.ticket_type,
            resolved: this.props.resolved,
            notes: this.props.notes,
            priority: this.props.priority,
            owner: this.props.owner
        }

        this.customStyles = {
            content: {
                top:'50%',
                left: "45%",
                right: "40%",
                marginRight: "-50%",
                marginLeft: "-10%",
                transform: "translate(-25%, -50%)",
                witdth: "800px",
                height: "400px"
            },
        overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.50)"
        }
        }
    }

render() {
    return(
        <ReactModal 
        style={this.customStyles}
        onRequestClose={() => {
            this.props.handleModalClose();
        }}
        handleModalClose={this.handleModalClose}
        isOpen={this.props.modalIsOpen}>
            
            <Update
                id={this.state.id}
                title={this.state.title}
                description={this.state.description}
                ticket_type={this.state.ticket_type}
                resolved={this.state.resolved}
                notes={this.state.notes}
                priority={this.state.priority}
                owner={this.state.owner}
            />
            
        </ReactModal>
    )
}

}