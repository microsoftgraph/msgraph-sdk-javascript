import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocalizedNotificationMessage extends Entity implements Parsable {
    /** Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.  */
    private _isDefault?: boolean | undefined;
    /** DateTime the object was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The Locale for which this message is destined.  */
    private _locale?: string | undefined;
    /** The Message Template content.  */
    private _messageTemplate?: string | undefined;
    /** The Message Template Subject.  */
    private _subject?: string | undefined;
    /**
     * Instantiates a new localizedNotificationMessage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the isDefault property value. Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the locale property value. The Locale for which this message is destined.
     * @returns a string
     */
    public get locale() {
        return this._locale;
    };
    /**
     * Gets the messageTemplate property value. The Message Template content.
     * @returns a string
     */
    public get messageTemplate() {
        return this._messageTemplate;
    };
    /**
     * Gets the subject property value. The Message Template Subject.
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
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["isDefault", (o, n) => { (o as unknown as LocalizedNotificationMessage).isDefault = n.getBooleanValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as LocalizedNotificationMessage).lastModifiedDateTime = n.getDateValue(); }],
            ["locale", (o, n) => { (o as unknown as LocalizedNotificationMessage).locale = n.getStringValue(); }],
            ["messageTemplate", (o, n) => { (o as unknown as LocalizedNotificationMessage).messageTemplate = n.getStringValue(); }],
            ["subject", (o, n) => { (o as unknown as LocalizedNotificationMessage).subject = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("locale", this.locale);
        writer.writeStringValue("messageTemplate", this.messageTemplate);
        writer.writeStringValue("subject", this.subject);
    };
    /**
     * Sets the isDefault property value. Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset, set this property to true on another Localized Notification Message.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the locale property value. The Locale for which this message is destined.
     * @param value Value to set for the locale property.
     */
    public set locale(value: string | undefined) {
        this._locale = value;
    };
    /**
     * Sets the messageTemplate property value. The Message Template content.
     * @param value Value to set for the messageTemplate property.
     */
    public set messageTemplate(value: string | undefined) {
        this._messageTemplate = value;
    };
    /**
     * Sets the subject property value. The Message Template Subject.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
