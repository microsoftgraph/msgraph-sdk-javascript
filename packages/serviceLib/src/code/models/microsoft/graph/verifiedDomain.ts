import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerifiedDomain implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** For example, 'Email', 'OfficeCommunicationsOnline'.  */
    private _capabilities?: string | undefined;
    /** true if this is the default domain associated with the tenant; otherwise, false.  */
    private _isDefault?: boolean | undefined;
    /** true if this is the initial domain associated with the tenant; otherwise, false  */
    private _isInitial?: boolean | undefined;
    /** The domain name; for example, 'contoso.onmicrosoft.com'  */
    private _name?: string | undefined;
    /** For example, 'Managed'.  */
    private _type?: string | undefined;
    /**
     * Instantiates a new verifiedDomain and sets the default values.
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
     * Gets the capabilities property value. For example, 'Email', 'OfficeCommunicationsOnline'.
     * @returns a string
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Gets the isDefault property value. true if this is the default domain associated with the tenant; otherwise, false.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Gets the isInitial property value. true if this is the initial domain associated with the tenant; otherwise, false
     * @returns a boolean
     */
    public get isInitial() {
        return this._isInitial;
    };
    /**
     * Gets the name property value. The domain name; for example, 'contoso.onmicrosoft.com'
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the type property value. For example, 'Managed'.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["capabilities", (o, n) => { (o as unknown as VerifiedDomain).capabilities = n.getStringValue(); }],
            ["isDefault", (o, n) => { (o as unknown as VerifiedDomain).isDefault = n.getBooleanValue(); }],
            ["isInitial", (o, n) => { (o as unknown as VerifiedDomain).isInitial = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as VerifiedDomain).name = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as VerifiedDomain).type = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("capabilities", this.capabilities);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isInitial", this.isInitial);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
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
     * Sets the capabilities property value. For example, 'Email', 'OfficeCommunicationsOnline'.
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: string | undefined) {
        this._capabilities = value;
    };
    /**
     * Sets the isDefault property value. true if this is the default domain associated with the tenant; otherwise, false.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Sets the isInitial property value. true if this is the initial domain associated with the tenant; otherwise, false
     * @param value Value to set for the isInitial property.
     */
    public set isInitial(value: boolean | undefined) {
        this._isInitial = value;
    };
    /**
     * Sets the name property value. The domain name; for example, 'contoso.onmicrosoft.com'
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the type property value. For example, 'Managed'.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
