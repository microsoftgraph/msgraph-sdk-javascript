import {DateTimeTimeZone, FollowupFlagStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FollowupFlag implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The date and time that the follow-up was finished.  */
    private _completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the startDateTime; otherwise, you will get a 400 Bad Request response.  */
    private _dueDateTime?: DateTimeTimeZone | undefined;
    /** The status for follow-up for an item. Possible values are notFlagged, complete, and flagged.  */
    private _flagStatus?: FollowupFlagStatus | undefined;
    /** The date and time that the follow-up is to begin.  */
    private _startDateTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new followupFlag and sets the default values.
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
     * Gets the completedDateTime property value. The date and time that the follow-up was finished.
     * @returns a dateTimeTimeZone
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Gets the dueDateTime property value. The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the startDateTime; otherwise, you will get a 400 Bad Request response.
     * @returns a dateTimeTimeZone
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Gets the flagStatus property value. The status for follow-up for an item. Possible values are notFlagged, complete, and flagged.
     * @returns a followupFlagStatus
     */
    public get flagStatus() {
        return this._flagStatus;
    };
    /**
     * Gets the startDateTime property value. The date and time that the follow-up is to begin.
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["completedDateTime", (o, n) => { (o as unknown as FollowupFlag).completedDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["dueDateTime", (o, n) => { (o as unknown as FollowupFlag).dueDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["flagStatus", (o, n) => { (o as unknown as FollowupFlag).flagStatus = n.getEnumValue<FollowupFlagStatus>(FollowupFlagStatus); }],
            ["startDateTime", (o, n) => { (o as unknown as FollowupFlag).startDateTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("completedDateTime", this.completedDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", this.dueDateTime);
        writer.writeEnumValue<FollowupFlagStatus>("flagStatus", this.flagStatus);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
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
     * Sets the completedDateTime property value. The date and time that the follow-up was finished.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: DateTimeTimeZone | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Sets the dueDateTime property value. The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the startDateTime; otherwise, you will get a 400 Bad Request response.
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: DateTimeTimeZone | undefined) {
        this._dueDateTime = value;
    };
    /**
     * Sets the flagStatus property value. The status for follow-up for an item. Possible values are notFlagged, complete, and flagged.
     * @param value Value to set for the flagStatus property.
     */
    public set flagStatus(value: FollowupFlagStatus | undefined) {
        this._flagStatus = value;
    };
    /**
     * Sets the startDateTime property value. The date and time that the follow-up is to begin.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
}
