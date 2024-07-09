import { DataTypes, Model } from 'sequelize'
import { Database } from '../env'

export interface IUser {
  id: string
  name: string
  mail: string
  createdAt: Date
}

export class User extends Model<IUser> implements IUser {
  public id!: string
  public name: string
  public mail: string
  public readonly createdAt: Date
}

export const init = (sequelize): void => {
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        field: 'ID'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'NAME'
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'MAIL'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'CREATED_AT'
      }
    },
    {
      sequelize,
      tableName: 'USERS',
      schema: Database.schema,
      timestamps: true,
      updatedAt: false
    }
  )
}

export const associations = (models): void => {}
