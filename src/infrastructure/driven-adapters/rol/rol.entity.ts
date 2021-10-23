
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity("rol")
export class RolEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: false, unique: true, length: 20 })
  nombre: string;

}
