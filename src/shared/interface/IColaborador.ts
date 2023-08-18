import { JsxElement } from "typescript"

export interface IColaborador {
    idColaborador: string
    nome: string,
    cargo: string,
    imagem: string,
    favorito?: JsxElement | boolean
    time?: string
}