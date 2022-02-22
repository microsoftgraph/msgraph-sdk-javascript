import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Binom_InvRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _alpha?: Json | undefined;
    private _probabilityS?: Json | undefined;
    private _trials?: Json | undefined;
    /**
     * Instantiates a new binom_InvRequestBody and sets the default values.
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
     * Gets the probabilityS property value. 
     * @returns a Json
     */
    public get probabilityS() {
        return this._probabilityS;
    };
    /**
     * Gets the trials property value. 
     * @returns a Json
     */
    public get trials() {
        return this._trials;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["alpha", (o, n) => { (o as unknown as Binom_InvRequestBody).alpha = n.getObjectValue<Json>(Json); }],
            ["probabilityS", (o, n) => { (o as unknown as Binom_InvRequestBody).probabilityS = n.getObjectValue<Json>(Json); }],
            ["trials", (o, n) => { (o as unknown as Binom_InvRequestBody).trials = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("probabilityS", this.probabilityS);
        writer.writeObjectValue<Json>("trials", this.trials);
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
     * Sets the probabilityS property value. 
     * @param value Value to set for the probabilityS property.
     */
    public set probabilityS(value: Json | undefined) {
        this._probabilityS = value;
    };
    /**
     * Sets the trials property value. 
     * @param value Value to set for the trials property.
     */
    public set trials(value: Json | undefined) {
        this._trials = value;
    };
}
