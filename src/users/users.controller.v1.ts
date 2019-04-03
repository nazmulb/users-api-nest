import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOkResponse, ApiUseTags } from '@nestjs/swagger'
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('v1/users')
export class UsersControllerV1 {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiUseTags('users')
  @ApiOkResponse({type: [User]})
  async list(): Promise<Array<User>> {
    return await this.usersService.list();
  }

  @Get(':id')
  @ApiUseTags('users')
  @ApiOkResponse({type: User})
  async get(@Param('id') id: number): Promise<User> {
    return await this.usersService.get(id);
  }

  @Post()
  @ApiUseTags('users')
  @ApiOkResponse({type: User})
  async create(@Body() user: User): Promise<User> {
    return await this.usersService.create(user);
  }

  @Put(':id')
  @ApiUseTags('users')
  @ApiOkResponse({type: User})
  async update(@Body() user: User, @Param('id', new ParseIntPipe()) id: number): Promise<User> {
    user.id = id;
    return await this.usersService.update(user);
  }

  @Delete(':id')
  @ApiUseTags('users')
  @ApiOkResponse({type: User})
  async delete(@Param('id') id: number): Promise<User> {
    return await this.usersService.delete(id);
  }
}
