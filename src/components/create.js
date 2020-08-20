import React, { Component } from 'react'
import axios from 'axios'
import '../style/main.scss'


export default class Create extends Component {
    constructor(props) {
        super(props)
            this.state = {
                id: "",
                title: "",
                description: "",
                ticket_type: "",
                resolved: "",
                notes: "",
                priority: "",
                owner: ""
        }
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

    // DRY programming (Do not repeat yourself)
    // [event.target.name]: event.target.value

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

    submitChange = (e) => {
        
        axios.post("https://tdb-ticket-api.herokuapp.com/ticket", {
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
        .then(this.props.history.push("/thanks"))
        .catch(err => console.error("Handle Subit Error: ", err))
            .catch(function (error) {
                console.log(error)
            })
    }


   


render() {
    return(
        <div>
            <h1>Create a ticket</h1><p></p>
            <form className="create-ticket" id={this.state.id}>
                <div>Title</div>
                <div>Priority</div>
                <div className="form-input"><input type="text" placeholder="title" value={this.state.title} onChange={event => this.createTitle(event)}/></div>
                <div>
                    <select name="priorityDropdown" value={this.state.priority} onChange={event => this.createPriority(event)}>
                    <option value=""></option>
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
                <div className="create-notes"><textarea cols="50" rows="5" value={this.state.notes} onChange={event => this.createNotes(event)}/></div>
                <div className="resolved-owner">
                    <div><select name="resolvedDropdown" value={this.state.resolved} onChange={event => this.createResolved(event)}>
                        <option value=""></option>
                        <option value="False">No</option>
                        <option value="True">Yes</option>
                        </select>
                    </div>
                    Owner
                    <div><input type="text" placeholder="owner" name="owner" value={this.state.owner} onChange={event => this.createOwner(event)}/></div>
                </div>
                   
                
            </form>
           <button className="create-submit" onClick={this.submitChange} >Submit</button>
            
        </div>
    )



    }
}