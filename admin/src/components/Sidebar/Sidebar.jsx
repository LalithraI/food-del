import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
    <div className='sidebar' id='sidebar'>{
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </div>
            <div className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>View Orders</p>
            </div>
        </div>
            
        }

    </div>
  )
}

export default Sidebar