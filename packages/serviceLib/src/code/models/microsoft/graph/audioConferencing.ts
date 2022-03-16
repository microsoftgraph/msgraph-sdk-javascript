import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AudioConferencing implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The conference id of the online meeting.  */
    private _conferenceId?: string | undefined;
    /** A URL to the externally-accessible web page that contains dial-in information.  */
    private _dialinUrl?: string | undefined;
    private _tollFreeNumber?: string | undefined;
    /** List of toll-free numbers that are displayed in the meeting invite.  */
    private _tollFreeNumbers?: string[] | undefined;
    private _tollNumber?: string | undefined;
    /** List of toll numbers that are displayed in the meeting invite.  */
    private _tollNumbers?: string[] | undefined;
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
     * Gets the conferenceId property value. The conference id of the online meeting.
     * @returns a string
     */
    public get conferenceId() {
        return this._conferenceId;
    };
    /**
     * Sets the conferenceId property value. The conference id of the online meeting.
     * @param value Value to set for the conferenceId property.
     */
    public set conferenceId(value: string | undefined) {
        this._conferenceId = value;
    };
    /**
     * Instantiates a new audioConferencing and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the dialinUrl property value. A URL to the externally-accessible web page that contains dial-in information.
     * @returns a string
     */
    public get dialinUrl() {
        return this._dialinUrl;
    };
    /**
     * Sets the dialinUrl property value. A URL to the externally-accessible web page that contains dial-in information.
     * @param value Value to set for the dialinUrl property.
     */
    public set dialinUrl(value: string | undefined) {
        this._dialinUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["conferenceId", (o, n) => { (o as unknown as AudioConferencing).conferenceId = n.getStringValue(); }],
            ["dialinUrl", (o, n) => { (o as unknown as AudioConferencing).dialinUrl = n.getStringValue(); }],
            ["tollFreeNumber", (o, n) => { (o as unknown as AudioConferencing).tollFreeNumber = n.getStringValue(); }],
            ["tollFreeNumbers", (o, n) => { (o as unknown as AudioConferencing).tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); }],
            ["tollNumber", (o, n) => { (o as unknown as AudioConferencing).tollNumber = n.getStringValue(); }],
            ["tollNumbers", (o, n) => { (o as unknown as AudioConferencing).tollNumbers = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("conferenceId", this.conferenceId);
        writer.writeStringValue("dialinUrl", this.dialinUrl);
        writer.writeStringValue("tollFreeNumber", this.tollFreeNumber);
        writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", this.tollFreeNumbers);
        writer.writeStringValue("tollNumber", this.tollNumber);
        writer.writeCollectionOfPrimitiveValues<string>("tollNumbers", this.tollNumbers);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tollFreeNumber property value. 
     * @returns a string
     */
    public get tollFreeNumber() {
        return this._tollFreeNumber;
    };
    /**
     * Sets the tollFreeNumber property value. 
     * @param value Value to set for the tollFreeNumber property.
     */
    public set tollFreeNumber(value: string | undefined) {
        this._tollFreeNumber = value;
    };
    /**
     * Gets the tollFreeNumbers property value. List of toll-free numbers that are displayed in the meeting invite.
     * @returns a string
     */
    public get tollFreeNumbers() {
        return this._tollFreeNumbers;
    };
    /**
     * Sets the tollFreeNumbers property value. List of toll-free numbers that are displayed in the meeting invite.
     * @param value Value to set for the tollFreeNumbers property.
     */
    public set tollFreeNumbers(value: string[] | undefined) {
        this._tollFreeNumbers = value;
    };
    /**
     * Gets the tollNumber property value. 
     * @returns a string
     */
    public get tollNumber() {
        return this._tollNumber;
    };
    /**
     * Sets the tollNumber property value. 
     * @param value Value to set for the tollNumber property.
     */
    public set tollNumber(value: string | undefined) {
        this._tollNumber = value;
    };
    /**
     * Gets the tollNumbers property value. List of toll numbers that are displayed in the meeting invite.
     * @returns a string
     */
    public get tollNumbers() {
        return this._tollNumbers;
    };
    /**
     * Sets the tollNumbers property value. List of toll numbers that are displayed in the meeting invite.
     * @param value Value to set for the tollNumbers property.
     */
    public set tollNumbers(value: string[] | undefined) {
        this._tollNumbers = value;
    };
}
