import {createAgreementFileDataFromDiscriminatorValue} from './createAgreementFileDataFromDiscriminatorValue';
import {AgreementFileData, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFileProperties extends Entity implements Parsable {
    /** The date time representing when the file was created.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  */
    private _createdDateTime?: Date | undefined;
    /** Localized display name of the policy file of an agreement. The localized display name is shown to end users who view the agreement.  */
    private _displayName?: string | undefined;
    /** Data that represents the terms of use PDF document. Read-only.  */
    private _fileData?: AgreementFileData | undefined;
    /** Name of the agreement file (for example, TOU.pdf). Read-only.  */
    private _fileName?: string | undefined;
    /** If none of the languages matches the client preference, indicates whether this is the default agreement file . If none of the files are marked as default, the first one is treated as the default. Read-only.  */
    private _isDefault?: boolean | undefined;
    /** Indicates whether the agreement file is a major version update. Major version updates invalidate the agreement's acceptances on the corresponding language.  */
    private _isMajorVersion?: boolean | undefined;
    /** The language of the agreement file in the format 'languagecode2-country/regioncode2'. 'languagecode2' is a lowercase two-letter code derived from ISO 639-1, while 'country/regioncode2' is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. For example, U.S. English is en-US. Read-only.  */
    private _language?: string | undefined;
    /**
     * Instantiates a new agreementFileProperties and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date time representing when the file was created.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date time representing when the file was created.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the displayName property value. Localized display name of the policy file of an agreement. The localized display name is shown to end users who view the agreement.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Localized display name of the policy file of an agreement. The localized display name is shown to end users who view the agreement.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the fileData property value. Data that represents the terms of use PDF document. Read-only.
     * @returns a agreementFileData
     */
    public get fileData() {
        return this._fileData;
    };
    /**
     * Sets the fileData property value. Data that represents the terms of use PDF document. Read-only.
     * @param value Value to set for the fileData property.
     */
    public set fileData(value: AgreementFileData | undefined) {
        this._fileData = value;
    };
    /**
     * Gets the fileName property value. Name of the agreement file (for example, TOU.pdf). Read-only.
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. Name of the agreement file (for example, TOU.pdf). Read-only.
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        this._fileName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as AgreementFileProperties).createdDateTime = n.getDateValue(); }],
            ["displayName", (o, n) => { (o as unknown as AgreementFileProperties).displayName = n.getStringValue(); }],
            ["fileData", (o, n) => { (o as unknown as AgreementFileProperties).fileData = n.getObjectValue<AgreementFileData>(createAgreementFileDataFromDiscriminatorValue); }],
            ["fileName", (o, n) => { (o as unknown as AgreementFileProperties).fileName = n.getStringValue(); }],
            ["isDefault", (o, n) => { (o as unknown as AgreementFileProperties).isDefault = n.getBooleanValue(); }],
            ["isMajorVersion", (o, n) => { (o as unknown as AgreementFileProperties).isMajorVersion = n.getBooleanValue(); }],
            ["language", (o, n) => { (o as unknown as AgreementFileProperties).language = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the isDefault property value. If none of the languages matches the client preference, indicates whether this is the default agreement file . If none of the files are marked as default, the first one is treated as the default. Read-only.
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. If none of the languages matches the client preference, indicates whether this is the default agreement file . If none of the files are marked as default, the first one is treated as the default. Read-only.
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isMajorVersion property value. Indicates whether the agreement file is a major version update. Major version updates invalidate the agreement's acceptances on the corresponding language.
     * @returns a boolean
     */
    public get isMajorVersion() {
        return this._isMajorVersion;
    };
    /**
     * Sets the isMajorVersion property value. Indicates whether the agreement file is a major version update. Major version updates invalidate the agreement's acceptances on the corresponding language.
     * @param value Value to set for the isMajorVersion property.
     */
    public set isMajorVersion(value: boolean | undefined) {
        this._isMajorVersion = value;
    };
    /**
     * Gets the language property value. The language of the agreement file in the format 'languagecode2-country/regioncode2'. 'languagecode2' is a lowercase two-letter code derived from ISO 639-1, while 'country/regioncode2' is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. For example, U.S. English is en-US. Read-only.
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The language of the agreement file in the format 'languagecode2-country/regioncode2'. 'languagecode2' is a lowercase two-letter code derived from ISO 639-1, while 'country/regioncode2' is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. For example, U.S. English is en-US. Read-only.
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<AgreementFileData>("fileData", this.fileData);
        writer.writeStringValue("fileName", this.fileName);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isMajorVersion", this.isMajorVersion);
        writer.writeStringValue("language", this.language);
    };
}
