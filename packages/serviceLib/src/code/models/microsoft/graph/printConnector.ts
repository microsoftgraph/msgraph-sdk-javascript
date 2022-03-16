import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {Entity, PrinterLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintConnector extends Entity implements Parsable {
    /** The connector's version.  */
    private _appVersion?: string | undefined;
    /** The name of the connector.  */
    private _displayName?: string | undefined;
    /** The connector machine's hostname.  */
    private _fullyQualifiedDomainName?: string | undefined;
    /** The physical and/or organizational location of the connector.  */
    private _location?: PrinterLocation | undefined;
    /** The connector machine's operating system version.  */
    private _operatingSystem?: string | undefined;
    /** The DateTimeOffset when the connector was registered.  */
    private _registeredDateTime?: Date | undefined;
    /**
     * Gets the appVersion property value. The connector's version.
     * @returns a string
     */
    public get appVersion() {
        return this._appVersion;
    };
    /**
     * Sets the appVersion property value. The connector's version.
     * @param value Value to set for the appVersion property.
     */
    public set appVersion(value: string | undefined) {
        this._appVersion = value;
    };
    /**
     * Instantiates a new printConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the connector.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the connector.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the fullyQualifiedDomainName property value. The connector machine's hostname.
     * @returns a string
     */
    public get fullyQualifiedDomainName() {
        return this._fullyQualifiedDomainName;
    };
    /**
     * Sets the fullyQualifiedDomainName property value. The connector machine's hostname.
     * @param value Value to set for the fullyQualifiedDomainName property.
     */
    public set fullyQualifiedDomainName(value: string | undefined) {
        this._fullyQualifiedDomainName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appVersion", (o, n) => { (o as unknown as PrintConnector).appVersion = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as PrintConnector).displayName = n.getStringValue(); }],
            ["fullyQualifiedDomainName", (o, n) => { (o as unknown as PrintConnector).fullyQualifiedDomainName = n.getStringValue(); }],
            ["location", (o, n) => { (o as unknown as PrintConnector).location = n.getObjectValue<PrinterLocation>(createPrinterLocationFromDiscriminatorValue); }],
            ["operatingSystem", (o, n) => { (o as unknown as PrintConnector).operatingSystem = n.getStringValue(); }],
            ["registeredDateTime", (o, n) => { (o as unknown as PrintConnector).registeredDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Gets the location property value. The physical and/or organizational location of the connector.
     * @returns a printerLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The physical and/or organizational location of the connector.
     * @param value Value to set for the location property.
     */
    public set location(value: PrinterLocation | undefined) {
        this._location = value;
    };
    /**
     * Gets the operatingSystem property value. The connector machine's operating system version.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. The connector machine's operating system version.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Gets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
     * @returns a Date
     */
    public get registeredDateTime() {
        return this._registeredDateTime;
    };
    /**
     * Sets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
     * @param value Value to set for the registeredDateTime property.
     */
    public set registeredDateTime(value: Date | undefined) {
        this._registeredDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appVersion", this.appVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("fullyQualifiedDomainName", this.fullyQualifiedDomainName);
        writer.writeObjectValue<PrinterLocation>("location", this.location);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
    };
}
