import {createChatMessageMentionedIdentitySetFromDiscriminatorValue} from './createChatMessageMentionedIdentitySetFromDiscriminatorValue';
import {ChatMessageMentionedIdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageMention implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.  */
    private _id?: number | undefined;
    /** The entity (user, application, team, or channel) that was @mentioned.  */
    private _mentioned?: ChatMessageMentionedIdentitySet | undefined;
    /** String used to represent the mention. For example, a user's display name, a team name.  */
    private _mentionText?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new chatMessageMention and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["id", (o, n) => { (o as unknown as ChatMessageMention).id = n.getNumberValue(); }],
            ["mentioned", (o, n) => { (o as unknown as ChatMessageMention).mentioned = n.getObjectValue<ChatMessageMentionedIdentitySet>(createChatMessageMentionedIdentitySetFromDiscriminatorValue); }],
            ["mentionText", (o, n) => { (o as unknown as ChatMessageMention).mentionText = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the id property value. Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     * @returns a integer
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     * @param value Value to set for the id property.
     */
    public set id(value: number | undefined) {
        this._id = value;
    };
    /**
     * Gets the mentioned property value. The entity (user, application, team, or channel) that was @mentioned.
     * @returns a chatMessageMentionedIdentitySet
     */
    public get mentioned() {
        return this._mentioned;
    };
    /**
     * Sets the mentioned property value. The entity (user, application, team, or channel) that was @mentioned.
     * @param value Value to set for the mentioned property.
     */
    public set mentioned(value: ChatMessageMentionedIdentitySet | undefined) {
        this._mentioned = value;
    };
    /**
     * Gets the mentionText property value. String used to represent the mention. For example, a user's display name, a team name.
     * @returns a string
     */
    public get mentionText() {
        return this._mentionText;
    };
    /**
     * Sets the mentionText property value. String used to represent the mention. For example, a user's display name, a team name.
     * @param value Value to set for the mentionText property.
     */
    public set mentionText(value: string | undefined) {
        this._mentionText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("id", this.id);
        writer.writeObjectValue<ChatMessageMentionedIdentitySet>("mentioned", this.mentioned);
        writer.writeStringValue("mentionText", this.mentionText);
        writer.writeAdditionalData(this.additionalData);
    };
}
