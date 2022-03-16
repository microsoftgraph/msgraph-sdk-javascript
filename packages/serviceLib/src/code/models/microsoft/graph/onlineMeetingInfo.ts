import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {Phone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnlineMeetingInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The ID of the conference.  */
    private _conferenceId?: string | undefined;
    /** The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.  */
    private _joinUrl?: string | undefined;
    /** All of the phone numbers associated with this conference.  */
    private _phones?: Phone[] | undefined;
    /** The pre-formatted quickdial for this call.  */
    private _quickDial?: string | undefined;
    /** The toll free numbers that can be used to join the conference.  */
    private _tollFreeNumbers?: string[] | undefined;
    /** The toll number that can be used to join the conference.  */
    private _tollNumber?: string | undefined;
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
     * Gets the conferenceId property value. The ID of the conference.
     * @returns a string
     */
    public get conferenceId() {
        return this._conferenceId;
    };
    /**
     * Sets the conferenceId property value. The ID of the conference.
     * @param value Value to set for the conferenceId property.
     */
    public set conferenceId(value: string | undefined) {
        this._conferenceId = value;
    };
    /**
     * Instantiates a new onlineMeetingInfo and sets the default values.
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
            ["conferenceId", (o, n) => { (o as unknown as OnlineMeetingInfo).conferenceId = n.getStringValue(); }],
            ["joinUrl", (o, n) => { (o as unknown as OnlineMeetingInfo).joinUrl = n.getStringValue(); }],
            ["phones", (o, n) => { (o as unknown as OnlineMeetingInfo).phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); }],
            ["quickDial", (o, n) => { (o as unknown as OnlineMeetingInfo).quickDial = n.getStringValue(); }],
            ["tollFreeNumbers", (o, n) => { (o as unknown as OnlineMeetingInfo).tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); }],
            ["tollNumber", (o, n) => { (o as unknown as OnlineMeetingInfo).tollNumber = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the joinUrl property value. The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.
     * @returns a string
     */
    public get joinUrl() {
        return this._joinUrl;
    };
    /**
     * Sets the joinUrl property value. The external link that launches the online meeting. This is a URL that clients will launch into a browser and will redirect the user to join the meeting.
     * @param value Value to set for the joinUrl property.
     */
    public set joinUrl(value: string | undefined) {
        this._joinUrl = value;
    };
    /**
     * Gets the phones property value. All of the phone numbers associated with this conference.
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. All of the phone numbers associated with this conference.
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Gets the quickDial property value. The pre-formatted quickdial for this call.
     * @returns a string
     */
    public get quickDial() {
        return this._quickDial;
    };
    /**
     * Sets the quickDial property value. The pre-formatted quickdial for this call.
     * @param value Value to set for the quickDial property.
     */
    public set quickDial(value: string | undefined) {
        this._quickDial = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("conferenceId", this.conferenceId);
        writer.writeStringValue("joinUrl", this.joinUrl);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
        writer.writeStringValue("quickDial", this.quickDial);
        writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", this.tollFreeNumbers);
        writer.writeStringValue("tollNumber", this.tollNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tollFreeNumbers property value. The toll free numbers that can be used to join the conference.
     * @returns a string
     */
    public get tollFreeNumbers() {
        return this._tollFreeNumbers;
    };
    /**
     * Sets the tollFreeNumbers property value. The toll free numbers that can be used to join the conference.
     * @param value Value to set for the tollFreeNumbers property.
     */
    public set tollFreeNumbers(value: string[] | undefined) {
        this._tollFreeNumbers = value;
    };
    /**
     * Gets the tollNumber property value. The toll number that can be used to join the conference.
     * @returns a string
     */
    public get tollNumber() {
        return this._tollNumber;
    };
    /**
     * Sets the tollNumber property value. The toll number that can be used to join the conference.
     * @param value Value to set for the tollNumber property.
     */
    public set tollNumber(value: string | undefined) {
        this._tollNumber = value;
    };
}
