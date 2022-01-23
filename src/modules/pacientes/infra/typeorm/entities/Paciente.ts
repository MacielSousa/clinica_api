import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("pacientes")
class Paciente {
    
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    name: string;

    @Column()
    sexo: string;

    @Column()
    cpf: number;

    constructor(){}
}

export { Paciente }