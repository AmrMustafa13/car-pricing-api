import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { Serialize } from '../interceptors/serialize.interceptor';

@Serialize(UserDto)
@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Get(':id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findOne(+id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() attr: UpdateUserDto) {
    return this.userService.update(+id, attr);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
