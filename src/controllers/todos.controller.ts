import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTodoInput } from "src/dto/create-todo.input";
import { UpdateTodoInput } from "src/dto/update-todo.input";
import { TodosModel } from "src/models/todos.model";
import { TodosService } from "src/services/todos.service";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Controller('todo')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    readAllTodos(): Promise<TodosModel[]> {
        return this.todosService.readAllTodos()
    }

    @Post()
    async createTodo(@Body() input: CreateTodoInput): Promise<InsertResult> {
        return this.todosService.createTodo(input)
    }

    @Put()
    async updateTodo(@Body() input: UpdateTodoInput): Promise<UpdateResult> {
        return this.todosService.updateTodo(input)
    }

    @Delete()
    async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
        return this.todosService.deleteTodo(id)
    }
}