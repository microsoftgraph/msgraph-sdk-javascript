import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {ExternalAudienceScope} from './externalAudienceScope';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesSetting implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. The possible values are: none, contactsOnly, all.  */
    private _externalAudience?: ExternalAudienceScope | undefined;
    /** The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.  */
    private _externalReplyMessage?: string | undefined;
    /** The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled.  */
    private _internalReplyMessage?: string | undefined;
    /** The date and time that automatic replies are set to end, if Status is set to Scheduled.  */
    private _scheduledEndDateTime?: DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin, if Status is set to Scheduled.  */
    private _scheduledStartDateTime?: DateTimeTimeZone | undefined;
    /** Configurations status for automatic replies. The possible values are: disabled, alwaysEnabled, scheduled.  */
    private _status?: AutomaticRepliesStatus | undefined;
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
     * Instantiates a new automaticRepliesSetting and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the externalAudience property value. The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. The possible values are: none, contactsOnly, all.
     * @returns a externalAudienceScope
     */
    public get externalAudience() {
        return this._externalAudience;
    };
    /**
     * Sets the externalAudience property value. The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. The possible values are: none, contactsOnly, all.
     * @param value Value to set for the externalAudience property.
     */
    public set externalAudience(value: ExternalAudienceScope | undefined) {
        this._externalAudience = value;
    };
    /**
     * Gets the externalReplyMessage property value. The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
     * @returns a string
     */
    public get externalReplyMessage() {
        return this._externalReplyMessage;
    };
    /**
     * Sets the externalReplyMessage property value. The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
     * @param value Value to set for the externalReplyMessage property.
     */
    public set externalReplyMessage(value: string | undefined) {
        this._externalReplyMessage = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["externalAudience", (o, n) => { (o as unknown as AutomaticRepliesSetting).externalAudience = n.getEnumValue<ExternalAudienceScope>(ExternalAudienceScope); }],
            ["externalReplyMessage", (o, n) => { (o as unknown as AutomaticRepliesSetting).externalReplyMessage = n.getStringValue(); }],
            ["internalReplyMessage", (o, n) => { (o as unknown as AutomaticRepliesSetting).internalReplyMessage = n.getStringValue(); }],
            ["scheduledEndDateTime", (o, n) => { (o as unknown as AutomaticRepliesSetting).scheduledEndDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); }],
            ["scheduledStartDateTime", (o, n) => { (o as unknown as AutomaticRepliesSetting).scheduledStartDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); }],
            ["status", (o, n) => { (o as unknown as AutomaticRepliesSetting).status = n.getEnumValue<AutomaticRepliesStatus>(AutomaticRepliesStatus); }],
        ]);
    };
    /**
     * Gets the internalReplyMessage property value. The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled.
     * @returns a string
     */
    public get internalReplyMessage() {
        return this._internalReplyMessage;
    };
    /**
     * Sets the internalReplyMessage property value. The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled.
     * @param value Value to set for the internalReplyMessage property.
     */
    public set internalReplyMessage(value: string | undefined) {
        this._internalReplyMessage = value;
    };
    /**
     * Gets the scheduledEndDateTime property value. The date and time that automatic replies are set to end, if Status is set to Scheduled.
     * @returns a dateTimeTimeZone
     */
    public get scheduledEndDateTime() {
        return this._scheduledEndDateTime;
    };
    /**
     * Sets the scheduledEndDateTime property value. The date and time that automatic replies are set to end, if Status is set to Scheduled.
     * @param value Value to set for the scheduledEndDateTime property.
     */
    public set scheduledEndDateTime(value: DateTimeTimeZone | undefined) {
        this._scheduledEndDateTime = value;
    };
    /**
     * Gets the scheduledStartDateTime property value. The date and time that automatic replies are set to begin, if Status is set to Scheduled.
     * @returns a dateTimeTimeZone
     */
    public get scheduledStartDateTime() {
        return this._scheduledStartDateTime;
    };
    /**
     * Sets the scheduledStartDateTime property value. The date and time that automatic replies are set to begin, if Status is set to Scheduled.
     * @param value Value to set for the scheduledStartDateTime property.
     */
    public set scheduledStartDateTime(value: DateTimeTimeZone | undefined) {
        this._scheduledStartDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ExternalAudienceScope>("externalAudience", this.externalAudience);
        writer.writeStringValue("externalReplyMessage", this.externalReplyMessage);
        writer.writeStringValue("internalReplyMessage", this.internalReplyMessage);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndDateTime", this.scheduledEndDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartDateTime", this.scheduledStartDateTime);
        writer.writeEnumValue<AutomaticRepliesStatus>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Configurations status for automatic replies. The possible values are: disabled, alwaysEnabled, scheduled.
     * @returns a automaticRepliesStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Configurations status for automatic replies. The possible values are: disabled, alwaysEnabled, scheduled.
     * @param value Value to set for the status property.
     */
    public set status(value: AutomaticRepliesStatus | undefined) {
        this._status = value;
    };
}
