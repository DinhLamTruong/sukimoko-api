import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from './user.entity'
import {UserService} from './user.service'
import {UploadModule} from '../upload/upload.module'

@Module({
  imports: [TypeOrmModule.forFeature([User]), UploadModule],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
