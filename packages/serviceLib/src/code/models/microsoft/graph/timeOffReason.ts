import {ChangeTrackedEntity} from './index';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffReason extends ChangeTrackedEntity implements Parsable {
    /** The name of the timeOffReason. Required.  */
    private _displayName?: string | undefined;
    /** Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.  */
    private _iconType?: TimeOffReasonIconType | undefined;
    /** Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.  */
    private _isActive?: boolean | undefined;
    /**
     * Instantiates a new timeOffReason and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the timeOffReason. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the timeOffReason. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["displayName", (o, n) => { (o as unknown as TimeOffReason).displayName = n.getStringValue(); }],
            ["iconType", (o, n) => { (o as unknown as TimeOffReason).iconType = n.getEnumValue<TimeOffReasonIconType>(TimeOffReasonIconType); }],
            ["isActive", (o, n) => { (o as unknown as TimeOffReason).isActive = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the iconType property value. Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
     * @returns a timeOffReasonIconType
     */
    public get iconType() {
        return this._iconType;
    };
    /**
     * Sets the iconType property value. Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
     * @param value Value to set for the iconType property.
     */
    public set iconType(value: TimeOffReasonIconType | undefined) {
        this._iconType = value;
    };
    /**
     * Gets the isActive property value. Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<TimeOffReasonIconType>("iconType", this.iconType);
        writer.writeBooleanValue("isActive", this.isActive);
    };
}
