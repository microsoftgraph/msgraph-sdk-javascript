import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RandBetweenRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _bottom?: Json | undefined;
    private _top?: Json | undefined;
    /**
     * Instantiates a new randBetweenRequestBody and sets the default values.
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
     * Gets the bottom property value. 
     * @returns a Json
     */
    public get bottom() {
        return this._bottom;
    };
    /**
     * Gets the top property value. 
     * @returns a Json
     */
    public get top() {
        return this._top;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bottom", (o, n) => { (o as unknown as RandBetweenRequestBody).bottom = n.getObjectValue<Json>(Json); }],
            ["top", (o, n) => { (o as unknown as RandBetweenRequestBody).top = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("bottom", this.bottom);
        writer.writeObjectValue<Json>("top", this.top);
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
     * Sets the bottom property value. 
     * @param value Value to set for the bottom property.
     */
    public set bottom(value: Json | undefined) {
        this._bottom = value;
    };
    /**
     * Sets the top property value. 
     * @param value Value to set for the top property.
     */
    public set top(value: Json | undefined) {
        this._top = value;
    };
}
