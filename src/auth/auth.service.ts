import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from '../user/user.entity';
import { LoginDto } from "./dto/login.dto";
import * as jwt  from "jsonwebtoken";

@Injectable()
export class AuthService{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

    async login(loginDto: LoginDto){
      const { email, password } = loginDto;
      const user = await this.userRepository.findOne({ where: {email}});

      if(!user || user.password !== password){
        throw new Error('E-mail ou Senha inválidos!')
      }

      const token = this.createToken(user.id);

      return { msg: 'Acesso Liberado', token}

    }

    private createToken(userId: number){
      const payload = {userId};
      const secret = 'preTeste2023';
      const expiresIn = '1h';

      return jwt.sign(payload, secret, {expiresIn});
    }
}