import {Json} from '../../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MatchRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _lookupArray?: Json | undefined;
    private _lookupValue?: Json | undefined;
    private _matchType?: Json | undefined;
    /**
     * Instantiates a new matchRequestBody and sets the default values.
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
     * Gets the lookupArray property value. 
     * @returns a Json
     */
    public get lookupArray() {
        return this._lookupArray;
    };
    /**
     * Gets the lookupValue property value. 
     * @returns a Json
     */
    public get lookupValue() {
        return this._lookupValue;
    };
    /**
     * Gets the matchType property value. 
     * @returns a Json
     */
    public get matchType() {
        return this._matchType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["lookupArray", (o, n) => { (o as unknown as MatchRequestBody).lookupArray = n.getObjectValue<Json>(Json); }],
            ["lookupValue", (o, n) => { (o as unknown as MatchRequestBody).lookupValue = n.getObjectValue<Json>(Json); }],
            ["matchType", (o, n) => { (o as unknown as MatchRequestBody).matchType = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lookupArray", this.lookupArray);
        writer.writeObjectValue<Json>("lookupValue", this.lookupValue);
        writer.writeObjectValue<Json>("matchType", this.matchType);
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
     * Sets the lookupArray property value. 
     * @param value Value to set for the lookupArray property.
     */
    public set lookupArray(value: Json | undefined) {
        this._lookupArray = value;
    };
    /**
     * Sets the lookupValue property value. 
     * @param value Value to set for the lookupValue property.
     */
    public set lookupValue(value: Json | undefined) {
        this._lookupValue = value;
    };
    /**
     * Sets the matchType property value. 
     * @param value Value to set for the matchType property.
     */
    public set matchType(value: Json | undefined) {
        this._matchType = value;
    };
}
