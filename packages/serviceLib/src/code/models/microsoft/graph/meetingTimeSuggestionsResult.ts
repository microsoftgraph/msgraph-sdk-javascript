import {MeetingTimeSuggestion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingTimeSuggestionsResult implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.  */
    private _emptySuggestionsReason?: string | undefined;
    /** An array of meeting suggestions.  */
    private _meetingTimeSuggestions?: MeetingTimeSuggestion[] | undefined;
    /**
     * Instantiates a new meetingTimeSuggestionsResult and sets the default values.
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
     * Gets the emptySuggestionsReason property value. A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
     * @returns a string
     */
    public get emptySuggestionsReason() {
        return this._emptySuggestionsReason;
    };
    /**
     * Gets the meetingTimeSuggestions property value. An array of meeting suggestions.
     * @returns a meetingTimeSuggestion
     */
    public get meetingTimeSuggestions() {
        return this._meetingTimeSuggestions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["emptySuggestionsReason", (o, n) => { (o as unknown as MeetingTimeSuggestionsResult).emptySuggestionsReason = n.getStringValue(); }],
            ["meetingTimeSuggestions", (o, n) => { (o as unknown as MeetingTimeSuggestionsResult).meetingTimeSuggestions = n.getCollectionOfObjectValues<MeetingTimeSuggestion>(MeetingTimeSuggestion); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("emptySuggestionsReason", this.emptySuggestionsReason);
        writer.writeCollectionOfObjectValues<MeetingTimeSuggestion>("meetingTimeSuggestions", this.meetingTimeSuggestions);
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
     * Sets the emptySuggestionsReason property value. A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
     * @param value Value to set for the emptySuggestionsReason property.
     */
    public set emptySuggestionsReason(value: string | undefined) {
        this._emptySuggestionsReason = value;
    };
    /**
     * Sets the meetingTimeSuggestions property value. An array of meeting suggestions.
     * @param value Value to set for the meetingTimeSuggestions property.
     */
    public set meetingTimeSuggestions(value: MeetingTimeSuggestion[] | undefined) {
        this._meetingTimeSuggestions = value;
    };
}
