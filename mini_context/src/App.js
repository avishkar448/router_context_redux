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
import MyChild from "./components/MyChild";
import RenderProps from "./components/RenderProps";
import FocusInputFunction from "./components/FocusInputFunction";
import Xyz from "./components/Xyz";

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

        <ReactLifecycle />

        <hr />
        <MyChild>
          <h2>Hello! Avishkar</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            deserunt, tempora quia quod eaque cumque dolores adipisci voluptatum
            quas harum?
          </p>
        </MyChild>

        <hr />

        <RenderProps render={(data) => <div>
          <h2>Name: {data.name}</h2>
          <h2>Age: {data.age}</h2>
        </div>} />
        <hr />

        <FocusInputFunction/>

        <hr />

        <Xyz name={"Rohit Sharma"} team={"MI"}/>
        <hr />
        <Xyz/>
      </ThemeProvider>
    </div>
  );
}

export default App;
