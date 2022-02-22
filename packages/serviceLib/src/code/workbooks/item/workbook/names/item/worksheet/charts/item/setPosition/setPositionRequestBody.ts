import {Json} from '../../../../../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetPositionRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _endCell?: Json | undefined;
    private _startCell?: Json | undefined;
    /**
     * Instantiates a new setPositionRequestBody and sets the default values.
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
     * Gets the endCell property value. 
     * @returns a Json
     */
    public get endCell() {
        return this._endCell;
    };
    /**
     * Gets the startCell property value. 
     * @returns a Json
     */
    public get startCell() {
        return this._startCell;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endCell", (o, n) => { (o as unknown as SetPositionRequestBody).endCell = n.getObjectValue<Json>(Json); }],
            ["startCell", (o, n) => { (o as unknown as SetPositionRequestBody).startCell = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("endCell", this.endCell);
        writer.writeObjectValue<Json>("startCell", this.startCell);
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
     * Sets the endCell property value. 
     * @param value Value to set for the endCell property.
     */
    public set endCell(value: Json | undefined) {
        this._endCell = value;
    };
    /**
     * Sets the startCell property value. 
     * @param value Value to set for the startCell property.
     */
    public set startCell(value: Json | undefined) {
        this._startCell = value;
    };
}
