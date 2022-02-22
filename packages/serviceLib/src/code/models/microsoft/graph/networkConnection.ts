import {ConnectionDirection, ConnectionStatus, SecurityNetworkProtocol} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NetworkConnection implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Name of the application managing the network connection (for example, Facebook or SMTP).  */
    private _applicationName?: string | undefined;
    /** Destination IP address (of the network connection).  */
    private _destinationAddress?: string | undefined;
    /** Destination domain portion of the destination URL. (for example 'www.contoso.com').  */
    private _destinationDomain?: string | undefined;
    /** Location (by IP address mapping) associated with the destination of a network connection.  */
    private _destinationLocation?: string | undefined;
    /** Destination port (of the network connection).  */
    private _destinationPort?: string | undefined;
    /** Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html')  */
    private _destinationUrl?: string | undefined;
    /** Network connection direction. Possible values are: unknown, inbound, outbound.  */
    private _direction?: ConnectionDirection | undefined;
    /** Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _domainRegisteredDateTime?: Date | undefined;
    /** The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was tampered with).  */
    private _localDnsName?: string | undefined;
    /** Network Address Translation destination IP address.  */
    private _natDestinationAddress?: string | undefined;
    /** Network Address Translation destination port.  */
    private _natDestinationPort?: string | undefined;
    /** Network Address Translation source IP address.  */
    private _natSourceAddress?: string | undefined;
    /** Network Address Translation source port.  */
    private _natSourcePort?: string | undefined;
    /** Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader, ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader, ipv6DestinationOptions, nd, raw, ipx, spx, spxII.  */
    private _protocol?: SecurityNetworkProtocol | undefined;
    /** Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a percentage.  */
    private _riskScore?: string | undefined;
    /** Source (i.e. origin) IP address (of the network connection).  */
    private _sourceAddress?: string | undefined;
    /** Location (by IP address mapping) associated with the source of a network connection.  */
    private _sourceLocation?: string | undefined;
    /** Source (i.e. origin) IP port (of the network connection).  */
    private _sourcePort?: string | undefined;
    /** Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed.  */
    private _status?: ConnectionStatus | undefined;
    /** Parameters (suffix) of the destination URL.  */
    private _urlParameters?: string | undefined;
    /**
     * Instantiates a new networkConnection and sets the default values.
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
     * Gets the applicationName property value. Name of the application managing the network connection (for example, Facebook or SMTP).
     * @returns a string
     */
    public get applicationName() {
        return this._applicationName;
    };
    /**
     * Gets the destinationAddress property value. Destination IP address (of the network connection).
     * @returns a string
     */
    public get destinationAddress() {
        return this._destinationAddress;
    };
    /**
     * Gets the destinationDomain property value. Destination domain portion of the destination URL. (for example 'www.contoso.com').
     * @returns a string
     */
    public get destinationDomain() {
        return this._destinationDomain;
    };
    /**
     * Gets the destinationLocation property value. Location (by IP address mapping) associated with the destination of a network connection.
     * @returns a string
     */
    public get destinationLocation() {
        return this._destinationLocation;
    };
    /**
     * Gets the destinationPort property value. Destination port (of the network connection).
     * @returns a string
     */
    public get destinationPort() {
        return this._destinationPort;
    };
    /**
     * Gets the destinationUrl property value. Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html')
     * @returns a string
     */
    public get destinationUrl() {
        return this._destinationUrl;
    };
    /**
     * Gets the direction property value. Network connection direction. Possible values are: unknown, inbound, outbound.
     * @returns a connectionDirection
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Gets the domainRegisteredDateTime property value. Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get domainRegisteredDateTime() {
        return this._domainRegisteredDateTime;
    };
    /**
     * Gets the localDnsName property value. The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was tampered with).
     * @returns a string
     */
    public get localDnsName() {
        return this._localDnsName;
    };
    /**
     * Gets the natDestinationAddress property value. Network Address Translation destination IP address.
     * @returns a string
     */
    public get natDestinationAddress() {
        return this._natDestinationAddress;
    };
    /**
     * Gets the natDestinationPort property value. Network Address Translation destination port.
     * @returns a string
     */
    public get natDestinationPort() {
        return this._natDestinationPort;
    };
    /**
     * Gets the natSourceAddress property value. Network Address Translation source IP address.
     * @returns a string
     */
    public get natSourceAddress() {
        return this._natSourceAddress;
    };
    /**
     * Gets the natSourcePort property value. Network Address Translation source port.
     * @returns a string
     */
    public get natSourcePort() {
        return this._natSourcePort;
    };
    /**
     * Gets the protocol property value. Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader, ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader, ipv6DestinationOptions, nd, raw, ipx, spx, spxII.
     * @returns a securityNetworkProtocol
     */
    public get protocol() {
        return this._protocol;
    };
    /**
     * Gets the riskScore property value. Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a percentage.
     * @returns a string
     */
    public get riskScore() {
        return this._riskScore;
    };
    /**
     * Gets the sourceAddress property value. Source (i.e. origin) IP address (of the network connection).
     * @returns a string
     */
    public get sourceAddress() {
        return this._sourceAddress;
    };
    /**
     * Gets the sourceLocation property value. Location (by IP address mapping) associated with the source of a network connection.
     * @returns a string
     */
    public get sourceLocation() {
        return this._sourceLocation;
    };
    /**
     * Gets the sourcePort property value. Source (i.e. origin) IP port (of the network connection).
     * @returns a string
     */
    public get sourcePort() {
        return this._sourcePort;
    };
    /**
     * Gets the status property value. Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed.
     * @returns a connectionStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the urlParameters property value. Parameters (suffix) of the destination URL.
     * @returns a string
     */
    public get urlParameters() {
        return this._urlParameters;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["applicationName", (o, n) => { (o as unknown as NetworkConnection).applicationName = n.getStringValue(); }],
            ["destinationAddress", (o, n) => { (o as unknown as NetworkConnection).destinationAddress = n.getStringValue(); }],
            ["destinationDomain", (o, n) => { (o as unknown as NetworkConnection).destinationDomain = n.getStringValue(); }],
            ["destinationLocation", (o, n) => { (o as unknown as NetworkConnection).destinationLocation = n.getStringValue(); }],
            ["destinationPort", (o, n) => { (o as unknown as NetworkConnection).destinationPort = n.getStringValue(); }],
            ["destinationUrl", (o, n) => { (o as unknown as NetworkConnection).destinationUrl = n.getStringValue(); }],
            ["direction", (o, n) => { (o as unknown as NetworkConnection).direction = n.getEnumValue<ConnectionDirection>(ConnectionDirection); }],
            ["domainRegisteredDateTime", (o, n) => { (o as unknown as NetworkConnection).domainRegisteredDateTime = n.getDateValue(); }],
            ["localDnsName", (o, n) => { (o as unknown as NetworkConnection).localDnsName = n.getStringValue(); }],
            ["natDestinationAddress", (o, n) => { (o as unknown as NetworkConnection).natDestinationAddress = n.getStringValue(); }],
            ["natDestinationPort", (o, n) => { (o as unknown as NetworkConnection).natDestinationPort = n.getStringValue(); }],
            ["natSourceAddress", (o, n) => { (o as unknown as NetworkConnection).natSourceAddress = n.getStringValue(); }],
            ["natSourcePort", (o, n) => { (o as unknown as NetworkConnection).natSourcePort = n.getStringValue(); }],
            ["protocol", (o, n) => { (o as unknown as NetworkConnection).protocol = n.getEnumValue<SecurityNetworkProtocol>(SecurityNetworkProtocol); }],
            ["riskScore", (o, n) => { (o as unknown as NetworkConnection).riskScore = n.getStringValue(); }],
            ["sourceAddress", (o, n) => { (o as unknown as NetworkConnection).sourceAddress = n.getStringValue(); }],
            ["sourceLocation", (o, n) => { (o as unknown as NetworkConnection).sourceLocation = n.getStringValue(); }],
            ["sourcePort", (o, n) => { (o as unknown as NetworkConnection).sourcePort = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as NetworkConnection).status = n.getEnumValue<ConnectionStatus>(ConnectionStatus); }],
            ["urlParameters", (o, n) => { (o as unknown as NetworkConnection).urlParameters = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("applicationName", this.applicationName);
        writer.writeStringValue("destinationAddress", this.destinationAddress);
        writer.writeStringValue("destinationDomain", this.destinationDomain);
        writer.writeStringValue("destinationLocation", this.destinationLocation);
        writer.writeStringValue("destinationPort", this.destinationPort);
        writer.writeStringValue("destinationUrl", this.destinationUrl);
        writer.writeEnumValue<ConnectionDirection>("direction", this.direction);
        writer.writeDateValue("domainRegisteredDateTime", this.domainRegisteredDateTime);
        writer.writeStringValue("localDnsName", this.localDnsName);
        writer.writeStringValue("natDestinationAddress", this.natDestinationAddress);
        writer.writeStringValue("natDestinationPort", this.natDestinationPort);
        writer.writeStringValue("natSourceAddress", this.natSourceAddress);
        writer.writeStringValue("natSourcePort", this.natSourcePort);
        writer.writeEnumValue<SecurityNetworkProtocol>("protocol", this.protocol);
        writer.writeStringValue("riskScore", this.riskScore);
        writer.writeStringValue("sourceAddress", this.sourceAddress);
        writer.writeStringValue("sourceLocation", this.sourceLocation);
        writer.writeStringValue("sourcePort", this.sourcePort);
        writer.writeEnumValue<ConnectionStatus>("status", this.status);
        writer.writeStringValue("urlParameters", this.urlParameters);
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
     * Sets the applicationName property value. Name of the application managing the network connection (for example, Facebook or SMTP).
     * @param value Value to set for the applicationName property.
     */
    public set applicationName(value: string | undefined) {
        this._applicationName = value;
    };
    /**
     * Sets the destinationAddress property value. Destination IP address (of the network connection).
     * @param value Value to set for the destinationAddress property.
     */
    public set destinationAddress(value: string | undefined) {
        this._destinationAddress = value;
    };
    /**
     * Sets the destinationDomain property value. Destination domain portion of the destination URL. (for example 'www.contoso.com').
     * @param value Value to set for the destinationDomain property.
     */
    public set destinationDomain(value: string | undefined) {
        this._destinationDomain = value;
    };
    /**
     * Sets the destinationLocation property value. Location (by IP address mapping) associated with the destination of a network connection.
     * @param value Value to set for the destinationLocation property.
     */
    public set destinationLocation(value: string | undefined) {
        this._destinationLocation = value;
    };
    /**
     * Sets the destinationPort property value. Destination port (of the network connection).
     * @param value Value to set for the destinationPort property.
     */
    public set destinationPort(value: string | undefined) {
        this._destinationPort = value;
    };
    /**
     * Sets the destinationUrl property value. Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html')
     * @param value Value to set for the destinationUrl property.
     */
    public set destinationUrl(value: string | undefined) {
        this._destinationUrl = value;
    };
    /**
     * Sets the direction property value. Network connection direction. Possible values are: unknown, inbound, outbound.
     * @param value Value to set for the direction property.
     */
    public set direction(value: ConnectionDirection | undefined) {
        this._direction = value;
    };
    /**
     * Sets the domainRegisteredDateTime property value. Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the domainRegisteredDateTime property.
     */
    public set domainRegisteredDateTime(value: Date | undefined) {
        this._domainRegisteredDateTime = value;
    };
    /**
     * Sets the localDnsName property value. The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was tampered with).
     * @param value Value to set for the localDnsName property.
     */
    public set localDnsName(value: string | undefined) {
        this._localDnsName = value;
    };
    /**
     * Sets the natDestinationAddress property value. Network Address Translation destination IP address.
     * @param value Value to set for the natDestinationAddress property.
     */
    public set natDestinationAddress(value: string | undefined) {
        this._natDestinationAddress = value;
    };
    /**
     * Sets the natDestinationPort property value. Network Address Translation destination port.
     * @param value Value to set for the natDestinationPort property.
     */
    public set natDestinationPort(value: string | undefined) {
        this._natDestinationPort = value;
    };
    /**
     * Sets the natSourceAddress property value. Network Address Translation source IP address.
     * @param value Value to set for the natSourceAddress property.
     */
    public set natSourceAddress(value: string | undefined) {
        this._natSourceAddress = value;
    };
    /**
     * Sets the natSourcePort property value. Network Address Translation source port.
     * @param value Value to set for the natSourcePort property.
     */
    public set natSourcePort(value: string | undefined) {
        this._natSourcePort = value;
    };
    /**
     * Sets the protocol property value. Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader, ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader, ipv6DestinationOptions, nd, raw, ipx, spx, spxII.
     * @param value Value to set for the protocol property.
     */
    public set protocol(value: SecurityNetworkProtocol | undefined) {
        this._protocol = value;
    };
    /**
     * Sets the riskScore property value. Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a percentage.
     * @param value Value to set for the riskScore property.
     */
    public set riskScore(value: string | undefined) {
        this._riskScore = value;
    };
    /**
     * Sets the sourceAddress property value. Source (i.e. origin) IP address (of the network connection).
     * @param value Value to set for the sourceAddress property.
     */
    public set sourceAddress(value: string | undefined) {
        this._sourceAddress = value;
    };
    /**
     * Sets the sourceLocation property value. Location (by IP address mapping) associated with the source of a network connection.
     * @param value Value to set for the sourceLocation property.
     */
    public set sourceLocation(value: string | undefined) {
        this._sourceLocation = value;
    };
    /**
     * Sets the sourcePort property value. Source (i.e. origin) IP port (of the network connection).
     * @param value Value to set for the sourcePort property.
     */
    public set sourcePort(value: string | undefined) {
        this._sourcePort = value;
    };
    /**
     * Sets the status property value. Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed.
     * @param value Value to set for the status property.
     */
    public set status(value: ConnectionStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the urlParameters property value. Parameters (suffix) of the destination URL.
     * @param value Value to set for the urlParameters property.
     */
    public set urlParameters(value: string | undefined) {
        this._urlParameters = value;
    };
}
