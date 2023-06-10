import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  createUser(user: User){
    return this.userRepository.save(user)
  }

  getAll(){
    return this.userRepository.find();
  }

  usersAll(id: number){
    return this.userRepository.findOneBy({ id: id});
  }

  updateUser(id: number, user: User){
    return this.userRepository.update(id, user);
  }

  removeUser(id: number){
    return this.userRepository.delete(id);
  }
}