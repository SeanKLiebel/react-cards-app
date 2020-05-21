import React, {Component} from 'react';
import Card from './cardUI';

import img1 from "../assets/background-balance-beach-boulder-289586.jpg";
import img2 from "../assets/backlit-beach-dawn-dusk-588561.jpg";
import img3 from "../assets/person-playing-chess-1040157.jpg";

class Cards extends Component {
    render(){
        return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            <div className="col-md-4">
            <Card imgsrc={img1}title="Console"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img2}title="Playground"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img3}title="Chess"/>
            </div>
        </div>
    </div>
   );
        }
}

export default Cards;

