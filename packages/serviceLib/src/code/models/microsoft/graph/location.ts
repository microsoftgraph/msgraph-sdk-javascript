import {LocationType, LocationUniqueIdType, OutlookGeoCoordinates, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Location implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The street address of the location.  */
    private _address?: PhysicalAddress | undefined;
    /** The geographic coordinates and elevation of the location.  */
    private _coordinates?: OutlookGeoCoordinates | undefined;
    /** The name associated with the location.  */
    private _displayName?: string | undefined;
    /** Optional email address of the location.  */
    private _locationEmailAddress?: string | undefined;
    /** The type of location. The possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.  */
    private _locationType?: LocationType | undefined;
    /** Optional URI representing the location.  */
    private _locationUri?: string | undefined;
    /** For internal use only.  */
    private _uniqueId?: string | undefined;
    /** For internal use only.  */
    private _uniqueIdType?: LocationUniqueIdType | undefined;
    /**
     * Instantiates a new location and sets the default values.
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
     * Gets the address property value. The street address of the location.
     * @returns a physicalAddress
     */
    public get address() {
        return this._address;
    };
    /**
     * Gets the coordinates property value. The geographic coordinates and elevation of the location.
     * @returns a outlookGeoCoordinates
     */
    public get coordinates() {
        return this._coordinates;
    };
    /**
     * Gets the displayName property value. The name associated with the location.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the locationEmailAddress property value. Optional email address of the location.
     * @returns a string
     */
    public get locationEmailAddress() {
        return this._locationEmailAddress;
    };
    /**
     * Gets the locationType property value. The type of location. The possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     * @returns a locationType
     */
    public get locationType() {
        return this._locationType;
    };
    /**
     * Gets the locationUri property value. Optional URI representing the location.
     * @returns a string
     */
    public get locationUri() {
        return this._locationUri;
    };
    /**
     * Gets the uniqueId property value. For internal use only.
     * @returns a string
     */
    public get uniqueId() {
        return this._uniqueId;
    };
    /**
     * Gets the uniqueIdType property value. For internal use only.
     * @returns a locationUniqueIdType
     */
    public get uniqueIdType() {
        return this._uniqueIdType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["address", (o, n) => { (o as unknown as Location).address = n.getObjectValue<PhysicalAddress>(PhysicalAddress); }],
            ["coordinates", (o, n) => { (o as unknown as Location).coordinates = n.getObjectValue<OutlookGeoCoordinates>(OutlookGeoCoordinates); }],
            ["displayName", (o, n) => { (o as unknown as Location).displayName = n.getStringValue(); }],
            ["locationEmailAddress", (o, n) => { (o as unknown as Location).locationEmailAddress = n.getStringValue(); }],
            ["locationType", (o, n) => { (o as unknown as Location).locationType = n.getEnumValue<LocationType>(LocationType); }],
            ["locationUri", (o, n) => { (o as unknown as Location).locationUri = n.getStringValue(); }],
            ["uniqueId", (o, n) => { (o as unknown as Location).uniqueId = n.getStringValue(); }],
            ["uniqueIdType", (o, n) => { (o as unknown as Location).uniqueIdType = n.getEnumValue<LocationUniqueIdType>(LocationUniqueIdType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeObjectValue<OutlookGeoCoordinates>("coordinates", this.coordinates);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("locationEmailAddress", this.locationEmailAddress);
        writer.writeEnumValue<LocationType>("locationType", this.locationType);
        writer.writeStringValue("locationUri", this.locationUri);
        writer.writeStringValue("uniqueId", this.uniqueId);
        writer.writeEnumValue<LocationUniqueIdType>("uniqueIdType", this.uniqueIdType);
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
     * Sets the address property value. The street address of the location.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        this._address = value;
    };
    /**
     * Sets the coordinates property value. The geographic coordinates and elevation of the location.
     * @param value Value to set for the coordinates property.
     */
    public set coordinates(value: OutlookGeoCoordinates | undefined) {
        this._coordinates = value;
    };
    /**
     * Sets the displayName property value. The name associated with the location.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the locationEmailAddress property value. Optional email address of the location.
     * @param value Value to set for the locationEmailAddress property.
     */
    public set locationEmailAddress(value: string | undefined) {
        this._locationEmailAddress = value;
    };
    /**
     * Sets the locationType property value. The type of location. The possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates, streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     * @param value Value to set for the locationType property.
     */
    public set locationType(value: LocationType | undefined) {
        this._locationType = value;
    };
    /**
     * Sets the locationUri property value. Optional URI representing the location.
     * @param value Value to set for the locationUri property.
     */
    public set locationUri(value: string | undefined) {
        this._locationUri = value;
    };
    /**
     * Sets the uniqueId property value. For internal use only.
     * @param value Value to set for the uniqueId property.
     */
    public set uniqueId(value: string | undefined) {
        this._uniqueId = value;
    };
    /**
     * Sets the uniqueIdType property value. For internal use only.
     * @param value Value to set for the uniqueIdType property.
     */
    public set uniqueIdType(value: LocationUniqueIdType | undefined) {
        this._uniqueIdType = value;
    };
}
