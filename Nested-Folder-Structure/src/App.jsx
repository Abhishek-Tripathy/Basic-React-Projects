import { useState } from 'react'
import explorer from './data/folderData.js'
import Folder from './components/folder.jsx';
import useTraverse from './hooks/useTraverse.js';

function App() {

  const [explorerData, setExplorerData] = useState(explorer)
  
  const {insertNode} = useTraverse()

  const handleInsertNode = (folderId, item, isFolder) => {
    const newTree = insertNode(explorerData, folderId, item, isFolder)

    setExplorerData(newTree)
  }
  
  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </>
  )
}

export default App
