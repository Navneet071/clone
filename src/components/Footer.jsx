import React from 'react'
import ReactDOM from 'react-dom'



function Footer(){
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    return(
        <footer>
            <p>Copyright {year}</p>
        </footer>
    );
}

export default Footer;
