import * as dotenv from 'dotenv'
import uuid4 from 'uuid4'
import * as process from 'process'

dotenv.config()

export const Api = {
  port: parseInt(process.env.API_PORT || '4000')
}

export const AppId = {
  tenantId: process.env.APPID_TENANT_ID,
  clientId: process.env.APPID_CLIENT_ID,
  secret: process.env.APPID_SECRET,
  oauthServerUrl: `${process.env.APPID_SERVICE_URL}/oauth/v4/${process.env.APPID_TENANT_ID}`,
  redirectUri: process.env.APPID_REDIRECT_URL,
  version: 4,
  appidServiceEndpoint: process.env.APPID_SERVICE_URL
}

export const Database = {
  name: process.env.DB_NAME || 'bludb',
  hostname: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PWD || 'password',
  dialect: process.env.DB_DIALECT || 'db2',
  port: parseInt(process.env.DB_PORT || '50000'),
  ssl: process.env.DB_SSL,
  connectionPool: parseInt(process.env.DB_CONNECTION_POOL || '10'),
  connectionPoolStart: process.env.DB_CONNECTION_POOL_START === 'true',
  keepPool: true,
  schema: process.env.DB_SCHEMA || 'public'
}
