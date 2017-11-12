
function ServerStatus(rm, localUUID) {
    return {
        serverStatus: {
            yourUUID: localUUID,
            rooms: [...rm.rooms.values()].map(room => ({
                name: room.name,
                users: [...room.users].map(user => ({
                    uuid: user.uuid,
                    username: user.username,
                    room: room.name,
                }))
            })),
        }
    };
}

export {
    ServerStatus,
}
