import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Beta_DistRequestBody implements Parsable {
    private _a?: Json | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _alpha?: Json | undefined;
    private _b?: Json | undefined;
    private _beta?: Json | undefined;
    private _cumulative?: Json | undefined;
    private _x?: Json | undefined;
    /**
     * Instantiates a new beta_DistRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the a property value. 
     * @returns a Json
     */
    public get a() {
        return this._a;
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
     * Gets the b property value. 
     * @returns a Json
     */
    public get b() {
        return this._b;
    };
    /**
     * Gets the beta property value. 
     * @returns a Json
     */
    public get beta() {
        return this._beta;
    };
    /**
     * Gets the cumulative property value. 
     * @returns a Json
     */
    public get cumulative() {
        return this._cumulative;
    };
    /**
     * Gets the x property value. 
     * @returns a Json
     */
    public get x() {
        return this._x;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["a", (o, n) => { (o as unknown as Beta_DistRequestBody).a = n.getObjectValue<Json>(Json); }],
            ["alpha", (o, n) => { (o as unknown as Beta_DistRequestBody).alpha = n.getObjectValue<Json>(Json); }],
            ["b", (o, n) => { (o as unknown as Beta_DistRequestBody).b = n.getObjectValue<Json>(Json); }],
            ["beta", (o, n) => { (o as unknown as Beta_DistRequestBody).beta = n.getObjectValue<Json>(Json); }],
            ["cumulative", (o, n) => { (o as unknown as Beta_DistRequestBody).cumulative = n.getObjectValue<Json>(Json); }],
            ["x", (o, n) => { (o as unknown as Beta_DistRequestBody).x = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("a", this.a);
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("b", this.b);
        writer.writeObjectValue<Json>("beta", this.beta);
        writer.writeObjectValue<Json>("cumulative", this.cumulative);
        writer.writeObjectValue<Json>("x", this.x);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the a property value. 
     * @param value Value to set for the A property.
     */
    public set a(value: Json | undefined) {
        this._a = value;
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
     * Sets the b property value. 
     * @param value Value to set for the B property.
     */
    public set b(value: Json | undefined) {
        this._b = value;
    };
    /**
     * Sets the beta property value. 
     * @param value Value to set for the beta property.
     */
    public set beta(value: Json | undefined) {
        this._beta = value;
    };
    /**
     * Sets the cumulative property value. 
     * @param value Value to set for the cumulative property.
     */
    public set cumulative(value: Json | undefined) {
        this._cumulative = value;
    };
    /**
     * Sets the x property value. 
     * @param value Value to set for the x property.
     */
    public set x(value: Json | undefined) {
        this._x = value;
    };
}
