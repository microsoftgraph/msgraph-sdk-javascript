import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTerm implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Display name of the term.  */
    private _displayName?: string | undefined;
    /** End of the term.  */
    private _endDate?: DateOnly | undefined;
    /** ID of term in the syncing system.  */
    private _externalId?: string | undefined;
    /** Start of the term.  */
    private _startDate?: DateOnly | undefined;
    /**
     * Instantiates a new educationTerm and sets the default values.
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
     * Gets the displayName property value. Display name of the term.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the endDate property value. End of the term.
     * @returns a DateOnly
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Gets the externalId property value. ID of term in the syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Gets the startDate property value. Start of the term.
     * @returns a DateOnly
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as EducationTerm).displayName = n.getStringValue(); }],
            ["endDate", (o, n) => { (o as unknown as EducationTerm).endDate = n.getDateOnlyValue(); }],
            ["externalId", (o, n) => { (o as unknown as EducationTerm).externalId = n.getStringValue(); }],
            ["startDate", (o, n) => { (o as unknown as EducationTerm).startDate = n.getDateOnlyValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateOnlyValue("endDate", this.endDate);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeDateOnlyValue("startDate", this.startDate);
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
     * Sets the displayName property value. Display name of the term.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the endDate property value. End of the term.
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: DateOnly | undefined) {
        this._endDate = value;
    };
    /**
     * Sets the externalId property value. ID of term in the syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Sets the startDate property value. Start of the term.
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: DateOnly | undefined) {
        this._startDate = value;
    };
}
