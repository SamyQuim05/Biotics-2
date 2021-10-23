export class RolModel{
    constructor(partial: Partial<RolModel>) {
      Object.assign(this, partial);
    }
    id: string;
    nombre: string;
  
}