import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DateTimeColumn implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default.  */
    private _displayAs?: string | undefined;
    /** Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime  */
    private _format?: string | undefined;
    /**
     * Instantiates a new dateTimeColumn and sets the default values.
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
     * Gets the displayAs property value. How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default.
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Gets the format property value. Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime
     * @returns a string
     */
    public get format() {
        return this._format;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayAs", (o, n) => { (o as unknown as DateTimeColumn).displayAs = n.getStringValue(); }],
            ["format", (o, n) => { (o as unknown as DateTimeColumn).format = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayAs", this.displayAs);
        writer.writeStringValue("format", this.format);
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
     * Sets the displayAs property value. How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default.
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        this._displayAs = value;
    };
    /**
     * Sets the format property value. Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime
     * @param value Value to set for the format property.
     */
    public set format(value: string | undefined) {
        this._format = value;
    };
}
