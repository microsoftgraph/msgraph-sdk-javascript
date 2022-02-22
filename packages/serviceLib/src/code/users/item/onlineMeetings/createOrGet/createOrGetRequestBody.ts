import {ChatInfo, MeetingParticipants} from '../../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateOrGetRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _chatInfo?: ChatInfo | undefined;
    private _endDateTime?: Date | undefined;
    private _externalId?: string | undefined;
    private _participants?: MeetingParticipants | undefined;
    private _startDateTime?: Date | undefined;
    private _subject?: string | undefined;
    /**
     * Instantiates a new createOrGetRequestBody and sets the default values.
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
     * Gets the chatInfo property value. 
     * @returns a chatInfo
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the externalId property value. 
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Gets the participants property value. 
     * @returns a meetingParticipants
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the subject property value. 
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["chatInfo", (o, n) => { (o as unknown as CreateOrGetRequestBody).chatInfo = n.getObjectValue<ChatInfo>(ChatInfo); }],
            ["endDateTime", (o, n) => { (o as unknown as CreateOrGetRequestBody).endDateTime = n.getDateValue(); }],
            ["externalId", (o, n) => { (o as unknown as CreateOrGetRequestBody).externalId = n.getStringValue(); }],
            ["participants", (o, n) => { (o as unknown as CreateOrGetRequestBody).participants = n.getObjectValue<MeetingParticipants>(MeetingParticipants); }],
            ["startDateTime", (o, n) => { (o as unknown as CreateOrGetRequestBody).startDateTime = n.getDateValue(); }],
            ["subject", (o, n) => { (o as unknown as CreateOrGetRequestBody).subject = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ChatInfo>("chatInfo", this.chatInfo);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeObjectValue<MeetingParticipants>("participants", this.participants);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("subject", this.subject);
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
     * Sets the chatInfo property value. 
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        this._chatInfo = value;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the externalId property value. 
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Sets the participants property value. 
     * @param value Value to set for the participants property.
     */
    public set participants(value: MeetingParticipants | undefined) {
        this._participants = value;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the subject property value. 
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
