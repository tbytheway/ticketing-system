import React, { Component } from 'react'
import axios from 'axios'
import { navigate } from 'hookrouter'
import '../style/main.scss'


export default class Update extends Component {
    constructor(props) {
        super(props)
            this.state = {
                id: "",
                title: "",
                description: "",
                ticket_type: "",
                resolved: "False",
                notes: "",
                priority: "",
                owner: ""
        }
    }

    
    createId(event) {
        this.setState({
            id: event.target.value
        })
    }

    createTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    createDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    createTicketType(event) {
        this.setState({
            ticket_type: event.target.value
        })
    }

    createResolved(event) {
        this.setState({
            resolved: event.target.value
        })
        
    }

    createNotes(event) {
        this.setState({
            notes: event.target.value
        })
        
    }

    createPriority(event) {
        this.setState({
            priority: event.target.value
        })
        
    }

    createOwner(event) {
        this.setState({
            owner: event.target.value
        })
        
    }

    submitChange = () => {
        
        axios.put(`https://tdb-ticket-api.herokuapp.com/ticket/${this.state.id}`, {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            resolved: this.state.resolved,
            notes: this.state.notes,
            ticket_type: this.state.ticket_type,
            priority: this.state.priority,
            owner: this.state.owner
        }) .then(function (response) {
            console.log(response)
        })
        .then(navigate("/"))
        .catch(err => console.error("Handle Subit Error: ", err))
            .catch(function (error) {
                console.log(error)
            })
    }


    componentWillMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            ticket_type: this.props.ticket_type,
            resolved: this.props.resolved,
            notes: this.props.notes,
            priority: this.props.priority,
            owner: this.props.owner
          });
        
      }


render() {
    return(
        <div>
                <form className="update-ticket" id={this.state.id}>
                <div>Title</div>
                <div>Priority</div>
                <div className="form-input"><input type="text" value={this.state.title} onChange={event => this.createTitle(event)}/></div>
                <div>
                    <select name="priorityDropdown" value={this.state.priority} onChange={event => this.createPriority(event)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select>
                </div>
                <div>Description</div>
                <div>Ticket Type</div>
                <div className="form-input"><input type="text" placeholder="Description" value={this.state.description} onChange={event => this.createDescription(event)}/></div>
                <div><input type="text" placeholder="ticket type" value={this.state.ticket_type} onChange={event => this.createTicketType(event)}/></div>
                <div>Notes</div><div>Resolved</div> 
                <div className="update-notes"><textarea cols="55" rows="5" value={this.state.notes} onChange={event => this.createNotes(event)}/></div>
                <div className="resolved-owner">
                    <div><select name="resolvedDropdown" value={this.state.resolved} onChange={event => this.createResolved(event)}>
                        <option value="True">Yes</option>
                        <option value="False">No</option>
                        </select>
                    </div>
                    Owner
                    <div><input type="text" placeholder="Owner" value={this.state.owner} onChange={event => this.createOwner(event)}/></div>
                </div>
                   
                <button onClick={this.submitChange} >Submit</button>
            </form>
           
            
        </div>
    )



    }
}