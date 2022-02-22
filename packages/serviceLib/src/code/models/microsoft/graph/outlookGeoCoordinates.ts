import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookGeoCoordinates implements Parsable {
    /** The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude and longitude are accurate to within 50 meters.  */
    private _accuracy?: number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The altitude of the location.  */
    private _altitude?: number | undefined;
    /** The accuracy of the altitude.  */
    private _altitudeAccuracy?: number | undefined;
    /** The latitude of the location.  */
    private _latitude?: number | undefined;
    /** The longitude of the location.  */
    private _longitude?: number | undefined;
    /**
     * Instantiates a new outlookGeoCoordinates and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the accuracy property value. The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude and longitude are accurate to within 50 meters.
     * @returns a double
     */
    public get accuracy() {
        return this._accuracy;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the altitude property value. The altitude of the location.
     * @returns a double
     */
    public get altitude() {
        return this._altitude;
    };
    /**
     * Gets the altitudeAccuracy property value. The accuracy of the altitude.
     * @returns a double
     */
    public get altitudeAccuracy() {
        return this._altitudeAccuracy;
    };
    /**
     * Gets the latitude property value. The latitude of the location.
     * @returns a double
     */
    public get latitude() {
        return this._latitude;
    };
    /**
     * Gets the longitude property value. The longitude of the location.
     * @returns a double
     */
    public get longitude() {
        return this._longitude;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["accuracy", (o, n) => { (o as unknown as OutlookGeoCoordinates).accuracy = n.getNumberValue(); }],
            ["altitude", (o, n) => { (o as unknown as OutlookGeoCoordinates).altitude = n.getNumberValue(); }],
            ["altitudeAccuracy", (o, n) => { (o as unknown as OutlookGeoCoordinates).altitudeAccuracy = n.getNumberValue(); }],
            ["latitude", (o, n) => { (o as unknown as OutlookGeoCoordinates).latitude = n.getNumberValue(); }],
            ["longitude", (o, n) => { (o as unknown as OutlookGeoCoordinates).longitude = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("accuracy", this.accuracy);
        writer.writeNumberValue("altitude", this.altitude);
        writer.writeNumberValue("altitudeAccuracy", this.altitudeAccuracy);
        writer.writeNumberValue("latitude", this.latitude);
        writer.writeNumberValue("longitude", this.longitude);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the accuracy property value. The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude and longitude are accurate to within 50 meters.
     * @param value Value to set for the accuracy property.
     */
    public set accuracy(value: number | undefined) {
        this._accuracy = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the altitude property value. The altitude of the location.
     * @param value Value to set for the altitude property.
     */
    public set altitude(value: number | undefined) {
        this._altitude = value;
    };
    /**
     * Sets the altitudeAccuracy property value. The accuracy of the altitude.
     * @param value Value to set for the altitudeAccuracy property.
     */
    public set altitudeAccuracy(value: number | undefined) {
        this._altitudeAccuracy = value;
    };
    /**
     * Sets the latitude property value. The latitude of the location.
     * @param value Value to set for the latitude property.
     */
    public set latitude(value: number | undefined) {
        this._latitude = value;
    };
    /**
     * Sets the longitude property value. The longitude of the location.
     * @param value Value to set for the longitude property.
     */
    public set longitude(value: number | undefined) {
        this._longitude = value;
    };
}
