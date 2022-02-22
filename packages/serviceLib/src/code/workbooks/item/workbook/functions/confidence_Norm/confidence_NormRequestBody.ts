import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Confidence_NormRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _alpha?: Json | undefined;
    private _size?: Json | undefined;
    private _standardDev?: Json | undefined;
    /**
     * Instantiates a new confidence_NormRequestBody and sets the default values.
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
     * Gets the size property value. 
     * @returns a Json
     */
    public get size() {
        return this._size;
    };
    /**
     * Gets the standardDev property value. 
     * @returns a Json
     */
    public get standardDev() {
        return this._standardDev;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["alpha", (o, n) => { (o as unknown as Confidence_NormRequestBody).alpha = n.getObjectValue<Json>(Json); }],
            ["size", (o, n) => { (o as unknown as Confidence_NormRequestBody).size = n.getObjectValue<Json>(Json); }],
            ["standardDev", (o, n) => { (o as unknown as Confidence_NormRequestBody).standardDev = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("alpha", this.alpha);
        writer.writeObjectValue<Json>("size", this.size);
        writer.writeObjectValue<Json>("standardDev", this.standardDev);
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
     * Sets the size property value. 
     * @param value Value to set for the size property.
     */
    public set size(value: Json | undefined) {
        this._size = value;
    };
    /**
     * Sets the standardDev property value. 
     * @param value Value to set for the standardDev property.
     */
    public set standardDev(value: Json | undefined) {
        this._standardDev = value;
    };
}
