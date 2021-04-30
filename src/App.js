import React, { useState } from 'react';
import Box from './components/Box';
import Svg from './components/Svg';
import {Button} from './components/Button';

function App() {
  const [coordinates, setCoordinates] = useState([]);

  const handleClick  = e => {
    const name = e.target.firstChild.textContent + '_' + e.target.classList[1];
    setCoordinates(prev => prev.concat({[name]:[e.clientX, e.clientY]}));
  }

  const reduceIntoPairs = () => { 
    const xy = coordinates.map((pair, i)=>{
        let idx = i % 2 === 0 ? 1 : 2
        let key = Object.keys(pair)[0];
        let x = pair[key][0];
        let y = pair[key][1]
        return {[key]:{['x'+ idx]:x, ['y'+ idx]:y}}
    })
    const pairedCoordinates = xy.reduce(function(result, value, index, array) {
        if (index % 2 === 0){
          result.push(array.slice(index, index + 2));
        }
        return result;
      }, []);
    
    const mappings = pairedCoordinates.map(xy => Object.assign(xy[0], xy[1]))
    //console.log('mappings', mappings);
    return mappings;
  } 

  const writeConfig = () => {
    const config = {};
    const keys = coordinates.map(xy => Object.keys(xy)); 
    const flattenedKeys = keys.reduce((acc, cur)=> acc.concat(cur)); 
    flattenedKeys.map(key => {
      let fieldAndSystem = key.split('_');
      if (!(fieldAndSystem[1] in config)) {
          config[fieldAndSystem[1]] = []
      } 
      config[fieldAndSystem[1]].push(fieldAndSystem[0])
    });
    return config;
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const blob = new Blob([JSON.stringify(writeConfig())], {type : 'application/json'});
    element.href = URL.createObjectURL(blob);
    element.download = "config.json";
    element.click();
  }

  return (
    <div className="App">
      {
        <Svg pairs={reduceIntoPairs()} />
      }
                <Box
                    className="Rally"
                    top="80px"
                    left="20px"
                    onClick={(e) =>  handleClick(e)}
                    >Name</Box>
                <Box
                    className="Rally"
                    top="140px"
                    left="20px"
                    onClick={(e) => handleClick(e)}
                    >State</Box>
                <Box
                    className="Rally"
                    top="200px"
                    left="20px"
                    onClick={(e) => handleClick(e)}
                    >SubmittedBy</Box>
                <Box
                    className="Other"
                    top="80px"
                    left="300px"
                    onClick={(e) => handleClick(e)}
                    >Summary</Box>
                <Box
                    className="Other"
                    top="140px"
                    left="300px"
                    onClick={(e) => handleClick(e)}
                    >Author</Box>
                <Box
                    className="Other"
                    top="200px"
                    left="300px"
                    onClick={(e) => handleClick(e)}
                    >Status</Box>
                <Button
                    className="save"
                    onClick={() => handleDownload()}
                    >Download</Button>
            </div>
  );
}

export default App;
