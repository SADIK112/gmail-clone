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
import { selectUser } from "./features/userSlice";
import Login from "./login";
import { useDispatch } from 'react-redux';
import { auth } from "./firebase";
import {login} from './features/userSlice'
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        })
        )
      }
    })
  }, [])
  
  return (
    <Router>
      {!user ? 
      (
        <Login />
      ) : (
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
      )  
    }
    </Router>
  );
}

export default App;
