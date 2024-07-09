import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  async me(data: AppIdUserDto): Promise<any> {
    return {
      id: data.sub,
      mail: data.email,
      name: `${data.given_name} ${data.family_name}`
    }
  }
}
