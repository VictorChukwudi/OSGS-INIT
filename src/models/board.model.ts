import { Table, Column, Model, DataType, Sequelize} from 'sequelize-typescript';

@Table({
    tableName:"Boards"
})
export class  Boards extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING
    })
    name!: string

    @Column({
        type: DataType.STRING,
        unique: true
    })
    email!: string


    @Column({
        type: DataType.STRING,
    })
    description!: string

    @Column({
        type: DataType.STRING,
    })
    imageURL!: string

}