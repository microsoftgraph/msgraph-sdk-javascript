import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class XirrRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _dates?: Json | undefined;
    private _guess?: Json | undefined;
    private _values?: Json | undefined;
    /**
     * Instantiates a new xirrRequestBody and sets the default values.
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
     * Gets the dates property value. 
     * @returns a Json
     */
    public get dates() {
        return this._dates;
    };
    /**
     * Gets the guess property value. 
     * @returns a Json
     */
    public get guess() {
        return this._guess;
    };
    /**
     * Gets the values property value. 
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["dates", (o, n) => { (o as unknown as XirrRequestBody).dates = n.getObjectValue<Json>(Json); }],
            ["guess", (o, n) => { (o as unknown as XirrRequestBody).guess = n.getObjectValue<Json>(Json); }],
            ["values", (o, n) => { (o as unknown as XirrRequestBody).values = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("dates", this.dates);
        writer.writeObjectValue<Json>("guess", this.guess);
        writer.writeObjectValue<Json>("values", this.values);
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
     * Sets the dates property value. 
     * @param value Value to set for the dates property.
     */
    public set dates(value: Json | undefined) {
        this._dates = value;
    };
    /**
     * Sets the guess property value. 
     * @param value Value to set for the guess property.
     */
    public set guess(value: Json | undefined) {
        this._guess = value;
    };
    /**
     * Sets the values property value. 
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
