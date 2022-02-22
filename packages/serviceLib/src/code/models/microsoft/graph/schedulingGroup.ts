import {ChangeTrackedEntity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SchedulingGroup extends ChangeTrackedEntity implements Parsable {
    /** The display name for the schedulingGroup. Required.  */
    private _displayName?: string | undefined;
    /** Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required.  */
    private _isActive?: boolean | undefined;
    /** The list of user IDs that are a member of the schedulingGroup. Required.  */
    private _userIds?: string[] | undefined;
    /**
     * Instantiates a new schedulingGroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name for the schedulingGroup. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the isActive property value. Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Gets the userIds property value. The list of user IDs that are a member of the schedulingGroup. Required.
     * @returns a string
     */
    public get userIds() {
        return this._userIds;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as SchedulingGroup).displayName = n.getStringValue(); }],
            ["isActive", (o, n) => { (o as unknown as SchedulingGroup).isActive = n.getBooleanValue(); }],
            ["userIds", (o, n) => { (o as unknown as SchedulingGroup).userIds = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeCollectionOfPrimitiveValues<string>("userIds", this.userIds);
    };
    /**
     * Sets the displayName property value. The display name for the schedulingGroup. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the isActive property value. Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Sets the userIds property value. The list of user IDs that are a member of the schedulingGroup. Required.
     * @param value Value to set for the userIds property.
     */
    public set userIds(value: string[] | undefined) {
        this._userIds = value;
    };
}
