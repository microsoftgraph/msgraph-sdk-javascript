import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreControlStateUpdate implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _assignedTo?: string | undefined;
    private _comment?: string | undefined;
    private _state?: string | undefined;
    private _updatedBy?: string | undefined;
    private _updatedDateTime?: Date | undefined;
    /**
     * Instantiates a new secureScoreControlStateUpdate and sets the default values.
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
     * Gets the assignedTo property value. 
     * @returns a string
     */
    public get assignedTo() {
        return this._assignedTo;
    };
    /**
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Gets the state property value. 
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the updatedBy property value. 
     * @returns a string
     */
    public get updatedBy() {
        return this._updatedBy;
    };
    /**
     * Gets the updatedDateTime property value. 
     * @returns a Date
     */
    public get updatedDateTime() {
        return this._updatedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["assignedTo", (o, n) => { (o as unknown as SecureScoreControlStateUpdate).assignedTo = n.getStringValue(); }],
            ["comment", (o, n) => { (o as unknown as SecureScoreControlStateUpdate).comment = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as SecureScoreControlStateUpdate).state = n.getStringValue(); }],
            ["updatedBy", (o, n) => { (o as unknown as SecureScoreControlStateUpdate).updatedBy = n.getStringValue(); }],
            ["updatedDateTime", (o, n) => { (o as unknown as SecureScoreControlStateUpdate).updatedDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("updatedBy", this.updatedBy);
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
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
     * Sets the assignedTo property value. 
     * @param value Value to set for the assignedTo property.
     */
    public set assignedTo(value: string | undefined) {
        this._assignedTo = value;
    };
    /**
     * Sets the comment property value. 
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Sets the state property value. 
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Sets the updatedBy property value. 
     * @param value Value to set for the updatedBy property.
     */
    public set updatedBy(value: string | undefined) {
        this._updatedBy = value;
    };
    /**
     * Sets the updatedDateTime property value. 
     * @param value Value to set for the updatedDateTime property.
     */
    public set updatedDateTime(value: Date | undefined) {
        this._updatedDateTime = value;
    };
}
