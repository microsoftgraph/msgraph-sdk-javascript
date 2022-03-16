import {BroadcastMeetingAudience} from './broadcastMeetingAudience';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BroadcastMeetingSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Defines who can join the Teams live event. Possible values are listed in the following table.  */
    private _allowedAudience?: BroadcastMeetingAudience | undefined;
    /** Indicates whether attendee report is enabled for this Teams live event. Default value is false.  */
    private _isAttendeeReportEnabled?: boolean | undefined;
    /** Indicates whether Q&A is enabled for this Teams live event. Default value is false.  */
    private _isQuestionAndAnswerEnabled?: boolean | undefined;
    /** Indicates whether recording is enabled for this Teams live event. Default value is false.  */
    private _isRecordingEnabled?: boolean | undefined;
    /** Indicates whether video on demand is enabled for this Teams live event. Default value is false.  */
    private _isVideoOnDemandEnabled?: boolean | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowedAudience property value. Defines who can join the Teams live event. Possible values are listed in the following table.
     * @returns a broadcastMeetingAudience
     */
    public get allowedAudience() {
        return this._allowedAudience;
    };
    /**
     * Sets the allowedAudience property value. Defines who can join the Teams live event. Possible values are listed in the following table.
     * @param value Value to set for the allowedAudience property.
     */
    public set allowedAudience(value: BroadcastMeetingAudience | undefined) {
        this._allowedAudience = value;
    };
    /**
     * Instantiates a new broadcastMeetingSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowedAudience", (o, n) => { (o as unknown as BroadcastMeetingSettings).allowedAudience = n.getEnumValue<BroadcastMeetingAudience>(BroadcastMeetingAudience); }],
            ["isAttendeeReportEnabled", (o, n) => { (o as unknown as BroadcastMeetingSettings).isAttendeeReportEnabled = n.getBooleanValue(); }],
            ["isQuestionAndAnswerEnabled", (o, n) => { (o as unknown as BroadcastMeetingSettings).isQuestionAndAnswerEnabled = n.getBooleanValue(); }],
            ["isRecordingEnabled", (o, n) => { (o as unknown as BroadcastMeetingSettings).isRecordingEnabled = n.getBooleanValue(); }],
            ["isVideoOnDemandEnabled", (o, n) => { (o as unknown as BroadcastMeetingSettings).isVideoOnDemandEnabled = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the isAttendeeReportEnabled property value. Indicates whether attendee report is enabled for this Teams live event. Default value is false.
     * @returns a boolean
     */
    public get isAttendeeReportEnabled() {
        return this._isAttendeeReportEnabled;
    };
    /**
     * Sets the isAttendeeReportEnabled property value. Indicates whether attendee report is enabled for this Teams live event. Default value is false.
     * @param value Value to set for the isAttendeeReportEnabled property.
     */
    public set isAttendeeReportEnabled(value: boolean | undefined) {
        this._isAttendeeReportEnabled = value;
    };
    /**
     * Gets the isQuestionAndAnswerEnabled property value. Indicates whether Q&A is enabled for this Teams live event. Default value is false.
     * @returns a boolean
     */
    public get isQuestionAndAnswerEnabled() {
        return this._isQuestionAndAnswerEnabled;
    };
    /**
     * Sets the isQuestionAndAnswerEnabled property value. Indicates whether Q&A is enabled for this Teams live event. Default value is false.
     * @param value Value to set for the isQuestionAndAnswerEnabled property.
     */
    public set isQuestionAndAnswerEnabled(value: boolean | undefined) {
        this._isQuestionAndAnswerEnabled = value;
    };
    /**
     * Gets the isRecordingEnabled property value. Indicates whether recording is enabled for this Teams live event. Default value is false.
     * @returns a boolean
     */
    public get isRecordingEnabled() {
        return this._isRecordingEnabled;
    };
    /**
     * Sets the isRecordingEnabled property value. Indicates whether recording is enabled for this Teams live event. Default value is false.
     * @param value Value to set for the isRecordingEnabled property.
     */
    public set isRecordingEnabled(value: boolean | undefined) {
        this._isRecordingEnabled = value;
    };
    /**
     * Gets the isVideoOnDemandEnabled property value. Indicates whether video on demand is enabled for this Teams live event. Default value is false.
     * @returns a boolean
     */
    public get isVideoOnDemandEnabled() {
        return this._isVideoOnDemandEnabled;
    };
    /**
     * Sets the isVideoOnDemandEnabled property value. Indicates whether video on demand is enabled for this Teams live event. Default value is false.
     * @param value Value to set for the isVideoOnDemandEnabled property.
     */
    public set isVideoOnDemandEnabled(value: boolean | undefined) {
        this._isVideoOnDemandEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<BroadcastMeetingAudience>("allowedAudience", this.allowedAudience);
        writer.writeBooleanValue("isAttendeeReportEnabled", this.isAttendeeReportEnabled);
        writer.writeBooleanValue("isQuestionAndAnswerEnabled", this.isQuestionAndAnswerEnabled);
        writer.writeBooleanValue("isRecordingEnabled", this.isRecordingEnabled);
        writer.writeBooleanValue("isVideoOnDemandEnabled", this.isVideoOnDemandEnabled);
        writer.writeAdditionalData(this.additionalData);
    };
}
