import * as $protobuf from "protobufjs";

/** Properties of a Packet. */
export interface IPacket {

    /** Packet handshake */
    handshake?: (IHandshake|null);

    /** Packet serverStatus */
    serverStatus?: (IServerStatus|null);

    /** Packet userConnected */
    userConnected?: (IUserConnected|null);

    /** Packet userDisconnected */
    userDisconnected?: (IUserDisconnected|null);

    /** Packet roomCreated */
    roomCreated?: (IRoomCreated|null);

    /** Packet roomClosed */
    roomClosed?: (IRoomClosed|null);

    /** Packet joinRoom */
    joinRoom?: (IJoinRoom|null);

    /** Packet userMoved */
    userMoved?: (IUserMoved|null);

    /** Packet chatMessage */
    chatMessage?: (IChatMessage|null);

    /** Packet requestFile */
    requestFile?: (IRequestFile|null);

    /** Packet requestedFile */
    requestedFile?: (IRequestedFile|null);
}

/** Represents a Packet. */
export class Packet implements IPacket {

    /**
     * Constructs a new Packet.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPacket);

    /** Packet handshake. */
    public handshake?: (IHandshake|null);

    /** Packet serverStatus. */
    public serverStatus?: (IServerStatus|null);

    /** Packet userConnected. */
    public userConnected?: (IUserConnected|null);

    /** Packet userDisconnected. */
    public userDisconnected?: (IUserDisconnected|null);

    /** Packet roomCreated. */
    public roomCreated?: (IRoomCreated|null);

    /** Packet roomClosed. */
    public roomClosed?: (IRoomClosed|null);

    /** Packet joinRoom. */
    public joinRoom?: (IJoinRoom|null);

    /** Packet userMoved. */
    public userMoved?: (IUserMoved|null);

    /** Packet chatMessage. */
    public chatMessage?: (IChatMessage|null);

    /** Packet requestFile. */
    public requestFile?: (IRequestFile|null);

    /** Packet requestedFile. */
    public requestedFile?: (IRequestedFile|null);

    /** Packet content. */
    public content?: ("handshake"|"serverStatus"|"userConnected"|"userDisconnected"|"roomCreated"|"roomClosed"|"joinRoom"|"userMoved"|"chatMessage"|"requestFile"|"requestedFile");

    /**
     * Creates a new Packet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Packet instance
     */
    public static create(properties?: IPacket): Packet;

    /**
     * Encodes the specified Packet message. Does not implicitly {@link Packet.verify|verify} messages.
     * @param message Packet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Packet message, length delimited. Does not implicitly {@link Packet.verify|verify} messages.
     * @param message Packet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Packet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Packet;

    /**
     * Decodes a Packet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Packet;

    /**
     * Verifies a Packet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Packet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Packet
     */
    public static fromObject(object: { [k: string]: any }): Packet;

    /**
     * Creates a plain object from a Packet message. Also converts values to other types if specified.
     * @param message Packet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Packet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Handshake. */
export interface IHandshake {

    /** Handshake username */
    username?: (string|null);
}

/** Represents a Handshake. */
export class Handshake implements IHandshake {

    /**
     * Constructs a new Handshake.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHandshake);

    /** Handshake username. */
    public username: string;

    /**
     * Creates a new Handshake instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Handshake instance
     */
    public static create(properties?: IHandshake): Handshake;

    /**
     * Encodes the specified Handshake message. Does not implicitly {@link Handshake.verify|verify} messages.
     * @param message Handshake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Handshake message, length delimited. Does not implicitly {@link Handshake.verify|verify} messages.
     * @param message Handshake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Handshake message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Handshake;

    /**
     * Decodes a Handshake message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Handshake;

    /**
     * Verifies a Handshake message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Handshake
     */
    public static fromObject(object: { [k: string]: any }): Handshake;

    /**
     * Creates a plain object from a Handshake message. Also converts values to other types if specified.
     * @param message Handshake
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Handshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Handshake to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ServerStatus. */
export interface IServerStatus {

    /** ServerStatus yourUUID */
    yourUUID?: (string|null);

    /** ServerStatus rooms */
    rooms?: (ServerStatus.IRoom[]|null);
}

/** Represents a ServerStatus. */
export class ServerStatus implements IServerStatus {

    /**
     * Constructs a new ServerStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerStatus);

    /** ServerStatus yourUUID. */
    public yourUUID: string;

    /** ServerStatus rooms. */
    public rooms: ServerStatus.IRoom[];

    /**
     * Creates a new ServerStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerStatus instance
     */
    public static create(properties?: IServerStatus): ServerStatus;

