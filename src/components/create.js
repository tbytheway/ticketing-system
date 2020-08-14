import React, { Component } from 'react'
import axios from 'axios'
import '../style/main.scss'


export default class Create extends Component {
    constructor() {
        super()
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

    
    handleEditClick() {
        console.log("handle edit clicked");
        this.setState({ editMode: true });
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
        this.setState({
            good: true
        })
        axios.post("https://tdb-ticket-api.herokuapp.com/ticket", {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            ticket_type: this.ticket_type,
            resolved: this.state.resolved,
            notes: this.state.notes,
            priority: this.state.priority,
            owner: this.state.owner
        }) .then(function (response) {
            console.log(response)
        })
            .catch(function (error) {
                console.log(error)
            })
    }


    componentWillMount() {
        if (this.props.editMode) {
          this.setState({
            id: this.state.blog.id,
            title: this.state.blog.title,
            description: this.state.description,
            ticket_type: this.ticket_type,
            resolved: this.state.resolved,
            notes: this.state.notes,
            priority: this.state.priority,
            owner: this.state.owner
          });
        }
      }


render() {
    return(
        <div>
                <form className="create-ticket" editMode={this.state.editMode}>
                <li>Title</li>
                <div className='title'><input type="text" onChange={event => this.createTitle(event)}/>

                <input type="text" placeholder="Priority" onChange={event => this.createPriority(event)}/></div>

                <div><input type="text" placeholder="Description" onChange={event => this.createDescription(event)}/></div>

                <div className="type"><input type="text" placeholder="ticket type" onChange={event => this.createTicketType(event)}/>

                <input type="text" placeholder="Resolved" onChange={event => this.createResolved(event)}/></div>

                <div><input type="text" placeholder="Notes" onChange={event => this.createNotes(event)}/></div>

                

                <div><input type="text" placeholder="Owner" onChange={event => this.createOwner(event)}/></div>

                <button onClick={this.submitChange} disabled={this.state.good}>Submit</button>
            </form>
        </div>
    )



    }
}