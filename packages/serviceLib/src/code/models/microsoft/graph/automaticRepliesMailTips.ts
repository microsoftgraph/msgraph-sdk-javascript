import {DateTimeTimeZone, LocaleInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesMailTips implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The automatic reply message.  */
    private _message?: string | undefined;
    /** The language that the automatic reply message is in.  */
    private _messageLanguage?: LocaleInfo | undefined;
    /** The date and time that automatic replies are set to end.  */
    private _scheduledEndTime?: DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin.  */
    private _scheduledStartTime?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new automaticRepliesMailTips and sets the default values.
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
     * Gets the message property value. The automatic reply message.
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Gets the messageLanguage property value. The language that the automatic reply message is in.
     * @returns a localeInfo
     */
    public get messageLanguage() {
        return this._messageLanguage;
    };
    /**
     * Gets the scheduledEndTime property value. The date and time that automatic replies are set to end.
     * @returns a dateTimeTimeZone
     */
    public get scheduledEndTime() {
        return this._scheduledEndTime;
    };
    /**
     * Gets the scheduledStartTime property value. The date and time that automatic replies are set to begin.
     * @returns a dateTimeTimeZone
     */
    public get scheduledStartTime() {
        return this._scheduledStartTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["message", (o, n) => { (o as unknown as AutomaticRepliesMailTips).message = n.getStringValue(); }],
            ["messageLanguage", (o, n) => { (o as unknown as AutomaticRepliesMailTips).messageLanguage = n.getObjectValue<LocaleInfo>(LocaleInfo); }],
            ["scheduledEndTime", (o, n) => { (o as unknown as AutomaticRepliesMailTips).scheduledEndTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
            ["scheduledStartTime", (o, n) => { (o as unknown as AutomaticRepliesMailTips).scheduledStartTime = n.getObjectValue<DateTimeTimeZone>(DateTimeTimeZone); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("message", this.message);
        writer.writeObjectValue<LocaleInfo>("messageLanguage", this.messageLanguage);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndTime", this.scheduledEndTime);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartTime", this.scheduledStartTime);
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
     * Sets the message property value. The automatic reply message.
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Sets the messageLanguage property value. The language that the automatic reply message is in.
     * @param value Value to set for the messageLanguage property.
     */
    public set messageLanguage(value: LocaleInfo | undefined) {
        this._messageLanguage = value;
    };
    /**
     * Sets the scheduledEndTime property value. The date and time that automatic replies are set to end.
     * @param value Value to set for the scheduledEndTime property.
     */
    public set scheduledEndTime(value: DateTimeTimeZone | undefined) {
        this._scheduledEndTime = value;
    };
    /**
     * Sets the scheduledStartTime property value. The date and time that automatic replies are set to begin.
     * @param value Value to set for the scheduledStartTime property.
     */
    public set scheduledStartTime(value: DateTimeTimeZone | undefined) {
        this._scheduledStartTime = value;
    };
}
