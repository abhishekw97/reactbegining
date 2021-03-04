import './App.css';
import GithubUser from './reactenhancements/GithubUser';
import Updateuefff from './reactenhancements/Updateuefff';
import Comfun from './react_components/Comfun';
import Ifesle from './react_components/Ifesle';
import Renderlist from './react_components/Renderlist';
import CreateRectElement from './react_elements/CreateRectElement';
import Jsxdemo from './react_elements/Jsxdemo';
import Jsxfeatures from './react_elements/Jsxfeatures';
import Checkboxdemo from './react_statewithhooks/Checkboxdemo';
import Checkboxredux from './react_statewithhooks/Checkboxredux';
import Usestate from './react_statewithhooks/Usestate';

const lakeList=[
  {id:"1",name:"Echo",location:"Pune"},
  {id:"2",name:"Sam",location:"Aug"},
  {id:"3",name:"Ava",location:"Mumbai"},

];

function App() {
  return (
    <div className="App">
         <GithubUser login="abhishekw97"/>;
        <h1>All React Elements</h1>
        <CreateRectElement />
        <Jsxdemo/>
        <Jsxfeatures/>
        <Comfun/>
        <Renderlist lakes={lakeList}/>
        <Ifesle season="summer"/>;
        <Usestate/>
        <Checkboxredux/>
        <Checkboxdemo/>
        <Updateuefff/>
       
    </div>
  );
}

export default App;
