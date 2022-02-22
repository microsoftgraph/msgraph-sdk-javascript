import {MimeContent, RgbColor} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IntuneBrand implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Email address of the person/organization responsible for IT support.  */
    private _contactITEmailAddress?: string | undefined;
    /** Name of the person/organization responsible for IT support.  */
    private _contactITName?: string | undefined;
    /** Text comments regarding the person/organization responsible for IT support.  */
    private _contactITNotes?: string | undefined;
    /** Phone number of the person/organization responsible for IT support.  */
    private _contactITPhoneNumber?: string | undefined;
    /** Logo image displayed in Company Portal apps which have a dark background behind the logo.  */
    private _darkBackgroundLogo?: MimeContent | undefined;
    /** Company/organization name that is displayed to end users.  */
    private _displayName?: string | undefined;
    /** Logo image displayed in Company Portal apps which have a light background behind the logo.  */
    private _lightBackgroundLogo?: MimeContent | undefined;
    /** Display name of the company/organization’s IT helpdesk site.  */
    private _onlineSupportSiteName?: string | undefined;
    /** URL to the company/organization’s IT helpdesk site.  */
    private _onlineSupportSiteUrl?: string | undefined;
    /** URL to the company/organization’s privacy policy.  */
    private _privacyUrl?: string | undefined;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.  */
    private _showDisplayNameNextToLogo?: boolean | undefined;
    /** Boolean that represents whether the administrator-supplied logo images are shown or not shown.  */
    private _showLogo?: boolean | undefined;
    /** Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.  */
    private _showNameNextToLogo?: boolean | undefined;
    /** Primary theme color used in the Company Portal applications and web portal.  */
    private _themeColor?: RgbColor | undefined;
    /**
     * Instantiates a new intuneBrand and sets the default values.
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
     * Gets the contactITEmailAddress property value. Email address of the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITEmailAddress() {
        return this._contactITEmailAddress;
    };
    /**
     * Gets the contactITName property value. Name of the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITName() {
        return this._contactITName;
    };
    /**
     * Gets the contactITNotes property value. Text comments regarding the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITNotes() {
        return this._contactITNotes;
    };
    /**
     * Gets the contactITPhoneNumber property value. Phone number of the person/organization responsible for IT support.
     * @returns a string
     */
    public get contactITPhoneNumber() {
        return this._contactITPhoneNumber;
    };
    /**
     * Gets the darkBackgroundLogo property value. Logo image displayed in Company Portal apps which have a dark background behind the logo.
     * @returns a mimeContent
     */
    public get darkBackgroundLogo() {
        return this._darkBackgroundLogo;
    };
    /**
     * Gets the displayName property value. Company/organization name that is displayed to end users.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lightBackgroundLogo property value. Logo image displayed in Company Portal apps which have a light background behind the logo.
     * @returns a mimeContent
     */
    public get lightBackgroundLogo() {
        return this._lightBackgroundLogo;
    };
    /**
     * Gets the onlineSupportSiteName property value. Display name of the company/organization’s IT helpdesk site.
     * @returns a string
     */
    public get onlineSupportSiteName() {
        return this._onlineSupportSiteName;
    };
    /**
     * Gets the onlineSupportSiteUrl property value. URL to the company/organization’s IT helpdesk site.
     * @returns a string
     */
    public get onlineSupportSiteUrl() {
        return this._onlineSupportSiteUrl;
    };
    /**
     * Gets the privacyUrl property value. URL to the company/organization’s privacy policy.
     * @returns a string
     */
    public get privacyUrl() {
        return this._privacyUrl;
    };
    /**
     * Gets the showDisplayNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @returns a boolean
     */
    public get showDisplayNameNextToLogo() {
        return this._showDisplayNameNextToLogo;
    };
    /**
     * Gets the showLogo property value. Boolean that represents whether the administrator-supplied logo images are shown or not shown.
     * @returns a boolean
     */
    public get showLogo() {
        return this._showLogo;
    };
    /**
     * Gets the showNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @returns a boolean
     */
    public get showNameNextToLogo() {
        return this._showNameNextToLogo;
    };
    /**
     * Gets the themeColor property value. Primary theme color used in the Company Portal applications and web portal.
     * @returns a rgbColor
     */
    public get themeColor() {
        return this._themeColor;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contactITEmailAddress", (o, n) => { (o as unknown as IntuneBrand).contactITEmailAddress = n.getStringValue(); }],
            ["contactITName", (o, n) => { (o as unknown as IntuneBrand).contactITName = n.getStringValue(); }],
            ["contactITNotes", (o, n) => { (o as unknown as IntuneBrand).contactITNotes = n.getStringValue(); }],
            ["contactITPhoneNumber", (o, n) => { (o as unknown as IntuneBrand).contactITPhoneNumber = n.getStringValue(); }],
            ["darkBackgroundLogo", (o, n) => { (o as unknown as IntuneBrand).darkBackgroundLogo = n.getObjectValue<MimeContent>(MimeContent); }],
            ["displayName", (o, n) => { (o as unknown as IntuneBrand).displayName = n.getStringValue(); }],
            ["lightBackgroundLogo", (o, n) => { (o as unknown as IntuneBrand).lightBackgroundLogo = n.getObjectValue<MimeContent>(MimeContent); }],
            ["onlineSupportSiteName", (o, n) => { (o as unknown as IntuneBrand).onlineSupportSiteName = n.getStringValue(); }],
            ["onlineSupportSiteUrl", (o, n) => { (o as unknown as IntuneBrand).onlineSupportSiteUrl = n.getStringValue(); }],
            ["privacyUrl", (o, n) => { (o as unknown as IntuneBrand).privacyUrl = n.getStringValue(); }],
            ["showDisplayNameNextToLogo", (o, n) => { (o as unknown as IntuneBrand).showDisplayNameNextToLogo = n.getBooleanValue(); }],
            ["showLogo", (o, n) => { (o as unknown as IntuneBrand).showLogo = n.getBooleanValue(); }],
            ["showNameNextToLogo", (o, n) => { (o as unknown as IntuneBrand).showNameNextToLogo = n.getBooleanValue(); }],
            ["themeColor", (o, n) => { (o as unknown as IntuneBrand).themeColor = n.getObjectValue<RgbColor>(RgbColor); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contactITEmailAddress", this.contactITEmailAddress);
        writer.writeStringValue("contactITName", this.contactITName);
        writer.writeStringValue("contactITNotes", this.contactITNotes);
        writer.writeStringValue("contactITPhoneNumber", this.contactITPhoneNumber);
        writer.writeObjectValue<MimeContent>("darkBackgroundLogo", this.darkBackgroundLogo);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<MimeContent>("lightBackgroundLogo", this.lightBackgroundLogo);
        writer.writeStringValue("onlineSupportSiteName", this.onlineSupportSiteName);
        writer.writeStringValue("onlineSupportSiteUrl", this.onlineSupportSiteUrl);
        writer.writeStringValue("privacyUrl", this.privacyUrl);
        writer.writeBooleanValue("showDisplayNameNextToLogo", this.showDisplayNameNextToLogo);
        writer.writeBooleanValue("showLogo", this.showLogo);
        writer.writeBooleanValue("showNameNextToLogo", this.showNameNextToLogo);
        writer.writeObjectValue<RgbColor>("themeColor", this.themeColor);
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
     * Sets the contactITEmailAddress property value. Email address of the person/organization responsible for IT support.
     * @param value Value to set for the contactITEmailAddress property.
     */
    public set contactITEmailAddress(value: string | undefined) {
        this._contactITEmailAddress = value;
    };
    /**
     * Sets the contactITName property value. Name of the person/organization responsible for IT support.
     * @param value Value to set for the contactITName property.
     */
    public set contactITName(value: string | undefined) {
        this._contactITName = value;
    };
    /**
     * Sets the contactITNotes property value. Text comments regarding the person/organization responsible for IT support.
     * @param value Value to set for the contactITNotes property.
     */
    public set contactITNotes(value: string | undefined) {
        this._contactITNotes = value;
    };
    /**
     * Sets the contactITPhoneNumber property value. Phone number of the person/organization responsible for IT support.
     * @param value Value to set for the contactITPhoneNumber property.
     */
    public set contactITPhoneNumber(value: string | undefined) {
        this._contactITPhoneNumber = value;
    };
    /**
     * Sets the darkBackgroundLogo property value. Logo image displayed in Company Portal apps which have a dark background behind the logo.
     * @param value Value to set for the darkBackgroundLogo property.
     */
    public set darkBackgroundLogo(value: MimeContent | undefined) {
        this._darkBackgroundLogo = value;
    };
    /**
     * Sets the displayName property value. Company/organization name that is displayed to end users.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lightBackgroundLogo property value. Logo image displayed in Company Portal apps which have a light background behind the logo.
     * @param value Value to set for the lightBackgroundLogo property.
     */
    public set lightBackgroundLogo(value: MimeContent | undefined) {
        this._lightBackgroundLogo = value;
    };
    /**
     * Sets the onlineSupportSiteName property value. Display name of the company/organization’s IT helpdesk site.
     * @param value Value to set for the onlineSupportSiteName property.
     */
    public set onlineSupportSiteName(value: string | undefined) {
        this._onlineSupportSiteName = value;
    };
    /**
     * Sets the onlineSupportSiteUrl property value. URL to the company/organization’s IT helpdesk site.
     * @param value Value to set for the onlineSupportSiteUrl property.
     */
    public set onlineSupportSiteUrl(value: string | undefined) {
        this._onlineSupportSiteUrl = value;
    };
    /**
     * Sets the privacyUrl property value. URL to the company/organization’s privacy policy.
     * @param value Value to set for the privacyUrl property.
     */
    public set privacyUrl(value: string | undefined) {
        this._privacyUrl = value;
    };
    /**
     * Sets the showDisplayNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @param value Value to set for the showDisplayNameNextToLogo property.
     */
    public set showDisplayNameNextToLogo(value: boolean | undefined) {
        this._showDisplayNameNextToLogo = value;
    };
    /**
     * Sets the showLogo property value. Boolean that represents whether the administrator-supplied logo images are shown or not shown.
     * @param value Value to set for the showLogo property.
     */
    public set showLogo(value: boolean | undefined) {
        this._showLogo = value;
    };
    /**
     * Sets the showNameNextToLogo property value. Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
     * @param value Value to set for the showNameNextToLogo property.
     */
    public set showNameNextToLogo(value: boolean | undefined) {
        this._showNameNextToLogo = value;
    };
    /**
     * Sets the themeColor property value. Primary theme color used in the Company Portal applications and web portal.
     * @param value Value to set for the themeColor property.
     */
    public set themeColor(value: RgbColor | undefined) {
        this._themeColor = value;
    };
}
