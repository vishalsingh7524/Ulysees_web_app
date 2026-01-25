import React from 'react'
import "./Web.css";
import { Link } from 'react-router-dom'


export default function Text_section() {
  return (
    <div className='text-sec'>
      <h1>Shipmanagement Software</h1>
      <p style={{textAlign:'justify'}}>Ulysses Systems Task Assistant® Shipmanagement Software Solutions have developed in the atmosphere of practical experience and problem-solving that the Greek Shipping cluster has fostered.</p>

      <p style={{textAlign:'justify'}}>Designed, from the start, to address the core issues of the maritime enterprise, customers can look forward to software that grows with their enterprise. Because the Ulysses Systems goal has always been  <span>  <Link to="/link1">future proof solutions</Link></span></p>

      <p style={{textAlign:'justify'}} className='text-sec2'>Notably, customers, who will select Ulysses Systems Task Assistant®, will not face a pre-existing software application that was later adapted to ship management. Nor a narrow process software solution looking for wider justification in the full context of the shipping enterprise”</p>
    </div>


  )
}
