
import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { User } from "./User";
  
@Entity()
export class Passion_user extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

  

    @ManyToOne((type)=>User,(user)=>user.passionsUser)
    user:User;


}
 



