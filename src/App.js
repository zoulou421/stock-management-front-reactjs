//import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AddCase from './components/AddCase';
import CaseByCity from './components/CaseByCity';
import ListCase from './components/ListCase';

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
                <a className="nav-link" href="/case/list">List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/case/add">Add</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/case/caseByCity" >Case by City</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/case/list" element={<ListCase />} />
          <Route path="/case/add" element={<AddCase />} />
          <Route path="/case/caseByCity" element={<CaseByCity />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
