import {useState} from 'react';
import './App.css'
import AgoraUIKit from "agora-react-uikit";


const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: 'f2dc1d76ada14dc2bf2e222360ba01c4',
    channel: 'test', 
    token: '007eJxTYCicnHiI0ZTrQpzZuSz1fkn7e994f5gsSvrKrffPSj9L4ZwCQ5pRSrJhirlZYkqioUlKslFSmlGqkZGRsZlBUqKBYbLJ2i0vUhoCGRnauzhZGRkgEMRnYShJLS5hYAAA8TMetg==',
  };
  
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} /> 
    </div>
  ) : (
    <div>
        <h3>mulai video call</h3>
        <input type="text" placeholder="masukkan nama" />
       <button onClick={() => setVideoCall(true)}>Join</button>
    </div>
  );
};

export default App;
