import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { PassportModule } from '@nestjs/passport'
import { GenerateAppIdStrategy } from '@ce-spgi/common-api/dist/app-id'
import { AppId } from '../../env'

@Module({
  imports: [PassportModule],
  controllers: [UsersController],
  providers: [UsersService, GenerateAppIdStrategy(AppId)]
})
export class UsersModule {}
