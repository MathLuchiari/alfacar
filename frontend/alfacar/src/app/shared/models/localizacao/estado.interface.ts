import { Regiao } from "./regiao.interface";

export interface Estado {
 id: string;
 sigla: string;
 nome: string;
 regiao: Array<Regiao>;
}
