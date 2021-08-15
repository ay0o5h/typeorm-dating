import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import { User } from "./User";
  
@Entity()
export class Music_favorite extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    musicName: string;

    @Column()
    musicLink: string;
    
    @ManyToOne((type)=>User,(user)=>user.musicFavorites)
    user:User;



}
