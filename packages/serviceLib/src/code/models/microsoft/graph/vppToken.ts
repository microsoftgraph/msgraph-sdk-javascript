import {Entity} from './index';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VppToken extends Entity implements Parsable {
    /** The apple Id associated with the given Apple Volume Purchase Program Token.  */
    private _appleId?: string | undefined;
    /** Whether or not apps for the VPP token will be automatically updated.  */
    private _automaticallyUpdateApps?: boolean | undefined;
    /** Whether or not apps for the VPP token will be automatically updated.  */
    private _countryOrRegion?: string | undefined;
    /** The expiration date time of the Apple Volume Purchase Program Token.  */
    private _expirationDateTime?: Date | undefined;
    /** Last modification date time associated with the Apple Volume Purchase Program Token.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token.  */
    private _lastSyncDateTime?: Date | undefined;
    /** Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.  */
    private _lastSyncStatus?: VppTokenSyncStatus | undefined;
    /** The organization associated with the Apple Volume Purchase Program Token  */
    private _organizationName?: string | undefined;
    /** Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM.  */
    private _state?: VppTokenState | undefined;
    /** The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.  */
    private _token?: string | undefined;
    /** The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.  */
    private _vppTokenAccountType?: VppTokenAccountType | undefined;
    /**
     * Gets the appleId property value. The apple Id associated with the given Apple Volume Purchase Program Token.
     * @returns a string
     */
    public get appleId() {
        return this._appleId;
    };
    /**
     * Sets the appleId property value. The apple Id associated with the given Apple Volume Purchase Program Token.
     * @param value Value to set for the appleId property.
     */
    public set appleId(value: string | undefined) {
        this._appleId = value;
    };
    /**
     * Gets the automaticallyUpdateApps property value. Whether or not apps for the VPP token will be automatically updated.
     * @returns a boolean
     */
    public get automaticallyUpdateApps() {
        return this._automaticallyUpdateApps;
    };
    /**
     * Sets the automaticallyUpdateApps property value. Whether or not apps for the VPP token will be automatically updated.
     * @param value Value to set for the automaticallyUpdateApps property.
     */
    public set automaticallyUpdateApps(value: boolean | undefined) {
        this._automaticallyUpdateApps = value;
    };
    /**
     * Instantiates a new vppToken and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the countryOrRegion property value. Whether or not apps for the VPP token will be automatically updated.
     * @returns a string
     */
    public get countryOrRegion() {
        return this._countryOrRegion;
    };
    /**
     * Sets the countryOrRegion property value. Whether or not apps for the VPP token will be automatically updated.
     * @param value Value to set for the countryOrRegion property.
     */
    public set countryOrRegion(value: string | undefined) {
        this._countryOrRegion = value;
    };
    /**
     * Gets the expirationDateTime property value. The expiration date time of the Apple Volume Purchase Program Token.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expiration date time of the Apple Volume Purchase Program Token.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appleId", (o, n) => { (o as unknown as VppToken).appleId = n.getStringValue(); }],
            ["automaticallyUpdateApps", (o, n) => { (o as unknown as VppToken).automaticallyUpdateApps = n.getBooleanValue(); }],
            ["countryOrRegion", (o, n) => { (o as unknown as VppToken).countryOrRegion = n.getStringValue(); }],
            ["expirationDateTime", (o, n) => { (o as unknown as VppToken).expirationDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as VppToken).lastModifiedDateTime = n.getDateValue(); }],
            ["lastSyncDateTime", (o, n) => { (o as unknown as VppToken).lastSyncDateTime = n.getDateValue(); }],
            ["lastSyncStatus", (o, n) => { (o as unknown as VppToken).lastSyncStatus = n.getEnumValue<VppTokenSyncStatus>(VppTokenSyncStatus); }],
            ["organizationName", (o, n) => { (o as unknown as VppToken).organizationName = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as VppToken).state = n.getEnumValue<VppTokenState>(VppTokenState); }],
            ["token", (o, n) => { (o as unknown as VppToken).token = n.getStringValue(); }],
            ["vppTokenAccountType", (o, n) => { (o as unknown as VppToken).vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType); }],
        ]);
    };
    /**
     * Gets the lastModifiedDateTime property value. Last modification date time associated with the Apple Volume Purchase Program Token.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last modification date time associated with the Apple Volume Purchase Program Token.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the lastSyncDateTime property value. The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the lastSyncStatus property value. Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.
     * @returns a vppTokenSyncStatus
     */
    public get lastSyncStatus() {
        return this._lastSyncStatus;
    };
    /**
     * Sets the lastSyncStatus property value. Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token. Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.
     * @param value Value to set for the lastSyncStatus property.
     */
    public set lastSyncStatus(value: VppTokenSyncStatus | undefined) {
        this._lastSyncStatus = value;
    };
    /**
     * Gets the organizationName property value. The organization associated with the Apple Volume Purchase Program Token
     * @returns a string
     */
    public get organizationName() {
        return this._organizationName;
    };
    /**
     * Sets the organizationName property value. The organization associated with the Apple Volume Purchase Program Token
     * @param value Value to set for the organizationName property.
     */
    public set organizationName(value: string | undefined) {
        this._organizationName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appleId", this.appleId);
        writer.writeBooleanValue("automaticallyUpdateApps", this.automaticallyUpdateApps);
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeEnumValue<VppTokenSyncStatus>("lastSyncStatus", this.lastSyncStatus);
        writer.writeStringValue("organizationName", this.organizationName);
        writer.writeEnumValue<VppTokenState>("state", this.state);
        writer.writeStringValue("token", this.token);
        writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", this.vppTokenAccountType);
    };
    /**
     * Gets the state property value. Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM.
     * @returns a vppTokenState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM.
     * @param value Value to set for the state property.
     */
    public set state(value: VppTokenState | undefined) {
        this._state = value;
    };
    /**
     * Gets the token property value. The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
     * @returns a string
     */
    public get token() {
        return this._token;
    };
    /**
     * Sets the token property value. The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
     * @param value Value to set for the token property.
     */
    public set token(value: string | undefined) {
        this._token = value;
    };
    /**
     * Gets the vppTokenAccountType property value. The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.
     * @returns a vppTokenAccountType
     */
    public get vppTokenAccountType() {
        return this._vppTokenAccountType;
    };
    /**
     * Sets the vppTokenAccountType property value. The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education.
     * @param value Value to set for the vppTokenAccountType property.
     */
    public set vppTokenAccountType(value: VppTokenAccountType | undefined) {
        this._vppTokenAccountType = value;
    };
}
