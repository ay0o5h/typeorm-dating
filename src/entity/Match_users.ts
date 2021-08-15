import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne} from "typeorm";
import { User } from "./User";
  
@Entity()
export class Match_Users extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

 

    @Column()
    user_send: string;

    @Column()
    reequest_user: string;
    
    @Column()
    status: boolean;
    


     //  matches to one user(M 1)
    @ManyToOne((type)=>User,(users)=>users.matchs)
    user: User;




}
