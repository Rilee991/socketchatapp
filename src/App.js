import { Route } from "react-router-dom";

import "./App.css";
import ChatPage from "./components/ChatPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
