/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Songitem.css'

const Songitem = ({data,id}) => {
  console.log(data.images[0].url);
  return (
    <>
      <div className="card"></div>
    </>
  )
}

export default Songitem
