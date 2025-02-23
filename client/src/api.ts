import axios from 'axios';

axios.default

export type Chesspiece = {
    type: string;
    color: string;
}

export type Chessboard = {
    pieces: Piece[][];
    playerToMove: string;
}

const BASE_URL = "http://localhost:5174";

export async function getBoard(): Promise<Chessboard> {
    const response = await axios.get<Chessboard>
}