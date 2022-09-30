import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button text='hi'/>, div);
    ReactDOM.unmountComponentAtNode(div);
});