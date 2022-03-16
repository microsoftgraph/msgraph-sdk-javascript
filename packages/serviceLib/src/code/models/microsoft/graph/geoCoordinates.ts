import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GeoCoordinates implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Optional. The altitude (height), in feet,  above sea level for the item. Read-only.  */
    private _altitude?: number | undefined;
    /** Optional. The latitude, in decimal, for the item. Read-only.  */
    private _latitude?: number | undefined;
    /** Optional. The longitude, in decimal, for the item. Read-only.  */
    private _longitude?: number | undefined;
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
     * Gets the altitude property value. Optional. The altitude (height), in feet,  above sea level for the item. Read-only.
     * @returns a double
     */
    public get altitude() {
        return this._altitude;
    };
    /**
     * Sets the altitude property value. Optional. The altitude (height), in feet,  above sea level for the item. Read-only.
     * @param value Value to set for the altitude property.
     */
    public set altitude(value: number | undefined) {
        this._altitude = value;
    };
    /**
     * Instantiates a new geoCoordinates and sets the default values.
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
            ["altitude", (o, n) => { (o as unknown as GeoCoordinates).altitude = n.getNumberValue(); }],
            ["latitude", (o, n) => { (o as unknown as GeoCoordinates).latitude = n.getNumberValue(); }],
            ["longitude", (o, n) => { (o as unknown as GeoCoordinates).longitude = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the latitude property value. Optional. The latitude, in decimal, for the item. Read-only.
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Sets the latitude property value. Optional. The latitude, in decimal, for the item. Read-only.
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Gets the longitude property value. Optional. The longitude, in decimal, for the item. Read-only.
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * Sets the longitude property value. Optional. The longitude, in decimal, for the item. Read-only.
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("altitude", this.altitude);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeAdditionalData(this.additionalData);
    };
}
