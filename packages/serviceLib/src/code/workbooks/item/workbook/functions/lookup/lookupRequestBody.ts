import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LookupRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _lookupValue?: Json | undefined;
    private _lookupVector?: Json | undefined;
    private _resultVector?: Json | undefined;
    /**
     * Instantiates a new lookupRequestBody and sets the default values.
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
     * Gets the lookupValue property value. 
     * @returns a Json
     */
    public get lookupValue() {
        return this._lookupValue;
    };
    /**
     * Gets the lookupVector property value. 
     * @returns a Json
     */
    public get lookupVector() {
        return this._lookupVector;
    };
    /**
     * Gets the resultVector property value. 
     * @returns a Json
     */
    public get resultVector() {
        return this._resultVector;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["lookupValue", (o, n) => { (o as unknown as LookupRequestBody).lookupValue = n.getObjectValue<Json>(Json); }],
            ["lookupVector", (o, n) => { (o as unknown as LookupRequestBody).lookupVector = n.getObjectValue<Json>(Json); }],
            ["resultVector", (o, n) => { (o as unknown as LookupRequestBody).resultVector = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lookupValue", this.lookupValue);
        writer.writeObjectValue<Json>("lookupVector", this.lookupVector);
        writer.writeObjectValue<Json>("resultVector", this.resultVector);
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
     * Sets the lookupValue property value. 
     * @param value Value to set for the lookupValue property.
     */
    public set lookupValue(value: Json | undefined) {
        this._lookupValue = value;
    };
    /**
     * Sets the lookupVector property value. 
     * @param value Value to set for the lookupVector property.
     */
    public set lookupVector(value: Json | undefined) {
        this._lookupVector = value;
    };
    /**
     * Sets the resultVector property value. 
     * @param value Value to set for the resultVector property.
     */
    public set resultVector(value: Json | undefined) {
        this._resultVector = value;
    };
}
