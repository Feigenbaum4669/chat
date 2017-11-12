import * as $protobuf from "protobufjs";

/** Properties of a Packet. */
export interface IPacket {

    /** Packet handshake */
    handshake?: IHandshake;

    /** Packet serverStatus */
    serverStatus?: IServerStatus;

    /** Packet userConnected */
    userConnected?: IUserConnected;

    /** Packet userDisconnected */
    userDisconnected?: IUserDisconnected;

    /** Packet roomCreated */
    roomCreated?: IRoomCreated;

    /** Packet roomClosed */
    roomClosed?: IRoomClosed;

    /** Packet joinRoom */
    joinRoom?: IJoinRoom;

    /** Packet userMoved */
    userMoved?: IUserMoved;

    /** Packet textMessage */
    textMessage?: ITextMessage;
}

/** Represents a Packet. */
export class Packet {

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

    /** Packet textMessage. */
    public textMessage?: (ITextMessage|null);

    /** Packet content. */
    public content?: string;

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
    username?: string;
}

/** Represents a Handshake. */
export class Handshake {

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
    yourUUID?: string;

    /** ServerStatus rooms */
    rooms?: ServerStatus.IRoom[];
}

/** Represents a ServerStatus. */
export class ServerStatus {

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
        name?: string;

        /** Room users */
        users?: IUserConnected[];
    }

    /** Represents a Room. */
    class Room {

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
    uuid?: string;

    /** UserConnected username */
    username?: string;

    /** UserConnected room */
    room?: string;
}

/** Represents a UserConnected. */
export class UserConnected {

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
    uuid?: string;

    /** UserDisconnected reason */
    reason?: string;
}

/** Represents a UserDisconnected. */
export class UserDisconnected {

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
    name?: string;
}

/** Represents a RoomCreated. */
export class RoomCreated {

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
    name?: string;
}

/** Represents a RoomClosed. */
export class RoomClosed {

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
    name?: string;
}

/** Represents a JoinRoom. */
export class JoinRoom {

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
    uuid?: string;

    /** UserMoved room */
    room?: string;
}

/** Represents a UserMoved. */
export class UserMoved {

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

/** Properties of a TextMessage. */
export interface ITextMessage {

    /** TextMessage userUUID */
    userUUID?: string;

    /** TextMessage message */
    message?: string;
}

/** Represents a TextMessage. */
export class TextMessage {

    /**
     * Constructs a new TextMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextMessage);

    /** TextMessage userUUID. */
    public userUUID: string;

    /** TextMessage message. */
    public message: string;

    /**
     * Creates a new TextMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextMessage instance
     */
    public static create(properties?: ITextMessage): TextMessage;

    /**
     * Encodes the specified TextMessage message. Does not implicitly {@link TextMessage.verify|verify} messages.
     * @param message TextMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextMessage message, length delimited. Does not implicitly {@link TextMessage.verify|verify} messages.
     * @param message TextMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextMessage;

    /**
     * Decodes a TextMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextMessage;

    /**
     * Verifies a TextMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextMessage
     */
    public static fromObject(object: { [k: string]: any }): TextMessage;

    /**
     * Creates a plain object from a TextMessage message. Also converts values to other types if specified.
     * @param message TextMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
