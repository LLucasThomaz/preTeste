import { Controller, Get, Post, Body, Headers, Param, Patch, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserController{
  constructor(
    private readonly userService: UserService
  ){}

  @Post('create')
  createUser(@Body() user: User){
    return this.userService.createUser(user);
  }

  @Get('list')
  getAll(){
    return this.userService.getAll();
  }

  @Get(':id')
  usersAll(@Param('id') id: number){
    return this.userService.usersAll(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() user: User){
    return this.userService.updateUser(+id, user);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number){
    return this.userService.removeUser(id);
  }
}