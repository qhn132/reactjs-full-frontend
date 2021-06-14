import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/HeaderWeb'

const website = (props) => {
    return (
        <div>
            <header className="header bg-dark"><Header /></header>          
            {props.children}
            <footer  class="bg-dark text-white"><Footer/></footer>
        </div>
    )
}

export default website
