import React from 'react';
import { render } from 'react-dom';
import { KanbanBoard } from './components/KanbanBoard';
import board from './pipelines.json'

window.React = React;

import 'normalize.css';
import './styles.scss';

render(
    <KanbanBoard board={board} />,
    document.querySelector('#app')
)