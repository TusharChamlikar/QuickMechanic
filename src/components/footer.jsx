import React from 'react'
import { LinkedIn,Facebook,Instagram } from '@mui/icons-material'
function footer() {
  return (
    <div className='flex flex-row space-x-40 p-10 bg-gray-800'>
        <div className='text-white'>
            <h1 className='text-2xl font-bold'>QuickMechanic</h1>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Corporate & Communications Address:</h2>
                <p>A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305)</p>
            </div>
            <div className="mt-4">
                <h2 className='text-lg font-semibold'>Registered Address:</h2>
                <p>K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautam Buddh Nagar, Uttar Pradesh, 201305</p>
            </div>
            <div className='mt-6'>
        <ul className='flex space-x-6 text-white'>
            <a href="/terms">Terms And Conditions</a>
            <a href="/privacy">Privacy Policy</a>
        </ul>
      </div>
</div>
      <div className="flex space-x-10 ">
        <a href="https://www.linkedin.com/feed/">
            <LinkedIn style={{color:"white",fontSize:30}}></LinkedIn>
        </a>
        <a href="https://www.facebook.com">
            <Facebook style={{color:"white",fontSize:30}}></Facebook>
        </a>
        <a href="https://www.instagram.com">
            <Instagram style={{color:"white",fontSize:30}}></Instagram>
        </a>
      </div>
    </div>
  )
}

export default footer
