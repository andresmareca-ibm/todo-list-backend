import { DatabaseConnect } from '@ce-spgi/sequelize'
import { Database } from '../env'

export { User } from './User'

export const sequelize = DatabaseConnect({
  connection: Database,
  models: [require('./User')]
})
