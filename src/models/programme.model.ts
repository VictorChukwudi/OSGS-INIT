import { Table, Column, Model, DataType, Sequelize} from 'sequelize-typescript';
import { NstdProgrammes } from './nstdprogramme.model';

@Table({
    tableName:"Programmes"
})
export class  Programmes extends Model {
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
    theme!: string

    @Column({
        type: DataType.STRING,
    })
    type!: string


    @Column({
        type: DataType.STRING,
    })
    schedule!: string

    @Column({
        type: DataType.DATE,
    })
    start_date!: Date

    @Column({
        type: DataType.DATE,
    })
    end_date!: Date

    @Column({
        type: DataType.STRING,
    })
    duration!: string

    @Column({
        type: DataType.BOOLEAN,
    })
    completed!: boolean

    @Column({
        type: DataType.STRING,
    })
    fileURL!: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    hasNstdProgram!: boolean

}

// Programmes.hasMany(NstdProgrammes)