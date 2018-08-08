import React, { Component } from 'react';

class Consultas extends Component{
    constructor(){
        super();
        this.state = {
            "realizadas": [],
            "marcadas": []
        }
    }

    componentDidMount(){
        fetch("http://www.devup.com.br/php/api-dashboard/api/consultas")
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

    render(){
        return(
            <div>
                <h2 className="mt-2">Consultas</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header text-center">
                                Realizadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.realizadas.map((value, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{value.especialidade}</td>
                                                    <td className="text-center">{value.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header text-center">
                                Marcadas
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidade</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.marcadas.map((value,index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{value.especialidade}</td>
                                                    <td className="text-center">{value.quantidade}</td>
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
        );
    }

}

export default Consultas;