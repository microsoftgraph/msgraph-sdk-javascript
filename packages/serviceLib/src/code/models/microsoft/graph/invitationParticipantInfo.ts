import {IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitationParticipantInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _hidden?: boolean | undefined;
    private _identity?: IdentitySet | undefined;
    private _participantId?: string | undefined;
    private _removeFromDefaultAudioRoutingGroup?: boolean | undefined;
    /** Optional. The call which the target identity is currently a part of. This call will be dropped once the participant is added.  */
    private _replacesCallId?: string | undefined;
    /**
     * Instantiates a new invitationParticipantInfo and sets the default values.
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
     * Gets the hidden property value. 
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Gets the identity property value. 
     * @returns a identitySet
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Gets the participantId property value. 
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Gets the removeFromDefaultAudioRoutingGroup property value. 
     * @returns a boolean
     */
    public get removeFromDefaultAudioRoutingGroup() {
        return this._removeFromDefaultAudioRoutingGroup;
    };
    /**
     * Gets the replacesCallId property value. Optional. The call which the target identity is currently a part of. This call will be dropped once the participant is added.
     * @returns a string
     */
    public get replacesCallId() {
        return this._replacesCallId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["hidden", (o, n) => { (o as unknown as InvitationParticipantInfo).hidden = n.getBooleanValue(); }],
            ["identity", (o, n) => { (o as unknown as InvitationParticipantInfo).identity = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["participantId", (o, n) => { (o as unknown as InvitationParticipantInfo).participantId = n.getStringValue(); }],
            ["removeFromDefaultAudioRoutingGroup", (o, n) => { (o as unknown as InvitationParticipantInfo).removeFromDefaultAudioRoutingGroup = n.getBooleanValue(); }],
            ["replacesCallId", (o, n) => { (o as unknown as InvitationParticipantInfo).replacesCallId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
        writer.writeStringValue("participantId", this.participantId);
        writer.writeBooleanValue("removeFromDefaultAudioRoutingGroup", this.removeFromDefaultAudioRoutingGroup);
        writer.writeStringValue("replacesCallId", this.replacesCallId);
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
     * Sets the hidden property value. 
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Sets the identity property value. 
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        this._identity = value;
    };
    /**
     * Sets the participantId property value. 
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        this._participantId = value;
    };
    /**
     * Sets the removeFromDefaultAudioRoutingGroup property value. 
     * @param value Value to set for the removeFromDefaultAudioRoutingGroup property.
     */
    public set removeFromDefaultAudioRoutingGroup(value: boolean | undefined) {
        this._removeFromDefaultAudioRoutingGroup = value;
    };
    /**
     * Sets the replacesCallId property value. Optional. The call which the target identity is currently a part of. This call will be dropped once the participant is added.
     * @param value Value to set for the replacesCallId property.
     */
    public set replacesCallId(value: string | undefined) {
        this._replacesCallId = value;
    };
}
