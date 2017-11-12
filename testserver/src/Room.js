
export default class Room{
    name;
    rm;
    users;
    temp;

    constructor(rm, name) {
        this.rm = rm;
        this.name = name;

        this.users = new Set();
        this.temp = true;
    }

    remove(user) {
        this.users.delete(user);
        if(this.users.size === 0 && this.temp) {
            this.rm.remove(this);
        }
    }

    add(user) {
        this.users.add(user);
    }
}