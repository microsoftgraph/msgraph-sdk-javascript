import {InvitationParticipantInfo, ParticipantInfo} from '../../../../models/microsoft/graph/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/microsoft/graph/createInvitationParticipantInfoFromDiscriminatorValue';
import {createParticipantInfoFromDiscriminatorValue} from '../../../../models/microsoft/graph/createParticipantInfoFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the transfer method.  */
export class TransferRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _transferee?: ParticipantInfo | undefined;
    private _transferTarget?: InvitationParticipantInfo | undefined;
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
     * Instantiates a new transferRequestBody and sets the default values.
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
            ["transferee", (o, n) => { (o as unknown as TransferRequestBody).transferee = n.getObjectValue<ParticipantInfo>(createParticipantInfoFromDiscriminatorValue); }],
            ["transferTarget", (o, n) => { (o as unknown as TransferRequestBody).transferTarget = n.getObjectValue<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ParticipantInfo>("transferee", this.transferee);
        writer.writeObjectValue<InvitationParticipantInfo>("transferTarget", this.transferTarget);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the transferee property value. 
     * @returns a participantInfo
     */
    public get transferee() {
        return this._transferee;
    };
    /**
     * Sets the transferee property value. 
     * @param value Value to set for the transferee property.
     */
    public set transferee(value: ParticipantInfo | undefined) {
        this._transferee = value;
    };
    /**
     * Gets the transferTarget property value. 
     * @returns a invitationParticipantInfo
     */
    public get transferTarget() {
        return this._transferTarget;
    };
    /**
     * Sets the transferTarget property value. 
     * @param value Value to set for the transferTarget property.
     */
    public set transferTarget(value: InvitationParticipantInfo | undefined) {
        this._transferTarget = value;
    };
}
