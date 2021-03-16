import Database, { UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {

    constructor(public db = Database) { }

    /** @Question: Should we still call it UserRequestDto 
     *  or this is a partial once here. 
     */
    async createUser(userDTO: UserRequestDto) {
        return await this.db.create({ username: userDTO.username })
    }

}
