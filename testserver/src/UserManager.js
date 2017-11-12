
export default class UserManager {
    users;

    constructor() {
        this.users = new Map();
    }

    remove(user) {
        this.users.delete(user.uuid);
        user.um = null;
    }

    add(user) {
        this.users.set(user.uuid, user);
        user.um = this;
    }
}
