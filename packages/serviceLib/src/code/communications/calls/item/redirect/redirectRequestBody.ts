import {InvitationParticipantInfo} from '../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RedirectRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _callbackUri?: string | undefined;
    private _targets?: InvitationParticipantInfo[] | undefined;
    private _timeout?: number | undefined;
    /**
     * Instantiates a new redirectRequestBody and sets the default values.
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
     * Gets the callbackUri property value. 
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Gets the targets property value. 
     * @returns a invitationParticipantInfo
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Gets the timeout property value. 
     * @returns a integer
     */
    public get timeout() {
        return this._timeout;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["callbackUri", (o, n) => { (o as unknown as RedirectRequestBody).callbackUri = n.getStringValue(); }],
            ["targets", (o, n) => { (o as unknown as RedirectRequestBody).targets = n.getCollectionOfObjectValues<InvitationParticipantInfo>(InvitationParticipantInfo); }],
            ["timeout", (o, n) => { (o as unknown as RedirectRequestBody).timeout = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("targets", this.targets);
        writer.writeNumberValue("timeout", this.timeout);
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
     * Sets the callbackUri property value. 
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        this._callbackUri = value;
    };
    /**
     * Sets the targets property value. 
     * @param value Value to set for the targets property.
     */
    public set targets(value: InvitationParticipantInfo[] | undefined) {
        this._targets = value;
    };
    /**
     * Sets the timeout property value. 
     * @param value Value to set for the timeout property.
     */
    public set timeout(value: number | undefined) {
        this._timeout = value;
    };
}
