import React, { Component } from 'react';

export class KanbanChecklist extends Component {
    render(){
        return (
            <ul className="board__checklist">
                {this.props.tasks.map((task, index) => {
                    return <li className="board__task">
                        <input type="checkbox" defaultChecked={task.done}/>
                        {task.name}
                        <a href="#" className="board__task--remove" />
                    </li>
                })}
            </ul>
        )
    }
}