import React from 'react';

import '../assets/styles/Frontpage.css'



export class Frontpage extends React.Component {
    render(){
        return (
            <div>
                <div className="hero">
                    <div className="background-image"></div>
                        <div className="LogoWrapper"><h1 className="Logo">✎</h1></div>
                        <h3 className="LoginText">My Personal assistent!</h3>
                    </div>
            </div>
        );
    }
}
