import React from 'react';
import ReactDOM from 'react-dom/client';
import Controller from './pages/Controller';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
        <Controller />
</BrowserRouter>
</>
);
