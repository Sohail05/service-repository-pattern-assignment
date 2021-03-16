import { UserRequestDto } from './Database'
import { UserRepository } from './User.repository'

// NOTE: Make userRepo public and not private. This is required for the tests!
export class UserService {

    constructor(public userRepo:UserRepository){}

    createUser(userDTO:UserRequestDto){
        return this.userRepo.createUser(userDTO);
    }

}
