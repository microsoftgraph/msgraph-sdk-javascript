import {ChangeTrackedEntity, TimeOffItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOff extends ChangeTrackedEntity implements Parsable {
    /** The draft version of this timeOff that is viewable by managers. Required.  */
    private _draftTimeOff?: TimeOffItem | undefined;
    /** The shared version of this timeOff that is viewable by both employees and managers. Required.  */
    private _sharedTimeOff?: TimeOffItem | undefined;
    /** ID of the user assigned to the timeOff. Required.  */
    private _userId?: string | undefined;
    /**
     * Instantiates a new timeOff and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
     * @returns a timeOffItem
     */
    public get draftTimeOff() {
        return this._draftTimeOff;
    };
    /**
     * Gets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
     * @returns a timeOffItem
     */
    public get sharedTimeOff() {
        return this._sharedTimeOff;
    };
    /**
     * Gets the userId property value. ID of the user assigned to the timeOff. Required.
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
            ["draftTimeOff", (o, n) => { (o as unknown as TimeOff).draftTimeOff = n.getObjectValue<TimeOffItem>(TimeOffItem); }],
            ["sharedTimeOff", (o, n) => { (o as unknown as TimeOff).sharedTimeOff = n.getObjectValue<TimeOffItem>(TimeOffItem); }],
            ["userId", (o, n) => { (o as unknown as TimeOff).userId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TimeOffItem>("draftTimeOff", this.draftTimeOff);
        writer.writeObjectValue<TimeOffItem>("sharedTimeOff", this.sharedTimeOff);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Sets the draftTimeOff property value. The draft version of this timeOff that is viewable by managers. Required.
     * @param value Value to set for the draftTimeOff property.
     */
    public set draftTimeOff(value: TimeOffItem | undefined) {
        this._draftTimeOff = value;
    };
    /**
     * Sets the sharedTimeOff property value. The shared version of this timeOff that is viewable by both employees and managers. Required.
     * @param value Value to set for the sharedTimeOff property.
     */
    public set sharedTimeOff(value: TimeOffItem | undefined) {
        this._sharedTimeOff = value;
    };
    /**
     * Sets the userId property value. ID of the user assigned to the timeOff. Required.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
