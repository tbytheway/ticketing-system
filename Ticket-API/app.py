from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

import os

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db = SQLAlchemy(app)
ma = Marshmallow(app)

class Ticket(db.Model):
    __tablename__ = "tickets"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(55))
    description = db.Column(db.String(75))
    ticket_type = db.Column(db.String(25))
    resolved = db.Column(db.String(15))
    notes = db.Column(db.String(255)) 
    priority = db.Column(db.String(20))
    owner = db.Column(db.String(20))

    def __init__(self, title, description, ticket_type, resolved, notes, priority, owner):
        self.title = title
        self.description = description
        self.ticket_type = ticket_type
        self.resolved =  resolved
        self.notes = notes
        self.priority = priority
        self.owner = owner

class TicketSchema(ma.Schema):
    class Meta:
        fields = ('title',  'description', 'ticket_type', 'resolved', 'id', 'notes', 'priority', 'owner')

ticket_schema = TicketSchema()
tickets_schema = TicketSchema(many = True)

@app.route("/", methods=["GET"])
def home():
    return "<h1>Hello from flask!</h1>"

@app.route("/ticket", methods = ["POST"])
def add_ticket():
    title = request.json["title"]
    description = request.json["description"]
    ticket_type = request.json["ticket_type"]
    resolved = request.json["resolved"]
    notes = request.json["notes"]
    priority = request.json["priority"]
    owner = request.json["owner"]

    new_ticket = Ticket(title, description, ticket_type, resolved, notes, priority, owner)

    db.session.add(new_ticket)
    db.session.commit()

    ticket = Ticket.query.get(new_ticket.id)

    return ticket_schema.jsonify(ticket)

@app.route("/tickets", methods=["GET"])
def get_tickets():
    all_tickets = Ticket.query.all()
    result = tickets_schema.dump(all_tickets)

    return jsonify(result)

@app.route("/ticket/<id>", methods = ['GET'])
def get_ticket(id):
    ticket = Ticket.query.get(id)
    result = ticket_schema.dump(ticket)

    return jsonify(result)

@app.route("/delete/ticket/<id>", methods=["DELETE"])
def delete_ticket(id):
    record = Ticket.query.get(id)

    db.session.delete(record)
    db.session.commit()

    return jsonify({"message": "DELETED"})

@app.route("/ticket/<id>", methods=["PUT"])
def update_ticket(id):
    ticket = Ticket.query.get(id)
    new_title = request.form['title']
    new_description = request.form['description']
    new_type = request.form['type']
    new_resolved = request.form['resolved']
    new_notes = request.form['notes']
    new_priority = request.form['priority']
    new_owner = request.form['owner']

    new_ticket = Ticket(new_title, new_description, new_type, new_resolved, new_notes, new_priority, new_owner)


    db.session.commit()

    return ticket_schema.jsonify(ticket)

if __name__ == "__main__":
        app.run(debug=True)