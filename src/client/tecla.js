import React, {Component} from 'react';
import './tecla.css'

export default class Tecla extends Component{
    render(){
        return(
            <div className="tecla" onClick={this.props.seleccionarTecla}>
                <p>{this.props.numero}</p>
            </div>
        )
    }
}