    /**
     * Encodes the specified ServerStatus message. Does not implicitly {@link ServerStatus.verify|verify} messages.
     * @param message ServerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerStatus message, length delimited. Does not implicitly {@link ServerStatus.verify|verify} messages.
     * @param message ServerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerStatus;

    /**
     * Decodes a ServerStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerStatus;

    /**
     * Verifies a ServerStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerStatus
     */
    public static fromObject(object: { [k: string]: any }): ServerStatus;

    /**
     * Creates a plain object from a ServerStatus message. Also converts values to other types if specified.
     * @param message ServerStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ServerStatus {

    /** Properties of a Room. */
    interface IRoom {

        /** Room name */
        name?: (string|null);

        /** Room users */
        users?: (IUserConnected[]|null);
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerStatus.IRoom);

        /** Room name. */
        public name: string;

        /** Room users. */
        public users: IUserConnected[];

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: ServerStatus.IRoom): ServerStatus.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link ServerStatus.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerStatus.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link ServerStatus.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerStatus.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerStatus.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerStatus.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): ServerStatus.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerStatus.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a UserConnected. */
export interface IUserConnected {

    /** UserConnected uuid */
    uuid?: (string|null);

    /** UserConnected username */
    username?: (string|null);

    /** UserConnected room */
    room?: (string|null);
}

/** Represents a UserConnected. */
export class UserConnected implements IUserConnected {

    /**
     * Constructs a new UserConnected.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserConnected);

    /** UserConnected uuid. */
    public uuid: string;

    /** UserConnected username. */
    public username: string;

    /** UserConnected room. */
    public room: string;

    /**
     * Creates a new UserConnected instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserConnected instance
     */
    public static create(properties?: IUserConnected): UserConnected;

    /**
     * Encodes the specified UserConnected message. Does not implicitly {@link UserConnected.verify|verify} messages.
     * @param message UserConnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserConnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserConnected message, length delimited. Does not implicitly {@link UserConnected.verify|verify} messages.
     * @param message UserConnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserConnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserConnected message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserConnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserConnected;

    /**
     * Decodes a UserConnected message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserConnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserConnected;

    /**
     * Verifies a UserConnected message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserConnected message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserConnected
     */
    public static fromObject(object: { [k: string]: any }): UserConnected;

    /**
     * Creates a plain object from a UserConnected message. Also converts values to other types if specified.
     * @param message UserConnected
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserConnected to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserDisconnected. */
export interface IUserDisconnected {

    /** UserDisconnected uuid */
    uuid?: (string|null);

    /** UserDisconnected reason */
    reason?: (string|null);
}

/** Represents a UserDisconnected. */
export class UserDisconnected implements IUserDisconnected {

    /**
     * Constructs a new UserDisconnected.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserDisconnected);

    /** UserDisconnected uuid. */
    public uuid: string;

    /** UserDisconnected reason. */
    public reason: string;

    /**
     * Creates a new UserDisconnected instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserDisconnected instance
     */
    public static create(properties?: IUserDisconnected): UserDisconnected;

    /**
     * Encodes the specified UserDisconnected message. Does not implicitly {@link UserDisconnected.verify|verify} messages.
     * @param message UserDisconnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserDisconnected message, length delimited. Does not implicitly {@link UserDisconnected.verify|verify} messages.
     * @param message UserDisconnected message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserDisconnected message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserDisconnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserDisconnected;

    /**
     * Decodes a UserDisconnected message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserDisconnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserDisconnected;

    /**
     * Verifies a UserDisconnected message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserDisconnected message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserDisconnected
     */
    public static fromObject(object: { [k: string]: any }): UserDisconnected;

    /**
     * Creates a plain object from a UserDisconnected message. Also converts values to other types if specified.
     * @param message UserDisconnected
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserDisconnected to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomCreated. */
export interface IRoomCreated {

    /** RoomCreated name */
    name?: (string|null);
}

/** Represents a RoomCreated. */
export class RoomCreated implements IRoomCreated {

    /**
     * Constructs a new RoomCreated.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomCreated);

    /** RoomCreated name. */
    public name: string;

    /**
     * Creates a new RoomCreated instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomCreated instance
     */
    public static create(properties?: IRoomCreated): RoomCreated;

    /**
     * Encodes the specified RoomCreated message. Does not implicitly {@link RoomCreated.verify|verify} messages.
     * @param message RoomCreated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomCreated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomCreated message, length delimited. Does not implicitly {@link RoomCreated.verify|verify} messages.
     * @param message RoomCreated message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomCreated, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomCreated message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomCreated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomCreated;

    /**
     * Decodes a RoomCreated message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomCreated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomCreated;

    /**
     * Verifies a RoomCreated message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomCreated message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomCreated
     */
    public static fromObject(object: { [k: string]: any }): RoomCreated;

