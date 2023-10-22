import logo from "./logo.svg";
import "./App.css";

import { Mail } from "./components/Mail";
import ReadMail from "./components/ReadMail";
import { useEffect, useState } from "react";

import { fetchAllEmails } from "./redux/Slice/emailSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [Emails, setEmails] = useState([]);

  const count = useSelector((state) => state);
  const getAllEmails = useSelector((state) => state.email.data.list);

  // console.log("redux -" , getAllEmails)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEmails());
  }, []);

  return (
    <div className="container">
      <header className="dflex">
        <p>Filter By: </p>
        <p>Unread </p>
        <p id="read">Read </p>
        <p>Favorites </p>
      </header>

      <div className="emailsList">
        <Mail apidata={getAllEmails} />
      </div>
    </div>
  );
}

export default App;
