import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Prisma } from '@prisma/client'
@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}
  async create(createTaskDto: CreateTaskDto) {
    try {
      return await this.prismaService.task.create({
        data: createTaskDto
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(`Task  ${createTaskDto.name} alredy exist`)
        }
      }
    }
  }

  findAll() {
    return this.prismaService.task.findMany()
  }

  async findOne(id: number) {
    const taskFound = await this.prismaService.task.findUnique({
      where: {
        id: id
      }
    })
    if (!taskFound) {
      throw new NotFoundException(`Task ${id} not found`)
    }
    return taskFound
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskFound = await this.prismaService.task.update({
      where: {
        id
      },
      data: updateTaskDto
    })

    if (!taskFound) {
      throw new NotFoundException(`Task ${id} not found`)
    }
    return taskFound
  }

  async remove(id: number) {
    const deleteTask = await this.prismaService.task.delete({
      where: {
        id: id
      }
    })
    if (!deleteTask) {
      throw new NotFoundException(`Task ${id} not found`)
    }

    return deleteTask
  }
}
