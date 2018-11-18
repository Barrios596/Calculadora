import React, {Component} from 'react';
import './calculadora.css'
import Tecla from './tecla'

export default class Calculadora extends Component{
    render(){
        return(
            <div className="calculadora">
                <div className="tope">K-SIO</div>
                <div className="output">{this.props.output}</div>
                <div className="numeros">
                    <div className="spacer"></div>
                    <div className="operacion" onClick={this.props.suma}>
                        <p>+</p>
                    </div>
                    <div className="operacion" onClick={this.props.resta}>
                        <p>-</p>
                    </div>
                    <div className="operacion" onClick={this.props.multiplicacion}>
                        <p>*</p>
                    </div>
                    <div className="operacion" onClick={this.props.division}>
                        <p>/</p>
                    </div>
                    <div className="spacer"></div>
                    {
                        this.props.teclas
                        .map((tecla) =>{
                            return <Tecla
                                numero = {tecla.numero} 
                                seleccionarTecla = {() => this.props.seleccionarTecla(tecla)}
                            />
                        })
                    }
                    
                    <div className="egal" onClick={this.props.igual}>
                        <p>=</p>
                    </div>
                </div>
            </div> 
        )
    }
};