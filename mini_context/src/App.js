import "./App.css";
import Count from "./components/Count";
import ThemedComponent from "./components/ThemedComponent";
import { CountProvider } from "./context/CountContext";
//import UserInfo from "./components/UserInfo";
import { ThemeProvider } from "./context/ThemeContext";
//import UserAuthProvider from "./context/UserAuthProvider";
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
        <ThemedComponent />
        <CountProvider>
          <Count />
        </CountProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
