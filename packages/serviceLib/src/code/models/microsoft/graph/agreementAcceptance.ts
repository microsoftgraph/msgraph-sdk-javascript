import {AgreementAcceptanceState, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementAcceptance extends Entity implements Parsable {
    /** The identifier of the agreement file accepted by the user.  */
    private _agreementFileId?: string | undefined;
    /** The identifier of the agreement.  */
    private _agreementId?: string | undefined;
    /** The display name of the device used for accepting the agreement.  */
    private _deviceDisplayName?: string | undefined;
    /** The unique identifier of the device used for accepting the agreement.  */
    private _deviceId?: string | undefined;
    /** The operating system used to accept the agreement.  */
    private _deviceOSType?: string | undefined;
    /** The operating system version of the device used to accept the agreement.  */
    private _deviceOSVersion?: string | undefined;
    /** The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _expirationDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _recordedDateTime?: Date | undefined;
    /** The state of the agreement acceptance. Possible values are: accepted, declined.  */
    private _state?: AgreementAcceptanceState | undefined;
    /** Display name of the user when the acceptance was recorded.  */
    private _userDisplayName?: string | undefined;
    /** Email of the user when the acceptance was recorded.  */
    private _userEmail?: string | undefined;
    /** The identifier of the user who accepted the agreement.  */
    private _userId?: string | undefined;
    /** UPN of the user when the acceptance was recorded.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new agreementAcceptance and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the agreementFileId property value. The identifier of the agreement file accepted by the user.
     * @returns a string
     */
    public get agreementFileId() {
        return this._agreementFileId;
    };
    /**
     * Gets the agreementId property value. The identifier of the agreement.
     * @returns a string
     */
    public get agreementId() {
        return this._agreementId;
    };
    /**
     * Gets the deviceDisplayName property value. The display name of the device used for accepting the agreement.
     * @returns a string
     */
    public get deviceDisplayName() {
        return this._deviceDisplayName;
    };
    /**
     * Gets the deviceId property value. The unique identifier of the device used for accepting the agreement.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Gets the deviceOSType property value. The operating system used to accept the agreement.
     * @returns a string
     */
    public get deviceOSType() {
        return this._deviceOSType;
    };
    /**
     * Gets the deviceOSVersion property value. The operating system version of the device used to accept the agreement.
     * @returns a string
     */
    public get deviceOSVersion() {
        return this._deviceOSVersion;
    };
    /**
     * Gets the expirationDateTime property value. The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Gets the recordedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get recordedDateTime() {
        return this._recordedDateTime;
    };
    /**
     * Gets the state property value. The state of the agreement acceptance. Possible values are: accepted, declined.
     * @returns a agreementAcceptanceState
     */
    public get state() {
        return this._state;
    };
    /**
     * Gets the userDisplayName property value. Display name of the user when the acceptance was recorded.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Gets the userEmail property value. Email of the user when the acceptance was recorded.
     * @returns a string
     */
    public get userEmail() {
        return this._userEmail;
    };
    /**
     * Gets the userId property value. The identifier of the user who accepted the agreement.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Gets the userPrincipalName property value. UPN of the user when the acceptance was recorded.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["agreementFileId", (o, n) => { (o as unknown as AgreementAcceptance).agreementFileId = n.getStringValue(); }],
            ["agreementId", (o, n) => { (o as unknown as AgreementAcceptance).agreementId = n.getStringValue(); }],
            ["deviceDisplayName", (o, n) => { (o as unknown as AgreementAcceptance).deviceDisplayName = n.getStringValue(); }],
            ["deviceId", (o, n) => { (o as unknown as AgreementAcceptance).deviceId = n.getStringValue(); }],
            ["deviceOSType", (o, n) => { (o as unknown as AgreementAcceptance).deviceOSType = n.getStringValue(); }],
            ["deviceOSVersion", (o, n) => { (o as unknown as AgreementAcceptance).deviceOSVersion = n.getStringValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as AgreementAcceptance).expirationDateTime = n.getDateValue(); }],
            ["recordedDateTime", (o, n) => { (o as unknown as AgreementAcceptance).recordedDateTime = n.getDateValue(); }],
            ["state", (o, n) => { (o as unknown as AgreementAcceptance).state = n.getEnumValue<AgreementAcceptanceState>(AgreementAcceptanceState); }],
            ["userDisplayName", (o, n) => { (o as unknown as AgreementAcceptance).userDisplayName = n.getStringValue(); }],
            ["userEmail", (o, n) => { (o as unknown as AgreementAcceptance).userEmail = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as AgreementAcceptance).userId = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as AgreementAcceptance).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("agreementFileId", this.agreementFileId);
        writer.writeStringValue("agreementId", this.agreementId);
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceOSType", this.deviceOSType);
        writer.writeStringValue("deviceOSVersion", this.deviceOSVersion);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("recordedDateTime", this.recordedDateTime);
        writer.writeEnumValue<AgreementAcceptanceState>("state", this.state);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userEmail", this.userEmail);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Sets the agreementFileId property value. The identifier of the agreement file accepted by the user.
     * @param value Value to set for the agreementFileId property.
     */
    public set agreementFileId(value: string | undefined) {
        this._agreementFileId = value;
    };
    /**
     * Sets the agreementId property value. The identifier of the agreement.
     * @param value Value to set for the agreementId property.
     */
    public set agreementId(value: string | undefined) {
        this._agreementId = value;
    };
    /**
     * Sets the deviceDisplayName property value. The display name of the device used for accepting the agreement.
     * @param value Value to set for the deviceDisplayName property.
     */
    public set deviceDisplayName(value: string | undefined) {
        this._deviceDisplayName = value;
    };
    /**
     * Sets the deviceId property value. The unique identifier of the device used for accepting the agreement.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Sets the deviceOSType property value. The operating system used to accept the agreement.
     * @param value Value to set for the deviceOSType property.
     */
    public set deviceOSType(value: string | undefined) {
        this._deviceOSType = value;
    };
    /**
     * Sets the deviceOSVersion property value. The operating system version of the device used to accept the agreement.
     * @param value Value to set for the deviceOSVersion property.
     */
    public set deviceOSVersion(value: string | undefined) {
        this._deviceOSVersion = value;
    };
    /**
     * Sets the expirationDateTime property value. The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Sets the recordedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the recordedDateTime property.
     */
    public set recordedDateTime(value: Date | undefined) {
        this._recordedDateTime = value;
    };
    /**
     * Sets the state property value. The state of the agreement acceptance. Possible values are: accepted, declined.
     * @param value Value to set for the state property.
     */
    public set state(value: AgreementAcceptanceState | undefined) {
        this._state = value;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user when the acceptance was recorded.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Sets the userEmail property value. Email of the user when the acceptance was recorded.
     * @param value Value to set for the userEmail property.
     */
    public set userEmail(value: string | undefined) {
        this._userEmail = value;
    };
    /**
     * Sets the userId property value. The identifier of the user who accepted the agreement.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Sets the userPrincipalName property value. UPN of the user when the acceptance was recorded.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
