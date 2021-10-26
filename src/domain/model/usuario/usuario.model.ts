import { RolModel } from '../rol/rol.model';

export class UsuarioModel {
  constructor(partial: Partial<UsuarioModel>) {
    Object.assign(this, partial);
  }
  id: string;
  nombre: string;
  rol: RolModel;
}
