import React from 'react'   
import { Link } from 'react-router-dom'

const NavigationBar = ( ) => {
    return(
        <div className='flex' >
        <ul className='list-none flex flex-row'>
          <li className='p-2.5' > 
            <Link to={"/"}>Home</Link>
          </li>
          <li className='p-2.5' > 
            <Link to={"/contacts"}>Contacts</Link>
          </li>
          <li className='p-2.5' > 
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div> 
    )
}

export default NavigationBar