import React from 'react'
import { useState } from 'react'
import Display from './Display'

const Detect = () => {
  const [imageurl,setImageurl]=useState('')
  const [result,setResult]=useState(null)

  const uploadImageFromUrl=async(url)=>{
    try{
      const response= await fetch(url);

      if(!response.ok){
        throw new Error("failed to fetch the image")
      }
      const blob=await response.blob();
      const formData=new FormData()
      formData.append('image',blob,'image.jpg');

      const apiResponse=await fetch('https://api.api-ninjas.com/v1/objectdetection',{
        method:'POST',
        body:formData,
        headers:{
          'x-api-key':'63qfH3dheCQoW5q8uMgwJA==QNt5XlbjOyNgzUrn', 
        }
      });

      const apiResult=await apiResponse.json()
      setResult(apiResult)
    }
    catch(err){
      console.log(err.message)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(imageurl){
      uploadImageFromUrl(imageurl);
    }
    setImageurl("")
  }
  return (
    <div>
      <input type='text' 
      value={imageurl}
      placeholder='Enter Image url'
      onChange={(e)=>setImageurl(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {result &&<Display result={result}/>}
    </div>
  )
}

export default Detect
