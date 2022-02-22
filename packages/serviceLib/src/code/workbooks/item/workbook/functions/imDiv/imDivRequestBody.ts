import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImDivRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _inumber1?: Json | undefined;
    private _inumber2?: Json | undefined;
    /**
     * Instantiates a new imDivRequestBody and sets the default values.
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
     * Gets the inumber1 property value. 
     * @returns a Json
     */
    public get inumber1() {
        return this._inumber1;
    };
    /**
     * Gets the inumber2 property value. 
     * @returns a Json
     */
    public get inumber2() {
        return this._inumber2;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["inumber1", (o, n) => { (o as unknown as ImDivRequestBody).inumber1 = n.getObjectValue<Json>(Json); }],
            ["inumber2", (o, n) => { (o as unknown as ImDivRequestBody).inumber2 = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("inumber1", this.inumber1);
        writer.writeObjectValue<Json>("inumber2", this.inumber2);
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
     * Sets the inumber1 property value. 
     * @param value Value to set for the inumber1 property.
     */
    public set inumber1(value: Json | undefined) {
        this._inumber1 = value;
    };
    /**
     * Sets the inumber2 property value. 
     * @param value Value to set for the inumber2 property.
     */
    public set inumber2(value: Json | undefined) {
        this._inumber2 = value;
    };
}
