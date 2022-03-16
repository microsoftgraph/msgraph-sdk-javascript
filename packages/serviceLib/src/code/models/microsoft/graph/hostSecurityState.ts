import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HostSecurityState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com).  */
    private _fqdn?: string | undefined;
    private _isAzureAdJoined?: boolean | undefined;
    private _isAzureAdRegistered?: boolean | undefined;
    /** True if the host is domain joined to an on-premises Active Directory domain.  */
    private _isHybridAzureDomainJoined?: boolean | undefined;
    /** The local host name, without the DNS domain name.  */
    private _netBiosName?: string | undefined;
    /** Host Operating System. (For example, Windows10, MacOS, RHEL, etc.).  */
    private _os?: string | undefined;
    /** Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert.  */
    private _privateIpAddress?: string | undefined;
    /** Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert.  */
    private _publicIpAddress?: string | undefined;
    /** Provider-generated/calculated risk score of the host.  Recommended value range of 0-1, which equates to a percentage.  */
    private _riskScore?: string | undefined;
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
     * Instantiates a new hostSecurityState and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the fqdn property value. Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com).
     * @returns a string
     */
    public get fqdn() {
        return this._fqdn;
    };
    /**
     * Sets the fqdn property value. Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com).
     * @param value Value to set for the fqdn property.
     */
    public set fqdn(value: string | undefined) {
        this._fqdn = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["fqdn", (o, n) => { (o as unknown as HostSecurityState).fqdn = n.getStringValue(); }],
            ["isAzureAdJoined", (o, n) => { (o as unknown as HostSecurityState).isAzureAdJoined = n.getBooleanValue(); }],
            ["isAzureAdRegistered", (o, n) => { (o as unknown as HostSecurityState).isAzureAdRegistered = n.getBooleanValue(); }],
            ["isHybridAzureDomainJoined", (o, n) => { (o as unknown as HostSecurityState).isHybridAzureDomainJoined = n.getBooleanValue(); }],
            ["netBiosName", (o, n) => { (o as unknown as HostSecurityState).netBiosName = n.getStringValue(); }],
            ["os", (o, n) => { (o as unknown as HostSecurityState).os = n.getStringValue(); }],
            ["privateIpAddress", (o, n) => { (o as unknown as HostSecurityState).privateIpAddress = n.getStringValue(); }],
            ["publicIpAddress", (o, n) => { (o as unknown as HostSecurityState).publicIpAddress = n.getStringValue(); }],
            ["riskScore", (o, n) => { (o as unknown as HostSecurityState).riskScore = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the isAzureAdJoined property value. 
     * @returns a boolean
     */
    public get isAzureAdJoined() {
        return this._isAzureAdJoined;
    };
    /**
     * Sets the isAzureAdJoined property value. 
     * @param value Value to set for the isAzureAdJoined property.
     */
    public set isAzureAdJoined(value: boolean | undefined) {
        this._isAzureAdJoined = value;
    };
    /**
     * Gets the isAzureAdRegistered property value. 
     * @returns a boolean
     */
    public get isAzureAdRegistered() {
        return this._isAzureAdRegistered;
    };
    /**
     * Sets the isAzureAdRegistered property value. 
     * @param value Value to set for the isAzureAdRegistered property.
     */
    public set isAzureAdRegistered(value: boolean | undefined) {
        this._isAzureAdRegistered = value;
    };
    /**
     * Gets the isHybridAzureDomainJoined property value. True if the host is domain joined to an on-premises Active Directory domain.
     * @returns a boolean
     */
    public get isHybridAzureDomainJoined() {
        return this._isHybridAzureDomainJoined;
    };
    /**
     * Sets the isHybridAzureDomainJoined property value. True if the host is domain joined to an on-premises Active Directory domain.
     * @param value Value to set for the isHybridAzureDomainJoined property.
     */
    public set isHybridAzureDomainJoined(value: boolean | undefined) {
        this._isHybridAzureDomainJoined = value;
    };
    /**
     * Gets the netBiosName property value. The local host name, without the DNS domain name.
     * @returns a string
     */
    public get netBiosName() {
        return this._netBiosName;
    };
    /**
     * Sets the netBiosName property value. The local host name, without the DNS domain name.
     * @param value Value to set for the netBiosName property.
     */
    public set netBiosName(value: string | undefined) {
        this._netBiosName = value;
    };
    /**
     * Gets the os property value. Host Operating System. (For example, Windows10, MacOS, RHEL, etc.).
     * @returns a string
     */
    public get os() {
        return this._os;
    };
    /**
     * Sets the os property value. Host Operating System. (For example, Windows10, MacOS, RHEL, etc.).
     * @param value Value to set for the os property.
     */
    public set os(value: string | undefined) {
        this._os = value;
    };
    /**
     * Gets the privateIpAddress property value. Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert.
     * @returns a string
     */
    public get privateIpAddress() {
        return this._privateIpAddress;
    };
    /**
     * Sets the privateIpAddress property value. Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert.
     * @param value Value to set for the privateIpAddress property.
     */
    public set privateIpAddress(value: string | undefined) {
        this._privateIpAddress = value;
    };
    /**
     * Gets the publicIpAddress property value. Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert.
     * @returns a string
     */
    public get publicIpAddress() {
        return this._publicIpAddress;
    };
    /**
     * Sets the publicIpAddress property value. Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert.
     * @param value Value to set for the publicIpAddress property.
     */
    public set publicIpAddress(value: string | undefined) {
        this._publicIpAddress = value;
    };
    /**
     * Gets the riskScore property value. Provider-generated/calculated risk score of the host.  Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Sets the riskScore property value. Provider-generated/calculated risk score of the host.  Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("fqdn", this.fqdn);
        writer.writeBooleanValue("isAzureAdJoined", this.isAzureAdJoined);
        writer.writeBooleanValue("isAzureAdRegistered", this.isAzureAdRegistered);
        writer.writeBooleanValue("isHybridAzureDomainJoined", this.isHybridAzureDomainJoined);
        writer.writeStringValue("netBiosName", this.netBiosName);
        writer.writeStringValue("os", this.os);
        writer.writeStringValue("privateIpAddress", this.privateIpAddress);
        writer.writeStringValue("publicIpAddress", this.publicIpAddress);
        writer.writeStringValue("riskScore", this.riskScore);
        writer.writeAdditionalData(this.additionalData);
    };
}
