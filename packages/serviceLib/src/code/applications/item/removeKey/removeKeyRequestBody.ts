import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removeKey method.  */
export class RemoveKeyRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _keyId?: string | undefined;
    private _proof?: string | undefined;
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
     * Instantiates a new removeKeyRequestBody and sets the default values.
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
            ["keyId", (o, n) => { (o as unknown as RemoveKeyRequestBody).keyId = n.getStringValue(); }],
            ["proof", (o, n) => { (o as unknown as RemoveKeyRequestBody).proof = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the keyId property value. 
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Sets the keyId property value. 
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Gets the proof property value. 
     * @returns a string
     */
    public get proof() {
        return this._proof;
    };
    /**
     * Sets the proof property value. 
     * @param value Value to set for the proof property.
     */
    public set proof(value: string | undefined) {
        this._proof = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("keyId", this.keyId);
        writer.writeStringValue("proof", this.proof);
        writer.writeAdditionalData(this.additionalData);
    };
}
