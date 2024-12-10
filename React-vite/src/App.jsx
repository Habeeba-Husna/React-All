import './App.css'
// import Products from './components/Products';
// import List from './components/List';
// import Score from './components/Score';
// import Click from './components/Click';
import Counter  from "./components/Counter";
// import ColorPicker from './components/ColorPicker';
// import Buttonsss from './components/Buttonsss';
// import DarkMode from './components/DarkMode';
// import PropExample from './components/PropExample'
// import BgChange from './components/Background'
// import Buutton from './components/Buutton'
// import Student from './components/Student';
// import Listss from './components/listss';
import Counterr from './components/Counterr';

function App() {

  
  // let msg='awesome';
  // const fruits=[{id:1,name:"apple",calory:95},
  //               {id:2,name:"banana",calory:45},
  //               {id:3,name:"coconut",calory:105},
  //               {id:4,name:"pineapple",calory:37}];
  //  const vegetables=[{id:5,name:"potato",calory:95},
  //                    {id:6,name:"tomato",calory:45},
  //                    {id:7,name:"corn",calory:105},
  //                    {id:8,name:"chilli",calory:37}];                                

  // const handleButtonClick = () => {
  //   alert("Button clicked!");
  //};

  return (
    <div>
      {/* <Student name="habeeba" age={20} isStudent={true}/>
      <Student name="hubu" age={25} isStudent={false}/>
      <Buutton/>
      <Listss items={fruits} category="Fruits"/>
      <Listss items={vegetables} category="vegetables"/> */}
    {/* <h1 className='header'>This is my react app</h1>
    <p className='para'>This is my first {msg} component</p> */}
    <Counterr/>

{/* 
     <Products/>
    <Click/>
    <Score/>
    <List/> */}
    <Counter/>
    {/* <ColorPicker/>
    <Buttonsss handleClick={handleButtonClick}>
        Click Me
      </Buttonsss>
    <DarkMode/> */}
    
    {/* <PropExample props="This is a prop!" />
    // <BgChange/> */} 
  
    </div>
  );
}

export default App;