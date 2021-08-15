import {Entity,PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Match_Users } from "./Match_users";
import { Music_favorite } from "./Music_favorite";
import { Passion_user } from "./Passion_user";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    phone: String;

    @Column()
    password: string;
    
    @Column()
    age: number;

    @Column()
    city: string;

    @Column()
    gender: string;
   
    @Column({nullable: true})
    bio: string;
    @Column({nullable: true})
    image: string;

   
    @Column({ nullable: true })
    otp:number;
    @Column({ nullable: true })
    passwordOtp:number;
   
    @Column({default: true})
    active: boolean;
   
    @Column({default: false})
    isVerified: boolean;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    //user to matches (1 M)
    @OneToMany((type)=>Match_Users,(matchUsers,)=>matchUsers.user)
    matchs: Match_Users;
    
       //user to Passion_user (1 M)
    @OneToMany((type)=>Passion_user,(passionUser)=>passionUser.user)
    passionsUser:Passion_user[];
           //user to Music_favorite (1 M)
    @OneToMany((type)=>Music_favorite,(musicFavorite)=>musicFavorite.user)
    musicFavorites:Music_favorite[];
}
