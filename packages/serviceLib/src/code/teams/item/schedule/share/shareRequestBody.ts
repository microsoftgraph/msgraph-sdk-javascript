import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShareRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _endDateTime?: Date | undefined;
    private _notifyTeam?: boolean | undefined;
    private _startDateTime?: Date | undefined;
    /**
     * Instantiates a new shareRequestBody and sets the default values.
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
     * Gets the endDateTime property value. 
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the notifyTeam property value. 
     * @returns a boolean
     */
    public get notifyTeam() {
        return this._notifyTeam;
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endDateTime", (o, n) => { (o as unknown as ShareRequestBody).endDateTime = n.getDateValue(); }],
            ["notifyTeam", (o, n) => { (o as unknown as ShareRequestBody).notifyTeam = n.getBooleanValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as ShareRequestBody).startDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeBooleanValue("notifyTeam", this.notifyTeam);
        writer.writeDateValue("startDateTime", this.startDateTime);
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
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the notifyTeam property value. 
     * @param value Value to set for the notifyTeam property.
     */
    public set notifyTeam(value: boolean | undefined) {
        this._notifyTeam = value;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
