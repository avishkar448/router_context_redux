import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
