import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { TodoStatus } from "src/models/todos.model"

export class CreateTodoInput {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsEnum(TodoStatus)
    @IsNotEmpty()
    status: TodoStatus
}