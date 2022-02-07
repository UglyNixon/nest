
import {Model,Column,DataType, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    login:string;
    password:string
}

@Table({tableName:'users',timestamps:false})
export class User extends Model<User,UserCreationAttrs>{
    @ApiProperty({example:1})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
 id:number;Column
    @ApiProperty({example:'Ivan'})
    @Column({type:DataType.STRING,allowNull:false,unique:true})
 login:string;
    @ApiProperty({example:'123qwe'})
    @Column({type:DataType.STRING,allowNull:false})
 password:string;
}