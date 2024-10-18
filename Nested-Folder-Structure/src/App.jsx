import { useState } from 'react'
import explorer from './data/folderData.js'
import Folder from './components/folder.jsx';
import useTraverse from './hooks/useTraverse.js';

function App() {

  const [explorerData, setExplorerData] = useState(explorer)
  
  const {insertNode, deleteNode} = useTraverse()

  const handleInsertNode = (folderId, item, isFolder) => {
    const newTree = insertNode(explorerData, folderId, item, isFolder)

    setExplorerData(newTree)
  }

  const handleDeleteNode = (folderId) => {
    const newTree = deleteNode(explorerData, folderId)
    setExplorerData(newTree)
  }

  
  return (
    <>
      <Folder handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode} explorer={explorerData} />
    </>
  )
}

export default App
