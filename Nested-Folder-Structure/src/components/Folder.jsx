import React, { useState } from "react";

function Folder({ explorer, handleInsertNode, handleDeleteNode }) {
  
   const [expand, setExpand] = useState(false)
   const [showInput, setShowInput] = useState({visible: false, isFolder: null})

   const handleNewFolder = (e, isFolder) => {
      e.stopPropagation()
      setExpand(true)
      setShowInput({
         visible: true,
         isFolder: isFolder
      })
   }

   const onAddFolder = (e) => {
      if(e.key === 'Enter' && e.target.value){

         handleInsertNode(explorer.id, e.target.value, showInput.isFolder)

         setShowInput({...showInput, visible: false})
      }
   }

   // const onDeleteNode = () => {
   //    handleDeleteNode(explorer.id)
   // }

  if(explorer.isFolder){
   return (
      <div className="ml-3 py-1">
        <div className="mt-0 flex justify-between w-[400px] bg-gray-300">
          <span className="cursor-pointer"
          onClick={() => setExpand(!expand)} >📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}
            className="bg-black rounded-lg text-white text-sm px-2 mx-2">Add Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}
            className="bg-black rounded-lg text-white text-sm px-2 mx-2">Add File +</button>
            <button  className="bg-black rounded-lg text-white text-sm px-2 mx-2">✍️</button>
            <button onClick={() => handleDeleteNode(explorer.id)} className="bg-black rounded-lg text-white text-sm px-2 mx-2">❌</button>
          </div>
        </div>
        <div className={`${expand ? "block" : "hidden"}`}>
         {
            showInput.visible && (
               <div className="ml-3 flex items-center gap-[5px]">
                  <span>{showInput.isFolder ? "📁" : "📄"}</span>
                  <input type="text" autoFocus onKeyDown={onAddFolder} onBlur={()=> setShowInput({...showInput, visible: false})} />
               </div>
            )
         }

           {explorer.items.map((exp, index) => {
              return <div key={index} className="ml-5 p-0 gap-0"><Folder handleDeleteNode={handleDeleteNode} handleInsertNode={handleInsertNode} explorer={exp} /></div>
           })}
        </div>
      </div>
    );
  }else{
   return <span className="ml-3 flex flex-col">📄 {explorer.name}</span>
  }
}

export default Folder;


