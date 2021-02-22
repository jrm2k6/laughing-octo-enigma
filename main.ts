import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

@Table({ modelName: 'users', timestamps: true, paranoid: true })
export class User extends Model<User> {
    @PrimaryKey
    @Column(DataTypes.UUIDV4)
    uuid!: string

    @Column(DataTypes.STRING)
    name!: string
}