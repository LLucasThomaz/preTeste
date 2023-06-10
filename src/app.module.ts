import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Product } from './product/product.entity';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'preteste',
      entities: [User, Product],
      synchronize: true
    }),
    TypeOrmModule.forFeature([User, Product])
  ],
  controllers: [AppController, AuthController, UserController, ProductController],
  providers: [AppService, AuthService, UserService, ProductService],
})
export class AppModule {}