    /**
     * Creates a plain object from a RoomCreated message. Also converts values to other types if specified.
     * @param message RoomCreated
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomCreated to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RoomClosed. */
export interface IRoomClosed {

    /** RoomClosed name */
    name?: (string|null);
}

/** Represents a RoomClosed. */
export class RoomClosed implements IRoomClosed {

    /**
     * Constructs a new RoomClosed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomClosed);

    /** RoomClosed name. */
    public name: string;

    /**
     * Creates a new RoomClosed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomClosed instance
     */
    public static create(properties?: IRoomClosed): RoomClosed;

    /**
     * Encodes the specified RoomClosed message. Does not implicitly {@link RoomClosed.verify|verify} messages.
     * @param message RoomClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomClosed message, length delimited. Does not implicitly {@link RoomClosed.verify|verify} messages.
     * @param message RoomClosed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomClosed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomClosed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomClosed;

    /**
     * Decodes a RoomClosed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomClosed;

    /**
     * Verifies a RoomClosed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomClosed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomClosed
     */
    public static fromObject(object: { [k: string]: any }): RoomClosed;

    /**
     * Creates a plain object from a RoomClosed message. Also converts values to other types if specified.
     * @param message RoomClosed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomClosed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a JoinRoom. */
export interface IJoinRoom {

    /** JoinRoom name */
    name?: (string|null);
}

/** Represents a JoinRoom. */
export class JoinRoom implements IJoinRoom {

    /**
     * Constructs a new JoinRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinRoom);

    /** JoinRoom name. */
    public name: string;

    /**
     * Creates a new JoinRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinRoom instance
     */
    public static create(properties?: IJoinRoom): JoinRoom;

    /**
     * Encodes the specified JoinRoom message. Does not implicitly {@link JoinRoom.verify|verify} messages.
     * @param message JoinRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JoinRoom message, length delimited. Does not implicitly {@link JoinRoom.verify|verify} messages.
     * @param message JoinRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JoinRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinRoom;

    /**
     * Decodes a JoinRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinRoom;

    /**
     * Verifies a JoinRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JoinRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JoinRoom
     */
    public static fromObject(object: { [k: string]: any }): JoinRoom;

    /**
     * Creates a plain object from a JoinRoom message. Also converts values to other types if specified.
     * @param message JoinRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JoinRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JoinRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserMoved. */
export interface IUserMoved {

    /** UserMoved uuid */
    uuid?: (string|null);

    /** UserMoved room */
    room?: (string|null);
}

/** Represents a UserMoved. */
export class UserMoved implements IUserMoved {

    /**
     * Constructs a new UserMoved.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserMoved);

    /** UserMoved uuid. */
    public uuid: string;

    /** UserMoved room. */
    public room: string;

    /**
     * Creates a new UserMoved instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserMoved instance
     */
    public static create(properties?: IUserMoved): UserMoved;

    /**
     * Encodes the specified UserMoved message. Does not implicitly {@link UserMoved.verify|verify} messages.
     * @param message UserMoved message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserMoved, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserMoved message, length delimited. Does not implicitly {@link UserMoved.verify|verify} messages.
     * @param message UserMoved message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserMoved, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserMoved message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserMoved
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserMoved;

    /**
     * Decodes a UserMoved message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserMoved
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserMoved;

    /**
     * Verifies a UserMoved message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserMoved message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserMoved
     */
    public static fromObject(object: { [k: string]: any }): UserMoved;

    /**
     * Creates a plain object from a UserMoved message. Also converts values to other types if specified.
     * @param message UserMoved
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserMoved, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserMoved to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage userUUID */
    userUUID?: (string|null);

    /** ChatMessage textMessage */
    textMessage?: (string|null);

    /** ChatMessage fullFile */
    fullFile?: (ChatMessage.IFileFull|null);

    /** ChatMessage fileHeader */
    fileHeader?: (ChatMessage.IFileHeader|null);
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage userUUID. */
    public userUUID: string;

    /** ChatMessage textMessage. */
    public textMessage: string;

    /** ChatMessage fullFile. */
    public fullFile?: (ChatMessage.IFileFull|null);

