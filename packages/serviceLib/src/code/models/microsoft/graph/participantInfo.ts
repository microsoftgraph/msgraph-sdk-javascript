import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EndpointType} from './endpointType';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.  */
    private _countryCode?: string | undefined;
    /** The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.  */
    private _endpointType?: EndpointType | undefined;
    private _identity?: IdentitySet | undefined;
    /** The language culture string. Read-only.  */
    private _languageId?: string | undefined;
    /** The participant ID of the participant. Read-only.  */
    private _participantId?: string | undefined;
    /** The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only.  */
    private _region?: string | undefined;
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
     * Instantiates a new participantInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
     * @returns a string
     */
    public get countryCode() {
        return this._countryCode;
    };
    /**
     * Sets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
     * @param value Value to set for the countryCode property.
     */
    public set countryCode(value: string | undefined) {
        this._countryCode = value;
    };
    /**
     * Gets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
     * @returns a endpointType
     */
    public get endpointType() {
        return this._endpointType;
    };
    /**
     * Sets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
     * @param value Value to set for the endpointType property.
     */
    public set endpointType(value: EndpointType | undefined) {
        this._endpointType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["countryCode", (o, n) => { (o as unknown as ParticipantInfo).countryCode = n.getStringValue(); }],
            ["endpointType", (o, n) => { (o as unknown as ParticipantInfo).endpointType = n.getEnumValue<EndpointType>(EndpointType); }],
            ["identity", (o, n) => { (o as unknown as ParticipantInfo).identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["languageId", (o, n) => { (o as unknown as ParticipantInfo).languageId = n.getStringValue(); }],
            ["participantId", (o, n) => { (o as unknown as ParticipantInfo).participantId = n.getStringValue(); }],
            ["region", (o, n) => { (o as unknown as ParticipantInfo).region = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the identity property value. 
     * @returns a identitySet
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. 
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        this._identity = value;
    };
    /**
     * Gets the languageId property value. The language culture string. Read-only.
     * @returns a string
     */
    public get languageId() {
        return this._languageId;
    };
    /**
     * Sets the languageId property value. The language culture string. Read-only.
     * @param value Value to set for the languageId property.
     */
    public set languageId(value: string | undefined) {
        this._languageId = value;
    };
    /**
     * Gets the participantId property value. The participant ID of the participant. Read-only.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. The participant ID of the participant. Read-only.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        this._participantId = value;
    };
    /**
     * Gets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only.
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location. Read-only.
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("countryCode", this.countryCode);
        writer.writeEnumValue<EndpointType>("endpointType", this.endpointType);
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
        writer.writeStringValue("languageId", this.languageId);
        writer.writeStringValue("participantId", this.participantId);
        writer.writeStringValue("region", this.region);
        writer.writeAdditionalData(this.additionalData);
    };
}
