import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

@Table({ tableName: 'users' })
export class User extends Model {
    @PrimaryKey
    @Column(DataTypes.UUIDV4)
    uuid!: string

    @Column(DataTypes.STRING)
    name!: string
}