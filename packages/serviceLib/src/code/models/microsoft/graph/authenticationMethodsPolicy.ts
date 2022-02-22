import {AuthenticationMethodConfiguration, Entity, RegistrationEnforcement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsPolicy extends Entity implements Parsable {
    /** Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.  */
    private _authenticationMethodConfigurations?: AuthenticationMethodConfiguration[] | undefined;
    /** A description of the policy. Read-only.  */
    private _description?: string | undefined;
    /** The name of the policy. Read-only.  */
    private _displayName?: string | undefined;
    /** The date and time of the last update to the policy. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The version of the policy in use. Read-only.  */
    private _policyVersion?: string | undefined;
    private _reconfirmationInDays?: number | undefined;
    /** Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods.  */
    private _registrationEnforcement?: RegistrationEnforcement | undefined;
    /**
     * Instantiates a new authenticationMethodsPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the authenticationMethodConfigurations property value. Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
     * @returns a authenticationMethodConfiguration
     */
    public get authenticationMethodConfigurations() {
        return this._authenticationMethodConfigurations;
    };
    /**
     * Gets the description property value. A description of the policy. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The name of the policy. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time of the last update to the policy. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the policyVersion property value. The version of the policy in use. Read-only.
     * @returns a string
     */
    public get policyVersion() {
        return this._policyVersion;
    };
    /**
     * Gets the reconfirmationInDays property value. 
     * @returns a integer
     */
    public get reconfirmationInDays() {
        return this._reconfirmationInDays;
    };
    /**
     * Gets the registrationEnforcement property value. Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods.
     * @returns a registrationEnforcement
     */
    public get registrationEnforcement() {
        return this._registrationEnforcement;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["authenticationMethodConfigurations", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).authenticationMethodConfigurations = n.getCollectionOfObjectValues<AuthenticationMethodConfiguration>(AuthenticationMethodConfiguration); }],
            ["description", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).lastModifiedDateTime = n.getDateValue(); }],
            ["policyVersion", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).policyVersion = n.getStringValue(); }],
            ["reconfirmationInDays", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).reconfirmationInDays = n.getNumberValue(); }],
            ["registrationEnforcement", (o, n) => { (o as unknown as AuthenticationMethodsPolicy).registrationEnforcement = n.getObjectValue<RegistrationEnforcement>(RegistrationEnforcement); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfiguration>("authenticationMethodConfigurations", this.authenticationMethodConfigurations);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("policyVersion", this.policyVersion);
        writer.writeNumberValue("reconfirmationInDays", this.reconfirmationInDays);
        writer.writeObjectValue<RegistrationEnforcement>("registrationEnforcement", this.registrationEnforcement);
    };
    /**
     * Sets the authenticationMethodConfigurations property value. Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
     * @param value Value to set for the authenticationMethodConfigurations property.
     */
    public set authenticationMethodConfigurations(value: AuthenticationMethodConfiguration[] | undefined) {
        this._authenticationMethodConfigurations = value;
    };
    /**
     * Sets the description property value. A description of the policy. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The name of the policy. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time of the last update to the policy. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the policyVersion property value. The version of the policy in use. Read-only.
     * @param value Value to set for the policyVersion property.
     */
    public set policyVersion(value: string | undefined) {
        this._policyVersion = value;
    };
    /**
     * Sets the reconfirmationInDays property value. 
     * @param value Value to set for the reconfirmationInDays property.
     */
    public set reconfirmationInDays(value: number | undefined) {
        this._reconfirmationInDays = value;
    };
    /**
     * Sets the registrationEnforcement property value. Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods.
     * @param value Value to set for the registrationEnforcement property.
     */
    public set registrationEnforcement(value: RegistrationEnforcement | undefined) {
        this._registrationEnforcement = value;
    };
}
