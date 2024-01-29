import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListCase from './components/ListCase';
import AddCase from './components/AddCase';
import CaseByCity from './components/CaseByCity';


const routing = (
  <Router>
    <div>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/case/list" component={ListCase} />
        <Route path="/case/add" component={AddCase} />
        <Route path="/case/caseByCity" component={CaseByCity} />
      </Routes>
    </div>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routing
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
