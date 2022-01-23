import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("exames")
class Exame {
    
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    name: string;

    @Column()
    description: string;

    constructor(){}
}

export { Exame }
