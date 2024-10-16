import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodosController } from "src/controllers/todos.controller";
import { TodosModel } from "src/models/todos.model";
import { TodosService } from "src/services/todos.service";

@Module({
    imports: [TypeOrmModule.forFeature([TodosModel])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule {}