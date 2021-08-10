
export interface Transferencia {
  id?: string;//com o ? a propriedade fica opcional
  valor: number;
  destino: number | string;
  data?: Date;
}
