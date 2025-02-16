import { UserRequestDto } from './Database'
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {

    constructor(public userService: UserService) { }

    store(request: UserRequestDto) {
        return this.userService.createUser(request);
    }
}
