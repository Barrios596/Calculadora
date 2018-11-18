import React from 'react'
import Calculadora from './calculadora';
import './app.css';

const initState = () =>{
    return{
        teclas: returnTeclas(),
        op1: 0,
        op2: -1,
        tipoOperacion: -1,
        output: 0
    };
}

function returnTeclas() {
    let teclas = [];
    let indice = 0;
    while (teclas.length < 10){
        const tecla = {
            numero: (9 - indice)
        }
        teclas.push(tecla)
        //  teclas.push({...tecla});
        console.log(indice)
        indice++
    }
    return(teclas)
}

export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = initState();
    }

    render(){
        return (
            <div className="App">
                <Calculadora
                    teclas={this.state.teclas}
                    seleccionarTecla = {(tecla) => this.seleccionarTecla(tecla)}
                    suma = {() => this.suma() }
                    resta = {() => this.resta()}
                    multiplicacion = {() => this.multiplicacion()}
                    division = {() => this.division()}
                    igual = {() => this.igual()}
                    output = {this.state.output}
                />
            </div>
        )        
    }

    suma(){
        if(this.state.op2 !== -1){
            console.log(`sumando ${this.state.op1} + ${this.state.op2}`)
            /*let op1 = this.state.op1 + this.state.op2
            this.setState({
                op1: op1,
                op2: -1,
                output: op1
            })*/
            this.igual();
            
        }
        
            console.log("seteando suma")
            this.setState({
                tipoOperacion: 1,
                op2:0
            })
        
    }

    resta(){
        if(this.state.op2 !== -1){
            console.log(`restando ${this.state.op1} - ${this.state.op2}`)
            /*let op1 = this.state.op1 - this.state.op2
            this.setState({
                op1: op1,
                op2: -1,
                output: op1
            })
            this.verificar()*/
            this.igual()
        }
    
            console.log("seteando resta")
            this.setState({
                tipoOperacion: 2,
                op2:0
            })
        

    }

    multiplicacion(){
        if(this.state.op2 !== -1){
            console.log(`multiplicando ${this.state.op1} * ${this.state.op2}`)
            /*let op1 = this.state.op1 * this.state.op2
            this.setState({
                op1: op1,
                op2: 0,
                output: op1
            })*/
            this.igual()
        }
        
            console.log("seteando mult")
            this.setState({
                tipoOperacion: 3,
                op2:0
            })
        
    }

    division(){
        if(this.state.op2 !== -1){
            console.log(`dividiendo ${this.state.op1} / ${this.state.op2}`)
            /*let op1 = this.state.op1 / this.state.op2
            this.setState({
                op1: op1,
                op2: -1,
                output: op1
            })*/
            this.igual()
        }
        
            console.log("seteando div")
            this.setState({
                tipoOperacion: 4,
                op2:0
            })
        
    }

    igual(){
        if(this.state.op2 !== -1){
            let out = 0;
            switch(this.state.tipoOperacion){
                case (1):
                    out = this.state.op1 + this.state.op2
                    console.log("suma")
                    break;
                case(2):
                    out = this.state.op1 - this.state.op2
                    console.log("resta")
                    break;
                case(3):
                    out = this.state.op1 * this.state.op2
                    console.log("mult")
                    break;
                case (4):
                    out = this.state.op1 / this.state.op2
                    console.log("div")
                    break;
            }
            if(this.verificar(out)){
                this.setState({
                    output: Math.trunc(out),
                    op1: Math.trunc(out),
                    op2: -1,
                    tipoOperacion: -1
                })
            }
        }
        else {
            this.setState({
                output:0,
                op1:0,
                op2:-1,
                tipoOperacion:-1
            })
        }
    }

    verificar(out){
        console.log("verificando")
        console.log(out)
        console.log(out - 999999999)
        if ((out - 999999999) > 0 || (out - 999999999) < -999999999 || out == NaN ){
            this.setState({
                op1 : 0,
                op2: -1,
                tipoOperacion: -1,
                output: "ERROR"
            })
            return false
        }
        return true
    }

    seleccionarTecla(tecla){
        let numero = tecla.numero
        if (this.state.op2 > -1){
            let op2 = this.state.op2 * 10 + numero
            if ((op2 / 999999999) <= 1){
                this.setState({
                    op2: op2,
                    output: op2
                })
            }
        }
        else{
            let op1 = this.state.op1 * 10 + numero
            if ((op1 / 999999999) <= 1){
                this.setState({
                    op1: op1,
                    output: op1
                })
            }
        }
    }
}