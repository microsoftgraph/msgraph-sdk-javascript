import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The unique identifier of a message in a Microsoft Teams channel.  */
    private _messageId?: string | undefined;
    /** The ID of the reply message.  */
    private _replyChainMessageId?: string | undefined;
    /** The unique identifier for a thread in Microsoft Teams.  */
    private _threadId?: string | undefined;
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
     * Instantiates a new chatInfo and sets the default values.
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
            ["messageId", (o, n) => { (o as unknown as ChatInfo).messageId = n.getStringValue(); }],
            ["replyChainMessageId", (o, n) => { (o as unknown as ChatInfo).replyChainMessageId = n.getStringValue(); }],
            ["threadId", (o, n) => { (o as unknown as ChatInfo).threadId = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the messageId property value. The unique identifier of a message in a Microsoft Teams channel.
     * @returns a string
     */
    public get messageId() {
        return this._messageId;
    };
    /**
     * Sets the messageId property value. The unique identifier of a message in a Microsoft Teams channel.
     * @param value Value to set for the messageId property.
     */
    public set messageId(value: string | undefined) {
        this._messageId = value;
    };
    /**
     * Gets the replyChainMessageId property value. The ID of the reply message.
     * @returns a string
     */
    public get replyChainMessageId() {
        return this._replyChainMessageId;
    };
    /**
     * Sets the replyChainMessageId property value. The ID of the reply message.
     * @param value Value to set for the replyChainMessageId property.
     */
    public set replyChainMessageId(value: string | undefined) {
        this._replyChainMessageId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("messageId", this.messageId);
        writer.writeStringValue("replyChainMessageId", this.replyChainMessageId);
        writer.writeStringValue("threadId", this.threadId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the threadId property value. The unique identifier for a thread in Microsoft Teams.
     * @returns a string
     */
    public get threadId() {
        return this._threadId;
    };
    /**
     * Sets the threadId property value. The unique identifier for a thread in Microsoft Teams.
     * @param value Value to set for the threadId property.
     */
    public set threadId(value: string | undefined) {
        this._threadId = value;
    };
}
