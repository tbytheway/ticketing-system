import React, {Component} from 'react'
import ReactModal from 'react-modal'
import Create from './create'
ReactModal.setAppElement(".app-wrapper")


export default class TicketModal extends Component {
    constructor(props) {
        super(props)

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
            
            <Create />
            
        </ReactModal>
    )
}

}