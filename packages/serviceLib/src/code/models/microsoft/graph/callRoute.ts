import {IdentitySet, RoutingType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallRoute implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _final?: IdentitySet | undefined;
    private _original?: IdentitySet | undefined;
    /** Possible values are: forwarded, lookup, selfFork.  */
    private _routingType?: RoutingType | undefined;
    /**
     * Instantiates a new callRoute and sets the default values.
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
     * Gets the final property value. 
     * @returns a identitySet
     */
    public get final() {
        return this._final;
    };
    /**
     * Gets the original property value. 
     * @returns a identitySet
     */
    public get original() {
        return this._original;
    };
    /**
     * Gets the routingType property value. Possible values are: forwarded, lookup, selfFork.
     * @returns a routingType
     */
    public get routingType() {
        return this._routingType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["final", (o, n) => { (o as unknown as CallRoute).final = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["original", (o, n) => { (o as unknown as CallRoute).original = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["routingType", (o, n) => { (o as unknown as CallRoute).routingType = n.getEnumValue<RoutingType>(RoutingType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("final", this.final);
        writer.writeObjectValue<IdentitySet>("original", this.original);
        writer.writeEnumValue<RoutingType>("routingType", this.routingType);
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
     * Sets the final property value. 
     * @param value Value to set for the final property.
     */
    public set final(value: IdentitySet | undefined) {
        this._final = value;
    };
    /**
     * Sets the original property value. 
     * @param value Value to set for the original property.
     */
    public set original(value: IdentitySet | undefined) {
        this._original = value;
    };
    /**
     * Sets the routingType property value. Possible values are: forwarded, lookup, selfFork.
     * @param value Value to set for the routingType property.
     */
    public set routingType(value: RoutingType | undefined) {
        this._routingType = value;
    };
}
