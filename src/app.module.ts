import { Module } from '@nestjs/common'
import { GenerateAppIdModule } from '@ce-spgi/common-api/dist/app-id'
import { createUser } from './tools/create-user'
import { AppId } from './env'
import { UsersModule } from './endpoints/users/users.module'

@Module({
  imports: [GenerateAppIdModule('login', AppId, { create: createUser }), UsersModule]
})
export class AppModule {}
