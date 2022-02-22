import {ScheduleEntity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffItem extends ScheduleEntity implements Parsable {
    /** ID of the timeOffReason for this timeOffItem. Required.  */
    private _timeOffReasonId?: string | undefined;
    /**
     * Instantiates a new timeOffItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the timeOffReasonId property value. ID of the timeOffReason for this timeOffItem. Required.
     * @returns a string
     */
    public get timeOffReasonId() {
        return this._timeOffReasonId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["timeOffReasonId", (o, n) => { (o as unknown as TimeOffItem).timeOffReasonId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("timeOffReasonId", this.timeOffReasonId);
    };
    /**
     * Sets the timeOffReasonId property value. ID of the timeOffReason for this timeOffItem. Required.
     * @param value Value to set for the timeOffReasonId property.
     */
    public set timeOffReasonId(value: string | undefined) {
        this._timeOffReasonId = value;
    };
}
