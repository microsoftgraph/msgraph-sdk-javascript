import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ErfRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _lowerLimit?: Json | undefined;
    private _upperLimit?: Json | undefined;
    /**
     * Instantiates a new erfRequestBody and sets the default values.
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
     * Gets the lowerLimit property value. 
     * @returns a Json
     */
    public get lowerLimit() {
        return this._lowerLimit;
    };
    /**
     * Gets the upperLimit property value. 
     * @returns a Json
     */
    public get upperLimit() {
        return this._upperLimit;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["lowerLimit", (o, n) => { (o as unknown as ErfRequestBody).lowerLimit = n.getObjectValue<Json>(Json); }],
            ["upperLimit", (o, n) => { (o as unknown as ErfRequestBody).upperLimit = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lowerLimit", this.lowerLimit);
        writer.writeObjectValue<Json>("upperLimit", this.upperLimit);
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
     * Sets the lowerLimit property value. 
     * @param value Value to set for the lowerLimit property.
     */
    public set lowerLimit(value: Json | undefined) {
        this._lowerLimit = value;
    };
    /**
     * Sets the upperLimit property value. 
     * @param value Value to set for the upperLimit property.
     */
    public set upperLimit(value: Json | undefined) {
        this._upperLimit = value;
    };
}
