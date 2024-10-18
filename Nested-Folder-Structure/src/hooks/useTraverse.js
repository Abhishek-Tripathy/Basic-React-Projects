function useTraverse() {

  const insertNode = (tree, folderId, item, isFolder) => {
   if(tree.id === folderId && tree.isFolder){
      tree.items.unshift({
         id: new Date().getTime(),
         name: item,
         isFolder,
         items: []
      })
      return tree
   }
   
   let latestNode = []
   latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder)
   })
   return ({...tree, items: latestNode})
  }


  const deleteNode = (tree, folderId) => {
   if(tree.id === folderId){
      return null
   }

   let filteredItems = tree.items
    .map(item => deleteNode(item, folderId)) // Apply deleteNode to each child
    .filter(item => item !== null); // Filter out null values (deleted nodes)

   return ({...tree, items: filteredItems})
  };


  return {insertNode, deleteNode}
}

export default useTraverse