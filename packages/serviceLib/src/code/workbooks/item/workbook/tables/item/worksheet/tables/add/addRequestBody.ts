import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _address?: string | undefined;
    private _hasHeaders?: boolean | undefined;
    /**
     * Instantiates a new addRequestBody and sets the default values.
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
     * Gets the address property value. 
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Gets the hasHeaders property value. 
     * @returns a boolean
     */
    public get hasHeaders() {
        return this._hasHeaders;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["address", (o, n) => { (o as unknown as AddRequestBody).address = n.getStringValue(); }],
            ["hasHeaders", (o, n) => { (o as unknown as AddRequestBody).hasHeaders = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeBooleanValue("hasHeaders", this.hasHeaders);
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
     * Sets the address property value. 
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Sets the hasHeaders property value. 
     * @param value Value to set for the hasHeaders property.
     */
    public set hasHeaders(value: boolean | undefined) {
        this._hasHeaders = value;
    };
}
