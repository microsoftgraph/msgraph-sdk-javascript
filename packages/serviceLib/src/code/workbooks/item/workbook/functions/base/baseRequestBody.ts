import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BaseRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _minLength?: Json | undefined;
    private _number?: Json | undefined;
    private _radix?: Json | undefined;
    /**
     * Instantiates a new baseRequestBody and sets the default values.
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
     * Gets the minLength property value. 
     * @returns a Json
     */
    public get minLength() {
        return this._minLength;
    };
    /**
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Gets the radix property value. 
     * @returns a Json
     */
    public get radix() {
        return this._radix;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["minLength", (o, n) => { (o as unknown as BaseRequestBody).minLength = n.getObjectValue<Json>(Json); }],
            ["number", (o, n) => { (o as unknown as BaseRequestBody).number = n.getObjectValue<Json>(Json); }],
            ["radix", (o, n) => { (o as unknown as BaseRequestBody).radix = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("minLength", this.minLength);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("radix", this.radix);
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
     * Sets the minLength property value. 
     * @param value Value to set for the minLength property.
     */
    public set minLength(value: Json | undefined) {
        this._minLength = value;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Sets the radix property value. 
     * @param value Value to set for the radix property.
     */
    public set radix(value: Json | undefined) {
        this._radix = value;
    };
}
