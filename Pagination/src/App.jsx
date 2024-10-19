import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [productData, setProductData] = useState([])
  const [page, setPage] = useState(1)
  

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=50")
    
    if(res.data && res.data.products){
      setProductData(res.data.products)
    }
  }

  
  

  console.log(productData);

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <div>
      {
        productData.length > 0 && <div className='m-[20px] p-0 grid gap-[20px] grid-cols-[1fr_1fr_1fr]'>
          {
            productData.slice((page*10)-10,page*10).map((product, index) => {
              return <span  className="h-[200px] p-5 bg-gray-300 text-center rounded cursor-pointer" key={index}>
                <img className='w-[100%] h-[95%] mb-[3px] object-cover' src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
              </span>
            })
          }
        </div>
      }
      {
        productData.length > 0 && (
          <div className='flex p-[10px] mx-[15px] my-0 justify-center'>
            <span onClick={()=> setPage(page===1 ? page : page-1)}
            className={`px-[15px] py-[20px] border border-gray-600 cursor-pointer ${page===1 ? "hidden" : ""}`}>◀️</span>
            {
              [...Array(productData.length/10)].map((_, i) => {
                return <span onClick={()=>setPage(i+1)}
                className={`px-[15px] py-[20px] border border-gray-600 cursor-pointer 
                ${page === i+1 ? "bg-blue-400" : ""}`} key={i}>{i+1}</span>
              })
            }
            <span onClick={()=> setPage(page===productData?.length/10 ? page : page+1)}
            className={`px-[15px] py-[20px] border border-gray-600 cursor-pointer ${page===productData?.length/10 ? "hidden" : ""}`}>▶️</span>
          </div>
        )
      }
    </div>
  )
}

export default App
