import { AppModule } from './app.module'
import { ApiDefinition } from '@ce-spgi/common-api'
import { Api } from './env'
import { urlencoded, json } from 'express'

const main = async () => {
  await ApiDefinition(AppModule, {
    name: 'todo-lis',
    title: 'watsonx backend',
    description: 'API watsonx backend',
    version: '1.0',
    prefix: 'v1',
    port: Api.port,
    callback: app => {
      app.use(json({ limit: '50mb' }))
      app.use(urlencoded({ extended: true, limit: '50mb' }))
    }
  })
}

main().then()
