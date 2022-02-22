import {AdvancedConfigState, AuthenticationMethodsRegistrationCampaignIncludeTarget, ExcludeTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsRegistrationCampaign implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Users and groups of users that are excluded from being prompted to set up the authentication method.  */
    private _excludeTargets?: ExcludeTarget[] | undefined;
    /** Users and groups of users that are prompted to set up the authentication method.  */
    private _includeTargets?: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined;
    /** Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt.  */
    private _snoozeDurationInDays?: number | undefined;
    /** Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure Active Directory for the setting. The default value is disabled.  */
    private _state?: AdvancedConfigState | undefined;
    /**
     * Instantiates a new authenticationMethodsRegistrationCampaign and sets the default values.
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
     * Gets the excludeTargets property value. Users and groups of users that are excluded from being prompted to set up the authentication method.
     * @returns a excludeTarget
     */
    public get excludeTargets() {
        return this._excludeTargets;
    };
    /**
     * Gets the includeTargets property value. Users and groups of users that are prompted to set up the authentication method.
     * @returns a authenticationMethodsRegistrationCampaignIncludeTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Gets the snoozeDurationInDays property value. Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt.
     * @returns a integer
     */
    public get snoozeDurationInDays() {
        return this._snoozeDurationInDays;
    };
    /**
     * Gets the state property value. Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure Active Directory for the setting. The default value is disabled.
     * @returns a advancedConfigState
     */
    public get state() {
        return this._state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["excludeTargets", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaign).excludeTargets = n.getCollectionOfObjectValues<ExcludeTarget>(ExcludeTarget); }],
            ["includeTargets", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaign).includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>(AuthenticationMethodsRegistrationCampaignIncludeTarget); }],
            ["snoozeDurationInDays", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaign).snoozeDurationInDays = n.getNumberValue(); }],
            ["state", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaign).state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ExcludeTarget>("excludeTargets", this.excludeTargets);
        writer.writeCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>("includeTargets", this.includeTargets);
        writer.writeNumberValue("snoozeDurationInDays", this.snoozeDurationInDays);
        writer.writeEnumValue<AdvancedConfigState>("state", this.state);
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
     * Sets the excludeTargets property value. Users and groups of users that are excluded from being prompted to set up the authentication method.
     * @param value Value to set for the excludeTargets property.
     */
    public set excludeTargets(value: ExcludeTarget[] | undefined) {
        this._excludeTargets = value;
    };
    /**
     * Sets the includeTargets property value. Users and groups of users that are prompted to set up the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined) {
        this._includeTargets = value;
    };
    /**
     * Sets the snoozeDurationInDays property value. Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum: 0 days. Maximum: 14 days. If the value is '0', the user is prompted during every MFA attempt.
     * @param value Value to set for the snoozeDurationInDays property.
     */
    public set snoozeDurationInDays(value: number | undefined) {
        this._snoozeDurationInDays = value;
    };
    /**
     * Sets the state property value. Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure Active Directory for the setting. The default value is disabled.
     * @param value Value to set for the state property.
     */
    public set state(value: AdvancedConfigState | undefined) {
        this._state = value;
    };
}
