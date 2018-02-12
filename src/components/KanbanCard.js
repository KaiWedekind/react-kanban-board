import React, { Component } from 'react';
import { KanbanChecklist } from './KanbanChecklist';

export class KanbanCard extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          showDetails: false
        };
    }
    
    render(){
        let CardDetails;
        if (this.state.showDetails) {
            CardDetails = (
                <div className="board__card-details">
                    <p className="board__card-description">{this.props.card.description}</p>
                    <KanbanChecklist tasks={this.props.card.tasks} />
                </div>
            );
        }
        return (
            <article className="board__card">
                <header className="board__card-header">
                    <h2 className={"board__card-title " + (this.state.showDetails ? 'show' : 'hidden')}
                        onClick={() => this.setState({showDetails: !this.state.showDetails})}>
                        {this.props.card.title}
                    </h2>
                </header>
                {CardDetails}
            </article>
        )
    }
}