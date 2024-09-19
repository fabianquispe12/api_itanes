import { IsString } from "class-validator"

export class CreateUserDto {

    @IsString()
    username : string
    @IsString()
    password : string
    @IsString()
    nombre : number
    @IsString()
    apellido : number

}
