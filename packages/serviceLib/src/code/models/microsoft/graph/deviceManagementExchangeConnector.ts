import {DeviceManagementExchangeConnectorStatus, DeviceManagementExchangeConnectorType, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceManagementExchangeConnector extends Entity implements Parsable {
    /** The name of the server hosting the Exchange Connector.  */
    private _connectorServerName?: string | undefined;
    /** An alias assigned to the Exchange server  */
    private _exchangeAlias?: string | undefined;
    /** The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.  */
    private _exchangeConnectorType?: DeviceManagementExchangeConnectorType | undefined;
    /** Exchange Organization to the Exchange server  */
    private _exchangeOrganization?: string | undefined;
    /** Last sync time for the Exchange Connector  */
    private _lastSyncDateTime?: Date | undefined;
    /** Email address used to configure the Service To Service Exchange Connector.  */
    private _primarySmtpAddress?: string | undefined;
    /** The name of the Exchange server.  */
    private _serverName?: string | undefined;
    /** Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.  */
    private _status?: DeviceManagementExchangeConnectorStatus | undefined;
    /** The version of the ExchangeConnectorAgent  */
    private _version?: string | undefined;
    /**
     * Instantiates a new deviceManagementExchangeConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the connectorServerName property value. The name of the server hosting the Exchange Connector.
     * @returns a string
     */
    public get connectorServerName() {
        return this._connectorServerName;
    };
    /**
     * Gets the exchangeAlias property value. An alias assigned to the Exchange server
     * @returns a string
     */
    public get exchangeAlias() {
        return this._exchangeAlias;
    };
    /**
     * Gets the exchangeConnectorType property value. The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.
     * @returns a deviceManagementExchangeConnectorType
     */
    public get exchangeConnectorType() {
        return this._exchangeConnectorType;
    };
    /**
     * Gets the exchangeOrganization property value. Exchange Organization to the Exchange server
     * @returns a string
     */
    public get exchangeOrganization() {
        return this._exchangeOrganization;
    };
    /**
     * Gets the lastSyncDateTime property value. Last sync time for the Exchange Connector
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Gets the primarySmtpAddress property value. Email address used to configure the Service To Service Exchange Connector.
     * @returns a string
     */
    public get primarySmtpAddress() {
        return this._primarySmtpAddress;
    };
    /**
     * Gets the serverName property value. The name of the Exchange server.
     * @returns a string
     */
    public get serverName() {
        return this._serverName;
    };
    /**
     * Gets the status property value. Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.
     * @returns a deviceManagementExchangeConnectorStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the version property value. The version of the ExchangeConnectorAgent
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["connectorServerName", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).connectorServerName = n.getStringValue(); }],
            ["exchangeAlias", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).exchangeAlias = n.getStringValue(); }],
            ["exchangeConnectorType", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).exchangeConnectorType = n.getEnumValue<DeviceManagementExchangeConnectorType>(DeviceManagementExchangeConnectorType); }],
            ["exchangeOrganization", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).exchangeOrganization = n.getStringValue(); }],
            ["lastSyncDateTime", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).lastSyncDateTime = n.getDateValue(); }],
            ["primarySmtpAddress", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).primarySmtpAddress = n.getStringValue(); }],
            ["serverName", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).serverName = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).status = n.getEnumValue<DeviceManagementExchangeConnectorStatus>(DeviceManagementExchangeConnectorStatus); }],
            ["version", (o, n) => { (o as unknown as DeviceManagementExchangeConnector).version = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("connectorServerName", this.connectorServerName);
        writer.writeStringValue("exchangeAlias", this.exchangeAlias);
        writer.writeEnumValue<DeviceManagementExchangeConnectorType>("exchangeConnectorType", this.exchangeConnectorType);
        writer.writeStringValue("exchangeOrganization", this.exchangeOrganization);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("primarySmtpAddress", this.primarySmtpAddress);
        writer.writeStringValue("serverName", this.serverName);
        writer.writeEnumValue<DeviceManagementExchangeConnectorStatus>("status", this.status);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Sets the connectorServerName property value. The name of the server hosting the Exchange Connector.
     * @param value Value to set for the connectorServerName property.
     */
    public set connectorServerName(value: string | undefined) {
        this._connectorServerName = value;
    };
    /**
     * Sets the exchangeAlias property value. An alias assigned to the Exchange server
     * @param value Value to set for the exchangeAlias property.
     */
    public set exchangeAlias(value: string | undefined) {
        this._exchangeAlias = value;
    };
    /**
     * Sets the exchangeConnectorType property value. The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.
     * @param value Value to set for the exchangeConnectorType property.
     */
    public set exchangeConnectorType(value: DeviceManagementExchangeConnectorType | undefined) {
        this._exchangeConnectorType = value;
    };
    /**
     * Sets the exchangeOrganization property value. Exchange Organization to the Exchange server
     * @param value Value to set for the exchangeOrganization property.
     */
    public set exchangeOrganization(value: string | undefined) {
        this._exchangeOrganization = value;
    };
    /**
     * Sets the lastSyncDateTime property value. Last sync time for the Exchange Connector
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Sets the primarySmtpAddress property value. Email address used to configure the Service To Service Exchange Connector.
     * @param value Value to set for the primarySmtpAddress property.
     */
    public set primarySmtpAddress(value: string | undefined) {
        this._primarySmtpAddress = value;
    };
    /**
     * Sets the serverName property value. The name of the Exchange server.
     * @param value Value to set for the serverName property.
     */
    public set serverName(value: string | undefined) {
        this._serverName = value;
    };
    /**
     * Sets the status property value. Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.
     * @param value Value to set for the status property.
     */
    public set status(value: DeviceManagementExchangeConnectorStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the version property value. The version of the ExchangeConnectorAgent
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
