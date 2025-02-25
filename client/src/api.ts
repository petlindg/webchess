import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { Board } from './model/board.model';

axios.defaults

export function basicErrorHandler(error: Error | AxiosError): void {
    if (isAxiosError(error)) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    } else {
        console.log("Error of an unknown type occurred: " + (error.message ?? error))
    }
}



const BASE_URL = "http://localhost:8080/";


export class API {
    static async getBoard(): Promise<Board> {
        let board: any;
        console.log("sent request for board")
        await axios.get(BASE_URL)
            .then((response: AxiosResponse<Board>) => board = response.data)
            .catch(basicErrorHandler)
        return board;
    }
}