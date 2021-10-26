
import { UsuarioModel } from "src/domain/model/usuario/usuario.model";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity("producto")
export class ProductoEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: false, unique: true, length: 20 })
  nombre: string;
  @Column({ nullable: true, unique: true, length: 40 })
  descripcion: string;
  @Column({ nullable: false, unique: true, length: 20 })
  existencia: number;
  @Column({ nullable: false, unique: true, length: 20 })
  valor: number;
  @Column({ nullable: false, unique: true, length: 40 })
  provedor: UsuarioModel;


}
