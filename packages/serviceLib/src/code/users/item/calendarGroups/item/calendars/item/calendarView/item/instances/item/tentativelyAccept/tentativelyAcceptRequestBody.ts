import {TimeSlot} from '../../../../../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TentativelyAcceptRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _comment?: string | undefined;
    private _proposedNewTime?: TimeSlot | undefined;
    private _sendResponse?: boolean | undefined;
    /**
     * Instantiates a new tentativelyAcceptRequestBody and sets the default values.
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
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Gets the proposedNewTime property value. 
     * @returns a timeSlot
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Gets the sendResponse property value. 
     * @returns a boolean
     */
    public get sendResponse() {
        return this._sendResponse;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["comment", (o, n) => { (o as unknown as TentativelyAcceptRequestBody).comment = n.getStringValue(); }],
            ["proposedNewTime", (o, n) => { (o as unknown as TentativelyAcceptRequestBody).proposedNewTime = n.getObjectValue<TimeSlot>(TimeSlot); }],
            ["sendResponse", (o, n) => { (o as unknown as TentativelyAcceptRequestBody).sendResponse = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("comment", this.comment);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", this.proposedNewTime);
        writer.writeBooleanValue("sendResponse", this.sendResponse);
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
     * Sets the comment property value. 
     * @param value Value to set for the Comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Sets the proposedNewTime property value. 
     * @param value Value to set for the ProposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        this._proposedNewTime = value;
    };
    /**
     * Sets the sendResponse property value. 
     * @param value Value to set for the SendResponse property.
     */
    public set sendResponse(value: boolean | undefined) {
        this._sendResponse = value;
    };
}
