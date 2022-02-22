import {GeoCoordinates} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInLocation implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.  */
    private _city?: string | undefined;
    /** Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity.  */
    private _countryOrRegion?: string | undefined;
    /** Provides the latitude, longitude and altitude where the sign-in originated.  */
    private _geoCoordinates?: GeoCoordinates | undefined;
    /** Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.  */
    private _state?: string | undefined;
    /**
     * Instantiates a new signInLocation and sets the default values.
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
     * Gets the city property value. Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Gets the countryOrRegion property value. Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity.
     * @returns a string
     */
    public get countryOrRegion() {
        return this._countryOrRegion;
    };
    /**
     * Gets the geoCoordinates property value. Provides the latitude, longitude and altitude where the sign-in originated.
     * @returns a geoCoordinates
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Gets the state property value. Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["city", (o, n) => { (o as unknown as SignInLocation).city = n.getStringValue(); }],
            ["countryOrRegion", (o, n) => { (o as unknown as SignInLocation).countryOrRegion = n.getStringValue(); }],
            ["geoCoordinates", (o, n) => { (o as unknown as SignInLocation).geoCoordinates = n.getObjectValue<GeoCoordinates>(GeoCoordinates); }],
            ["state", (o, n) => { (o as unknown as SignInLocation).state = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        writer.writeObjectValue<GeoCoordinates>("geoCoordinates", this.geoCoordinates);
        writer.writeStringValue("state", this.state);
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
     * Sets the city property value. Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Sets the countryOrRegion property value. Provides the country code info (2 letter code) where the sign-in originated.  This is calculated using latitude/longitude information from the sign-in activity.
     * @param value Value to set for the countryOrRegion property.
     */
    public set countryOrRegion(value: string | undefined) {
        this._countryOrRegion = value;
    };
    /**
     * Sets the geoCoordinates property value. Provides the latitude, longitude and altitude where the sign-in originated.
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: GeoCoordinates | undefined) {
        this._geoCoordinates = value;
    };
    /**
     * Sets the state property value. Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the sign-in activity.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
}
