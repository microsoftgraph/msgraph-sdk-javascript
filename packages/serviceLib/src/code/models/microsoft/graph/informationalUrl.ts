import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InformationalUrl implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** CDN URL to the application's logo, Read-only.  */
    private _logoUrl?: string | undefined;
    /** Link to the application's marketing page. For example, https://www.contoso.com/app/marketing  */
    private _marketingUrl?: string | undefined;
    /** Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy  */
    private _privacyStatementUrl?: string | undefined;
    /** Link to the application's support page. For example, https://www.contoso.com/app/support  */
    private _supportUrl?: string | undefined;
    /** Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice  */
    private _termsOfServiceUrl?: string | undefined;
    /**
     * Instantiates a new informationalUrl and sets the default values.
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
     * Gets the logoUrl property value. CDN URL to the application's logo, Read-only.
     * @returns a string
     */
    public get logoUrl() {
        return this._logoUrl;
    };
    /**
     * Gets the marketingUrl property value. Link to the application's marketing page. For example, https://www.contoso.com/app/marketing
     * @returns a string
     */
    public get marketingUrl() {
        return this._marketingUrl;
    };
    /**
     * Gets the privacyStatementUrl property value. Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy
     * @returns a string
     */
    public get privacyStatementUrl() {
        return this._privacyStatementUrl;
    };
    /**
     * Gets the supportUrl property value. Link to the application's support page. For example, https://www.contoso.com/app/support
     * @returns a string
     */
    public get supportUrl() {
        return this._supportUrl;
    };
    /**
     * Gets the termsOfServiceUrl property value. Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice
     * @returns a string
     */
    public get termsOfServiceUrl() {
        return this._termsOfServiceUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["logoUrl", (o, n) => { (o as unknown as InformationalUrl).logoUrl = n.getStringValue(); }],
            ["marketingUrl", (o, n) => { (o as unknown as InformationalUrl).marketingUrl = n.getStringValue(); }],
            ["privacyStatementUrl", (o, n) => { (o as unknown as InformationalUrl).privacyStatementUrl = n.getStringValue(); }],
            ["supportUrl", (o, n) => { (o as unknown as InformationalUrl).supportUrl = n.getStringValue(); }],
            ["termsOfServiceUrl", (o, n) => { (o as unknown as InformationalUrl).termsOfServiceUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("logoUrl", this.logoUrl);
        writer.writeStringValue("marketingUrl", this.marketingUrl);
        writer.writeStringValue("privacyStatementUrl", this.privacyStatementUrl);
        writer.writeStringValue("supportUrl", this.supportUrl);
        writer.writeStringValue("termsOfServiceUrl", this.termsOfServiceUrl);
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
     * Sets the logoUrl property value. CDN URL to the application's logo, Read-only.
     * @param value Value to set for the logoUrl property.
     */
    public set logoUrl(value: string | undefined) {
        this._logoUrl = value;
    };
    /**
     * Sets the marketingUrl property value. Link to the application's marketing page. For example, https://www.contoso.com/app/marketing
     * @param value Value to set for the marketingUrl property.
     */
    public set marketingUrl(value: string | undefined) {
        this._marketingUrl = value;
    };
    /**
     * Sets the privacyStatementUrl property value. Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy
     * @param value Value to set for the privacyStatementUrl property.
     */
    public set privacyStatementUrl(value: string | undefined) {
        this._privacyStatementUrl = value;
    };
    /**
     * Sets the supportUrl property value. Link to the application's support page. For example, https://www.contoso.com/app/support
     * @param value Value to set for the supportUrl property.
     */
    public set supportUrl(value: string | undefined) {
        this._supportUrl = value;
    };
    /**
     * Sets the termsOfServiceUrl property value. Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice
     * @param value Value to set for the termsOfServiceUrl property.
     */
    public set termsOfServiceUrl(value: string | undefined) {
        this._termsOfServiceUrl = value;
    };
}
