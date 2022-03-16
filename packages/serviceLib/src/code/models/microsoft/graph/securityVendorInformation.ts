import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityVendorInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.  */
    private _provider?: string | undefined;
    /** Version of the provider or subprovider, if it exists, that generated the alert. Required  */
    private _providerVersion?: string | undefined;
    /** Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.  */
    private _subProvider?: string | undefined;
    /** Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required  */
    private _vendor?: string | undefined;
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
     * Instantiates a new securityVendorInformation and sets the default values.
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
            ["provider", (o, n) => { (o as unknown as SecurityVendorInformation).provider = n.getStringValue(); }],
            ["providerVersion", (o, n) => { (o as unknown as SecurityVendorInformation).providerVersion = n.getStringValue(); }],
            ["subProvider", (o, n) => { (o as unknown as SecurityVendorInformation).subProvider = n.getStringValue(); }],
            ["vendor", (o, n) => { (o as unknown as SecurityVendorInformation).vendor = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the provider property value. Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.
     * @returns a string
     */
    public get provider() {
        return this._provider;
    };
    /**
     * Sets the provider property value. Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.
     * @param value Value to set for the provider property.
     */
    public set provider(value: string | undefined) {
        this._provider = value;
    };
    /**
     * Gets the providerVersion property value. Version of the provider or subprovider, if it exists, that generated the alert. Required
     * @returns a string
     */
    public get providerVersion() {
        return this._providerVersion;
    };
    /**
     * Sets the providerVersion property value. Version of the provider or subprovider, if it exists, that generated the alert. Required
     * @param value Value to set for the providerVersion property.
     */
    public set providerVersion(value: string | undefined) {
        this._providerVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("provider", this.provider);
        writer.writeStringValue("providerVersion", this.providerVersion);
        writer.writeStringValue("subProvider", this.subProvider);
        writer.writeStringValue("vendor", this.vendor);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subProvider property value. Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.
     * @returns a string
     */
    public get subProvider() {
        return this._subProvider;
    };
    /**
     * Sets the subProvider property value. Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.
     * @param value Value to set for the subProvider property.
     */
    public set subProvider(value: string | undefined) {
        this._subProvider = value;
    };
    /**
     * Gets the vendor property value. Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required
     * @returns a string
     */
    public get vendor() {
        return this._vendor;
    };
    /**
     * Sets the vendor property value. Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required
     * @param value Value to set for the vendor property.
     */
    public set vendor(value: string | undefined) {
        this._vendor = value;
    };
}
