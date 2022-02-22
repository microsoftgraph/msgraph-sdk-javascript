import {AgreementAcceptance, AgreementFile, AgreementFileLocalization, Entity, TermsExpiration} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Agreement extends Entity implements Parsable {
    /** Read-only. Information about acceptances of this agreement.  */
    private _acceptances?: AgreementAcceptance[] | undefined;
    /** Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement.  */
    private _displayName?: string | undefined;
    /** Default PDF linked to this agreement.  */
    private _file?: AgreementFile | undefined;
    /** PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead.  */
    private _files?: AgreementFileLocalization[] | undefined;
    /** Indicates whether end users are required to accept this agreement on every device that they access it from. The end user is required to register their device in Azure AD, if they haven't already done so.  */
    private _isPerDeviceAcceptanceRequired?: boolean | undefined;
    /** Indicates whether the user has to expand the agreement before accepting.  */
    private _isViewingBeforeAcceptanceRequired?: boolean | undefined;
    /** Expiration schedule and frequency of agreement for all users.  */
    private _termsExpiration?: TermsExpiration | undefined;
    /** The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.  */
    private _userReacceptRequiredFrequency?: Duration | undefined;
    /**
     * Instantiates a new agreement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the acceptances property value. Read-only. Information about acceptances of this agreement.
     * @returns a agreementAcceptance
     */
    public get acceptances() {
        return this._acceptances;
    };
    /**
     * Gets the displayName property value. Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the file property value. Default PDF linked to this agreement.
     * @returns a agreementFile
     */
    public get file() {
        return this._file;
    };
    /**
     * Gets the files property value. PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead.
     * @returns a agreementFileLocalization
     */
    public get files() {
        return this._files;
    };
    /**
     * Gets the isPerDeviceAcceptanceRequired property value. Indicates whether end users are required to accept this agreement on every device that they access it from. The end user is required to register their device in Azure AD, if they haven't already done so.
     * @returns a boolean
     */
    public get isPerDeviceAcceptanceRequired() {
        return this._isPerDeviceAcceptanceRequired;
    };
    /**
     * Gets the isViewingBeforeAcceptanceRequired property value. Indicates whether the user has to expand the agreement before accepting.
     * @returns a boolean
     */
    public get isViewingBeforeAcceptanceRequired() {
        return this._isViewingBeforeAcceptanceRequired;
    };
    /**
     * Gets the termsExpiration property value. Expiration schedule and frequency of agreement for all users.
     * @returns a termsExpiration
     */
    public get termsExpiration() {
        return this._termsExpiration;
    };
    /**
     * Gets the userReacceptRequiredFrequency property value. The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.
     * @returns a Duration
     */
    public get userReacceptRequiredFrequency() {
        return this._userReacceptRequiredFrequency;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["acceptances", (o, n) => { (o as unknown as Agreement).acceptances = n.getCollectionOfObjectValues<AgreementAcceptance>(AgreementAcceptance); }],
            ["displayName", (o, n) => { (o as unknown as Agreement).displayName = n.getStringValue(); }],
            ["file", (o, n) => { (o as unknown as Agreement).file = n.getObjectValue<AgreementFile>(AgreementFile); }],
            ["files", (o, n) => { (o as unknown as Agreement).files = n.getCollectionOfObjectValues<AgreementFileLocalization>(AgreementFileLocalization); }],
            ["isPerDeviceAcceptanceRequired", (o, n) => { (o as unknown as Agreement).isPerDeviceAcceptanceRequired = n.getBooleanValue(); }],
            ["isViewingBeforeAcceptanceRequired", (o, n) => { (o as unknown as Agreement).isViewingBeforeAcceptanceRequired = n.getBooleanValue(); }],
            ["termsExpiration", (o, n) => { (o as unknown as Agreement).termsExpiration = n.getObjectValue<TermsExpiration>(TermsExpiration); }],
            ["userReacceptRequiredFrequency", (o, n) => { (o as unknown as Agreement).userReacceptRequiredFrequency = n.getDurationValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("acceptances", this.acceptances);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<AgreementFile>("file", this.file);
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("files", this.files);
        writer.writeBooleanValue("isPerDeviceAcceptanceRequired", this.isPerDeviceAcceptanceRequired);
        writer.writeBooleanValue("isViewingBeforeAcceptanceRequired", this.isViewingBeforeAcceptanceRequired);
        writer.writeObjectValue<TermsExpiration>("termsExpiration", this.termsExpiration);
        writer.writeDurationValue("userReacceptRequiredFrequency", this.userReacceptRequiredFrequency);
    };
    /**
     * Sets the acceptances property value. Read-only. Information about acceptances of this agreement.
     * @param value Value to set for the acceptances property.
     */
    public set acceptances(value: AgreementAcceptance[] | undefined) {
        this._acceptances = value;
    };
    /**
     * Sets the displayName property value. Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the file property value. Default PDF linked to this agreement.
     * @param value Value to set for the file property.
     */
    public set file(value: AgreementFile | undefined) {
        this._file = value;
    };
    /**
     * Sets the files property value. PDFs linked to this agreement. This property is in the process of being deprecated. Use the  file property instead.
     * @param value Value to set for the files property.
     */
    public set files(value: AgreementFileLocalization[] | undefined) {
        this._files = value;
    };
    /**
     * Sets the isPerDeviceAcceptanceRequired property value. Indicates whether end users are required to accept this agreement on every device that they access it from. The end user is required to register their device in Azure AD, if they haven't already done so.
     * @param value Value to set for the isPerDeviceAcceptanceRequired property.
     */
    public set isPerDeviceAcceptanceRequired(value: boolean | undefined) {
        this._isPerDeviceAcceptanceRequired = value;
    };
    /**
     * Sets the isViewingBeforeAcceptanceRequired property value. Indicates whether the user has to expand the agreement before accepting.
     * @param value Value to set for the isViewingBeforeAcceptanceRequired property.
     */
    public set isViewingBeforeAcceptanceRequired(value: boolean | undefined) {
        this._isViewingBeforeAcceptanceRequired = value;
    };
    /**
     * Sets the termsExpiration property value. Expiration schedule and frequency of agreement for all users.
     * @param value Value to set for the termsExpiration property.
     */
    public set termsExpiration(value: TermsExpiration | undefined) {
        this._termsExpiration = value;
    };
    /**
     * Sets the userReacceptRequiredFrequency property value. The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.
     * @param value Value to set for the userReacceptRequiredFrequency property.
     */
    public set userReacceptRequiredFrequency(value: Duration | undefined) {
        this._userReacceptRequiredFrequency = value;
    };
}
