import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./hoc/AuthProvider";

// export const MyContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <MyContext.Provider value={{name: 'Max', age: 4}}>
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
    // </MyContext.Provider>
);

