import {ChangeTrackedEntity, ShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Shift extends ChangeTrackedEntity implements Parsable {
    /** The draft version of this shift that is viewable by managers. Required.  */
    private _draftShift?: ShiftItem | undefined;
    /** ID of the scheduling group the shift is part of. Required.  */
    private _schedulingGroupId?: string | undefined;
    /** The shared version of this shift that is viewable by both employees and managers. Required.  */
    private _sharedShift?: ShiftItem | undefined;
    /** ID of the user assigned to the shift. Required.  */
    private _userId?: string | undefined;
    /**
     * Instantiates a new shift and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftShift property value. The draft version of this shift that is viewable by managers. Required.
     * @returns a shiftItem
     */
    public get draftShift() {
        return this._draftShift;
    };
    /**
     * Gets the schedulingGroupId property value. ID of the scheduling group the shift is part of. Required.
     * @returns a string
     */
    public get schedulingGroupId() {
        return this._schedulingGroupId;
    };
    /**
     * Gets the sharedShift property value. The shared version of this shift that is viewable by both employees and managers. Required.
     * @returns a shiftItem
     */
    public get sharedShift() {
        return this._sharedShift;
    };
    /**
     * Gets the userId property value. ID of the user assigned to the shift. Required.
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
            ["draftShift", (o, n) => { (o as unknown as Shift).draftShift = n.getObjectValue<ShiftItem>(ShiftItem); }],
            ["schedulingGroupId", (o, n) => { (o as unknown as Shift).schedulingGroupId = n.getStringValue(); }],
            ["sharedShift", (o, n) => { (o as unknown as Shift).sharedShift = n.getObjectValue<ShiftItem>(ShiftItem); }],
            ["userId", (o, n) => { (o as unknown as Shift).userId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ShiftItem>("draftShift", this.draftShift);
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        writer.writeObjectValue<ShiftItem>("sharedShift", this.sharedShift);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Sets the draftShift property value. The draft version of this shift that is viewable by managers. Required.
     * @param value Value to set for the draftShift property.
     */
    public set draftShift(value: ShiftItem | undefined) {
        this._draftShift = value;
    };
    /**
     * Sets the schedulingGroupId property value. ID of the scheduling group the shift is part of. Required.
     * @param value Value to set for the schedulingGroupId property.
     */
    public set schedulingGroupId(value: string | undefined) {
        this._schedulingGroupId = value;
    };
    /**
     * Sets the sharedShift property value. The shared version of this shift that is viewable by both employees and managers. Required.
     * @param value Value to set for the sharedShift property.
     */
    public set sharedShift(value: ShiftItem | undefined) {
        this._sharedShift = value;
    };
    /**
     * Sets the userId property value. ID of the user assigned to the shift. Required.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
