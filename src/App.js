import React, { useEffect, useState } from 'react';
import Box from './components/Box';
import Svg from './components/Svg';

function App() {
  const [pairs, setParis] = useState([]);
  const [drawLine, setDrawLine] = useState(false);
  useEffect(()=>{
      console.log(pairs, drawLine)
      if (pairs.length >= 2){
        console.log('parirs.length', pairs.length, pairs)
        setDrawLine(true);
      }
  }, [pairs, drawLine])
  return (
    <div className="App">
      {
        drawLine && <Svg pairs={pairs} />
      }
                <Box
                    className="left"
                    top="80px"
                    left="20px"
                    onClick={(e) => setParis(prev => prev.concat({x: e.clientX, y: e.clientY}))}
                    >A</Box>
                <Box
                    className="left"
                    top="140px"
                    left="20px"
                    onClick={(e) => setParis(prev => prev.concat({x: e.clientX, y: e.clientY}))}
                    >B</Box>
                <Box
                    className="left"
                    top="200px"
                    left="20px"
                    onClick={(e) => setParis(prev => prev.concat({x: e.clientX, y: e.clientY}))}
                    >C</Box>
                <Box
                    className="right"
                    top="80px"
                    left="300px"
                    onClick={(e) => setParis(prev => prev.concat({x: e.clientX, y: e.clientY}))}
                    >D</Box>
                <Box
                    className="right"
                    top="140px"
                    left="300px"
                    onClick={(e) => setParis(prev => prev.concat({x: e.clientX, y: e.clientY}))}
                    >E</Box>
                <Box
                    className="right"
                    top="200px"
                    left="300px"
                    onClick={(e) => setParis(prev => prev.concat({x: e.clientX, y: e.clientY}))}
                    >F</Box>
            </div>
  );
}

export default App;
