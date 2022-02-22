import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class T_Inv_2TRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _degFreedom?: Json | undefined;
    private _probability?: Json | undefined;
    /**
     * Instantiates a new t_Inv_2TRequestBody and sets the default values.
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
     * Gets the degFreedom property value. 
     * @returns a Json
     */
    public get degFreedom() {
        return this._degFreedom;
    };
    /**
     * Gets the probability property value. 
     * @returns a Json
     */
    public get probability() {
        return this._probability;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["degFreedom", (o, n) => { (o as unknown as T_Inv_2TRequestBody).degFreedom = n.getObjectValue<Json>(Json); }],
            ["probability", (o, n) => { (o as unknown as T_Inv_2TRequestBody).probability = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("degFreedom", this.degFreedom);
        writer.writeObjectValue<Json>("probability", this.probability);
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
     * Sets the degFreedom property value. 
     * @param value Value to set for the degFreedom property.
     */
    public set degFreedom(value: Json | undefined) {
        this._degFreedom = value;
    };
    /**
     * Sets the probability property value. 
     * @param value Value to set for the probability property.
     */
    public set probability(value: Json | undefined) {
        this._probability = value;
    };
}
