
import { ICreateExamesDTO } from "@modules/exemes/dtos/ICreateExamesDTO";
import { IExamesRepository } from "@modules/exemes/repositories/IExamesRepository";
import { getRepository, Repository } from "typeorm";
import { Exame } from "../entities/Exame";



class ExamesRepository implements IExamesRepository{

    private repository: Repository<Exame>;

    constructor() {
        this.repository = getRepository(Exame);
    }

   async create({name, description, codigo}:ICreateExamesDTO): Promise<void> {
        const exame = this.repository.create({
            name, 
            description, 
            codigo
        });

        await this.repository.save(exame);
    }
  async findByCodigo(codigo: number): Promise<Exame> {
        const exame = await this.repository.findOne({codigo});
        return exame;
   } 

  async  findByName(name: string): Promise<Exame> {
    const exame = await this.repository.findOne({name});
    return exame;
  }

 async findByIds(ids: string[]): Promise<Exame[]> {
    const exames = await this.repository.findByIds(ids);
    return exames;
  }
}

export { ExamesRepository }