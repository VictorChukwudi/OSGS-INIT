import { Table, Column, Model, DataType, Sequelize} from 'sequelize-typescript';
import { Programmes } from './programme.model';

@Table({
    tableName:"NstdProgrammes"
})
export class  NstdProgrammes extends Model {
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
    title!: string

    @Column({
        type: DataType.STRING,
        
    })
    type!: string


    @Column({
        type: DataType.BOOLEAN,
    })
    completed!: boolean

    @Column({
        type: DataType.STRING,
    })
    recordingURL!: string

    @Column({
        type: DataType.STRING,
    })
    liveURL!: string

    @Column({
        type: DataType.STRING,
    })
    fileURL!: string

    @Column({
        type: DataType.INTEGER,
        references:{
            model:"Programmes",
            key:"id"
        }
    })
    programId!:number

}

