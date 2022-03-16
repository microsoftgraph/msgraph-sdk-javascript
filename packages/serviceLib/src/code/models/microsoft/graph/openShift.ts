import {createOpenShiftItemFromDiscriminatorValue} from './createOpenShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntity, OpenShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShift extends ChangeTrackedEntity implements Parsable {
    /** An unpublished open shift.  */
    private _draftOpenShift?: OpenShiftItem | undefined;
    /** ID for the scheduling group that the open shift belongs to.  */
    private _schedulingGroupId?: string | undefined;
    /** A published open shift.  */
    private _sharedOpenShift?: OpenShiftItem | undefined;
    /**
     * Instantiates a new openShift and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftOpenShift property value. An unpublished open shift.
     * @returns a openShiftItem
     */
    public get draftOpenShift() {
        return this._draftOpenShift;
    };
    /**
     * Sets the draftOpenShift property value. An unpublished open shift.
     * @param value Value to set for the draftOpenShift property.
     */
    public set draftOpenShift(value: OpenShiftItem | undefined) {
        this._draftOpenShift = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["draftOpenShift", (o, n) => { (o as unknown as OpenShift).draftOpenShift = n.getObjectValue<OpenShiftItem>(createOpenShiftItemFromDiscriminatorValue); }],
            ["schedulingGroupId", (o, n) => { (o as unknown as OpenShift).schedulingGroupId = n.getStringValue(); }],
            ["sharedOpenShift", (o, n) => { (o as unknown as OpenShift).sharedOpenShift = n.getObjectValue<OpenShiftItem>(createOpenShiftItemFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
     * @returns a string
     */
    public get schedulingGroupId() {
        return this._schedulingGroupId;
    };
    /**
     * Sets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
     * @param value Value to set for the schedulingGroupId property.
     */
    public set schedulingGroupId(value: string | undefined) {
        this._schedulingGroupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<OpenShiftItem>("draftOpenShift", this.draftOpenShift);
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        writer.writeObjectValue<OpenShiftItem>("sharedOpenShift", this.sharedOpenShift);
    };
    /**
     * Gets the sharedOpenShift property value. A published open shift.
     * @returns a openShiftItem
     */
    public get sharedOpenShift() {
        return this._sharedOpenShift;
    };
    /**
     * Sets the sharedOpenShift property value. A published open shift.
     * @param value Value to set for the sharedOpenShift property.
     */
    public set sharedOpenShift(value: OpenShiftItem | undefined) {
        this._sharedOpenShift = value;
    };
}
