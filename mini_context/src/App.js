import "./App.css";
import ThemedComponent from "./components/ThemedComponent";
import UserInfo from "./components/UserInfo";
import { ThemeProvider } from "./context/ThemeContext";
import UserAuthProvider from "./context/UserAuthProvider";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className="App">
      {/* 1. */}
      {/* <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider> */}

      {/* 2. */}

      {/* <UserAuthProvider>
        <UserInfo />
      </UserAuthProvider> */}

      <ThemeProvider>
          <ThemedComponent/>        
      </ThemeProvider>

    </div>
  );
}

export default App;
