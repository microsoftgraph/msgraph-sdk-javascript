import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the organizationalBranding singleton.  */
export class OrganizationalBrandingProperties extends Entity implements Parsable {
    /** Color that will appear in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF.  */
    private _backgroundColor?: string | undefined;
    /** Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.  */
    private _backgroundImage?: string | undefined;
    /** A relative URL for the backgroundImage property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.  */
    private _backgroundImageRelativeUrl?: string | undefined;
    /** A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG no larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.  */
    private _bannerLogo?: string | undefined;
    /** A relative url for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only.  */
    private _bannerLogoRelativeUrl?: string | undefined;
    /** A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only.  */
    private _cdnList?: string[] | undefined;
    /** Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.  */
    private _signInPageText?: string | undefined;
    /** A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG no larger than 240 x 240 pixels and no more than 10 KB in size. We recommend using a transparent image with no padding around the logo.  */
    private _squareLogo?: string | undefined;
    /** A relative url for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.  */
    private _squareLogoRelativeUrl?: string | undefined;
    /** String that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters.  */
    private _usernameHintText?: string | undefined;
    /**
     * Gets the backgroundColor property value. Color that will appear in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF.
     * @returns a string
     */
    public get backgroundColor() {
        return this._backgroundColor;
    };
    /**
     * Sets the backgroundColor property value. Color that will appear in place of the background image in low-bandwidth connections. We recommend that you use the primary color of your banner logo or your organization color. Specify this in hexadecimal format, for example, white is #FFFFFF.
     * @param value Value to set for the backgroundColor property.
     */
    public set backgroundColor(value: string | undefined) {
        this._backgroundColor = value;
    };
    /**
     * Gets the backgroundImage property value. Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.
     * @returns a binary
     */
    public get backgroundImage() {
        return this._backgroundImage;
    };
    /**
     * Sets the backgroundImage property value. Image that appears as the background of the sign-in page. The allowed types are PNG or JPEG not smaller than 300 KB and not larger than 1920 × 1080 pixels. A smaller image will reduce bandwidth requirements and make the page load faster.
     * @param value Value to set for the backgroundImage property.
     */
    public set backgroundImage(value: string | undefined) {
        this._backgroundImage = value;
    };
    /**
     * Gets the backgroundImageRelativeUrl property value. A relative URL for the backgroundImage property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     * @returns a string
     */
    public get backgroundImageRelativeUrl() {
        return this._backgroundImageRelativeUrl;
    };
    /**
     * Sets the backgroundImageRelativeUrl property value. A relative URL for the backgroundImage property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     * @param value Value to set for the backgroundImageRelativeUrl property.
     */
    public set backgroundImageRelativeUrl(value: string | undefined) {
        this._backgroundImageRelativeUrl = value;
    };
    /**
     * Gets the bannerLogo property value. A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG no larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
     * @returns a binary
     */
    public get bannerLogo() {
        return this._bannerLogo;
    };
    /**
     * Sets the bannerLogo property value. A banner version of your company logo that appears on the sign-in page. The allowed types are PNG or JPEG no larger than 36 × 245 pixels. We recommend using a transparent image with no padding around the logo.
     * @param value Value to set for the bannerLogo property.
     */
    public set bannerLogo(value: string | undefined) {
        this._bannerLogo = value;
    };
    /**
     * Gets the bannerLogoRelativeUrl property value. A relative url for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only.
     * @returns a string
     */
    public get bannerLogoRelativeUrl() {
        return this._bannerLogoRelativeUrl;
    };
    /**
     * Sets the bannerLogoRelativeUrl property value. A relative url for the bannerLogo property that is combined with a CDN base URL from the cdnList to provide the read-only version served by a CDN. Read-only.
     * @param value Value to set for the bannerLogoRelativeUrl property.
     */
    public set bannerLogoRelativeUrl(value: string | undefined) {
        this._bannerLogoRelativeUrl = value;
    };
    /**
     * Gets the cdnList property value. A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only.
     * @returns a string
     */
    public get cdnList() {
        return this._cdnList;
    };
    /**
     * Sets the cdnList property value. A list of base URLs for all available CDN providers that are serving the assets of the current resource. Several CDN providers are used at the same time for high availability of read requests. Read-only.
     * @param value Value to set for the cdnList property.
     */
    public set cdnList(value: string[] | undefined) {
        this._cdnList = value;
    };
    /**
     * Instantiates a new organizationalBrandingProperties and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["backgroundColor", (o, n) => { (o as unknown as OrganizationalBrandingProperties).backgroundColor = n.getStringValue(); }],
            ["backgroundImage", (o, n) => { (o as unknown as OrganizationalBrandingProperties).backgroundImage = n.getStringValue(); }],
            ["backgroundImageRelativeUrl", (o, n) => { (o as unknown as OrganizationalBrandingProperties).backgroundImageRelativeUrl = n.getStringValue(); }],
            ["bannerLogo", (o, n) => { (o as unknown as OrganizationalBrandingProperties).bannerLogo = n.getStringValue(); }],
            ["bannerLogoRelativeUrl", (o, n) => { (o as unknown as OrganizationalBrandingProperties).bannerLogoRelativeUrl = n.getStringValue(); }],
            ["cdnList", (o, n) => { (o as unknown as OrganizationalBrandingProperties).cdnList = n.getCollectionOfPrimitiveValues<string>(); }],
            ["signInPageText", (o, n) => { (o as unknown as OrganizationalBrandingProperties).signInPageText = n.getStringValue(); }],
            ["squareLogo", (o, n) => { (o as unknown as OrganizationalBrandingProperties).squareLogo = n.getStringValue(); }],
            ["squareLogoRelativeUrl", (o, n) => { (o as unknown as OrganizationalBrandingProperties).squareLogoRelativeUrl = n.getStringValue(); }],
            ["usernameHintText", (o, n) => { (o as unknown as OrganizationalBrandingProperties).usernameHintText = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        writer.writeStringValue("backgroundImage", this.backgroundImage);
        writer.writeStringValue("backgroundImageRelativeUrl", this.backgroundImageRelativeUrl);
        writer.writeStringValue("bannerLogo", this.bannerLogo);
        writer.writeStringValue("bannerLogoRelativeUrl", this.bannerLogoRelativeUrl);
        writer.writeCollectionOfPrimitiveValues<string>("cdnList", this.cdnList);
        writer.writeStringValue("signInPageText", this.signInPageText);
        writer.writeStringValue("squareLogo", this.squareLogo);
        writer.writeStringValue("squareLogoRelativeUrl", this.squareLogoRelativeUrl);
        writer.writeStringValue("usernameHintText", this.usernameHintText);
    };
    /**
     * Gets the signInPageText property value. Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
     * @returns a string
     */
    public get signInPageText() {
        return this._signInPageText;
    };
    /**
     * Sets the signInPageText property value. Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
     * @param value Value to set for the signInPageText property.
     */
    public set signInPageText(value: string | undefined) {
        this._signInPageText = value;
    };
    /**
     * Gets the squareLogo property value. A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG no larger than 240 x 240 pixels and no more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
     * @returns a binary
     */
    public get squareLogo() {
        return this._squareLogo;
    };
    /**
     * Sets the squareLogo property value. A square version of your company logo that appears in Windows 10 out-of-box experiences (OOBE) and when Windows Autopilot is enabled for deployment. Allowed types are PNG or JPEG no larger than 240 x 240 pixels and no more than 10 KB in size. We recommend using a transparent image with no padding around the logo.
     * @param value Value to set for the squareLogo property.
     */
    public set squareLogo(value: string | undefined) {
        this._squareLogo = value;
    };
    /**
     * Gets the squareLogoRelativeUrl property value. A relative url for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     * @returns a string
     */
    public get squareLogoRelativeUrl() {
        return this._squareLogoRelativeUrl;
    };
    /**
     * Sets the squareLogoRelativeUrl property value. A relative url for the squareLogo property that is combined with a CDN base URL from the cdnList to provide the version served by a CDN. Read-only.
     * @param value Value to set for the squareLogoRelativeUrl property.
     */
    public set squareLogoRelativeUrl(value: string | undefined) {
        this._squareLogoRelativeUrl = value;
    };
    /**
     * Gets the usernameHintText property value. String that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters.
     * @returns a string
     */
    public get usernameHintText() {
        return this._usernameHintText;
    };
    /**
     * Sets the usernameHintText property value. String that shows as the hint in the username textbox on the sign-in screen. This text must be a Unicode, without links or code, and can't exceed 64 characters.
     * @param value Value to set for the usernameHintText property.
     */
    public set usernameHintText(value: string | undefined) {
        this._usernameHintText = value;
    };
}
