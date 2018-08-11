import React, { Component } from 'react';
import { consultarConsultas } from '../../services/consultas';

class Consultas extends Component{
    constructor(){
        super();
        this.state = {
            "realizadas": [],
            "marcadas": []
        }
    }

    componentDidMount(){
        consultarConsultas().then(value => this.setState(value));
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