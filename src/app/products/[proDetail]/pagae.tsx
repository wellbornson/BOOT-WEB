


"use client"
import React from 'react'

const proDetail = ({params} : {params :{proDetail:string}}) => {
    console.log(params);
  return (
    <div>
        <h1>student Details</h1>
        <br/>
        <h3>name:{params.proDetail}</h3>
    </div>
  )
}

export default proDetail



