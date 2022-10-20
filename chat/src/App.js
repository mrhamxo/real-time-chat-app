import './App.css';
import socketio from "socket.io-client";

const ENDPOINT = "http://localhost:8000/";
const socket = socketio(ENDPOINT, {transports: ['websocket']})

function App() {
  socket.on("connect", () => {
    // k2mgrewfg
  })
  return (
    <div className="App">
      <h1>Welcome to my new world</h1>
    </div>
  );
}

export default App;
