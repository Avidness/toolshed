import React from 'react';
import ReactDOM from 'react-dom';
import ItemManagement from './components/Items/ItemManagement';
import MenuAppBar from './components/MenuAppBar'
import 'normalize.css'

ReactDOM.render(
    <div>
        <MenuAppBar />
        <ItemManagement />
    </div>,
    document.getElementById('app')
);