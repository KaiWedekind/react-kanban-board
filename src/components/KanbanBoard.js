import React, { Component } from 'react';
import { KanbanList } from './KanbanList';

export class KanbanBoard extends Component {
    render(){
        return (
            <ul className="board">
                {this.props.board.map((pipeline, index) => <KanbanList pipeline={pipeline} />)}
            </ul>
        )
    }
}
