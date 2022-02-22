import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsRecord extends Entity implements Parsable {
    /** If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.  */
    private _isOptional?: boolean | undefined;
    /** Value used when configuring the name of the DNS record at the DNS host.  */
    private _label?: string | undefined;
    /** Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey  */
    private _recordType?: string | undefined;
    /** Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune  */
    private _supportedService?: string | undefined;
    /** Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable  */
    private _ttl?: number | undefined;
    /**
     * Instantiates a new domainDnsRecord and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the isOptional property value. If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
     * @returns a boolean
     */
    public get isOptional() {
        return this._isOptional;
    };
    /**
     * Gets the label property value. Value used when configuring the name of the DNS record at the DNS host.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Gets the recordType property value. Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey
     * @returns a string
     */
    public get recordType() {
        return this._recordType;
    };
    /**
     * Gets the supportedService property value. Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune
     * @returns a string
     */
    public get supportedService() {
        return this._supportedService;
    };
    /**
     * Gets the ttl property value. Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable
     * @returns a integer
     */
    public get ttl() {
        return this._ttl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["isOptional", (o, n) => { (o as unknown as DomainDnsRecord).isOptional = n.getBooleanValue(); }],
            ["label", (o, n) => { (o as unknown as DomainDnsRecord).label = n.getStringValue(); }],
            ["recordType", (o, n) => { (o as unknown as DomainDnsRecord).recordType = n.getStringValue(); }],
            ["supportedService", (o, n) => { (o as unknown as DomainDnsRecord).supportedService = n.getStringValue(); }],
            ["ttl", (o, n) => { (o as unknown as DomainDnsRecord).ttl = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isOptional", this.isOptional);
        writer.writeStringValue("label", this.label);
        writer.writeStringValue("recordType", this.recordType);
        writer.writeStringValue("supportedService", this.supportedService);
        writer.writeNumberValue("ttl", this.ttl);
    };
    /**
     * Sets the isOptional property value. If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
     * @param value Value to set for the isOptional property.
     */
    public set isOptional(value: boolean | undefined) {
        this._isOptional = value;
    };
    /**
     * Sets the label property value. Value used when configuring the name of the DNS record at the DNS host.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Sets the recordType property value. Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey
     * @param value Value to set for the recordType property.
     */
    public set recordType(value: string | undefined) {
        this._recordType = value;
    };
    /**
     * Sets the supportedService property value. Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune
     * @param value Value to set for the supportedService property.
     */
    public set supportedService(value: string | undefined) {
        this._supportedService = value;
    };
    /**
     * Sets the ttl property value. Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable
     * @param value Value to set for the ttl property.
     */
    public set ttl(value: number | undefined) {
        this._ttl = value;
    };
}
