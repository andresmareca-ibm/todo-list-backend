import { UseGuards, Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiTags } from '@nestjs/swagger'
import { UserDto } from './dto/user.dto'
import { AppIdGuard, AppIdSecurity, AppIdUser } from '@ce-spgi/common-api/dist/app-id'
import { AppId } from '../../env'

@Controller('users')
@ApiTags('users')
@UseGuards(AppIdGuard())
@AppIdSecurity()
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('me')
  async me(@AppIdUser(AppId) user: Promise<AppIdUserDto>): Promise<UserDto> {
    return this.appService.me(await user)
  }
}
