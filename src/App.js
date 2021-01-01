import "./App.css";
import Header from "./header";
import Sidebar from "./sidebar";
import Mail from "./email";
import EmailList from "./emailList"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
