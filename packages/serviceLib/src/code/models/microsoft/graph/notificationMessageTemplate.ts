import {Entity, LocalizedNotificationMessage, NotificationTemplateBrandingOptions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotificationMessageTemplate extends Entity implements Parsable {
    /** The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation.  */
    private _brandingOptions?: NotificationTemplateBrandingOptions | undefined;
    /** The default locale to fallback onto when the requested locale is not available.  */
    private _defaultLocale?: string | undefined;
    /** Display name for the Notification Message Template.  */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The list of localized messages for this Notification Message Template.  */
    private _localizedNotificationMessages?: LocalizedNotificationMessage[] | undefined;
    /**
     * Instantiates a new notificationMessageTemplate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the brandingOptions property value. The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation.
     * @returns a notificationTemplateBrandingOptions
     */
    public get brandingOptions() {
        return this._brandingOptions;
    };
    /**
     * Gets the defaultLocale property value. The default locale to fallback onto when the requested locale is not available.
     * @returns a string
     */
    public get defaultLocale() {
        return this._defaultLocale;
    };
    /**
     * Gets the displayName property value. Display name for the Notification Message Template.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the localizedNotificationMessages property value. The list of localized messages for this Notification Message Template.
     * @returns a localizedNotificationMessage
     */
    public get localizedNotificationMessages() {
        return this._localizedNotificationMessages;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["brandingOptions", (o, n) => { (o as unknown as NotificationMessageTemplate).brandingOptions = n.getEnumValue<NotificationTemplateBrandingOptions>(NotificationTemplateBrandingOptions); }],
            ["defaultLocale", (o, n) => { (o as unknown as NotificationMessageTemplate).defaultLocale = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as NotificationMessageTemplate).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as NotificationMessageTemplate).lastModifiedDateTime = n.getDateValue(); }],
            ["localizedNotificationMessages", (o, n) => { (o as unknown as NotificationMessageTemplate).localizedNotificationMessages = n.getCollectionOfObjectValues<LocalizedNotificationMessage>(LocalizedNotificationMessage); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<NotificationTemplateBrandingOptions>("brandingOptions", this.brandingOptions);
        writer.writeStringValue("defaultLocale", this.defaultLocale);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<LocalizedNotificationMessage>("localizedNotificationMessages", this.localizedNotificationMessages);
    };
    /**
     * Sets the brandingOptions property value. The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none, includeCompanyLogo, includeCompanyName, includeContactInformation.
     * @param value Value to set for the brandingOptions property.
     */
    public set brandingOptions(value: NotificationTemplateBrandingOptions | undefined) {
        this._brandingOptions = value;
    };
    /**
     * Sets the defaultLocale property value. The default locale to fallback onto when the requested locale is not available.
     * @param value Value to set for the defaultLocale property.
     */
    public set defaultLocale(value: string | undefined) {
        this._defaultLocale = value;
    };
    /**
     * Sets the displayName property value. Display name for the Notification Message Template.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the localizedNotificationMessages property value. The list of localized messages for this Notification Message Template.
     * @param value Value to set for the localizedNotificationMessages property.
     */
    public set localizedNotificationMessages(value: LocalizedNotificationMessage[] | undefined) {
        this._localizedNotificationMessages = value;
    };
}
