import {Entity, OutlookGeoCoordinates, PhysicalAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Place extends Entity implements Parsable {
    /** The street address of the place.  */
    private _address?: PhysicalAddress | undefined;
    /** The name associated with the place.  */
    private _displayName?: string | undefined;
    /** Specifies the place location in latitude, longitude and (optionally) altitude coordinates.  */
    private _geoCoordinates?: OutlookGeoCoordinates | undefined;
    /** The phone number of the place.  */
    private _phone?: string | undefined;
    /**
     * Instantiates a new place and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the address property value. The street address of the place.
     * @returns a physicalAddress
     */
    public get address() {
        return this._address;
    };
    /**
     * Gets the displayName property value. The name associated with the place.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     * @returns a outlookGeoCoordinates
     */
    public get geoCoordinates() {
        return this._geoCoordinates;
    };
    /**
     * Gets the phone property value. The phone number of the place.
     * @returns a string
     */
    public get phone() {
        return this._phone;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["address", (o, n) => { (o as unknown as Place).address = n.getObjectValue<PhysicalAddress>(PhysicalAddress); }],
            ["displayName", (o, n) => { (o as unknown as Place).displayName = n.getStringValue(); }],
            ["geoCoordinates", (o, n) => { (o as unknown as Place).geoCoordinates = n.getObjectValue<OutlookGeoCoordinates>(OutlookGeoCoordinates); }],
            ["phone", (o, n) => { (o as unknown as Place).phone = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<OutlookGeoCoordinates>("geoCoordinates", this.geoCoordinates);
        writer.writeStringValue("phone", this.phone);
    };
    /**
     * Sets the address property value. The street address of the place.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        this._address = value;
    };
    /**
     * Sets the displayName property value. The name associated with the place.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the geoCoordinates property value. Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
     * @param value Value to set for the geoCoordinates property.
     */
    public set geoCoordinates(value: OutlookGeoCoordinates | undefined) {
        this._geoCoordinates = value;
    };
    /**
     * Sets the phone property value. The phone number of the place.
     * @param value Value to set for the phone property.
     */
    public set phone(value: string | undefined) {
        this._phone = value;
    };
}
