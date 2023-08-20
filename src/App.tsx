import {useState} from 'react';
import './App.css'
import AgoraUIKit from "agora-react-uikit";


const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: 'f2dc1d76ada14dc2bf2e222360ba01c4',
    channel: 'test', 
    token: '007eJxTYFCceTPHJF/X7dffvusmsZnfGEq8FgSKKc7mSUrJe9aySVKBIc0oJdkwxdwsMSXR0CQl2SgpzSjVyMjI2MwgKdHAMNlkbcbDlIZARoZNXZsZGRkgEMRnYShJLS5hYAAAHW4ffA==',
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
