import {ScheduleEntity, ShiftActivity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftItem extends ScheduleEntity implements Parsable {
    /** An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required.  */
    private _activities?: ShiftActivity[] | undefined;
    /** The shift label of the shiftItem.  */
    private _displayName?: string | undefined;
    /** The shift notes for the shiftItem.  */
    private _notes?: string | undefined;
    /**
     * Instantiates a new shiftItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the activities property value. An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required.
     * @returns a shiftActivity
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Gets the displayName property value. The shift label of the shiftItem.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the notes property value. The shift notes for the shiftItem.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activities", (o, n) => { (o as unknown as ShiftItem).activities = n.getCollectionOfObjectValues<ShiftActivity>(ShiftActivity); }],
            ["displayName", (o, n) => { (o as unknown as ShiftItem).displayName = n.getStringValue(); }],
            ["notes", (o, n) => { (o as unknown as ShiftItem).notes = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ShiftActivity>("activities", this.activities);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("notes", this.notes);
    };
    /**
     * Sets the activities property value. An incremental part of a shift which can cover details of when and where an employee is during their shift. For example, an assignment or a scheduled break or lunch. Required.
     * @param value Value to set for the activities property.
     */
    public set activities(value: ShiftActivity[] | undefined) {
        this._activities = value;
    };
    /**
     * Sets the displayName property value. The shift label of the shiftItem.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the notes property value. The shift notes for the shiftItem.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
}
