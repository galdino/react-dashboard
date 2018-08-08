
import React, { Component } from 'react';

class Faturamento extends Component{
    constructor(){
        super();
        this.state = {
            "detalhamento": []
        }
    }

    componentDidMount(){
        fetch("http://www.devup.com.br/php/api-dashboard/api/faturamento")
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

    render(){
        return(
            <div>
                <h2 className="mt-2">Faturamento</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header text-center">
                                Detalhamento
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th className="text-right">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.detalhamento.map((valeu,index) => {
                                            return(
                                                <tr key={ index }>
                                                    <td>{ valeu.descricao }</td>
                                                    <td className="text-right">{ valeu.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) }</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Faturamento;