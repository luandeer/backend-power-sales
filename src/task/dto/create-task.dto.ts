// export class CreateTaskDto {}
import { Task } from '@prisma/client'

export type CreateTaskDto = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
