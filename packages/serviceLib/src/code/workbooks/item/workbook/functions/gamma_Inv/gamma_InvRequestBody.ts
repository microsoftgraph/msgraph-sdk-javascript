import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Gamma_InvRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _alpha?: Json | undefined;
    private _beta?: Json | undefined;
    private _probability?: Json | undefined;
    /**
     * Instantiates a new gamma_InvRequestBody and sets the default values.
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
     * Gets the alpha property value. 
     * @returns a Json
     */
    public get alpha() {
        return this._alpha;
    };
    /**
     * Gets the beta property value. 
     * @returns a Json
     */
    public get beta() {
        return this._beta;
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
            ["alpha", (o, n) => { (o as unknown as Gamma_InvRequestBody).alpha = n.getObjectValue<Json>(Json); }],
            ["beta", (o, n) => { (o as unknown as Gamma_InvRequestBody).beta = n.getObjectValue<Json>(Json); }],
            ["probability", (o, n) => { (o as unknown as Gamma_InvRequestBody).probability = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("beta", this.beta);
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
     * Sets the alpha property value. 
     * @param value Value to set for the alpha property.
     */
    public set alpha(value: Json | undefined) {
        this._alpha = value;
    };
    /**
     * Sets the beta property value. 
     * @param value Value to set for the beta property.
     */
    public set beta(value: Json | undefined) {
        this._beta = value;
    };
    /**
     * Sets the probability property value. 
     * @param value Value to set for the probability property.
     */
    public set probability(value: Json | undefined) {
        this._probability = value;
    };
}
