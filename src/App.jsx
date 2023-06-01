import { useState } from 'react'
import Header from './components/Header'
import Instruction from './components/Instruction'
import Content from './components/Content'

export const MainPageContext = React.createContext();


function App() {

  let [selectedNode, setSelectedNode] = useState('wall')



  return (
    <>  
    <MainPageContext.Provider value={{

    }}>
            <Header />
      <Instruction />
      <Content />
    </MainPageContext.Provider>

    </>
  )
}

export default App
