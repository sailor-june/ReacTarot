import "./App.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";




function App() {
  const [user, setUser] = useState(null);
  const navigate= useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (auth_user) =>{
    setUser(auth_user)
    if (auth_user.metadata.creationTime=== auth_user.metadata.lastSignInTime){ useNavigate('./signup')}
  });
  }, [user]);


  return (
    
      <div className="App">
        
        <Main user={user}/>
      </div>
  );
}

export default App;
