import React from 'react'
import Header from '../components/HeaderAdmin'

const LayoutAdmin = (props) => {
    return (
        <>
            <div className="bg-dark"><Header /></div>
            <div className="">
                {props.children}
            </div>
            
        </>
    )
}

export default LayoutAdmin
