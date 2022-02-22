import {AutomaticRepliesSetting, DelegateMeetingMessageDeliveryOptions, LocaleInfo, WorkingHours} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailboxSettings implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Folder ID of an archive folder for the user.  */
    private _archiveFolder?: string | undefined;
    /** Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.  */
    private _automaticRepliesSetting?: AutomaticRepliesSetting | undefined;
    /** The date format for the user's mailbox.  */
    private _dateFormat?: string | undefined;
    /** If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly.  */
    private _delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions | undefined;
    /** The locale information for the user, including the preferred language and country/region.  */
    private _language?: LocaleInfo | undefined;
    /** The time format for the user's mailbox.  */
    private _timeFormat?: string | undefined;
    /** The default time zone for the user's mailbox.  */
    private _timeZone?: string | undefined;
    /** The days of the week and hours in a specific time zone that the user works.  */
    private _workingHours?: WorkingHours | undefined;
    /**
     * Instantiates a new mailboxSettings and sets the default values.
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
     * Gets the archiveFolder property value. Folder ID of an archive folder for the user.
     * @returns a string
     */
    public get archiveFolder() {
        return this._archiveFolder;
    };
    /**
     * Gets the automaticRepliesSetting property value. Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     * @returns a automaticRepliesSetting
     */
    public get automaticRepliesSetting() {
        return this._automaticRepliesSetting;
    };
    /**
     * Gets the dateFormat property value. The date format for the user's mailbox.
     * @returns a string
     */
    public get dateFormat() {
        return this._dateFormat;
    };
    /**
     * Gets the delegateMeetingMessageDeliveryOptions property value. If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly.
     * @returns a delegateMeetingMessageDeliveryOptions
     */
    public get delegateMeetingMessageDeliveryOptions() {
        return this._delegateMeetingMessageDeliveryOptions;
    };
    /**
     * Gets the language property value. The locale information for the user, including the preferred language and country/region.
     * @returns a localeInfo
     */
    public get language() {
        return this._language;
    };
    /**
     * Gets the timeFormat property value. The time format for the user's mailbox.
     * @returns a string
     */
    public get timeFormat() {
        return this._timeFormat;
    };
    /**
     * Gets the timeZone property value. The default time zone for the user's mailbox.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Gets the workingHours property value. The days of the week and hours in a specific time zone that the user works.
     * @returns a workingHours
     */
    public get workingHours() {
        return this._workingHours;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["archiveFolder", (o, n) => { (o as unknown as MailboxSettings).archiveFolder = n.getStringValue(); }],
            ["automaticRepliesSetting", (o, n) => { (o as unknown as MailboxSettings).automaticRepliesSetting = n.getObjectValue<AutomaticRepliesSetting>(AutomaticRepliesSetting); }],
            ["dateFormat", (o, n) => { (o as unknown as MailboxSettings).dateFormat = n.getStringValue(); }],
            ["delegateMeetingMessageDeliveryOptions", (o, n) => { (o as unknown as MailboxSettings).delegateMeetingMessageDeliveryOptions = n.getEnumValue<DelegateMeetingMessageDeliveryOptions>(DelegateMeetingMessageDeliveryOptions); }],
            ["language", (o, n) => { (o as unknown as MailboxSettings).language = n.getObjectValue<LocaleInfo>(LocaleInfo); }],
            ["timeFormat", (o, n) => { (o as unknown as MailboxSettings).timeFormat = n.getStringValue(); }],
            ["timeZone", (o, n) => { (o as unknown as MailboxSettings).timeZone = n.getStringValue(); }],
            ["workingHours", (o, n) => { (o as unknown as MailboxSettings).workingHours = n.getObjectValue<WorkingHours>(WorkingHours); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("archiveFolder", this.archiveFolder);
        writer.writeObjectValue<AutomaticRepliesSetting>("automaticRepliesSetting", this.automaticRepliesSetting);
        writer.writeStringValue("dateFormat", this.dateFormat);
        writer.writeEnumValue<DelegateMeetingMessageDeliveryOptions>("delegateMeetingMessageDeliveryOptions", this.delegateMeetingMessageDeliveryOptions);
        writer.writeObjectValue<LocaleInfo>("language", this.language);
        writer.writeStringValue("timeFormat", this.timeFormat);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeObjectValue<WorkingHours>("workingHours", this.workingHours);
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
     * Sets the archiveFolder property value. Folder ID of an archive folder for the user.
     * @param value Value to set for the archiveFolder property.
     */
    public set archiveFolder(value: string | undefined) {
        this._archiveFolder = value;
    };
    /**
     * Sets the automaticRepliesSetting property value. Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
     * @param value Value to set for the automaticRepliesSetting property.
     */
    public set automaticRepliesSetting(value: AutomaticRepliesSetting | undefined) {
        this._automaticRepliesSetting = value;
    };
    /**
     * Sets the dateFormat property value. The date format for the user's mailbox.
     * @param value Value to set for the dateFormat property.
     */
    public set dateFormat(value: string | undefined) {
        this._dateFormat = value;
    };
    /**
     * Sets the delegateMeetingMessageDeliveryOptions property value. If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal, sendToDelegateAndPrincipal, sendToDelegateOnly.
     * @param value Value to set for the delegateMeetingMessageDeliveryOptions property.
     */
    public set delegateMeetingMessageDeliveryOptions(value: DelegateMeetingMessageDeliveryOptions | undefined) {
        this._delegateMeetingMessageDeliveryOptions = value;
    };
    /**
     * Sets the language property value. The locale information for the user, including the preferred language and country/region.
     * @param value Value to set for the language property.
     */
    public set language(value: LocaleInfo | undefined) {
        this._language = value;
    };
    /**
     * Sets the timeFormat property value. The time format for the user's mailbox.
     * @param value Value to set for the timeFormat property.
     */
    public set timeFormat(value: string | undefined) {
        this._timeFormat = value;
    };
    /**
     * Sets the timeZone property value. The default time zone for the user's mailbox.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        this._timeZone = value;
    };
    /**
     * Sets the workingHours property value. The days of the week and hours in a specific time zone that the user works.
     * @param value Value to set for the workingHours property.
     */
    public set workingHours(value: WorkingHours | undefined) {
        this._workingHours = value;
    };
}
