import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example:'ivan'})
    readonly login:string;
    @ApiProperty({example:'123qwe'})
    readonly password:string
}