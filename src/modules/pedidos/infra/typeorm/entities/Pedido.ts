import { Paciente } from "@modules/pacientes/infra/typeorm/entities/Paciente";
import { Exame } from "@modules/exemes/infra/typeorm/entities/Exame";
import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("pedidos")
class Pedido {

    @PrimaryColumn()
    id: string;

    @Column()
    codigo: string;

    @Column()
    @Generated('increment')
    ordemServico: number;

    @ManyToOne(() => Paciente, {eager: true})
    @JoinColumn({name: "paciente_id"})
    paciente: Paciente;

    @Column()
    paciente_id: number;

    @Column()
    status: string;
    
    @ManyToMany(() => Exame, {eager: true})
    @JoinTable({
        name: "pedidos_exames",
        joinColumns: [{ name: "pedido_id" }],
        inverseJoinColumns: [{ name: "exame_id"}],
    })
    exames: Exame[];

    constructor(){}
}

export {Pedido}