import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CheckinRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _checkInAs?: string | undefined;
    private _comment?: string | undefined;
    /**
     * Instantiates a new checkinRequestBody and sets the default values.
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
     * Gets the checkInAs property value. 
     * @returns a string
     */
    public get checkInAs() {
        return this._checkInAs;
    };
    /**
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["checkInAs", (o, n) => { (o as unknown as CheckinRequestBody).checkInAs = n.getStringValue(); }],
            ["comment", (o, n) => { (o as unknown as CheckinRequestBody).comment = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("checkInAs", this.checkInAs);
        writer.writeStringValue("comment", this.comment);
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
     * Sets the checkInAs property value. 
     * @param value Value to set for the checkInAs property.
     */
    public set checkInAs(value: string | undefined) {
        this._checkInAs = value;
    };
    /**
     * Sets the comment property value. 
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
}
