import { OnModuleInit } from '@nestjs/common';
import { Connection } from 'mongoose';
export declare class AppModule implements OnModuleInit {
    private connection;
    private logger;
    constructor(connection: Connection);
    onModuleInit(): void;
}
