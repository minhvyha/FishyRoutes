import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Instruction from './components/Instruction';
import Content from './components/Content';

export const MainPageContext = React.createContext();

function App() {
  let [grid, setGrid] = useState('0');
  let [selectedNode, setSelectedNode] = useState('cat');

  let [catNode, setCatNode] = useState(undefined);
  let [fistNode, setFishNode] = useState(undefined);
  let [wallNode, setWallNode] = useState([]);
  let [visitedNode, setVisitedNode] = useState([]);
  let [shortestPath, setShortestPath] = useState([]);

  function setNode() {

  }

  let setNodeFunction = {
    cat: function (){

    },
    
  }

  return (
    <>
      <MainPageContext.Provider
        value={{
          grid,
          selectedNode,
          catNode,
          fistNode,
          wallNode,
          visitedNode,
          shortestPath,
          setSelectedNode,
          setGrid,
          setCatNode,
          setFishNode,
          setWallNode,
          setVisitedNode,
          setShortestPath,
        }}
      >
        <Header />
        <Instruction />
        <Content />
      </MainPageContext.Provider>
    </>
  );
}

export default App;
