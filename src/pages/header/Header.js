import React from 'react'
import "./header.css"
const header = () => {
  return (
    <div className='header'>
      <div className='logo'><iconify-icon icon="logos:slack"></iconify-icon></div>
      <div className='dropDown'>
        <h3 className='locationLogo'>Location<iconify-icon icon="carbon:location-filled"></iconify-icon>
        <span className="dropPin"><iconify-icon  icon="ri:arrow-drop-down-line"></iconify-icon></span></h3>
        
        <div className='dropDown-content'>
          <a href="#">Chennai</a>
          <a href="#">Tambaram</a>
          <a href="#">Thoraipakkam</a>
        </div>


      </div>
      <input className='searchBar' placeholder='-------------Search---------------'></input>
      <div className="searchIcon"><iconify-icon icon="fa-solid:search"></iconify-icon></div>
      <div className='cart-icon'>Cart<iconify-icon icon="fa:cart-plus"></iconify-icon></div>
    </div>
  )
}

export default header
