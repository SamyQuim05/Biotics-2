import { UsuarioModel } from "../usuario/usuario.model";

export class ProductoModel{
    constructor(partial: Partial<ProductoModel>) {
      Object.assign(this, partial);
    }
    id: string;
    nombre: string;
    descripcion: string; 
    existencia: number;
    valor: number;
    proveedor: UsuarioModel;
}