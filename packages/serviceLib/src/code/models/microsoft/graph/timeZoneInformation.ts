import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeZoneInformation implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** An identifier for the time zone.  */
    private _alias?: string | undefined;
    /** A display string that represents the time zone.  */
    private _displayName?: string | undefined;
    /**
     * Instantiates a new TimeZoneInformation and sets the default values.
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
     * Gets the alias property value. An identifier for the time zone.
     * @returns a string
     */
    public get alias() {
        return this._alias;
    };
    /**
     * Gets the displayName property value. A display string that represents the time zone.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["alias", (o, n) => { (o as unknown as TimeZoneInformation).alias = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as TimeZoneInformation).displayName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("alias", this.alias);
        writer.writeStringValue("displayName", this.displayName);
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
     * Sets the alias property value. An identifier for the time zone.
     * @param value Value to set for the alias property.
     */
    public set alias(value: string | undefined) {
        this._alias = value;
    };
    /**
     * Sets the displayName property value. A display string that represents the time zone.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
}
