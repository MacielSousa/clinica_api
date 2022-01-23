import { ICreateExamesDTO } from "../dtos/ICreateExamesDTO";
import { Exame } from "../infra/typeorm/entities/Exame";


interface IExamesRepository {
    create(data: ICreateExamesDTO): Promise<void>;
    findByCodigo(codigo: number): Promise<Exame>;
    findByName(name: string): Promise<Exame>;
    findByIds(ids: string[]): Promise<Exame[]>;
}

export { IExamesRepository }