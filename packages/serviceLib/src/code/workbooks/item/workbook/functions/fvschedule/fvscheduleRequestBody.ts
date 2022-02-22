import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FvscheduleRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _principal?: Json | undefined;
    private _schedule?: Json | undefined;
    /**
     * Instantiates a new fvscheduleRequestBody and sets the default values.
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
     * Gets the principal property value. 
     * @returns a Json
     */
    public get principal() {
        return this._principal;
    };
    /**
     * Gets the schedule property value. 
     * @returns a Json
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["principal", (o, n) => { (o as unknown as FvscheduleRequestBody).principal = n.getObjectValue<Json>(Json); }],
            ["schedule", (o, n) => { (o as unknown as FvscheduleRequestBody).schedule = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("principal", this.principal);
        writer.writeObjectValue<Json>("schedule", this.schedule);
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
     * Sets the principal property value. 
     * @param value Value to set for the principal property.
     */
    public set principal(value: Json | undefined) {
        this._principal = value;
    };
    /**
     * Sets the schedule property value. 
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: Json | undefined) {
        this._schedule = value;
    };
}
