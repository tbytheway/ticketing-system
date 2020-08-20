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


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitChange = (e) => {
        e.preventDefault()
        
        axios.put(`https://tdb-ticket-api.herokuapp.com/ticket/${this.state.id}`, {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            resolved: this.state.resolved,
            notes: this.state.notes,
            ticket_type: this.state.ticket_type,
            priority: this.state.priority,
            owner: this.state.owner
        }) .then( (response) => {
            console.log(response)
            this.props.handleSuccesfulFormSubmit(response.data)
        })
        .catch(err => console.error("Handle Subit Error: ", err))
            .catch(function (error) {
                console.log(error)
            })
    }

    submitDelete = (e) => {
        confirm("Are you sure?")
        axios.delete(`https://tdb-ticket-api.herokuapp.com//delete/ticket/${this.state.id}`, {
            id: this.state.id,
        }) .then(function (response) {
            console.log(response)
        })
        // .then(navigate("/"))
        .catch(err => console.error("Handle Subit Error: ", err))
            .catch(function (error) {
                console.log(error)
            })
    }

    componentDidMount() {
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
                <div className="form-input"><input name="title" type="text" value={this.state.title} onChange={this.handleChange}/></div>
                <div>
                    <select name="priorityDropdown" value={this.state.priority} name="priority" onChange={this.handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select>
                </div>
                <div>Description</div>
                <div>Ticket Type</div>
                <div className="form-input"><input type="text" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange}/></div>
                <div><input type="text" placeholder="ticket type" value={this.state.ticket_type} name="ticket_type" onChange={this.handleChange}/></div>
                <div>Notes</div><div>Resolved</div> 
                <div className="update-notes"><textarea cols="55" rows="5" value={this.state.notes} name="notes" onChange={this.handleChange}/></div>
                <div className="resolved-owner">
                    <div><select name="resolvedDropdown" value={this.state.resolved} name="resolved" onChange={this.handleChange}>
                        <option value="True">Yes</option>
                        <option value="False">No</option>
                        </select>
                    </div>
                    Owner
                    <div><input type="text" placeholder="Owner" value={this.state.owner} name="owner" onChange={this.handleChange}/></div>
                </div>
                   
                <button className="submit" onClick={this.submitChange} >Submit</button>
                <button className="delete" onClick={this.submitDelete} >Delete</button>
            </form>
           
            
        </div>
    )



    }
}