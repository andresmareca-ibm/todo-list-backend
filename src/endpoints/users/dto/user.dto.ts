import { ApiProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  mail: string

  @ApiProperty({ required: false })
  avatar?: string

  @ApiProperty()
  properties: Record<string, any>
}