    /** ChatMessage fileHeader. */
    public fileHeader?: (ChatMessage.IFileHeader|null);

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ChatMessage {

    /** Properties of a FileFull. */
    interface IFileFull {

        /** FileFull filename */
        filename?: (string|null);

        /** FileFull content */
        content?: (Uint8Array|null);
    }

    /** Represents a FileFull. */
    class FileFull implements IFileFull {

        /**
         * Constructs a new FileFull.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatMessage.IFileFull);

        /** FileFull filename. */
        public filename: string;

        /** FileFull content. */
        public content: Uint8Array;

        /**
         * Creates a new FileFull instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileFull instance
         */
        public static create(properties?: ChatMessage.IFileFull): ChatMessage.FileFull;

        /**
         * Encodes the specified FileFull message. Does not implicitly {@link ChatMessage.FileFull.verify|verify} messages.
         * @param message FileFull message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatMessage.IFileFull, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileFull message, length delimited. Does not implicitly {@link ChatMessage.FileFull.verify|verify} messages.
         * @param message FileFull message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatMessage.IFileFull, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileFull message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage.FileFull;

        /**
         * Decodes a FileFull message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage.FileFull;

        /**
         * Verifies a FileFull message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileFull message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileFull
         */
        public static fromObject(object: { [k: string]: any }): ChatMessage.FileFull;

        /**
         * Creates a plain object from a FileFull message. Also converts values to other types if specified.
         * @param message FileFull
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatMessage.FileFull, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileFull to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileHeader. */
    interface IFileHeader {

        /** FileHeader uuid */
        uuid?: (string|null);

        /** FileHeader filename */
        filename?: (string|null);

        /** FileHeader thumbnail */
        thumbnail?: (Uint8Array|null);
    }

    /** Represents a FileHeader. */
    class FileHeader implements IFileHeader {

        /**
         * Constructs a new FileHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: ChatMessage.IFileHeader);

        /** FileHeader uuid. */
        public uuid: string;

        /** FileHeader filename. */
        public filename: string;

        /** FileHeader thumbnail. */
        public thumbnail: Uint8Array;

        /**
         * Creates a new FileHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileHeader instance
         */
        public static create(properties?: ChatMessage.IFileHeader): ChatMessage.FileHeader;

        /**
         * Encodes the specified FileHeader message. Does not implicitly {@link ChatMessage.FileHeader.verify|verify} messages.
         * @param message FileHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ChatMessage.IFileHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileHeader message, length delimited. Does not implicitly {@link ChatMessage.FileHeader.verify|verify} messages.
         * @param message FileHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ChatMessage.IFileHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage.FileHeader;

        /**
         * Decodes a FileHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage.FileHeader;

        /**
         * Verifies a FileHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileHeader
         */
        public static fromObject(object: { [k: string]: any }): ChatMessage.FileHeader;

        /**
         * Creates a plain object from a FileHeader message. Also converts values to other types if specified.
         * @param message FileHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChatMessage.FileHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a RequestFile. */
export interface IRequestFile {

    /** RequestFile uuid */
    uuid?: (string|null);
}

/** Represents a RequestFile. */
export class RequestFile implements IRequestFile {

    /**
     * Constructs a new RequestFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestFile);

    /** RequestFile uuid. */
    public uuid: string;

    /**
     * Creates a new RequestFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestFile instance
     */
    public static create(properties?: IRequestFile): RequestFile;

    /**
     * Encodes the specified RequestFile message. Does not implicitly {@link RequestFile.verify|verify} messages.
     * @param message RequestFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestFile message, length delimited. Does not implicitly {@link RequestFile.verify|verify} messages.
     * @param message RequestFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestFile;

    /**
     * Decodes a RequestFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestFile;

    /**
     * Verifies a RequestFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestFile
     */
    public static fromObject(object: { [k: string]: any }): RequestFile;

    /**
     * Creates a plain object from a RequestFile message. Also converts values to other types if specified.
     * @param message RequestFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RequestedFile. */
export interface IRequestedFile {

    /** RequestedFile uuid */
    uuid?: (string|null);

    /** RequestedFile filename */
    filename?: (string|null);

    /** RequestedFile content */
    content?: (Uint8Array|null);
}

/** Represents a RequestedFile. */
export class RequestedFile implements IRequestedFile {

    /**
     * Constructs a new RequestedFile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRequestedFile);

    /** RequestedFile uuid. */
    public uuid: string;

    /** RequestedFile filename. */
    public filename: string;

    /** RequestedFile content. */
    public content: Uint8Array;

    /**
     * Creates a new RequestedFile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RequestedFile instance
     */
    public static create(properties?: IRequestedFile): RequestedFile;

    /**
     * Encodes the specified RequestedFile message. Does not implicitly {@link RequestedFile.verify|verify} messages.
     * @param message RequestedFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRequestedFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RequestedFile message, length delimited. Does not implicitly {@link RequestedFile.verify|verify} messages.
     * @param message RequestedFile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRequestedFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RequestedFile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RequestedFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RequestedFile;

    /**
     * Decodes a RequestedFile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RequestedFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RequestedFile;

    /**
     * Verifies a RequestedFile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RequestedFile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RequestedFile
     */
    public static fromObject(object: { [k: string]: any }): RequestedFile;

    /**
     * Creates a plain object from a RequestedFile message. Also converts values to other types if specified.
     * @param message RequestedFile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RequestedFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RequestedFile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
