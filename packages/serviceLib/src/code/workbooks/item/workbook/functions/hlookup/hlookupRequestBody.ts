import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HlookupRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _lookupValue?: Json | undefined;
    private _rangeLookup?: Json | undefined;
    private _rowIndexNum?: Json | undefined;
    private _tableArray?: Json | undefined;
    /**
     * Instantiates a new hlookupRequestBody and sets the default values.
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
     * Gets the rangeLookup property value. 
     * @returns a Json
     */
    public get rangeLookup() {
        return this._rangeLookup;
    };
    /**
     * Gets the rowIndexNum property value. 
     * @returns a Json
     */
    public get rowIndexNum() {
        return this._rowIndexNum;
    };
    /**
     * Gets the tableArray property value. 
     * @returns a Json
     */
    public get tableArray() {
        return this._tableArray;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["lookupValue", (o, n) => { (o as unknown as HlookupRequestBody).lookupValue = n.getObjectValue<Json>(Json); }],
            ["rangeLookup", (o, n) => { (o as unknown as HlookupRequestBody).rangeLookup = n.getObjectValue<Json>(Json); }],
            ["rowIndexNum", (o, n) => { (o as unknown as HlookupRequestBody).rowIndexNum = n.getObjectValue<Json>(Json); }],
            ["tableArray", (o, n) => { (o as unknown as HlookupRequestBody).tableArray = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lookupValue", this.lookupValue);
        writer.writeObjectValue<Json>("rangeLookup", this.rangeLookup);
        writer.writeObjectValue<Json>("rowIndexNum", this.rowIndexNum);
        writer.writeObjectValue<Json>("tableArray", this.tableArray);
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
     * Sets the rangeLookup property value. 
     * @param value Value to set for the rangeLookup property.
     */
    public set rangeLookup(value: Json | undefined) {
        this._rangeLookup = value;
    };
    /**
     * Sets the rowIndexNum property value. 
     * @param value Value to set for the rowIndexNum property.
     */
    public set rowIndexNum(value: Json | undefined) {
        this._rowIndexNum = value;
    };
    /**
     * Sets the tableArray property value. 
     * @param value Value to set for the tableArray property.
     */
    public set tableArray(value: Json | undefined) {
        this._tableArray = value;
    };
}
