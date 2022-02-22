import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DvarPRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _criteria?: Json | undefined;
    private _database?: Json | undefined;
    private _field?: Json | undefined;
    /**
     * Instantiates a new dvarPRequestBody and sets the default values.
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
     * Gets the criteria property value. 
     * @returns a Json
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Gets the database property value. 
     * @returns a Json
     */
    public get database() {
        return this._database;
    };
    /**
     * Gets the field property value. 
     * @returns a Json
     */
    public get field() {
        return this._field;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["criteria", (o, n) => { (o as unknown as DvarPRequestBody).criteria = n.getObjectValue<Json>(Json); }],
            ["database", (o, n) => { (o as unknown as DvarPRequestBody).database = n.getObjectValue<Json>(Json); }],
            ["field", (o, n) => { (o as unknown as DvarPRequestBody).field = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("criteria", this.criteria);
        writer.writeObjectValue<Json>("database", this.database);
        writer.writeObjectValue<Json>("field", this.field);
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
     * Sets the criteria property value. 
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: Json | undefined) {
        this._criteria = value;
    };
    /**
     * Sets the database property value. 
     * @param value Value to set for the database property.
     */
    public set database(value: Json | undefined) {
        this._database = value;
    };
    /**
     * Sets the field property value. 
     * @param value Value to set for the field property.
     */
    public set field(value: Json | undefined) {
        this._field = value;
    };
}
