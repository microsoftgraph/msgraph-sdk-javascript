import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HyperlinkRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _friendlyName?: Json | undefined;
    private _linkLocation?: Json | undefined;
    /**
     * Instantiates a new hyperlinkRequestBody and sets the default values.
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
     * Gets the friendlyName property value. 
     * @returns a Json
     */
    public get friendlyName() {
        return this._friendlyName;
    };
    /**
     * Gets the linkLocation property value. 
     * @returns a Json
     */
    public get linkLocation() {
        return this._linkLocation;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["friendlyName", (o, n) => { (o as unknown as HyperlinkRequestBody).friendlyName = n.getObjectValue<Json>(Json); }],
            ["linkLocation", (o, n) => { (o as unknown as HyperlinkRequestBody).linkLocation = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("friendlyName", this.friendlyName);
        writer.writeObjectValue<Json>("linkLocation", this.linkLocation);
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
     * Sets the friendlyName property value. 
     * @param value Value to set for the friendlyName property.
     */
    public set friendlyName(value: Json | undefined) {
        this._friendlyName = value;
    };
    /**
     * Sets the linkLocation property value. 
     * @param value Value to set for the linkLocation property.
     */
    public set linkLocation(value: Json | undefined) {
        this._linkLocation = value;
    };
}
