import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './modules/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'todoappdb',
      username: 'root',
      password: 'password',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
