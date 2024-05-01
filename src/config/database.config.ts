import 'reflect-metadata'
import { DataSource } from 'typeorm'
import DotenvConfig  from './env.config'

export const DatabaseConfig = new DataSource({
  type: 'postgres',
  host: DotenvConfig.DATABASE_HOST,
  port: Number(DotenvConfig.DATABASE_PORT),
  username: DotenvConfig.DATABASE_USERNAME,
  password: DotenvConfig.DATABASE_PASSWORD,
  database: DotenvConfig.DATABASE_NAME,
  // eslint-disable-next-line n/no-path-concat
  entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
  dropSchema: false,
})
