import React, { Component } from 'react';
import { KanbanCard } from './KanbanCard';

export class KanbanList extends Component {
    render(){
        return (
            <section className="board__pipeline">
                <header className="board__pipeline-header">
                    <h1 className="board__pipeline-title">{this.props.pipeline.title}</h1>
                </header>
                <ul className="board__cards">
                    {this.props.pipeline.cards.map((card, index) => <KanbanCard card={card} />)}
                </ul>
            </section>
        )
    }
}