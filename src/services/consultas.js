import { URL_API } from './base';

export function consultarConsultas(){
    return fetch(`${URL_API}/consultas`).then(resultado => resultado.json());
}