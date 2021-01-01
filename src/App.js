import "./App.css";
import Header from "./header";
import Sidebar from "./sidebar";
import Email from "./email";
import EmailList from "./emailList";
import SendMail from "./sendMail"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useSelector } from 'react-redux';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Email />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
        </div>
        { sendMessageIsOpen && <SendMail /> }
      </div>
    </Router>
  );
}

export default App;
