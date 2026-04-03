import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user-entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.repo.findOne({
      where: { email: createUserDto.email },
    });

    if (user) {
      throw new ConflictException('Email already exists');
    }

    const result = this.repo.create(createUserDto);
    return this.repo.save(result);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User are not exists');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userId = await this.repo.findOne({ where: { id } });
    if (!userId) throw new NotFoundException('User not found');

    return this.repo.save(updateUserDto);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
