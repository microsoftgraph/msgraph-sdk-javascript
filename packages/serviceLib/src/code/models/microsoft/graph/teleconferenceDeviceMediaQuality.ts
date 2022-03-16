import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeleconferenceDeviceMediaQuality implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The average inbound stream network jitter.  */
    private _averageInboundJitter?: Duration | undefined;
    /** The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _averageInboundPacketLossRateInPercentage?: number | undefined;
    /** The average inbound stream network round trip delay.  */
    private _averageInboundRoundTripDelay?: Duration | undefined;
    /** The average outbound stream network jitter.  */
    private _averageOutboundJitter?: Duration | undefined;
    /** The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _averageOutboundPacketLossRateInPercentage?: number | undefined;
    /** The average outbound stream network round trip delay.  */
    private _averageOutboundRoundTripDelay?: Duration | undefined;
    /** The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.  */
    private _channelIndex?: number | undefined;
    /** The total number of the inbound packets.  */
    private _inboundPackets?: number | undefined;
    /** the local IP address for the media session.  */
    private _localIPAddress?: string | undefined;
    /** The local media port.  */
    private _localPort?: number | undefined;
    /** The maximum inbound stream network jitter.  */
    private _maximumInboundJitter?: Duration | undefined;
    /** The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _maximumInboundPacketLossRateInPercentage?: number | undefined;
    /** The maximum inbound stream network round trip delay.  */
    private _maximumInboundRoundTripDelay?: Duration | undefined;
    /** The maximum outbound stream network jitter.  */
    private _maximumOutboundJitter?: Duration | undefined;
    /** The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.  */
    private _maximumOutboundPacketLossRateInPercentage?: number | undefined;
    /** The maximum outbound stream network round trip delay.  */
    private _maximumOutboundRoundTripDelay?: Duration | undefined;
    /** The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.  */
    private _mediaDuration?: Duration | undefined;
    /** The network link speed in bytes  */
    private _networkLinkSpeedInBytes?: number | undefined;
    /** The total number of the outbound packets.  */
    private _outboundPackets?: number | undefined;
    /** The remote IP address for the media session.  */
    private _remoteIPAddress?: string | undefined;
    /** The remote media port.  */
    private _remotePort?: number | undefined;
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
     * Gets the averageInboundJitter property value. The average inbound stream network jitter.
     * @returns a Duration
     */
    public get averageInboundJitter() {
        return this._averageInboundJitter;
    };
    /**
     * Sets the averageInboundJitter property value. The average inbound stream network jitter.
     * @param value Value to set for the averageInboundJitter property.
     */
    public set averageInboundJitter(value: Duration | undefined) {
        this._averageInboundJitter = value;
    };
    /**
     * Gets the averageInboundPacketLossRateInPercentage property value. The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get averageInboundPacketLossRateInPercentage() {
        return this._averageInboundPacketLossRateInPercentage;
    };
    /**
     * Sets the averageInboundPacketLossRateInPercentage property value. The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the averageInboundPacketLossRateInPercentage property.
     */
    public set averageInboundPacketLossRateInPercentage(value: number | undefined) {
        this._averageInboundPacketLossRateInPercentage = value;
    };
    /**
     * Gets the averageInboundRoundTripDelay property value. The average inbound stream network round trip delay.
     * @returns a Duration
     */
    public get averageInboundRoundTripDelay() {
        return this._averageInboundRoundTripDelay;
    };
    /**
     * Sets the averageInboundRoundTripDelay property value. The average inbound stream network round trip delay.
     * @param value Value to set for the averageInboundRoundTripDelay property.
     */
    public set averageInboundRoundTripDelay(value: Duration | undefined) {
        this._averageInboundRoundTripDelay = value;
    };
    /**
     * Gets the averageOutboundJitter property value. The average outbound stream network jitter.
     * @returns a Duration
     */
    public get averageOutboundJitter() {
        return this._averageOutboundJitter;
    };
    /**
     * Sets the averageOutboundJitter property value. The average outbound stream network jitter.
     * @param value Value to set for the averageOutboundJitter property.
     */
    public set averageOutboundJitter(value: Duration | undefined) {
        this._averageOutboundJitter = value;
    };
    /**
     * Gets the averageOutboundPacketLossRateInPercentage property value. The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get averageOutboundPacketLossRateInPercentage() {
        return this._averageOutboundPacketLossRateInPercentage;
    };
    /**
     * Sets the averageOutboundPacketLossRateInPercentage property value. The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the averageOutboundPacketLossRateInPercentage property.
     */
    public set averageOutboundPacketLossRateInPercentage(value: number | undefined) {
        this._averageOutboundPacketLossRateInPercentage = value;
    };
    /**
     * Gets the averageOutboundRoundTripDelay property value. The average outbound stream network round trip delay.
     * @returns a Duration
     */
    public get averageOutboundRoundTripDelay() {
        return this._averageOutboundRoundTripDelay;
    };
    /**
     * Sets the averageOutboundRoundTripDelay property value. The average outbound stream network round trip delay.
     * @param value Value to set for the averageOutboundRoundTripDelay property.
     */
    public set averageOutboundRoundTripDelay(value: Duration | undefined) {
        this._averageOutboundRoundTripDelay = value;
    };
    /**
     * Gets the channelIndex property value. The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.
     * @returns a integer
     */
    public get channelIndex() {
        return this._channelIndex;
    };
    /**
     * Sets the channelIndex property value. The channel index of media. Indexing begins with 1.  If a media session contains 3 video modalities, channel indexes will be 1, 2, and 3.
     * @param value Value to set for the channelIndex property.
     */
    public set channelIndex(value: number | undefined) {
        this._channelIndex = value;
    };
    /**
     * Instantiates a new teleconferenceDeviceMediaQuality and sets the default values.
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
            ["averageInboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageInboundJitter = n.getDurationValue(); }],
            ["averageInboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageInboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["averageInboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageInboundRoundTripDelay = n.getDurationValue(); }],
            ["averageOutboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageOutboundJitter = n.getDurationValue(); }],
            ["averageOutboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageOutboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["averageOutboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).averageOutboundRoundTripDelay = n.getDurationValue(); }],
            ["channelIndex", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).channelIndex = n.getNumberValue(); }],
            ["inboundPackets", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).inboundPackets = n.getNumberValue(); }],
            ["localIPAddress", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).localIPAddress = n.getStringValue(); }],
            ["localPort", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).localPort = n.getNumberValue(); }],
            ["maximumInboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumInboundJitter = n.getDurationValue(); }],
            ["maximumInboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumInboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["maximumInboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumInboundRoundTripDelay = n.getDurationValue(); }],
            ["maximumOutboundJitter", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumOutboundJitter = n.getDurationValue(); }],
            ["maximumOutboundPacketLossRateInPercentage", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumOutboundPacketLossRateInPercentage = n.getNumberValue(); }],
            ["maximumOutboundRoundTripDelay", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).maximumOutboundRoundTripDelay = n.getDurationValue(); }],
            ["mediaDuration", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).mediaDuration = n.getDurationValue(); }],
            ["networkLinkSpeedInBytes", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).networkLinkSpeedInBytes = n.getNumberValue(); }],
            ["outboundPackets", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).outboundPackets = n.getNumberValue(); }],
            ["remoteIPAddress", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).remoteIPAddress = n.getStringValue(); }],
            ["remotePort", (o, n) => { (o as unknown as TeleconferenceDeviceMediaQuality).remotePort = n.getNumberValue(); }],
        ]);
    };
    /**
     * Gets the inboundPackets property value. The total number of the inbound packets.
     * @returns a int64
     */
    public get inboundPackets() {
        return this._inboundPackets;
    };
    /**
     * Sets the inboundPackets property value. The total number of the inbound packets.
     * @param value Value to set for the inboundPackets property.
     */
    public set inboundPackets(value: number | undefined) {
        this._inboundPackets = value;
    };
    /**
     * Gets the localIPAddress property value. the local IP address for the media session.
     * @returns a string
     */
    public get localIPAddress() {
        return this._localIPAddress;
    };
    /**
     * Sets the localIPAddress property value. the local IP address for the media session.
     * @param value Value to set for the localIPAddress property.
     */
    public set localIPAddress(value: string | undefined) {
        this._localIPAddress = value;
    };
    /**
     * Gets the localPort property value. The local media port.
     * @returns a integer
     */
    public get localPort() {
        return this._localPort;
    };
    /**
     * Sets the localPort property value. The local media port.
     * @param value Value to set for the localPort property.
     */
    public set localPort(value: number | undefined) {
        this._localPort = value;
    };
    /**
     * Gets the maximumInboundJitter property value. The maximum inbound stream network jitter.
     * @returns a Duration
     */
    public get maximumInboundJitter() {
        return this._maximumInboundJitter;
    };
    /**
     * Sets the maximumInboundJitter property value. The maximum inbound stream network jitter.
     * @param value Value to set for the maximumInboundJitter property.
     */
    public set maximumInboundJitter(value: Duration | undefined) {
        this._maximumInboundJitter = value;
    };
    /**
     * Gets the maximumInboundPacketLossRateInPercentage property value. The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get maximumInboundPacketLossRateInPercentage() {
        return this._maximumInboundPacketLossRateInPercentage;
    };
    /**
     * Sets the maximumInboundPacketLossRateInPercentage property value. The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the maximumInboundPacketLossRateInPercentage property.
     */
    public set maximumInboundPacketLossRateInPercentage(value: number | undefined) {
        this._maximumInboundPacketLossRateInPercentage = value;
    };
    /**
     * Gets the maximumInboundRoundTripDelay property value. The maximum inbound stream network round trip delay.
     * @returns a Duration
     */
    public get maximumInboundRoundTripDelay() {
        return this._maximumInboundRoundTripDelay;
    };
    /**
     * Sets the maximumInboundRoundTripDelay property value. The maximum inbound stream network round trip delay.
     * @param value Value to set for the maximumInboundRoundTripDelay property.
     */
    public set maximumInboundRoundTripDelay(value: Duration | undefined) {
        this._maximumInboundRoundTripDelay = value;
    };
    /**
     * Gets the maximumOutboundJitter property value. The maximum outbound stream network jitter.
     * @returns a Duration
     */
    public get maximumOutboundJitter() {
        return this._maximumOutboundJitter;
    };
    /**
     * Sets the maximumOutboundJitter property value. The maximum outbound stream network jitter.
     * @param value Value to set for the maximumOutboundJitter property.
     */
    public set maximumOutboundJitter(value: Duration | undefined) {
        this._maximumOutboundJitter = value;
    };
    /**
     * Gets the maximumOutboundPacketLossRateInPercentage property value. The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @returns a double
     */
    public get maximumOutboundPacketLossRateInPercentage() {
        return this._maximumOutboundPacketLossRateInPercentage;
    };
    /**
     * Sets the maximumOutboundPacketLossRateInPercentage property value. The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
     * @param value Value to set for the maximumOutboundPacketLossRateInPercentage property.
     */
    public set maximumOutboundPacketLossRateInPercentage(value: number | undefined) {
        this._maximumOutboundPacketLossRateInPercentage = value;
    };
    /**
     * Gets the maximumOutboundRoundTripDelay property value. The maximum outbound stream network round trip delay.
     * @returns a Duration
     */
    public get maximumOutboundRoundTripDelay() {
        return this._maximumOutboundRoundTripDelay;
    };
    /**
     * Sets the maximumOutboundRoundTripDelay property value. The maximum outbound stream network round trip delay.
     * @param value Value to set for the maximumOutboundRoundTripDelay property.
     */
    public set maximumOutboundRoundTripDelay(value: Duration | undefined) {
        this._maximumOutboundRoundTripDelay = value;
    };
    /**
     * Gets the mediaDuration property value. The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.
     * @returns a Duration
     */
    public get mediaDuration() {
        return this._mediaDuration;
    };
    /**
     * Sets the mediaDuration property value. The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all of the durations.
     * @param value Value to set for the mediaDuration property.
     */
    public set mediaDuration(value: Duration | undefined) {
        this._mediaDuration = value;
    };
    /**
     * Gets the networkLinkSpeedInBytes property value. The network link speed in bytes
     * @returns a int64
     */
    public get networkLinkSpeedInBytes() {
        return this._networkLinkSpeedInBytes;
    };
    /**
     * Sets the networkLinkSpeedInBytes property value. The network link speed in bytes
     * @param value Value to set for the networkLinkSpeedInBytes property.
     */
    public set networkLinkSpeedInBytes(value: number | undefined) {
        this._networkLinkSpeedInBytes = value;
    };
    /**
     * Gets the outboundPackets property value. The total number of the outbound packets.
     * @returns a int64
     */
    public get outboundPackets() {
        return this._outboundPackets;
    };
    /**
     * Sets the outboundPackets property value. The total number of the outbound packets.
     * @param value Value to set for the outboundPackets property.
     */
    public set outboundPackets(value: number | undefined) {
        this._outboundPackets = value;
    };
    /**
     * Gets the remoteIPAddress property value. The remote IP address for the media session.
     * @returns a string
     */
    public get remoteIPAddress() {
        return this._remoteIPAddress;
    };
    /**
     * Sets the remoteIPAddress property value. The remote IP address for the media session.
     * @param value Value to set for the remoteIPAddress property.
     */
    public set remoteIPAddress(value: string | undefined) {
        this._remoteIPAddress = value;
    };
    /**
     * Gets the remotePort property value. The remote media port.
     * @returns a integer
     */
    public get remotePort() {
        return this._remotePort;
    };
    /**
     * Sets the remotePort property value. The remote media port.
     * @param value Value to set for the remotePort property.
     */
    public set remotePort(value: number | undefined) {
        this._remotePort = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDurationValue("averageInboundJitter", this.averageInboundJitter);
        writer.writeNumberValue("averageInboundPacketLossRateInPercentage", this.averageInboundPacketLossRateInPercentage);
        writer.writeDurationValue("averageInboundRoundTripDelay", this.averageInboundRoundTripDelay);
        writer.writeDurationValue("averageOutboundJitter", this.averageOutboundJitter);
        writer.writeNumberValue("averageOutboundPacketLossRateInPercentage", this.averageOutboundPacketLossRateInPercentage);
        writer.writeDurationValue("averageOutboundRoundTripDelay", this.averageOutboundRoundTripDelay);
        writer.writeNumberValue("channelIndex", this.channelIndex);
        writer.writeNumberValue("inboundPackets", this.inboundPackets);
        writer.writeStringValue("localIPAddress", this.localIPAddress);
        writer.writeNumberValue("localPort", this.localPort);
        writer.writeDurationValue("maximumInboundJitter", this.maximumInboundJitter);
        writer.writeNumberValue("maximumInboundPacketLossRateInPercentage", this.maximumInboundPacketLossRateInPercentage);
        writer.writeDurationValue("maximumInboundRoundTripDelay", this.maximumInboundRoundTripDelay);
        writer.writeDurationValue("maximumOutboundJitter", this.maximumOutboundJitter);
        writer.writeNumberValue("maximumOutboundPacketLossRateInPercentage", this.maximumOutboundPacketLossRateInPercentage);
        writer.writeDurationValue("maximumOutboundRoundTripDelay", this.maximumOutboundRoundTripDelay);
        writer.writeDurationValue("mediaDuration", this.mediaDuration);
        writer.writeNumberValue("networkLinkSpeedInBytes", this.networkLinkSpeedInBytes);
        writer.writeNumberValue("outboundPackets", this.outboundPackets);
        writer.writeStringValue("remoteIPAddress", this.remoteIPAddress);
        writer.writeNumberValue("remotePort", this.remotePort);
        writer.writeAdditionalData(this.additionalData);
    };
}
