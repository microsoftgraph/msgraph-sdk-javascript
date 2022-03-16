import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** App for Windows information protection  */
export class WindowsInformationProtectionApp implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If true, app is denied protection or exemption.  */
    private _denied?: boolean | undefined;
    /** The app's description.  */
    private _description?: string | undefined;
    /** App display name.  */
    private _displayName?: string | undefined;
    /** The product name.  */
    private _productName?: string | undefined;
    /** The publisher name  */
    private _publisherName?: string | undefined;
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
     * Instantiates a new windowsInformationProtectionApp and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the denied property value. If true, app is denied protection or exemption.
     * @returns a boolean
     */
    public get denied() {
        return this._denied;
    };
    /**
     * Sets the denied property value. If true, app is denied protection or exemption.
     * @param value Value to set for the denied property.
     */
    public set denied(value: boolean | undefined) {
        this._denied = value;
    };
    /**
     * Gets the description property value. The app's description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The app's description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. App display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. App display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["denied", (o, n) => { (o as unknown as WindowsInformationProtectionApp).denied = n.getBooleanValue(); }],
            ["description", (o, n) => { (o as unknown as WindowsInformationProtectionApp).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as WindowsInformationProtectionApp).displayName = n.getStringValue(); }],
            ["productName", (o, n) => { (o as unknown as WindowsInformationProtectionApp).productName = n.getStringValue(); }],
            ["publisherName", (o, n) => { (o as unknown as WindowsInformationProtectionApp).publisherName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the productName property value. The product name.
     * @returns a string
     */
    public get productName() {
        return this._productName;
    };
    /**
     * Sets the productName property value. The product name.
     * @param value Value to set for the productName property.
     */
    public set productName(value: string | undefined) {
        this._productName = value;
    };
    /**
     * Gets the publisherName property value. The publisher name
     * @returns a string
     */
    public get publisherName() {
        return this._publisherName;
    };
    /**
     * Sets the publisherName property value. The publisher name
     * @param value Value to set for the publisherName property.
     */
    public set publisherName(value: string | undefined) {
        this._publisherName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("denied", this.denied);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("productName", this.productName);
        writer.writeStringValue("publisherName", this.publisherName);
        writer.writeAdditionalData(this.additionalData);
    };
}
