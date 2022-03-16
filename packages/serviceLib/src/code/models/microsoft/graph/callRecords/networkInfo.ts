import {NetworkConnectionType} from './networkConnectionType';
import {WifiBand} from './wifiBand';
import {WifiRadioType} from './wifiRadioType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NetworkInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to cause poor quality of the audio sent.  */
    private _bandwidthLowEventRatio?: number | undefined;
    /** The wireless LAN basic service set identifier of the media endpoint used to connect to the network.  */
    private _basicServiceSetIdentifier?: string | undefined;
    /** Type of network used by the media endpoint. Possible values are: unknown, wired, wifi, mobile, tunnel, unknownFutureValue.  */
    private _connectionType?: NetworkConnectionType | undefined;
    /** Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to have real-time two-way communication.  */
    private _delayEventRatio?: number | undefined;
    /** DNS suffix associated with the network adapter of the media endpoint.  */
    private _dnsSuffix?: string | undefined;
    /** IP address of the media endpoint.  */
    private _ipAddress?: string | undefined;
    /** Link speed in bits per second reported by the network adapter used by the media endpoint.  */
    private _linkSpeed?: number | undefined;
    /** The media access control (MAC) address of the media endpoint's network device.  */
    private _macAddress?: string | undefined;
    /** Network port number used by media endpoint.  */
    private _port?: number | undefined;
    /** Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received.  */
    private _receivedQualityEventRatio?: number | undefined;
    /** IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address associated to the endpoint.  */
    private _reflexiveIPAddress?: string | undefined;
    /** IP address of the media relay server allocated by the media endpoint.  */
    private _relayIPAddress?: string | undefined;
    /** Network port number allocated on the media relay server by the media endpoint.  */
    private _relayPort?: number | undefined;
    /** Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent.  */
    private _sentQualityEventRatio?: number | undefined;
    /** Subnet used for media stream by the media endpoint.  */
    private _subnet?: string | undefined;
    /** WiFi band used by the media endpoint. Possible values are: unknown, frequency24GHz, frequency50GHz, frequency60GHz, unknownFutureValue.  */
    private _wifiBand?: WifiBand | undefined;
    /** Estimated remaining battery charge in percentage reported by the media endpoint.  */
    private _wifiBatteryCharge?: number | undefined;
    /** WiFi channel used by the media endpoint.  */
    private _wifiChannel?: number | undefined;
    /** Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.  */
    private _wifiMicrosoftDriver?: string | undefined;
    /** Version of the Microsoft WiFi driver used by the media endpoint.  */
    private _wifiMicrosoftDriverVersion?: string | undefined;
    /** Type of WiFi radio used by the media endpoint. Possible values are: unknown, wifi80211a, wifi80211b, wifi80211g, wifi80211n, wifi80211ac, wifi80211ax, unknownFutureValue.  */
    private _wifiRadioType?: WifiRadioType | undefined;
    /** WiFi signal strength in percentage reported by the media endpoint.  */
    private _wifiSignalStrength?: number | undefined;
    /** Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.  */
    private _wifiVendorDriver?: string | undefined;
    /** Version of the WiFi driver used by the media endpoint.  */
    private _wifiVendorDriverVersion?: string | undefined;
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
     * Gets the bandwidthLowEventRatio property value. Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to cause poor quality of the audio sent.
     * @returns a float
     */
    public get bandwidthLowEventRatio() {
        return this._bandwidthLowEventRatio;
    };
    /**
     * Sets the bandwidthLowEventRatio property value. Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to cause poor quality of the audio sent.
     * @param value Value to set for the bandwidthLowEventRatio property.
     */
    public set bandwidthLowEventRatio(value: number | undefined) {
        this._bandwidthLowEventRatio = value;
    };
    /**
     * Gets the basicServiceSetIdentifier property value. The wireless LAN basic service set identifier of the media endpoint used to connect to the network.
     * @returns a string
     */
    public get basicServiceSetIdentifier() {
        return this._basicServiceSetIdentifier;
    };
    /**
     * Sets the basicServiceSetIdentifier property value. The wireless LAN basic service set identifier of the media endpoint used to connect to the network.
     * @param value Value to set for the basicServiceSetIdentifier property.
     */
    public set basicServiceSetIdentifier(value: string | undefined) {
        this._basicServiceSetIdentifier = value;
    };
    /**
     * Gets the connectionType property value. Type of network used by the media endpoint. Possible values are: unknown, wired, wifi, mobile, tunnel, unknownFutureValue.
     * @returns a networkConnectionType
     */
    public get connectionType() {
        return this._connectionType;
    };
    /**
     * Sets the connectionType property value. Type of network used by the media endpoint. Possible values are: unknown, wired, wifi, mobile, tunnel, unknownFutureValue.
     * @param value Value to set for the connectionType property.
     */
    public set connectionType(value: NetworkConnectionType | undefined) {
        this._connectionType = value;
    };
    /**
     * Instantiates a new networkInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the delayEventRatio property value. Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to have real-time two-way communication.
     * @returns a float
     */
    public get delayEventRatio() {
        return this._delayEventRatio;
    };
    /**
     * Sets the delayEventRatio property value. Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to have real-time two-way communication.
     * @param value Value to set for the delayEventRatio property.
     */
    public set delayEventRatio(value: number | undefined) {
        this._delayEventRatio = value;
    };
    /**
     * Gets the dnsSuffix property value. DNS suffix associated with the network adapter of the media endpoint.
     * @returns a string
     */
    public get dnsSuffix() {
        return this._dnsSuffix;
    };
    /**
     * Sets the dnsSuffix property value. DNS suffix associated with the network adapter of the media endpoint.
     * @param value Value to set for the dnsSuffix property.
     */
    public set dnsSuffix(value: string | undefined) {
        this._dnsSuffix = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bandwidthLowEventRatio", (o, n) => { (o as unknown as NetworkInfo).bandwidthLowEventRatio = n.getNumberValue(); }],
            ["basicServiceSetIdentifier", (o, n) => { (o as unknown as NetworkInfo).basicServiceSetIdentifier = n.getStringValue(); }],
            ["connectionType", (o, n) => { (o as unknown as NetworkInfo).connectionType = n.getEnumValue<NetworkConnectionType>(NetworkConnectionType); }],
            ["delayEventRatio", (o, n) => { (o as unknown as NetworkInfo).delayEventRatio = n.getNumberValue(); }],
            ["dnsSuffix", (o, n) => { (o as unknown as NetworkInfo).dnsSuffix = n.getStringValue(); }],
            ["ipAddress", (o, n) => { (o as unknown as NetworkInfo).ipAddress = n.getStringValue(); }],
            ["linkSpeed", (o, n) => { (o as unknown as NetworkInfo).linkSpeed = n.getNumberValue(); }],
            ["macAddress", (o, n) => { (o as unknown as NetworkInfo).macAddress = n.getStringValue(); }],
            ["port", (o, n) => { (o as unknown as NetworkInfo).port = n.getNumberValue(); }],
            ["receivedQualityEventRatio", (o, n) => { (o as unknown as NetworkInfo).receivedQualityEventRatio = n.getNumberValue(); }],
            ["reflexiveIPAddress", (o, n) => { (o as unknown as NetworkInfo).reflexiveIPAddress = n.getStringValue(); }],
            ["relayIPAddress", (o, n) => { (o as unknown as NetworkInfo).relayIPAddress = n.getStringValue(); }],
            ["relayPort", (o, n) => { (o as unknown as NetworkInfo).relayPort = n.getNumberValue(); }],
            ["sentQualityEventRatio", (o, n) => { (o as unknown as NetworkInfo).sentQualityEventRatio = n.getNumberValue(); }],
            ["subnet", (o, n) => { (o as unknown as NetworkInfo).subnet = n.getStringValue(); }],
            ["wifiBand", (o, n) => { (o as unknown as NetworkInfo).wifiBand = n.getEnumValue<WifiBand>(WifiBand); }],
            ["wifiBatteryCharge", (o, n) => { (o as unknown as NetworkInfo).wifiBatteryCharge = n.getNumberValue(); }],
            ["wifiChannel", (o, n) => { (o as unknown as NetworkInfo).wifiChannel = n.getNumberValue(); }],
            ["wifiMicrosoftDriver", (o, n) => { (o as unknown as NetworkInfo).wifiMicrosoftDriver = n.getStringValue(); }],
            ["wifiMicrosoftDriverVersion", (o, n) => { (o as unknown as NetworkInfo).wifiMicrosoftDriverVersion = n.getStringValue(); }],
            ["wifiRadioType", (o, n) => { (o as unknown as NetworkInfo).wifiRadioType = n.getEnumValue<WifiRadioType>(WifiRadioType); }],
            ["wifiSignalStrength", (o, n) => { (o as unknown as NetworkInfo).wifiSignalStrength = n.getNumberValue(); }],
            ["wifiVendorDriver", (o, n) => { (o as unknown as NetworkInfo).wifiVendorDriver = n.getStringValue(); }],
            ["wifiVendorDriverVersion", (o, n) => { (o as unknown as NetworkInfo).wifiVendorDriverVersion = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the ipAddress property value. IP address of the media endpoint.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. IP address of the media endpoint.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Gets the linkSpeed property value. Link speed in bits per second reported by the network adapter used by the media endpoint.
     * @returns a int64
     */
    public get linkSpeed() {
        return this._linkSpeed;
    };
    /**
     * Sets the linkSpeed property value. Link speed in bits per second reported by the network adapter used by the media endpoint.
     * @param value Value to set for the linkSpeed property.
     */
    public set linkSpeed(value: number | undefined) {
        this._linkSpeed = value;
    };
    /**
     * Gets the macAddress property value. The media access control (MAC) address of the media endpoint's network device.
     * @returns a string
     */
    public get macAddress() {
        return this._macAddress;
    };
    /**
     * Sets the macAddress property value. The media access control (MAC) address of the media endpoint's network device.
     * @param value Value to set for the macAddress property.
     */
    public set macAddress(value: string | undefined) {
        this._macAddress = value;
    };
    /**
     * Gets the port property value. Network port number used by media endpoint.
     * @returns a integer
     */
    public get port() {
        return this._port;
    };
    /**
     * Sets the port property value. Network port number used by media endpoint.
     * @param value Value to set for the port property.
     */
    public set port(value: number | undefined) {
        this._port = value;
    };
    /**
     * Gets the receivedQualityEventRatio property value. Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received.
     * @returns a float
     */
    public get receivedQualityEventRatio() {
        return this._receivedQualityEventRatio;
    };
    /**
     * Sets the receivedQualityEventRatio property value. Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received.
     * @param value Value to set for the receivedQualityEventRatio property.
     */
    public set receivedQualityEventRatio(value: number | undefined) {
        this._receivedQualityEventRatio = value;
    };
    /**
     * Gets the reflexiveIPAddress property value. IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address associated to the endpoint.
     * @returns a string
     */
    public get reflexiveIPAddress() {
        return this._reflexiveIPAddress;
    };
    /**
     * Sets the reflexiveIPAddress property value. IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address associated to the endpoint.
     * @param value Value to set for the reflexiveIPAddress property.
     */
    public set reflexiveIPAddress(value: string | undefined) {
        this._reflexiveIPAddress = value;
    };
    /**
     * Gets the relayIPAddress property value. IP address of the media relay server allocated by the media endpoint.
     * @returns a string
     */
    public get relayIPAddress() {
        return this._relayIPAddress;
    };
    /**
     * Sets the relayIPAddress property value. IP address of the media relay server allocated by the media endpoint.
     * @param value Value to set for the relayIPAddress property.
     */
    public set relayIPAddress(value: string | undefined) {
        this._relayIPAddress = value;
    };
    /**
     * Gets the relayPort property value. Network port number allocated on the media relay server by the media endpoint.
     * @returns a integer
     */
    public get relayPort() {
        return this._relayPort;
    };
    /**
     * Sets the relayPort property value. Network port number allocated on the media relay server by the media endpoint.
     * @param value Value to set for the relayPort property.
     */
    public set relayPort(value: number | undefined) {
        this._relayPort = value;
    };
    /**
     * Gets the sentQualityEventRatio property value. Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent.
     * @returns a float
     */
    public get sentQualityEventRatio() {
        return this._sentQualityEventRatio;
    };
    /**
     * Sets the sentQualityEventRatio property value. Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent.
     * @param value Value to set for the sentQualityEventRatio property.
     */
    public set sentQualityEventRatio(value: number | undefined) {
        this._sentQualityEventRatio = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("bandwidthLowEventRatio", this.bandwidthLowEventRatio);
        writer.writeStringValue("basicServiceSetIdentifier", this.basicServiceSetIdentifier);
        writer.writeEnumValue<NetworkConnectionType>("connectionType", this.connectionType);
        writer.writeNumberValue("delayEventRatio", this.delayEventRatio);
        writer.writeStringValue("dnsSuffix", this.dnsSuffix);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeNumberValue("linkSpeed", this.linkSpeed);
        writer.writeStringValue("macAddress", this.macAddress);
        writer.writeNumberValue("port", this.port);
        writer.writeNumberValue("receivedQualityEventRatio", this.receivedQualityEventRatio);
        writer.writeStringValue("reflexiveIPAddress", this.reflexiveIPAddress);
        writer.writeStringValue("relayIPAddress", this.relayIPAddress);
        writer.writeNumberValue("relayPort", this.relayPort);
        writer.writeNumberValue("sentQualityEventRatio", this.sentQualityEventRatio);
        writer.writeStringValue("subnet", this.subnet);
        writer.writeEnumValue<WifiBand>("wifiBand", this.wifiBand);
        writer.writeNumberValue("wifiBatteryCharge", this.wifiBatteryCharge);
        writer.writeNumberValue("wifiChannel", this.wifiChannel);
        writer.writeStringValue("wifiMicrosoftDriver", this.wifiMicrosoftDriver);
        writer.writeStringValue("wifiMicrosoftDriverVersion", this.wifiMicrosoftDriverVersion);
        writer.writeEnumValue<WifiRadioType>("wifiRadioType", this.wifiRadioType);
        writer.writeNumberValue("wifiSignalStrength", this.wifiSignalStrength);
        writer.writeStringValue("wifiVendorDriver", this.wifiVendorDriver);
        writer.writeStringValue("wifiVendorDriverVersion", this.wifiVendorDriverVersion);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subnet property value. Subnet used for media stream by the media endpoint.
     * @returns a string
     */
    public get subnet() {
        return this._subnet;
    };
    /**
     * Sets the subnet property value. Subnet used for media stream by the media endpoint.
     * @param value Value to set for the subnet property.
     */
    public set subnet(value: string | undefined) {
        this._subnet = value;
    };
    /**
     * Gets the wifiBand property value. WiFi band used by the media endpoint. Possible values are: unknown, frequency24GHz, frequency50GHz, frequency60GHz, unknownFutureValue.
     * @returns a wifiBand
     */
    public get wifiBand() {
        return this._wifiBand;
    };
    /**
     * Sets the wifiBand property value. WiFi band used by the media endpoint. Possible values are: unknown, frequency24GHz, frequency50GHz, frequency60GHz, unknownFutureValue.
     * @param value Value to set for the wifiBand property.
     */
    public set wifiBand(value: WifiBand | undefined) {
        this._wifiBand = value;
    };
    /**
     * Gets the wifiBatteryCharge property value. Estimated remaining battery charge in percentage reported by the media endpoint.
     * @returns a integer
     */
    public get wifiBatteryCharge() {
        return this._wifiBatteryCharge;
    };
    /**
     * Sets the wifiBatteryCharge property value. Estimated remaining battery charge in percentage reported by the media endpoint.
     * @param value Value to set for the wifiBatteryCharge property.
     */
    public set wifiBatteryCharge(value: number | undefined) {
        this._wifiBatteryCharge = value;
    };
    /**
     * Gets the wifiChannel property value. WiFi channel used by the media endpoint.
     * @returns a integer
     */
    public get wifiChannel() {
        return this._wifiChannel;
    };
    /**
     * Sets the wifiChannel property value. WiFi channel used by the media endpoint.
     * @param value Value to set for the wifiChannel property.
     */
    public set wifiChannel(value: number | undefined) {
        this._wifiChannel = value;
    };
    /**
     * Gets the wifiMicrosoftDriver property value. Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
     * @returns a string
     */
    public get wifiMicrosoftDriver() {
        return this._wifiMicrosoftDriver;
    };
    /**
     * Sets the wifiMicrosoftDriver property value. Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
     * @param value Value to set for the wifiMicrosoftDriver property.
     */
    public set wifiMicrosoftDriver(value: string | undefined) {
        this._wifiMicrosoftDriver = value;
    };
    /**
     * Gets the wifiMicrosoftDriverVersion property value. Version of the Microsoft WiFi driver used by the media endpoint.
     * @returns a string
     */
    public get wifiMicrosoftDriverVersion() {
        return this._wifiMicrosoftDriverVersion;
    };
    /**
     * Sets the wifiMicrosoftDriverVersion property value. Version of the Microsoft WiFi driver used by the media endpoint.
     * @param value Value to set for the wifiMicrosoftDriverVersion property.
     */
    public set wifiMicrosoftDriverVersion(value: string | undefined) {
        this._wifiMicrosoftDriverVersion = value;
    };
    /**
     * Gets the wifiRadioType property value. Type of WiFi radio used by the media endpoint. Possible values are: unknown, wifi80211a, wifi80211b, wifi80211g, wifi80211n, wifi80211ac, wifi80211ax, unknownFutureValue.
     * @returns a wifiRadioType
     */
    public get wifiRadioType() {
        return this._wifiRadioType;
    };
    /**
     * Sets the wifiRadioType property value. Type of WiFi radio used by the media endpoint. Possible values are: unknown, wifi80211a, wifi80211b, wifi80211g, wifi80211n, wifi80211ac, wifi80211ax, unknownFutureValue.
     * @param value Value to set for the wifiRadioType property.
     */
    public set wifiRadioType(value: WifiRadioType | undefined) {
        this._wifiRadioType = value;
    };
    /**
     * Gets the wifiSignalStrength property value. WiFi signal strength in percentage reported by the media endpoint.
     * @returns a integer
     */
    public get wifiSignalStrength() {
        return this._wifiSignalStrength;
    };
    /**
     * Sets the wifiSignalStrength property value. WiFi signal strength in percentage reported by the media endpoint.
     * @param value Value to set for the wifiSignalStrength property.
     */
    public set wifiSignalStrength(value: number | undefined) {
        this._wifiSignalStrength = value;
    };
    /**
     * Gets the wifiVendorDriver property value. Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
     * @returns a string
     */
    public get wifiVendorDriver() {
        return this._wifiVendorDriver;
    };
    /**
     * Sets the wifiVendorDriver property value. Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
     * @param value Value to set for the wifiVendorDriver property.
     */
    public set wifiVendorDriver(value: string | undefined) {
        this._wifiVendorDriver = value;
    };
    /**
     * Gets the wifiVendorDriverVersion property value. Version of the WiFi driver used by the media endpoint.
     * @returns a string
     */
    public get wifiVendorDriverVersion() {
        return this._wifiVendorDriverVersion;
    };
    /**
     * Sets the wifiVendorDriverVersion property value. Version of the WiFi driver used by the media endpoint.
     * @param value Value to set for the wifiVendorDriverVersion property.
     */
    public set wifiVendorDriverVersion(value: string | undefined) {
        this._wifiVendorDriverVersion = value;
    };
}
