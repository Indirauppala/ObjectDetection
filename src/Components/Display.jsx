import React from 'react'

const Display = ({ result }) => {

  const labels = result.map(item => item.label);

  return (
    <>
    <div className='items'>
    <h2>Identified Objects are:</h2>
      {labels.map(item=><p>{item.charAt(0).toUpperCase() +
        item.slice(1)}</p>)}
    </div>
    </>
  )
}

export default Display
