import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrivacyProfile implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A valid smtp email address for the privacy statement contact. Not required.  */
    private _contactEmail?: string | undefined;
    /** A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required.  */
    private _statementUrl?: string | undefined;
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
     * Instantiates a new privacyProfile and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the contactEmail property value. A valid smtp email address for the privacy statement contact. Not required.
     * @returns a string
     */
    public get contactEmail() {
        return this._contactEmail;
    };
    /**
     * Sets the contactEmail property value. A valid smtp email address for the privacy statement contact. Not required.
     * @param value Value to set for the contactEmail property.
     */
    public set contactEmail(value: string | undefined) {
        this._contactEmail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["contactEmail", (o, n) => { (o as unknown as PrivacyProfile).contactEmail = n.getStringValue(); }],
            ["statementUrl", (o, n) => { (o as unknown as PrivacyProfile).statementUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("contactEmail", this.contactEmail);
        writer.writeStringValue("statementUrl", this.statementUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the statementUrl property value. A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required.
     * @returns a string
     */
    public get statementUrl() {
        return this._statementUrl;
    };
    /**
     * Sets the statementUrl property value. A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the company's privacy statement. Not required.
     * @param value Value to set for the statementUrl property.
     */
    public set statementUrl(value: string | undefined) {
        this._statementUrl = value;
    };
}
