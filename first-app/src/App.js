//import logo from './logo.svg';
import './App.css';
// import ThemeContext from './components/ThemeContext';
// import ThemeButton from './components/ThemeButton';
import React from 'react';
import Emails from './pages/Emails';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import A1 from './components/A1';
// import A2 from './components/A2';
// import { AuthProvider } from './components/AuthContext';
// import Home from './components/Home';
// import { DataProvider } from './components/DataContext';
// import DisplayData from './components/DisplayData';

function App() {
  // const [theme,setTheme]=useState('light')

  // const toogleTheme=()=>{ 
  //   setTheme((prevTheme)=>(prevTheme==='light' ?'dark' : 'light'))
  // }

  return (
    <div className="App">
    {/* <Hello name="Avishkar" city="Pune"/>
    <Welcome name="Virat kohli"/>  
    <Ptypes name="Avishkar" phone={9730328530} marks={[74,84,85,45]} age={22} q='true'></Ptypes>   */}
    
    {/* <StateCom/>  */}

    {/* <ArrayDist/> */}
    {/* <MyState/> */}

    {/* <ParentComponent/> */}

    {/* <Parent2/> */}

    {/* <Condition/> */}

    {/* <Dist name={"Avishkar"} no={9852147}/> */}
    {/* <ChangeStyle /> */}

    {/* <MyChange/> */}
    {/* <Event name="Avishakr"/> */}
    {/* <MyStyle x={true}/> */}

    {/* <h3>Read Style Component exxample</h3>
    <Button bg="green">Click</Button> */}
    {/* <Form/> */}
    {/* <MyForm/> */}
    {/* <Counter2/> */}
    {/* <Condition1/> */}
    {/* <Forms/> */}
    {/* <Forms1/> */}
    {/* <XyzForm/> */}
    {/* <LifeCycle/> */}
    {/* <Counter1/> */}
    {/* <PComponent/> */}
    {/* <AxiosExample/> */}
    {/* <AxiosPost/> */}
    {/* <Hooks1/> */}
    {/* <Hooks2/> */}
    {/* <Hooks3/> */}
    {/* <Hooks4/> */}

    {/* <ThemeContext.Provider value={{theme,toogleTheme}}>
      <div>
        <h1>Theming Example</h1>
        <ThemeButton/>
      </div>
    </ThemeContext.Provider> */}

    {/* <AuthProvider>
      <Home/>
    </AuthProvider> */}

    {/* <DataProvider>
      <DisplayData/>
    </DataProvider> */}
    {/* <h2>Naruto Uzumaki</h2>
    <Router> 
      <Routes> 
        <Route path="/a" element={<A1/>}/>
        <Route path="/b" element={<A2/>}/>
      </Routes>
    </Router> */}
    <h2>Custome hook</h2>
    <Emails/>
    </div>
  );
}
export default App;
