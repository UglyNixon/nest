import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start () {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api')
    const config =new DocumentBuilder()
        .setTitle("Шпаргалка по nest")
        .setDescription('документация')
        .setVersion('6.6.6')
        .build()
    const document =SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api/docs',app,document)

    await app.listen(PORT,()=>{
        console.log(`Server start on PORT ${PORT}`)
    })
}
start()