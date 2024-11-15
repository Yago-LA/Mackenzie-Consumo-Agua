import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConsumoAguaModule, MongooseModule.forRoot('mongodb+srv://yago:13579@webmobile.9d4oh.mongodb.net/?retryWrites=true&w=majority&appName=webmobile')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
