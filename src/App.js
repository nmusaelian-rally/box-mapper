import React, { useState } from 'react';
import yaml from 'js-yaml';
import Box from './components/Box';
import Svg from './components/Svg';
import {Button} from './components/Button';

function App() {
  const [coordinates, setCoordinates] = useState([]);

  const handleClick  = e => {
    const name = e.target.firstChild.textContent;
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
    return mappings;
  } 

  const handleDownload = () => {
    const element = document.createElement("a");
    const blob = new Blob([JSON.stringify(coordinates)], {type : 'application/json'});
    element.href = URL.createObjectURL(blob);
    element.download = "config.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <div className="App">
      {
        <Svg pairs={reduceIntoPairs()} />
      }
                <Box
                    className="left"
                    top="80px"
                    left="20px"
                    onClick={(e) =>  handleClick(e)}
                    >Name</Box>
                <Box
                    className="left"
                    top="140px"
                    left="20px"
                    onClick={(e) => handleClick(e)}
                    >State</Box>
                <Box
                    className="left"
                    top="200px"
                    left="20px"
                    onClick={(e) => handleClick(e)}
                    >SubmittedBy</Box>
                <Box
                    className="right"
                    top="80px"
                    left="300px"
                    onClick={(e) => handleClick(e)}
                    >Summary</Box>
                <Box
                    className="right"
                    top="140px"
                    left="300px"
                    onClick={(e) => handleClick(e)}
                    >Author</Box>
                <Box
                    className="right"
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
