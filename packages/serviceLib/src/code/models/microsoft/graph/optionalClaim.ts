import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OptionalClaim implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property.  */
    private _additionalProperties?: string[] | undefined;
    /** If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false.  */
    private _essential?: boolean | undefined;
    /** The name of the optional claim.  */
    private _name?: string | undefined;
    /** The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object.  */
    private _source?: string | undefined;
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
     * Gets the additionalProperties property value. Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property.
     * @returns a string
     */
    public get additionalProperties() {
        return this._additionalProperties;
    };
    /**
     * Sets the additionalProperties property value. Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional claim specified in the name property.
     * @param value Value to set for the additionalProperties property.
     */
    public set additionalProperties(value: string[] | undefined) {
        this._additionalProperties = value;
    };
    /**
     * Instantiates a new optionalClaim and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the essential property value. If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false.
     * @returns a boolean
     */
    public get essential() {
        return this._essential;
    };
    /**
     * Sets the essential property value. If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for the specific task requested by the end user. The default value is false.
     * @param value Value to set for the essential property.
     */
    public set essential(value: boolean | undefined) {
        this._essential = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["additionalProperties", (o, n) => { (o as unknown as OptionalClaim).additionalProperties = n.getCollectionOfPrimitiveValues<string>(); }],
            ["essential", (o, n) => { (o as unknown as OptionalClaim).essential = n.getBooleanValue(); }],
            ["name", (o, n) => { (o as unknown as OptionalClaim).name = n.getStringValue(); }],
            ["source", (o, n) => { (o as unknown as OptionalClaim).source = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the name property value. The name of the optional claim.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the optional claim.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("additionalProperties", this.additionalProperties);
        writer.writeBooleanValue("essential", this.essential);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("source", this.source);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source property value. The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object.
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source (directory object) of the claim. There are predefined claims and user-defined claims from extension properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the value in the name property is the extension property from the user object.
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
}
