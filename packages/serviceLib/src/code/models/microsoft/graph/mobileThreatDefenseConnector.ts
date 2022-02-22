import {Entity, MobileThreatPartnerTenantState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileThreatDefenseConnector extends Entity implements Parsable {
    /** For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant  */
    private _androidDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For Android, set whether data from the data sync partner should be used during compliance evaluations  */
    private _androidEnabled?: boolean | undefined;
    /** For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant  */
    private _iosDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    /** For IOS, get or set whether data from the data sync partner should be used during compliance evaluations  */
    private _iosEnabled?: boolean | undefined;
    /** DateTime of last Heartbeat recieved from the Data Sync Partner  */
    private _lastHeartbeatDateTime?: Date | undefined;
    /** Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.  */
    private _partnerState?: MobileThreatPartnerTenantState | undefined;
    /** Get or Set days the per tenant tolerance to unresponsiveness for this partner integration  */
    private _partnerUnresponsivenessThresholdInDays?: number | undefined;
    /** Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner  */
    private _partnerUnsupportedOsVersionBlocked?: boolean | undefined;
    /**
     * Instantiates a new mobileThreatDefenseConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the androidDeviceBlockedOnMissingPartnerData property value. For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @returns a boolean
     */
    public get androidDeviceBlockedOnMissingPartnerData() {
        return this._androidDeviceBlockedOnMissingPartnerData;
    };
    /**
     * Gets the androidEnabled property value. For Android, set whether data from the data sync partner should be used during compliance evaluations
     * @returns a boolean
     */
    public get androidEnabled() {
        return this._androidEnabled;
    };
    /**
     * Gets the iosDeviceBlockedOnMissingPartnerData property value. For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @returns a boolean
     */
    public get iosDeviceBlockedOnMissingPartnerData() {
        return this._iosDeviceBlockedOnMissingPartnerData;
    };
    /**
     * Gets the iosEnabled property value. For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
     * @returns a boolean
     */
    public get iosEnabled() {
        return this._iosEnabled;
    };
    /**
     * Gets the lastHeartbeatDateTime property value. DateTime of last Heartbeat recieved from the Data Sync Partner
     * @returns a Date
     */
    public get lastHeartbeatDateTime() {
        return this._lastHeartbeatDateTime;
    };
    /**
     * Gets the partnerState property value. Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.
     * @returns a mobileThreatPartnerTenantState
     */
    public get partnerState() {
        return this._partnerState;
    };
    /**
     * Gets the partnerUnresponsivenessThresholdInDays property value. Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
     * @returns a integer
     */
    public get partnerUnresponsivenessThresholdInDays() {
        return this._partnerUnresponsivenessThresholdInDays;
    };
    /**
     * Gets the partnerUnsupportedOsVersionBlocked property value. Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner
     * @returns a boolean
     */
    public get partnerUnsupportedOsVersionBlocked() {
        return this._partnerUnsupportedOsVersionBlocked;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["androidDeviceBlockedOnMissingPartnerData", (o, n) => { (o as unknown as MobileThreatDefenseConnector).androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); }],
            ["androidEnabled", (o, n) => { (o as unknown as MobileThreatDefenseConnector).androidEnabled = n.getBooleanValue(); }],
            ["iosDeviceBlockedOnMissingPartnerData", (o, n) => { (o as unknown as MobileThreatDefenseConnector).iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); }],
            ["iosEnabled", (o, n) => { (o as unknown as MobileThreatDefenseConnector).iosEnabled = n.getBooleanValue(); }],
            ["lastHeartbeatDateTime", (o, n) => { (o as unknown as MobileThreatDefenseConnector).lastHeartbeatDateTime = n.getDateValue(); }],
            ["partnerState", (o, n) => { (o as unknown as MobileThreatDefenseConnector).partnerState = n.getEnumValue<MobileThreatPartnerTenantState>(MobileThreatPartnerTenantState); }],
            ["partnerUnresponsivenessThresholdInDays", (o, n) => { (o as unknown as MobileThreatDefenseConnector).partnerUnresponsivenessThresholdInDays = n.getNumberValue(); }],
            ["partnerUnsupportedOsVersionBlocked", (o, n) => { (o as unknown as MobileThreatDefenseConnector).partnerUnsupportedOsVersionBlocked = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", this.androidDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("androidEnabled", this.androidEnabled);
        writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", this.iosDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("iosEnabled", this.iosEnabled);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeEnumValue<MobileThreatPartnerTenantState>("partnerState", this.partnerState);
        writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", this.partnerUnresponsivenessThresholdInDays);
        writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", this.partnerUnsupportedOsVersionBlocked);
    };
    /**
     * Sets the androidDeviceBlockedOnMissingPartnerData property value. For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @param value Value to set for the androidDeviceBlockedOnMissingPartnerData property.
     */
    public set androidDeviceBlockedOnMissingPartnerData(value: boolean | undefined) {
        this._androidDeviceBlockedOnMissingPartnerData = value;
    };
    /**
     * Sets the androidEnabled property value. For Android, set whether data from the data sync partner should be used during compliance evaluations
     * @param value Value to set for the androidEnabled property.
     */
    public set androidEnabled(value: boolean | undefined) {
        this._androidEnabled = value;
    };
    /**
     * Sets the iosDeviceBlockedOnMissingPartnerData property value. For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
     * @param value Value to set for the iosDeviceBlockedOnMissingPartnerData property.
     */
    public set iosDeviceBlockedOnMissingPartnerData(value: boolean | undefined) {
        this._iosDeviceBlockedOnMissingPartnerData = value;
    };
    /**
     * Sets the iosEnabled property value. For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
     * @param value Value to set for the iosEnabled property.
     */
    public set iosEnabled(value: boolean | undefined) {
        this._iosEnabled = value;
    };
    /**
     * Sets the lastHeartbeatDateTime property value. DateTime of last Heartbeat recieved from the Data Sync Partner
     * @param value Value to set for the lastHeartbeatDateTime property.
     */
    public set lastHeartbeatDateTime(value: Date | undefined) {
        this._lastHeartbeatDateTime = value;
    };
    /**
     * Sets the partnerState property value. Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.
     * @param value Value to set for the partnerState property.
     */
    public set partnerState(value: MobileThreatPartnerTenantState | undefined) {
        this._partnerState = value;
    };
    /**
     * Sets the partnerUnresponsivenessThresholdInDays property value. Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
     * @param value Value to set for the partnerUnresponsivenessThresholdInDays property.
     */
    public set partnerUnresponsivenessThresholdInDays(value: number | undefined) {
        this._partnerUnresponsivenessThresholdInDays = value;
    };
    /**
     * Sets the partnerUnsupportedOsVersionBlocked property value. Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner
     * @param value Value to set for the partnerUnsupportedOsVersionBlocked property.
     */
    public set partnerUnsupportedOsVersionBlocked(value: boolean | undefined) {
        this._partnerUnsupportedOsVersionBlocked = value;
    };
}
