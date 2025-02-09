/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Packet = $root.Packet = (() => {

    /**
     * Properties of a Packet.
     * @exports IPacket
     * @interface IPacket
     * @property {IHandshake|null} [handshake] Packet handshake
     * @property {IServerStatus|null} [serverStatus] Packet serverStatus
     * @property {IUserConnected|null} [userConnected] Packet userConnected
     * @property {IUserDisconnected|null} [userDisconnected] Packet userDisconnected
     * @property {IRoomCreated|null} [roomCreated] Packet roomCreated
     * @property {IRoomClosed|null} [roomClosed] Packet roomClosed
     * @property {IJoinRoom|null} [joinRoom] Packet joinRoom
     * @property {IUserMoved|null} [userMoved] Packet userMoved
     * @property {IChatMessage|null} [chatMessage] Packet chatMessage
     * @property {IRequestFile|null} [requestFile] Packet requestFile
     * @property {IRequestedFile|null} [requestedFile] Packet requestedFile
     */

    /**
     * Constructs a new Packet.
     * @exports Packet
     * @classdesc Represents a Packet.
     * @implements IPacket
     * @constructor
     * @param {IPacket=} [properties] Properties to set
     */
    function Packet(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Packet handshake.
     * @member {IHandshake|null|undefined} handshake
     * @memberof Packet
     * @instance
     */
    Packet.prototype.handshake = null;

    /**
     * Packet serverStatus.
     * @member {IServerStatus|null|undefined} serverStatus
     * @memberof Packet
     * @instance
     */
    Packet.prototype.serverStatus = null;

    /**
     * Packet userConnected.
     * @member {IUserConnected|null|undefined} userConnected
     * @memberof Packet
     * @instance
     */
    Packet.prototype.userConnected = null;

    /**
     * Packet userDisconnected.
     * @member {IUserDisconnected|null|undefined} userDisconnected
     * @memberof Packet
     * @instance
     */
    Packet.prototype.userDisconnected = null;

    /**
     * Packet roomCreated.
     * @member {IRoomCreated|null|undefined} roomCreated
     * @memberof Packet
     * @instance
     */
    Packet.prototype.roomCreated = null;

    /**
     * Packet roomClosed.
     * @member {IRoomClosed|null|undefined} roomClosed
     * @memberof Packet
     * @instance
     */
    Packet.prototype.roomClosed = null;

    /**
     * Packet joinRoom.
     * @member {IJoinRoom|null|undefined} joinRoom
     * @memberof Packet
     * @instance
     */
    Packet.prototype.joinRoom = null;

    /**
     * Packet userMoved.
     * @member {IUserMoved|null|undefined} userMoved
     * @memberof Packet
     * @instance
     */
    Packet.prototype.userMoved = null;

    /**
     * Packet chatMessage.
     * @member {IChatMessage|null|undefined} chatMessage
     * @memberof Packet
     * @instance
     */
    Packet.prototype.chatMessage = null;

    /**
     * Packet requestFile.
     * @member {IRequestFile|null|undefined} requestFile
     * @memberof Packet
     * @instance
     */
    Packet.prototype.requestFile = null;

    /**
     * Packet requestedFile.
     * @member {IRequestedFile|null|undefined} requestedFile
     * @memberof Packet
     * @instance
     */
    Packet.prototype.requestedFile = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Packet content.
     * @member {"handshake"|"serverStatus"|"userConnected"|"userDisconnected"|"roomCreated"|"roomClosed"|"joinRoom"|"userMoved"|"chatMessage"|"requestFile"|"requestedFile"|undefined} content
     * @memberof Packet
     * @instance
     */
    Object.defineProperty(Packet.prototype, "content", {
        get: $util.oneOfGetter($oneOfFields = ["handshake", "serverStatus", "userConnected", "userDisconnected", "roomCreated", "roomClosed", "joinRoom", "userMoved", "chatMessage", "requestFile", "requestedFile"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Packet instance using the specified properties.
     * @function create
     * @memberof Packet
     * @static
     * @param {IPacket=} [properties] Properties to set
     * @returns {Packet} Packet instance
     */
    Packet.create = function create(properties) {
        return new Packet(properties);
    };

    /**
     * Encodes the specified Packet message. Does not implicitly {@link Packet.verify|verify} messages.
     * @function encode
     * @memberof Packet
     * @static
     * @param {IPacket} message Packet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Packet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.handshake != null && message.hasOwnProperty("handshake"))
            $root.Handshake.encode(message.handshake, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.serverStatus != null && message.hasOwnProperty("serverStatus"))
            $root.ServerStatus.encode(message.serverStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.userConnected != null && message.hasOwnProperty("userConnected"))
            $root.UserConnected.encode(message.userConnected, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.userDisconnected != null && message.hasOwnProperty("userDisconnected"))
            $root.UserDisconnected.encode(message.userDisconnected, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.roomCreated != null && message.hasOwnProperty("roomCreated"))
            $root.RoomCreated.encode(message.roomCreated, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.roomClosed != null && message.hasOwnProperty("roomClosed"))
            $root.RoomClosed.encode(message.roomClosed, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.joinRoom != null && message.hasOwnProperty("joinRoom"))
            $root.JoinRoom.encode(message.joinRoom, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.userMoved != null && message.hasOwnProperty("userMoved"))
            $root.UserMoved.encode(message.userMoved, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage"))
            $root.ChatMessage.encode(message.chatMessage, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.requestFile != null && message.hasOwnProperty("requestFile"))
            $root.RequestFile.encode(message.requestFile, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.requestedFile != null && message.hasOwnProperty("requestedFile"))
            $root.RequestedFile.encode(message.requestedFile, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Packet message, length delimited. Does not implicitly {@link Packet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Packet
     * @static
     * @param {IPacket} message Packet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Packet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Packet message from the specified reader or buffer.
     * @function decode
     * @memberof Packet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Packet} Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Packet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Packet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.handshake = $root.Handshake.decode(reader, reader.uint32());
                break;
            case 2:
                message.serverStatus = $root.ServerStatus.decode(reader, reader.uint32());
                break;
            case 3:
                message.userConnected = $root.UserConnected.decode(reader, reader.uint32());
                break;
            case 4:
                message.userDisconnected = $root.UserDisconnected.decode(reader, reader.uint32());
                break;
            case 5:
                message.roomCreated = $root.RoomCreated.decode(reader, reader.uint32());
                break;
            case 6:
                message.roomClosed = $root.RoomClosed.decode(reader, reader.uint32());
                break;
            case 7:
                message.joinRoom = $root.JoinRoom.decode(reader, reader.uint32());
                break;
            case 8:
                message.userMoved = $root.UserMoved.decode(reader, reader.uint32());
                break;
            case 9:
                message.chatMessage = $root.ChatMessage.decode(reader, reader.uint32());
                break;
            case 10:
                message.requestFile = $root.RequestFile.decode(reader, reader.uint32());
                break;
            case 11:
                message.requestedFile = $root.RequestedFile.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Packet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Packet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Packet} Packet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Packet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Packet message.
     * @function verify
     * @memberof Packet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Packet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.handshake != null && message.hasOwnProperty("handshake")) {
            properties.content = 1;
            {
                let error = $root.Handshake.verify(message.handshake);
                if (error)
                    return "handshake." + error;
            }
        }
        if (message.serverStatus != null && message.hasOwnProperty("serverStatus")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.ServerStatus.verify(message.serverStatus);
                if (error)
                    return "serverStatus." + error;
            }
        }
        if (message.userConnected != null && message.hasOwnProperty("userConnected")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.UserConnected.verify(message.userConnected);
                if (error)
                    return "userConnected." + error;
            }
        }
        if (message.userDisconnected != null && message.hasOwnProperty("userDisconnected")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.UserDisconnected.verify(message.userDisconnected);
                if (error)
                    return "userDisconnected." + error;
            }
        }
        if (message.roomCreated != null && message.hasOwnProperty("roomCreated")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.RoomCreated.verify(message.roomCreated);
                if (error)
                    return "roomCreated." + error;
            }
        }
        if (message.roomClosed != null && message.hasOwnProperty("roomClosed")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.RoomClosed.verify(message.roomClosed);
                if (error)
                    return "roomClosed." + error;
            }
        }
        if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.JoinRoom.verify(message.joinRoom);
                if (error)
                    return "joinRoom." + error;
            }
        }
        if (message.userMoved != null && message.hasOwnProperty("userMoved")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.UserMoved.verify(message.userMoved);
                if (error)
                    return "userMoved." + error;
            }
        }
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.ChatMessage.verify(message.chatMessage);
                if (error)
                    return "chatMessage." + error;
            }
        }
        if (message.requestFile != null && message.hasOwnProperty("requestFile")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.RequestFile.verify(message.requestFile);
                if (error)
                    return "requestFile." + error;
            }
        }
        if (message.requestedFile != null && message.hasOwnProperty("requestedFile")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                let error = $root.RequestedFile.verify(message.requestedFile);
                if (error)
                    return "requestedFile." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Packet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Packet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Packet} Packet
     */
    Packet.fromObject = function fromObject(object) {
        if (object instanceof $root.Packet)
            return object;
        let message = new $root.Packet();
        if (object.handshake != null) {
            if (typeof object.handshake !== "object")
                throw TypeError(".Packet.handshake: object expected");
            message.handshake = $root.Handshake.fromObject(object.handshake);
        }
        if (object.serverStatus != null) {
            if (typeof object.serverStatus !== "object")
                throw TypeError(".Packet.serverStatus: object expected");
            message.serverStatus = $root.ServerStatus.fromObject(object.serverStatus);
        }
        if (object.userConnected != null) {
            if (typeof object.userConnected !== "object")
                throw TypeError(".Packet.userConnected: object expected");
            message.userConnected = $root.UserConnected.fromObject(object.userConnected);
        }
        if (object.userDisconnected != null) {
            if (typeof object.userDisconnected !== "object")
                throw TypeError(".Packet.userDisconnected: object expected");
            message.userDisconnected = $root.UserDisconnected.fromObject(object.userDisconnected);
        }
        if (object.roomCreated != null) {
            if (typeof object.roomCreated !== "object")
                throw TypeError(".Packet.roomCreated: object expected");
            message.roomCreated = $root.RoomCreated.fromObject(object.roomCreated);
        }
        if (object.roomClosed != null) {
            if (typeof object.roomClosed !== "object")
                throw TypeError(".Packet.roomClosed: object expected");
            message.roomClosed = $root.RoomClosed.fromObject(object.roomClosed);
        }
        if (object.joinRoom != null) {
            if (typeof object.joinRoom !== "object")
                throw TypeError(".Packet.joinRoom: object expected");
            message.joinRoom = $root.JoinRoom.fromObject(object.joinRoom);
        }
        if (object.userMoved != null) {
            if (typeof object.userMoved !== "object")
                throw TypeError(".Packet.userMoved: object expected");
            message.userMoved = $root.UserMoved.fromObject(object.userMoved);
        }
        if (object.chatMessage != null) {
            if (typeof object.chatMessage !== "object")
                throw TypeError(".Packet.chatMessage: object expected");
            message.chatMessage = $root.ChatMessage.fromObject(object.chatMessage);
        }
        if (object.requestFile != null) {
            if (typeof object.requestFile !== "object")
                throw TypeError(".Packet.requestFile: object expected");
            message.requestFile = $root.RequestFile.fromObject(object.requestFile);
        }
        if (object.requestedFile != null) {
            if (typeof object.requestedFile !== "object")
                throw TypeError(".Packet.requestedFile: object expected");
            message.requestedFile = $root.RequestedFile.fromObject(object.requestedFile);
        }
        return message;
    };

    /**
     * Creates a plain object from a Packet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Packet
     * @static
     * @param {Packet} message Packet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Packet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.handshake != null && message.hasOwnProperty("handshake")) {
            object.handshake = $root.Handshake.toObject(message.handshake, options);
            if (options.oneofs)
                object.content = "handshake";
        }
        if (message.serverStatus != null && message.hasOwnProperty("serverStatus")) {
            object.serverStatus = $root.ServerStatus.toObject(message.serverStatus, options);
            if (options.oneofs)
                object.content = "serverStatus";
        }
        if (message.userConnected != null && message.hasOwnProperty("userConnected")) {
            object.userConnected = $root.UserConnected.toObject(message.userConnected, options);
            if (options.oneofs)
                object.content = "userConnected";
        }
        if (message.userDisconnected != null && message.hasOwnProperty("userDisconnected")) {
            object.userDisconnected = $root.UserDisconnected.toObject(message.userDisconnected, options);
            if (options.oneofs)
                object.content = "userDisconnected";
        }
        if (message.roomCreated != null && message.hasOwnProperty("roomCreated")) {
            object.roomCreated = $root.RoomCreated.toObject(message.roomCreated, options);
            if (options.oneofs)
                object.content = "roomCreated";
        }
        if (message.roomClosed != null && message.hasOwnProperty("roomClosed")) {
            object.roomClosed = $root.RoomClosed.toObject(message.roomClosed, options);
            if (options.oneofs)
                object.content = "roomClosed";
        }
        if (message.joinRoom != null && message.hasOwnProperty("joinRoom")) {
            object.joinRoom = $root.JoinRoom.toObject(message.joinRoom, options);
            if (options.oneofs)
                object.content = "joinRoom";
        }
        if (message.userMoved != null && message.hasOwnProperty("userMoved")) {
            object.userMoved = $root.UserMoved.toObject(message.userMoved, options);
            if (options.oneofs)
                object.content = "userMoved";
        }
        if (message.chatMessage != null && message.hasOwnProperty("chatMessage")) {
            object.chatMessage = $root.ChatMessage.toObject(message.chatMessage, options);
            if (options.oneofs)
                object.content = "chatMessage";
        }
        if (message.requestFile != null && message.hasOwnProperty("requestFile")) {
            object.requestFile = $root.RequestFile.toObject(message.requestFile, options);
            if (options.oneofs)
                object.content = "requestFile";
        }
        if (message.requestedFile != null && message.hasOwnProperty("requestedFile")) {
            object.requestedFile = $root.RequestedFile.toObject(message.requestedFile, options);
            if (options.oneofs)
                object.content = "requestedFile";
        }
        return object;
    };

    /**
     * Converts this Packet to JSON.
     * @function toJSON
     * @memberof Packet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Packet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Packet;
})();

export const Handshake = $root.Handshake = (() => {

    /**
     * Properties of a Handshake.
     * @exports IHandshake
     * @interface IHandshake
     * @property {string|null} [username] Handshake username
     */

    /**
     * Constructs a new Handshake.
     * @exports Handshake
     * @classdesc Represents a Handshake.
     * @implements IHandshake
     * @constructor
     * @param {IHandshake=} [properties] Properties to set
     */
    function Handshake(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Handshake username.
     * @member {string} username
     * @memberof Handshake
     * @instance
     */
    Handshake.prototype.username = "";

    /**
     * Creates a new Handshake instance using the specified properties.
     * @function create
     * @memberof Handshake
     * @static
     * @param {IHandshake=} [properties] Properties to set
     * @returns {Handshake} Handshake instance
     */
    Handshake.create = function create(properties) {
        return new Handshake(properties);
    };

    /**
     * Encodes the specified Handshake message. Does not implicitly {@link Handshake.verify|verify} messages.
     * @function encode
     * @memberof Handshake
     * @static
     * @param {IHandshake} message Handshake message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Handshake.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && message.hasOwnProperty("username"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        return writer;
    };

    /**
     * Encodes the specified Handshake message, length delimited. Does not implicitly {@link Handshake.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Handshake
     * @static
     * @param {IHandshake} message Handshake message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Handshake.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Handshake message from the specified reader or buffer.
     * @function decode
     * @memberof Handshake
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Handshake} Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Handshake.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Handshake();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.username = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Handshake message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Handshake
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Handshake} Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Handshake.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Handshake message.
     * @function verify
     * @memberof Handshake
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Handshake.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        return null;
    };

    /**
     * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Handshake
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Handshake} Handshake
     */
    Handshake.fromObject = function fromObject(object) {
        if (object instanceof $root.Handshake)
            return object;
        let message = new $root.Handshake();
        if (object.username != null)
            message.username = String(object.username);
        return message;
    };

    /**
     * Creates a plain object from a Handshake message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Handshake
     * @static
     * @param {Handshake} message Handshake
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Handshake.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.username = "";
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        return object;
    };

    /**
     * Converts this Handshake to JSON.
     * @function toJSON
     * @memberof Handshake
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Handshake.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Handshake;
})();

export const ServerStatus = $root.ServerStatus = (() => {

    /**
     * Properties of a ServerStatus.
     * @exports IServerStatus
     * @interface IServerStatus
     * @property {string|null} [yourUUID] ServerStatus yourUUID
     * @property {Array.<ServerStatus.IRoom>|null} [rooms] ServerStatus rooms
     */

    /**
     * Constructs a new ServerStatus.
     * @exports ServerStatus
     * @classdesc Represents a ServerStatus.
     * @implements IServerStatus
     * @constructor
     * @param {IServerStatus=} [properties] Properties to set
     */
    function ServerStatus(properties) {
        this.rooms = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerStatus yourUUID.
     * @member {string} yourUUID
     * @memberof ServerStatus
     * @instance
     */
    ServerStatus.prototype.yourUUID = "";

    /**
     * ServerStatus rooms.
     * @member {Array.<ServerStatus.IRoom>} rooms
     * @memberof ServerStatus
     * @instance
     */
    ServerStatus.prototype.rooms = $util.emptyArray;

    /**
     * Creates a new ServerStatus instance using the specified properties.
     * @function create
     * @memberof ServerStatus
     * @static
     * @param {IServerStatus=} [properties] Properties to set
     * @returns {ServerStatus} ServerStatus instance
     */
    ServerStatus.create = function create(properties) {
        return new ServerStatus(properties);
    };

    /**
     * Encodes the specified ServerStatus message. Does not implicitly {@link ServerStatus.verify|verify} messages.
     * @function encode
     * @memberof ServerStatus
     * @static
     * @param {IServerStatus} message ServerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.yourUUID != null && message.hasOwnProperty("yourUUID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.yourUUID);
        if (message.rooms != null && message.rooms.length)
            for (let i = 0; i < message.rooms.length; ++i)
                $root.ServerStatus.Room.encode(message.rooms[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerStatus message, length delimited. Does not implicitly {@link ServerStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerStatus
     * @static
     * @param {IServerStatus} message ServerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerStatus message from the specified reader or buffer.
     * @function decode
     * @memberof ServerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerStatus} ServerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerStatus();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.yourUUID = reader.string();
                break;
            case 2:
                if (!(message.rooms && message.rooms.length))
                    message.rooms = [];
                message.rooms.push($root.ServerStatus.Room.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerStatus} ServerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerStatus message.
     * @function verify
     * @memberof ServerStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.yourUUID != null && message.hasOwnProperty("yourUUID"))
            if (!$util.isString(message.yourUUID))
                return "yourUUID: string expected";
        if (message.rooms != null && message.hasOwnProperty("rooms")) {
            if (!Array.isArray(message.rooms))
                return "rooms: array expected";
            for (let i = 0; i < message.rooms.length; ++i) {
                let error = $root.ServerStatus.Room.verify(message.rooms[i]);
                if (error)
                    return "rooms." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerStatus} ServerStatus
     */
    ServerStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerStatus)
            return object;
        let message = new $root.ServerStatus();
        if (object.yourUUID != null)
            message.yourUUID = String(object.yourUUID);
        if (object.rooms) {
            if (!Array.isArray(object.rooms))
                throw TypeError(".ServerStatus.rooms: array expected");
            message.rooms = [];
            for (let i = 0; i < object.rooms.length; ++i) {
                if (typeof object.rooms[i] !== "object")
                    throw TypeError(".ServerStatus.rooms: object expected");
                message.rooms[i] = $root.ServerStatus.Room.fromObject(object.rooms[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerStatus
     * @static
     * @param {ServerStatus} message ServerStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.rooms = [];
        if (options.defaults)
            object.yourUUID = "";
        if (message.yourUUID != null && message.hasOwnProperty("yourUUID"))
            object.yourUUID = message.yourUUID;
        if (message.rooms && message.rooms.length) {
            object.rooms = [];
            for (let j = 0; j < message.rooms.length; ++j)
                object.rooms[j] = $root.ServerStatus.Room.toObject(message.rooms[j], options);
        }
        return object;
    };

    /**
     * Converts this ServerStatus to JSON.
     * @function toJSON
     * @memberof ServerStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ServerStatus.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof ServerStatus
         * @interface IRoom
         * @property {string|null} [name] Room name
         * @property {Array.<IUserConnected>|null} [users] Room users
         */

        /**
         * Constructs a new Room.
         * @memberof ServerStatus
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {ServerStatus.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room name.
         * @member {string} name
         * @memberof ServerStatus.Room
         * @instance
         */
        Room.prototype.name = "";

        /**
         * Room users.
         * @member {Array.<IUserConnected>} users
         * @memberof ServerStatus.Room
         * @instance
         */
        Room.prototype.users = $util.emptyArray;

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof ServerStatus.Room
         * @static
         * @param {ServerStatus.IRoom=} [properties] Properties to set
         * @returns {ServerStatus.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link ServerStatus.Room.verify|verify} messages.
         * @function encode
         * @memberof ServerStatus.Room
         * @static
         * @param {ServerStatus.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.UserConnected.encode(message.users[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link ServerStatus.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerStatus.Room
         * @static
         * @param {ServerStatus.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof ServerStatus.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerStatus.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerStatus.Room();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.UserConnected.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerStatus.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerStatus.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof ServerStatus.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.UserConnected.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerStatus.Room
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerStatus.Room} Room
         */
        Room.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerStatus.Room)
                return object;
            let message = new $root.ServerStatus.Room();
            if (object.name != null)
                message.name = String(object.name);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ServerStatus.Room.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ServerStatus.Room.users: object expected");
                    message.users[i] = $root.UserConnected.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerStatus.Room
         * @static
         * @param {ServerStatus.Room} message Room
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Room.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.UserConnected.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this Room to JSON.
         * @function toJSON
         * @memberof ServerStatus.Room
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Room.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Room;
    })();

    return ServerStatus;
})();

export const UserConnected = $root.UserConnected = (() => {

    /**
     * Properties of a UserConnected.
     * @exports IUserConnected
     * @interface IUserConnected
     * @property {string|null} [uuid] UserConnected uuid
     * @property {string|null} [username] UserConnected username
     * @property {string|null} [room] UserConnected room
     */

    /**
     * Constructs a new UserConnected.
     * @exports UserConnected
     * @classdesc Represents a UserConnected.
     * @implements IUserConnected
     * @constructor
     * @param {IUserConnected=} [properties] Properties to set
     */
    function UserConnected(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserConnected uuid.
     * @member {string} uuid
     * @memberof UserConnected
     * @instance
     */
    UserConnected.prototype.uuid = "";

    /**
     * UserConnected username.
     * @member {string} username
     * @memberof UserConnected
     * @instance
     */
    UserConnected.prototype.username = "";

    /**
     * UserConnected room.
     * @member {string} room
     * @memberof UserConnected
     * @instance
     */
    UserConnected.prototype.room = "";

    /**
     * Creates a new UserConnected instance using the specified properties.
     * @function create
     * @memberof UserConnected
     * @static
     * @param {IUserConnected=} [properties] Properties to set
     * @returns {UserConnected} UserConnected instance
     */
    UserConnected.create = function create(properties) {
        return new UserConnected(properties);
    };

    /**
     * Encodes the specified UserConnected message. Does not implicitly {@link UserConnected.verify|verify} messages.
     * @function encode
     * @memberof UserConnected
     * @static
     * @param {IUserConnected} message UserConnected message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserConnected.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.username != null && message.hasOwnProperty("username"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
        if (message.room != null && message.hasOwnProperty("room"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.room);
        return writer;
    };

    /**
     * Encodes the specified UserConnected message, length delimited. Does not implicitly {@link UserConnected.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserConnected
     * @static
     * @param {IUserConnected} message UserConnected message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserConnected.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserConnected message from the specified reader or buffer.
     * @function decode
     * @memberof UserConnected
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserConnected} UserConnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserConnected.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserConnected();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                message.username = reader.string();
                break;
            case 3:
                message.room = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserConnected message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserConnected
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserConnected} UserConnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserConnected.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserConnected message.
     * @function verify
     * @memberof UserConnected
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserConnected.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.room != null && message.hasOwnProperty("room"))
            if (!$util.isString(message.room))
                return "room: string expected";
        return null;
    };

    /**
     * Creates a UserConnected message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserConnected
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserConnected} UserConnected
     */
    UserConnected.fromObject = function fromObject(object) {
        if (object instanceof $root.UserConnected)
            return object;
        let message = new $root.UserConnected();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        if (object.username != null)
            message.username = String(object.username);
        if (object.room != null)
            message.room = String(object.room);
        return message;
    };

    /**
     * Creates a plain object from a UserConnected message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserConnected
     * @static
     * @param {UserConnected} message UserConnected
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserConnected.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uuid = "";
            object.username = "";
            object.room = "";
        }
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = message.room;
        return object;
    };

    /**
     * Converts this UserConnected to JSON.
     * @function toJSON
     * @memberof UserConnected
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserConnected.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserConnected;
})();

export const UserDisconnected = $root.UserDisconnected = (() => {

    /**
     * Properties of a UserDisconnected.
     * @exports IUserDisconnected
     * @interface IUserDisconnected
     * @property {string|null} [uuid] UserDisconnected uuid
     * @property {string|null} [reason] UserDisconnected reason
     */

    /**
     * Constructs a new UserDisconnected.
     * @exports UserDisconnected
     * @classdesc Represents a UserDisconnected.
     * @implements IUserDisconnected
     * @constructor
     * @param {IUserDisconnected=} [properties] Properties to set
     */
    function UserDisconnected(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserDisconnected uuid.
     * @member {string} uuid
     * @memberof UserDisconnected
     * @instance
     */
    UserDisconnected.prototype.uuid = "";

    /**
     * UserDisconnected reason.
     * @member {string} reason
     * @memberof UserDisconnected
     * @instance
     */
    UserDisconnected.prototype.reason = "";

    /**
     * Creates a new UserDisconnected instance using the specified properties.
     * @function create
     * @memberof UserDisconnected
     * @static
     * @param {IUserDisconnected=} [properties] Properties to set
     * @returns {UserDisconnected} UserDisconnected instance
     */
    UserDisconnected.create = function create(properties) {
        return new UserDisconnected(properties);
    };

    /**
     * Encodes the specified UserDisconnected message. Does not implicitly {@link UserDisconnected.verify|verify} messages.
     * @function encode
     * @memberof UserDisconnected
     * @static
     * @param {IUserDisconnected} message UserDisconnected message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserDisconnected.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified UserDisconnected message, length delimited. Does not implicitly {@link UserDisconnected.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserDisconnected
     * @static
     * @param {IUserDisconnected} message UserDisconnected message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserDisconnected.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserDisconnected message from the specified reader or buffer.
     * @function decode
     * @memberof UserDisconnected
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserDisconnected} UserDisconnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserDisconnected.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserDisconnected();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                message.reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserDisconnected message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserDisconnected
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserDisconnected} UserDisconnected
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserDisconnected.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserDisconnected message.
     * @function verify
     * @memberof UserDisconnected
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserDisconnected.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        return null;
    };

    /**
     * Creates a UserDisconnected message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserDisconnected
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserDisconnected} UserDisconnected
     */
    UserDisconnected.fromObject = function fromObject(object) {
        if (object instanceof $root.UserDisconnected)
            return object;
        let message = new $root.UserDisconnected();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from a UserDisconnected message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserDisconnected
     * @static
     * @param {UserDisconnected} message UserDisconnected
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserDisconnected.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uuid = "";
            object.reason = "";
        }
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this UserDisconnected to JSON.
     * @function toJSON
     * @memberof UserDisconnected
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserDisconnected.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserDisconnected;
})();

export const RoomCreated = $root.RoomCreated = (() => {

    /**
     * Properties of a RoomCreated.
     * @exports IRoomCreated
     * @interface IRoomCreated
     * @property {string|null} [name] RoomCreated name
     */

    /**
     * Constructs a new RoomCreated.
     * @exports RoomCreated
     * @classdesc Represents a RoomCreated.
     * @implements IRoomCreated
     * @constructor
     * @param {IRoomCreated=} [properties] Properties to set
     */
    function RoomCreated(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomCreated name.
     * @member {string} name
     * @memberof RoomCreated
     * @instance
     */
    RoomCreated.prototype.name = "";

    /**
     * Creates a new RoomCreated instance using the specified properties.
     * @function create
     * @memberof RoomCreated
     * @static
     * @param {IRoomCreated=} [properties] Properties to set
     * @returns {RoomCreated} RoomCreated instance
     */
    RoomCreated.create = function create(properties) {
        return new RoomCreated(properties);
    };

    /**
     * Encodes the specified RoomCreated message. Does not implicitly {@link RoomCreated.verify|verify} messages.
     * @function encode
     * @memberof RoomCreated
     * @static
     * @param {IRoomCreated} message RoomCreated message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomCreated.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified RoomCreated message, length delimited. Does not implicitly {@link RoomCreated.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomCreated
     * @static
     * @param {IRoomCreated} message RoomCreated message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomCreated.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomCreated message from the specified reader or buffer.
     * @function decode
     * @memberof RoomCreated
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomCreated} RoomCreated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomCreated.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomCreated();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomCreated message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomCreated
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomCreated} RoomCreated
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomCreated.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomCreated message.
     * @function verify
     * @memberof RoomCreated
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomCreated.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a RoomCreated message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomCreated
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomCreated} RoomCreated
     */
    RoomCreated.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomCreated)
            return object;
        let message = new $root.RoomCreated();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a RoomCreated message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomCreated
     * @static
     * @param {RoomCreated} message RoomCreated
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomCreated.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this RoomCreated to JSON.
     * @function toJSON
     * @memberof RoomCreated
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomCreated.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomCreated;
})();

export const RoomClosed = $root.RoomClosed = (() => {

    /**
     * Properties of a RoomClosed.
     * @exports IRoomClosed
     * @interface IRoomClosed
     * @property {string|null} [name] RoomClosed name
     */

    /**
     * Constructs a new RoomClosed.
     * @exports RoomClosed
     * @classdesc Represents a RoomClosed.
     * @implements IRoomClosed
     * @constructor
     * @param {IRoomClosed=} [properties] Properties to set
     */
    function RoomClosed(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomClosed name.
     * @member {string} name
     * @memberof RoomClosed
     * @instance
     */
    RoomClosed.prototype.name = "";

    /**
     * Creates a new RoomClosed instance using the specified properties.
     * @function create
     * @memberof RoomClosed
     * @static
     * @param {IRoomClosed=} [properties] Properties to set
     * @returns {RoomClosed} RoomClosed instance
     */
    RoomClosed.create = function create(properties) {
        return new RoomClosed(properties);
    };

    /**
     * Encodes the specified RoomClosed message. Does not implicitly {@link RoomClosed.verify|verify} messages.
     * @function encode
     * @memberof RoomClosed
     * @static
     * @param {IRoomClosed} message RoomClosed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomClosed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified RoomClosed message, length delimited. Does not implicitly {@link RoomClosed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomClosed
     * @static
     * @param {IRoomClosed} message RoomClosed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomClosed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomClosed message from the specified reader or buffer.
     * @function decode
     * @memberof RoomClosed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomClosed} RoomClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomClosed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomClosed();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomClosed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomClosed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomClosed} RoomClosed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomClosed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomClosed message.
     * @function verify
     * @memberof RoomClosed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomClosed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a RoomClosed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomClosed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomClosed} RoomClosed
     */
    RoomClosed.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomClosed)
            return object;
        let message = new $root.RoomClosed();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a RoomClosed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomClosed
     * @static
     * @param {RoomClosed} message RoomClosed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomClosed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this RoomClosed to JSON.
     * @function toJSON
     * @memberof RoomClosed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomClosed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoomClosed;
})();

export const JoinRoom = $root.JoinRoom = (() => {

    /**
     * Properties of a JoinRoom.
     * @exports IJoinRoom
     * @interface IJoinRoom
     * @property {string|null} [name] JoinRoom name
     */

    /**
     * Constructs a new JoinRoom.
     * @exports JoinRoom
     * @classdesc Represents a JoinRoom.
     * @implements IJoinRoom
     * @constructor
     * @param {IJoinRoom=} [properties] Properties to set
     */
    function JoinRoom(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoom name.
     * @member {string} name
     * @memberof JoinRoom
     * @instance
     */
    JoinRoom.prototype.name = "";

    /**
     * Creates a new JoinRoom instance using the specified properties.
     * @function create
     * @memberof JoinRoom
     * @static
     * @param {IJoinRoom=} [properties] Properties to set
     * @returns {JoinRoom} JoinRoom instance
     */
    JoinRoom.create = function create(properties) {
        return new JoinRoom(properties);
    };

    /**
     * Encodes the specified JoinRoom message. Does not implicitly {@link JoinRoom.verify|verify} messages.
     * @function encode
     * @memberof JoinRoom
     * @static
     * @param {IJoinRoom} message JoinRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified JoinRoom message, length delimited. Does not implicitly {@link JoinRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoom
     * @static
     * @param {IJoinRoom} message JoinRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoom message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoom} JoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoom.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoom();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoom} JoinRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinRoom message.
     * @function verify
     * @memberof JoinRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a JoinRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JoinRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JoinRoom} JoinRoom
     */
    JoinRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.JoinRoom)
            return object;
        let message = new $root.JoinRoom();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a JoinRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JoinRoom
     * @static
     * @param {JoinRoom} message JoinRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JoinRoom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this JoinRoom to JSON.
     * @function toJSON
     * @memberof JoinRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JoinRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JoinRoom;
})();

export const UserMoved = $root.UserMoved = (() => {

    /**
     * Properties of a UserMoved.
     * @exports IUserMoved
     * @interface IUserMoved
     * @property {string|null} [uuid] UserMoved uuid
     * @property {string|null} [room] UserMoved room
     */

    /**
     * Constructs a new UserMoved.
     * @exports UserMoved
     * @classdesc Represents a UserMoved.
     * @implements IUserMoved
     * @constructor
     * @param {IUserMoved=} [properties] Properties to set
     */
    function UserMoved(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserMoved uuid.
     * @member {string} uuid
     * @memberof UserMoved
     * @instance
     */
    UserMoved.prototype.uuid = "";

    /**
     * UserMoved room.
     * @member {string} room
     * @memberof UserMoved
     * @instance
     */
    UserMoved.prototype.room = "";

    /**
     * Creates a new UserMoved instance using the specified properties.
     * @function create
     * @memberof UserMoved
     * @static
     * @param {IUserMoved=} [properties] Properties to set
     * @returns {UserMoved} UserMoved instance
     */
    UserMoved.create = function create(properties) {
        return new UserMoved(properties);
    };

    /**
     * Encodes the specified UserMoved message. Does not implicitly {@link UserMoved.verify|verify} messages.
     * @function encode
     * @memberof UserMoved
     * @static
     * @param {IUserMoved} message UserMoved message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserMoved.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.room != null && message.hasOwnProperty("room"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.room);
        return writer;
    };

    /**
     * Encodes the specified UserMoved message, length delimited. Does not implicitly {@link UserMoved.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserMoved
     * @static
     * @param {IUserMoved} message UserMoved message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserMoved.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserMoved message from the specified reader or buffer.
     * @function decode
     * @memberof UserMoved
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserMoved} UserMoved
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserMoved.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserMoved();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                message.room = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserMoved message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserMoved
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserMoved} UserMoved
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserMoved.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserMoved message.
     * @function verify
     * @memberof UserMoved
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserMoved.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        if (message.room != null && message.hasOwnProperty("room"))
            if (!$util.isString(message.room))
                return "room: string expected";
        return null;
    };

    /**
     * Creates a UserMoved message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserMoved
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserMoved} UserMoved
     */
    UserMoved.fromObject = function fromObject(object) {
        if (object instanceof $root.UserMoved)
            return object;
        let message = new $root.UserMoved();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        if (object.room != null)
            message.room = String(object.room);
        return message;
    };

    /**
     * Creates a plain object from a UserMoved message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserMoved
     * @static
     * @param {UserMoved} message UserMoved
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserMoved.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uuid = "";
            object.room = "";
        }
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = message.room;
        return object;
    };

    /**
     * Converts this UserMoved to JSON.
     * @function toJSON
     * @memberof UserMoved
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserMoved.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserMoved;
})();

export const ChatMessage = $root.ChatMessage = (() => {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {string|null} [userUUID] ChatMessage userUUID
     * @property {string|null} [textMessage] ChatMessage textMessage
     * @property {ChatMessage.IFileFull|null} [fullFile] ChatMessage fullFile
     * @property {ChatMessage.IFileHeader|null} [fileHeader] ChatMessage fileHeader
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage userUUID.
     * @member {string} userUUID
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.userUUID = "";

    /**
     * ChatMessage textMessage.
     * @member {string} textMessage
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.textMessage = "";

    /**
     * ChatMessage fullFile.
     * @member {ChatMessage.IFileFull|null|undefined} fullFile
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.fullFile = null;

    /**
     * ChatMessage fileHeader.
     * @member {ChatMessage.IFileHeader|null|undefined} fileHeader
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.fileHeader = null;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userUUID != null && message.hasOwnProperty("userUUID"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userUUID);
        if (message.textMessage != null && message.hasOwnProperty("textMessage"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.textMessage);
        if (message.fullFile != null && message.hasOwnProperty("fullFile"))
            $root.ChatMessage.FileFull.encode(message.fullFile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.fileHeader != null && message.hasOwnProperty("fileHeader"))
            $root.ChatMessage.FileHeader.encode(message.fileHeader, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userUUID = reader.string();
                break;
            case 2:
                message.textMessage = reader.string();
                break;
            case 3:
                message.fullFile = $root.ChatMessage.FileFull.decode(reader, reader.uint32());
                break;
            case 4:
                message.fileHeader = $root.ChatMessage.FileHeader.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userUUID != null && message.hasOwnProperty("userUUID"))
            if (!$util.isString(message.userUUID))
                return "userUUID: string expected";
        if (message.textMessage != null && message.hasOwnProperty("textMessage"))
            if (!$util.isString(message.textMessage))
                return "textMessage: string expected";
        if (message.fullFile != null && message.hasOwnProperty("fullFile")) {
            let error = $root.ChatMessage.FileFull.verify(message.fullFile);
            if (error)
                return "fullFile." + error;
        }
        if (message.fileHeader != null && message.hasOwnProperty("fileHeader")) {
            let error = $root.ChatMessage.FileHeader.verify(message.fileHeader);
            if (error)
                return "fileHeader." + error;
        }
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        let message = new $root.ChatMessage();
        if (object.userUUID != null)
            message.userUUID = String(object.userUUID);
        if (object.textMessage != null)
            message.textMessage = String(object.textMessage);
        if (object.fullFile != null) {
            if (typeof object.fullFile !== "object")
                throw TypeError(".ChatMessage.fullFile: object expected");
            message.fullFile = $root.ChatMessage.FileFull.fromObject(object.fullFile);
        }
        if (object.fileHeader != null) {
            if (typeof object.fileHeader !== "object")
                throw TypeError(".ChatMessage.fileHeader: object expected");
            message.fileHeader = $root.ChatMessage.FileHeader.fromObject(object.fileHeader);
        }
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.userUUID = "";
            object.textMessage = "";
            object.fullFile = null;
            object.fileHeader = null;
        }
        if (message.userUUID != null && message.hasOwnProperty("userUUID"))
            object.userUUID = message.userUUID;
        if (message.textMessage != null && message.hasOwnProperty("textMessage"))
            object.textMessage = message.textMessage;
        if (message.fullFile != null && message.hasOwnProperty("fullFile"))
            object.fullFile = $root.ChatMessage.FileFull.toObject(message.fullFile, options);
        if (message.fileHeader != null && message.hasOwnProperty("fileHeader"))
            object.fileHeader = $root.ChatMessage.FileHeader.toObject(message.fileHeader, options);
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ChatMessage.FileFull = (function() {

        /**
         * Properties of a FileFull.
         * @memberof ChatMessage
         * @interface IFileFull
         * @property {string|null} [filename] FileFull filename
         * @property {Uint8Array|null} [content] FileFull content
         */

        /**
         * Constructs a new FileFull.
         * @memberof ChatMessage
         * @classdesc Represents a FileFull.
         * @implements IFileFull
         * @constructor
         * @param {ChatMessage.IFileFull=} [properties] Properties to set
         */
        function FileFull(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileFull filename.
         * @member {string} filename
         * @memberof ChatMessage.FileFull
         * @instance
         */
        FileFull.prototype.filename = "";

        /**
         * FileFull content.
         * @member {Uint8Array} content
         * @memberof ChatMessage.FileFull
         * @instance
         */
        FileFull.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new FileFull instance using the specified properties.
         * @function create
         * @memberof ChatMessage.FileFull
         * @static
         * @param {ChatMessage.IFileFull=} [properties] Properties to set
         * @returns {ChatMessage.FileFull} FileFull instance
         */
        FileFull.create = function create(properties) {
            return new FileFull(properties);
        };

        /**
         * Encodes the specified FileFull message. Does not implicitly {@link ChatMessage.FileFull.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.FileFull
         * @static
         * @param {ChatMessage.IFileFull} message FileFull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileFull.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
            return writer;
        };

        /**
         * Encodes the specified FileFull message, length delimited. Does not implicitly {@link ChatMessage.FileFull.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.FileFull
         * @static
         * @param {ChatMessage.IFileFull} message FileFull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileFull.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileFull message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.FileFull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.FileFull} FileFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileFull.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.FileFull();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileFull message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.FileFull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.FileFull} FileFull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileFull.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileFull message.
         * @function verify
         * @memberof ChatMessage.FileFull
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileFull.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            return null;
        };

        /**
         * Creates a FileFull message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.FileFull
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.FileFull} FileFull
         */
        FileFull.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.FileFull)
                return object;
            let message = new $root.ChatMessage.FileFull();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length)
                    message.content = object.content;
            return message;
        };

        /**
         * Creates a plain object from a FileFull message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.FileFull
         * @static
         * @param {ChatMessage.FileFull} message FileFull
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileFull.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.filename = "";
                object.content = options.bytes === String ? "" : [];
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            return object;
        };

        /**
         * Converts this FileFull to JSON.
         * @function toJSON
         * @memberof ChatMessage.FileFull
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileFull.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FileFull;
    })();

    ChatMessage.FileHeader = (function() {

        /**
         * Properties of a FileHeader.
         * @memberof ChatMessage
         * @interface IFileHeader
         * @property {string|null} [uuid] FileHeader uuid
         * @property {string|null} [filename] FileHeader filename
         * @property {Uint8Array|null} [thumbnail] FileHeader thumbnail
         */

        /**
         * Constructs a new FileHeader.
         * @memberof ChatMessage
         * @classdesc Represents a FileHeader.
         * @implements IFileHeader
         * @constructor
         * @param {ChatMessage.IFileHeader=} [properties] Properties to set
         */
        function FileHeader(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileHeader uuid.
         * @member {string} uuid
         * @memberof ChatMessage.FileHeader
         * @instance
         */
        FileHeader.prototype.uuid = "";

        /**
         * FileHeader filename.
         * @member {string} filename
         * @memberof ChatMessage.FileHeader
         * @instance
         */
        FileHeader.prototype.filename = "";

        /**
         * FileHeader thumbnail.
         * @member {Uint8Array} thumbnail
         * @memberof ChatMessage.FileHeader
         * @instance
         */
        FileHeader.prototype.thumbnail = $util.newBuffer([]);

        /**
         * Creates a new FileHeader instance using the specified properties.
         * @function create
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {ChatMessage.IFileHeader=} [properties] Properties to set
         * @returns {ChatMessage.FileHeader} FileHeader instance
         */
        FileHeader.create = function create(properties) {
            return new FileHeader(properties);
        };

        /**
         * Encodes the specified FileHeader message. Does not implicitly {@link ChatMessage.FileHeader.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {ChatMessage.IFileHeader} message FileHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.filename != null && message.hasOwnProperty("filename"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.filename);
            if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.thumbnail);
            return writer;
        };

        /**
         * Encodes the specified FileHeader message, length delimited. Does not implicitly {@link ChatMessage.FileHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {ChatMessage.IFileHeader} message FileHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileHeader message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.FileHeader} FileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.FileHeader();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.thumbnail = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.FileHeader} FileHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileHeader message.
         * @function verify
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
                if (!(message.thumbnail && typeof message.thumbnail.length === "number" || $util.isString(message.thumbnail)))
                    return "thumbnail: buffer expected";
            return null;
        };

        /**
         * Creates a FileHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.FileHeader} FileHeader
         */
        FileHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.FileHeader)
                return object;
            let message = new $root.ChatMessage.FileHeader();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.thumbnail != null)
                if (typeof object.thumbnail === "string")
                    $util.base64.decode(object.thumbnail, message.thumbnail = $util.newBuffer($util.base64.length(object.thumbnail)), 0);
                else if (object.thumbnail.length)
                    message.thumbnail = object.thumbnail;
            return message;
        };

        /**
         * Creates a plain object from a FileHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.FileHeader
         * @static
         * @param {ChatMessage.FileHeader} message FileHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.uuid = "";
                object.filename = "";
                object.thumbnail = options.bytes === String ? "" : [];
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
                object.thumbnail = options.bytes === String ? $util.base64.encode(message.thumbnail, 0, message.thumbnail.length) : options.bytes === Array ? Array.prototype.slice.call(message.thumbnail) : message.thumbnail;
            return object;
        };

        /**
         * Converts this FileHeader to JSON.
         * @function toJSON
         * @memberof ChatMessage.FileHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FileHeader;
    })();

    return ChatMessage;
})();

export const RequestFile = $root.RequestFile = (() => {

    /**
     * Properties of a RequestFile.
     * @exports IRequestFile
     * @interface IRequestFile
     * @property {string|null} [uuid] RequestFile uuid
     */

    /**
     * Constructs a new RequestFile.
     * @exports RequestFile
     * @classdesc Represents a RequestFile.
     * @implements IRequestFile
     * @constructor
     * @param {IRequestFile=} [properties] Properties to set
     */
    function RequestFile(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestFile uuid.
     * @member {string} uuid
     * @memberof RequestFile
     * @instance
     */
    RequestFile.prototype.uuid = "";

    /**
     * Creates a new RequestFile instance using the specified properties.
     * @function create
     * @memberof RequestFile
     * @static
     * @param {IRequestFile=} [properties] Properties to set
     * @returns {RequestFile} RequestFile instance
     */
    RequestFile.create = function create(properties) {
        return new RequestFile(properties);
    };

    /**
     * Encodes the specified RequestFile message. Does not implicitly {@link RequestFile.verify|verify} messages.
     * @function encode
     * @memberof RequestFile
     * @static
     * @param {IRequestFile} message RequestFile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestFile.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        return writer;
    };

    /**
     * Encodes the specified RequestFile message, length delimited. Does not implicitly {@link RequestFile.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestFile
     * @static
     * @param {IRequestFile} message RequestFile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestFile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestFile message from the specified reader or buffer.
     * @function decode
     * @memberof RequestFile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestFile} RequestFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestFile.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestFile();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestFile message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestFile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestFile} RequestFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestFile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestFile message.
     * @function verify
     * @memberof RequestFile
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestFile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        return null;
    };

    /**
     * Creates a RequestFile message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestFile
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestFile} RequestFile
     */
    RequestFile.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestFile)
            return object;
        let message = new $root.RequestFile();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        return message;
    };

    /**
     * Creates a plain object from a RequestFile message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestFile
     * @static
     * @param {RequestFile} message RequestFile
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestFile.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uuid = "";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        return object;
    };

    /**
     * Converts this RequestFile to JSON.
     * @function toJSON
     * @memberof RequestFile
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestFile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestFile;
})();

export const RequestedFile = $root.RequestedFile = (() => {

    /**
     * Properties of a RequestedFile.
     * @exports IRequestedFile
     * @interface IRequestedFile
     * @property {string|null} [uuid] RequestedFile uuid
     * @property {string|null} [filename] RequestedFile filename
     * @property {Uint8Array|null} [content] RequestedFile content
     */

    /**
     * Constructs a new RequestedFile.
     * @exports RequestedFile
     * @classdesc Represents a RequestedFile.
     * @implements IRequestedFile
     * @constructor
     * @param {IRequestedFile=} [properties] Properties to set
     */
    function RequestedFile(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RequestedFile uuid.
     * @member {string} uuid
     * @memberof RequestedFile
     * @instance
     */
    RequestedFile.prototype.uuid = "";

    /**
     * RequestedFile filename.
     * @member {string} filename
     * @memberof RequestedFile
     * @instance
     */
    RequestedFile.prototype.filename = "";

    /**
     * RequestedFile content.
     * @member {Uint8Array} content
     * @memberof RequestedFile
     * @instance
     */
    RequestedFile.prototype.content = $util.newBuffer([]);

    /**
     * Creates a new RequestedFile instance using the specified properties.
     * @function create
     * @memberof RequestedFile
     * @static
     * @param {IRequestedFile=} [properties] Properties to set
     * @returns {RequestedFile} RequestedFile instance
     */
    RequestedFile.create = function create(properties) {
        return new RequestedFile(properties);
    };

    /**
     * Encodes the specified RequestedFile message. Does not implicitly {@link RequestedFile.verify|verify} messages.
     * @function encode
     * @memberof RequestedFile
     * @static
     * @param {IRequestedFile} message RequestedFile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestedFile.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
        if (message.filename != null && message.hasOwnProperty("filename"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.filename);
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
        return writer;
    };

    /**
     * Encodes the specified RequestedFile message, length delimited. Does not implicitly {@link RequestedFile.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RequestedFile
     * @static
     * @param {IRequestedFile} message RequestedFile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RequestedFile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RequestedFile message from the specified reader or buffer.
     * @function decode
     * @memberof RequestedFile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RequestedFile} RequestedFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestedFile.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RequestedFile();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uuid = reader.string();
                break;
            case 2:
                message.filename = reader.string();
                break;
            case 3:
                message.content = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RequestedFile message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RequestedFile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RequestedFile} RequestedFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RequestedFile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RequestedFile message.
     * @function verify
     * @memberof RequestedFile
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RequestedFile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            if (!$util.isString(message.uuid))
                return "uuid: string expected";
        if (message.filename != null && message.hasOwnProperty("filename"))
            if (!$util.isString(message.filename))
                return "filename: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                return "content: buffer expected";
        return null;
    };

    /**
     * Creates a RequestedFile message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RequestedFile
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RequestedFile} RequestedFile
     */
    RequestedFile.fromObject = function fromObject(object) {
        if (object instanceof $root.RequestedFile)
            return object;
        let message = new $root.RequestedFile();
        if (object.uuid != null)
            message.uuid = String(object.uuid);
        if (object.filename != null)
            message.filename = String(object.filename);
        if (object.content != null)
            if (typeof object.content === "string")
                $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
            else if (object.content.length)
                message.content = object.content;
        return message;
    };

    /**
     * Creates a plain object from a RequestedFile message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RequestedFile
     * @static
     * @param {RequestedFile} message RequestedFile
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RequestedFile.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uuid = "";
            object.filename = "";
            object.content = options.bytes === String ? "" : [];
        }
        if (message.uuid != null && message.hasOwnProperty("uuid"))
            object.uuid = message.uuid;
        if (message.filename != null && message.hasOwnProperty("filename"))
            object.filename = message.filename;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
        return object;
    };

    /**
     * Converts this RequestedFile to JSON.
     * @function toJSON
     * @memberof RequestedFile
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RequestedFile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RequestedFile;
})();

export { $root as default };
