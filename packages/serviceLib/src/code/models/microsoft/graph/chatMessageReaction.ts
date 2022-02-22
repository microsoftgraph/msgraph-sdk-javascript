import {ChatMessageReactionIdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageReaction implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _createdDateTime?: Date | undefined;
    /** Supported values are like, angry, sad, laugh, heart, surprised.  */
    private _reactionType?: string | undefined;
    private _user?: ChatMessageReactionIdentitySet | undefined;
    /**
     * Instantiates a new chatMessageReaction and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the reactionType property value. Supported values are like, angry, sad, laugh, heart, surprised.
     * @returns a string
     */
    public get reactionType() {
        return this._reactionType;
    };
    /**
     * Gets the user property value. 
     * @returns a chatMessageReactionIdentitySet
     */
    public get user() {
        return this._user;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["createdDateTime", (o, n) => { (o as unknown as ChatMessageReaction).createdDateTime = n.getDateValue(); }],
            ["reactionType", (o, n) => { (o as unknown as ChatMessageReaction).reactionType = n.getStringValue(); }],
            ["user", (o, n) => { (o as unknown as ChatMessageReaction).user = n.getObjectValue<ChatMessageReactionIdentitySet>(ChatMessageReactionIdentitySet); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("reactionType", this.reactionType);
        writer.writeObjectValue<ChatMessageReactionIdentitySet>("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the reactionType property value. Supported values are like, angry, sad, laugh, heart, surprised.
     * @param value Value to set for the reactionType property.
     */
    public set reactionType(value: string | undefined) {
        this._reactionType = value;
    };
    /**
     * Sets the user property value. 
     * @param value Value to set for the user property.
     */
    public set user(value: ChatMessageReactionIdentitySet | undefined) {
        this._user = value;
    };
}
