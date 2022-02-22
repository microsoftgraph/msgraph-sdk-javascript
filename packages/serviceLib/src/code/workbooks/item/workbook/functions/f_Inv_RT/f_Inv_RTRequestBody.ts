import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class F_Inv_RTRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _degFreedom1?: Json | undefined;
    private _degFreedom2?: Json | undefined;
    private _probability?: Json | undefined;
    /**
     * Instantiates a new f_Inv_RTRequestBody and sets the default values.
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
     * Gets the degFreedom1 property value. 
     * @returns a Json
     */
    public get degFreedom1() {
        return this._degFreedom1;
    };
    /**
     * Gets the degFreedom2 property value. 
     * @returns a Json
     */
    public get degFreedom2() {
        return this._degFreedom2;
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
            ["degFreedom1", (o, n) => { (o as unknown as F_Inv_RTRequestBody).degFreedom1 = n.getObjectValue<Json>(Json); }],
            ["degFreedom2", (o, n) => { (o as unknown as F_Inv_RTRequestBody).degFreedom2 = n.getObjectValue<Json>(Json); }],
            ["probability", (o, n) => { (o as unknown as F_Inv_RTRequestBody).probability = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("degFreedom1", this.degFreedom1);
        writer.writeObjectValue<Json>("degFreedom2", this.degFreedom2);
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
     * Sets the degFreedom1 property value. 
     * @param value Value to set for the degFreedom1 property.
     */
    public set degFreedom1(value: Json | undefined) {
        this._degFreedom1 = value;
    };
    /**
     * Sets the degFreedom2 property value. 
     * @param value Value to set for the degFreedom2 property.
     */
    public set degFreedom2(value: Json | undefined) {
        this._degFreedom2 = value;
    };
    /**
     * Sets the probability property value. 
     * @param value Value to set for the probability property.
     */
    public set probability(value: Json | undefined) {
        this._probability = value;
    };
}
