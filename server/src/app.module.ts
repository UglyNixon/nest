import {Module} from "@nestjs/common";


import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';


@Module({
    controllers:[],
    providers:[],
    imports:[
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',npm roo
            port: 5432,
            username: 'postgres',
            password: '3578048888',
            database: 'test',
            models: [],
            autoLoadModels:true
        }),
        UsersModule,
    ]
})
export class AppModule {}