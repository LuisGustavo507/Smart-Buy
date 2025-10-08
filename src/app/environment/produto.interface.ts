import { Avaliacao } from "./avaliacao.interface";

export interface Produto{
    id: number;
    titulo: string;
    preco: number;
    descricao: string;
    categoria: string;
    imagem: string;
    linkPermanente: string;
    avaliacao: Avaliacao;

}