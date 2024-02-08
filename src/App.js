//import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AddCase from './components/AddCase';
import CaseByCity from './components/CaseByCity';
import ListCase from './components/ListCase';
import EditCase from "./components/EditCase";
import DeleteCase from "./components/DeleteCase";
import { render } from "react-dom";

function App() {

  return (


    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Case management</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/cas/list">List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cas/add">Add</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cas/caseByCity" >Case by City</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/cas/list" element={<ListCase />} />
          <Route path="/cas/add" element={<AddCase />} />
          <Route path="/cas/caseByCity" element={<CaseByCity />} />
          <Route path="/cas/delete/:id" element={<DeleteCase />} />
          <Route path="/cas/get/:id" element={<EditCase />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
