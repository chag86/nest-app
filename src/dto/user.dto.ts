import { ApiProperty } from '@nestjs/swagger';

export class UserDto{
    @ApiProperty({
        type: String,
        description: 'Name of user'
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Email of user'
    })
    email: string;
}