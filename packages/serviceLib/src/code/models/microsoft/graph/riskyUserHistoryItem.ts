import {RiskUserActivity, RiskyUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskyUserHistoryItem extends RiskyUser implements Parsable {
    /** The activity related to user risk level change.  */
    private _activity?: RiskUserActivity | undefined;
    /** The id of actor that does the operation.  */
    private _initiatedBy?: string | undefined;
    /** The id of the user.  */
    private _userId?: string | undefined;
    /**
     * Instantiates a new riskyUserHistoryItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the activity property value. The activity related to user risk level change.
     * @returns a riskUserActivity
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Gets the initiatedBy property value. The id of actor that does the operation.
     * @returns a string
     */
    public get initiatedBy() {
        return this._initiatedBy;
    };
    /**
     * Gets the userId property value. The id of the user.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activity", (o, n) => { (o as unknown as RiskyUserHistoryItem).activity = n.getObjectValue<RiskUserActivity>(RiskUserActivity); }],
            ["initiatedBy", (o, n) => { (o as unknown as RiskyUserHistoryItem).initiatedBy = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as RiskyUserHistoryItem).userId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<RiskUserActivity>("activity", this.activity);
        writer.writeStringValue("initiatedBy", this.initiatedBy);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Sets the activity property value. The activity related to user risk level change.
     * @param value Value to set for the activity property.
     */
    public set activity(value: RiskUserActivity | undefined) {
        this._activity = value;
    };
    /**
     * Sets the initiatedBy property value. The id of actor that does the operation.
     * @param value Value to set for the initiatedBy property.
     */
    public set initiatedBy(value: string | undefined) {
        this._initiatedBy = value;
    };
    /**
     * Sets the userId property value. The id of the user.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
