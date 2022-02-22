import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelIdentity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The identity of the channel in which the message was posted.  */
    private _channelId?: string | undefined;
    /** The identity of the team in which the message was posted.  */
    private _teamId?: string | undefined;
    /**
     * Instantiates a new channelIdentity and sets the default values.
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
     * Gets the channelId property value. The identity of the channel in which the message was posted.
     * @returns a string
     */
    public get channelId() {
        return this._channelId;
    };
    /**
     * Gets the teamId property value. The identity of the team in which the message was posted.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["channelId", (o, n) => { (o as unknown as ChannelIdentity).channelId = n.getStringValue(); }],
            ["teamId", (o, n) => { (o as unknown as ChannelIdentity).teamId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("channelId", this.channelId);
        writer.writeStringValue("teamId", this.teamId);
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
     * Sets the channelId property value. The identity of the channel in which the message was posted.
     * @param value Value to set for the channelId property.
     */
    public set channelId(value: string | undefined) {
        this._channelId = value;
    };
    /**
     * Sets the teamId property value. The identity of the team in which the message was posted.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
