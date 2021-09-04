import React from 'react'
import './Footer.css'


export const Footer = () => {
   
    return (
        <footer className="page-footer footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright BIT
                    <span className="grey-text text-lighten-4 right">Last update: SomeFunction</span>
                  
                </div>
            </div>
        </footer>
    )
}





