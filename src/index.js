import React from 'react';
import { render } from 'react-dom';

window.React = React;

import 'normalize.css';
import './styles.scss';

render(
    <div>
        <header className="app__title">Kanban Board</header>
        <label className="app__author">by Kai Wedekind</label>
    </div>,
    document.querySelector('#app')
)