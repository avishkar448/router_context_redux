import "./App.css";
import Count from "./components/Count";
import CounterRedux from "./components/CounterRedux";
import InfoRedux from "./components/InfoRedux";
import ThemedComponent from "./components/ThemedComponent";
import { CountProvider } from "./context/CountContext";
import UserInfo from "./components/UserInfo";
import { ThemeProvider } from "./context/ThemeContext";
import UserAuthProvider from "./context/UserAuthProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import ReactLifecycle from "./components/ReactLifecycle";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemedComponent />
        <hr />

        <h2>Context Api Example</h2>
        <UserContextProvider>
          <Login />
          <Profile />
        </UserContextProvider>
        <hr />

        <UserAuthProvider>
          <UserInfo />
        </UserAuthProvider>

        <hr />

        <h2>React Context-API Counter</h2>
        <CountProvider>
          <Count />
        </CountProvider>

        <hr />

        <h2>React-Redux Counter</h2>
        <CounterRedux />

        <hr />

        <h2>React-Redux Example</h2>
        <InfoRedux />

        <hr />

        <ReactLifecycle/>
      </ThemeProvider>
    </div>
  );
}

export default App;
