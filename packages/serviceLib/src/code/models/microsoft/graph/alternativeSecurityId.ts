import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlternativeSecurityId implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** For internal use only  */
    private _identityProvider?: string | undefined;
    /** For internal use only  */
    private _key?: string | undefined;
    /** For internal use only  */
    private _type?: number | undefined;
    /**
     * Instantiates a new alternativeSecurityId and sets the default values.
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
     * Gets the identityProvider property value. For internal use only
     * @returns a string
     */
    public get identityProvider() {
        return this._identityProvider;
    };
    /**
     * Gets the key property value. For internal use only
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Gets the type property value. For internal use only
     * @returns a integer
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
            ["identityProvider", (o, n) => { (o as unknown as AlternativeSecurityId).identityProvider = n.getStringValue(); }],
            ["key", (o, n) => { (o as unknown as AlternativeSecurityId).key = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as AlternativeSecurityId).type = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("identityProvider", this.identityProvider);
        writer.writeStringValue("key", this.key);
        writer.writeNumberValue("type", this.type);
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
     * Sets the identityProvider property value. For internal use only
     * @param value Value to set for the identityProvider property.
     */
    public set identityProvider(value: string | undefined) {
        this._identityProvider = value;
    };
    /**
     * Sets the key property value. For internal use only
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Sets the type property value. For internal use only
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
    };
}
