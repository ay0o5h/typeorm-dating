
import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany} from "typeorm";
import { User } from "./User";
  
@Entity()
export class Passion extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
 
    title: string;
 
   
 
 



}
