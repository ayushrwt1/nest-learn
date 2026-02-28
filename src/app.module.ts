import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { MongooseModule, InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI as string,
    ),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private logger = new Logger('Database');

  constructor(@InjectConnection() private connection: Connection) {}

  onModuleInit() {
    // Check if already connected
    if (this.connection.readyState === 1) {
      console.log("Database is connected successfully");
      
    }
    this.connection.on('error', (error) => {
      this.logger.error('✗ Database connection error: ' + error.message);
    });

    this.connection.on('disconnected', () => {
      this.logger.warn('Database disconnected');
    });
  }
}
