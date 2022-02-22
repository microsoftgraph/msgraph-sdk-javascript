import {AppliedConditionalAccessPolicy, ConditionalAccessStatus, DeviceDetail, Entity, RiskDetail, RiskEventType, RiskLevel, RiskState, SignInLocation, SignInStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignIn extends Entity implements Parsable {
    /** App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).  */
    private _appDisplayName?: string | undefined;
    /** Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only).  */
    private _appId?: string | undefined;
    /** A list of conditional access policies that are triggered by the corresponding sign-in activity.  */
    private _appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[] | undefined;
    /** Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only).  */
    private _clientAppUsed?: string | undefined;
    /** Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only).  */
    private _conditionalAccessStatus?: ConditionalAccessStatus | undefined;
    /** The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only).  */
    private _correlationId?: string | undefined;
    /** Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).  */
    private _createdDateTime?: Date | undefined;
    /** Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.  */
    private _deviceDetail?: DeviceDetail | undefined;
    /** IP address of the client used to sign in. Supports $filter (eq and startsWith operators only).  */
    private _ipAddress?: string | undefined;
    /** Indicates if a sign-in is interactive or not.  */
    private _isInteractive?: boolean | undefined;
    /** Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.  */
    private _location?: SignInLocation | undefined;
    /** Name of the resource the user signed into. Supports $filter (eq operator only).  */
    private _resourceDisplayName?: string | undefined;
    /** ID of the resource that the user signed into. Supports $filter (eq operator only).  */
    private _resourceId?: string | undefined;
    /** Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden.  */
    private _riskDetail?: RiskDetail | undefined;
    /** Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).  */
    private _riskEventTypes?: RiskEventType[] | undefined;
    /** The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).  */
    private _riskEventTypes_v2?: string[] | undefined;
    /** Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.  */
    private _riskLevelAggregated?: RiskLevel | undefined;
    /** Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.  */
    private _riskLevelDuringSignIn?: RiskLevel | undefined;
    /** Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only).  */
    private _riskState?: RiskState | undefined;
    /** Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.  */
    private _status?: SignInStatus | undefined;
    /** Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).  */
    private _userDisplayName?: string | undefined;
    /** ID of the user that initiated the sign-in. Supports $filter (eq operator only).  */
    private _userId?: string | undefined;
    /** User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new signIn and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appDisplayName property value. App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Gets the appId property value. Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Gets the appliedConditionalAccessPolicies property value. A list of conditional access policies that are triggered by the corresponding sign-in activity.
     * @returns a appliedConditionalAccessPolicy
     */
    public get appliedConditionalAccessPolicies() {
        return this._appliedConditionalAccessPolicies;
    };
    /**
     * Gets the clientAppUsed property value. Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only).
     * @returns a string
     */
    public get clientAppUsed() {
        return this._clientAppUsed;
    };
    /**
     * Gets the conditionalAccessStatus property value. Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only).
     * @returns a conditionalAccessStatus
     */
    public get conditionalAccessStatus() {
        return this._conditionalAccessStatus;
    };
    /**
     * Gets the correlationId property value. The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only).
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Gets the createdDateTime property value. Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the deviceDetail property value. Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
     * @returns a deviceDetail
     */
    public get deviceDetail() {
        return this._deviceDetail;
    };
    /**
     * Gets the ipAddress property value. IP address of the client used to sign in. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Gets the isInteractive property value. Indicates if a sign-in is interactive or not.
     * @returns a boolean
     */
    public get isInteractive() {
        return this._isInteractive;
    };
    /**
     * Gets the location property value. Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
     * @returns a signInLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Gets the resourceDisplayName property value. Name of the resource the user signed into. Supports $filter (eq operator only).
     * @returns a string
     */
    public get resourceDisplayName() {
        return this._resourceDisplayName;
    };
    /**
     * Gets the resourceId property value. ID of the resource that the user signed into. Supports $filter (eq operator only).
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Gets the riskDetail property value. Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Gets the riskEventTypes property value. Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).
     * @returns a riskEventType
     */
    public get riskEventTypes() {
        return this._riskEventTypes;
    };
    /**
     * Gets the riskEventTypes_v2 property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get riskEventTypes_v2() {
        return this._riskEventTypes_v2;
    };
    /**
     * Gets the riskLevelAggregated property value. Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @returns a riskLevel
     */
    public get riskLevelAggregated() {
        return this._riskLevelAggregated;
    };
    /**
     * Gets the riskLevelDuringSignIn property value. Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @returns a riskLevel
     */
    public get riskLevelDuringSignIn() {
        return this._riskLevelDuringSignIn;
    };
    /**
     * Gets the riskState property value. Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only).
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Gets the status property value. Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
     * @returns a signInStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Gets the userDisplayName property value. Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Gets the userId property value. ID of the user that initiated the sign-in. Supports $filter (eq operator only).
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Gets the userPrincipalName property value. User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appDisplayName", (o, n) => { (o as unknown as SignIn).appDisplayName = n.getStringValue(); }],
            ["appId", (o, n) => { (o as unknown as SignIn).appId = n.getStringValue(); }],
            ["appliedConditionalAccessPolicies", (o, n) => { (o as unknown as SignIn).appliedConditionalAccessPolicies = n.getCollectionOfObjectValues<AppliedConditionalAccessPolicy>(AppliedConditionalAccessPolicy); }],
            ["clientAppUsed", (o, n) => { (o as unknown as SignIn).clientAppUsed = n.getStringValue(); }],
            ["conditionalAccessStatus", (o, n) => { (o as unknown as SignIn).conditionalAccessStatus = n.getEnumValue<ConditionalAccessStatus>(ConditionalAccessStatus); }],
            ["correlationId", (o, n) => { (o as unknown as SignIn).correlationId = n.getStringValue(); }],
            ["createdDateTime", (o, n) => { (o as unknown as SignIn).createdDateTime = n.getDateValue(); }],
            ["deviceDetail", (o, n) => { (o as unknown as SignIn).deviceDetail = n.getObjectValue<DeviceDetail>(DeviceDetail); }],
            ["ipAddress", (o, n) => { (o as unknown as SignIn).ipAddress = n.getStringValue(); }],
            ["isInteractive", (o, n) => { (o as unknown as SignIn).isInteractive = n.getBooleanValue(); }],
            ["location", (o, n) => { (o as unknown as SignIn).location = n.getObjectValue<SignInLocation>(SignInLocation); }],
            ["resourceDisplayName", (o, n) => { (o as unknown as SignIn).resourceDisplayName = n.getStringValue(); }],
            ["resourceId", (o, n) => { (o as unknown as SignIn).resourceId = n.getStringValue(); }],
            ["riskDetail", (o, n) => { (o as unknown as SignIn).riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); }],
            ["riskEventTypes", (o, n) => { (o as unknown as SignIn).riskEventTypes = n.getEnumValues<RiskEventType>(RiskEventType); }],
            ["riskEventTypes_v2", (o, n) => { (o as unknown as SignIn).riskEventTypes_v2 = n.getCollectionOfPrimitiveValues<string>(); }],
            ["riskLevelAggregated", (o, n) => { (o as unknown as SignIn).riskLevelAggregated = n.getEnumValue<RiskLevel>(RiskLevel); }],
            ["riskLevelDuringSignIn", (o, n) => { (o as unknown as SignIn).riskLevelDuringSignIn = n.getEnumValue<RiskLevel>(RiskLevel); }],
            ["riskState", (o, n) => { (o as unknown as SignIn).riskState = n.getEnumValue<RiskState>(RiskState); }],
            ["status", (o, n) => { (o as unknown as SignIn).status = n.getObjectValue<SignInStatus>(SignInStatus); }],
            ["userDisplayName", (o, n) => { (o as unknown as SignIn).userDisplayName = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as SignIn).userId = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as SignIn).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeCollectionOfObjectValues<AppliedConditionalAccessPolicy>("appliedConditionalAccessPolicies", this.appliedConditionalAccessPolicies);
        writer.writeStringValue("clientAppUsed", this.clientAppUsed);
        writer.writeEnumValue<ConditionalAccessStatus>("conditionalAccessStatus", this.conditionalAccessStatus);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DeviceDetail>("deviceDetail", this.deviceDetail);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeBooleanValue("isInteractive", this.isInteractive);
        writer.writeObjectValue<SignInLocation>("location", this.location);
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        this.riskEventTypes && writer.writeEnumValue<RiskEventType>("riskEventTypes", ...this.riskEventTypes);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes_v2", this.riskEventTypes_v2);
        writer.writeEnumValue<RiskLevel>("riskLevelAggregated", this.riskLevelAggregated);
        writer.writeEnumValue<RiskLevel>("riskLevelDuringSignIn", this.riskLevelDuringSignIn);
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        writer.writeObjectValue<SignInStatus>("status", this.status);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Sets the appDisplayName property value. App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Sets the appId property value. Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Sets the appliedConditionalAccessPolicies property value. A list of conditional access policies that are triggered by the corresponding sign-in activity.
     * @param value Value to set for the appliedConditionalAccessPolicies property.
     */
    public set appliedConditionalAccessPolicies(value: AppliedConditionalAccessPolicy[] | undefined) {
        this._appliedConditionalAccessPolicies = value;
    };
    /**
     * Sets the clientAppUsed property value. Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only).
     * @param value Value to set for the clientAppUsed property.
     */
    public set clientAppUsed(value: string | undefined) {
        this._clientAppUsed = value;
    };
    /**
     * Sets the conditionalAccessStatus property value. Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the conditionalAccessStatus property.
     */
    public set conditionalAccessStatus(value: ConditionalAccessStatus | undefined) {
        this._conditionalAccessStatus = value;
    };
    /**
     * Sets the correlationId property value. The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only).
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Sets the createdDateTime property value. Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the deviceDetail property value. Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
     * @param value Value to set for the deviceDetail property.
     */
    public set deviceDetail(value: DeviceDetail | undefined) {
        this._deviceDetail = value;
    };
    /**
     * Sets the ipAddress property value. IP address of the client used to sign in. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Sets the isInteractive property value. Indicates if a sign-in is interactive or not.
     * @param value Value to set for the isInteractive property.
     */
    public set isInteractive(value: boolean | undefined) {
        this._isInteractive = value;
    };
    /**
     * Sets the location property value. Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
     * @param value Value to set for the location property.
     */
    public set location(value: SignInLocation | undefined) {
        this._location = value;
    };
    /**
     * Sets the resourceDisplayName property value. Name of the resource the user signed into. Supports $filter (eq operator only).
     * @param value Value to set for the resourceDisplayName property.
     */
    public set resourceDisplayName(value: string | undefined) {
        this._resourceDisplayName = value;
    };
    /**
     * Sets the resourceId property value. ID of the resource that the user signed into. Supports $filter (eq operator only).
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Sets the riskDetail property value. Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        this._riskDetail = value;
    };
    /**
     * Sets the riskEventTypes property value. Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the riskEventTypes property.
     */
    public set riskEventTypes(value: RiskEventType[] | undefined) {
        this._riskEventTypes = value;
    };
    /**
     * Sets the riskEventTypes_v2 property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the riskEventTypes_v2 property.
     */
    public set riskEventTypes_v2(value: string[] | undefined) {
        this._riskEventTypes_v2 = value;
    };
    /**
     * Sets the riskLevelAggregated property value. Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @param value Value to set for the riskLevelAggregated property.
     */
    public set riskLevelAggregated(value: RiskLevel | undefined) {
        this._riskLevelAggregated = value;
    };
    /**
     * Sets the riskLevelDuringSignIn property value. Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @param value Value to set for the riskLevelDuringSignIn property.
     */
    public set riskLevelDuringSignIn(value: RiskLevel | undefined) {
        this._riskLevelDuringSignIn = value;
    };
    /**
     * Sets the riskState property value. Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the riskState property.
     */
    public set riskState(value: RiskState | undefined) {
        this._riskState = value;
    };
    /**
     * Sets the status property value. Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
     * @param value Value to set for the status property.
     */
    public set status(value: SignInStatus | undefined) {
        this._status = value;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Sets the userId property value. ID of the user that initiated the sign-in. Supports $filter (eq operator only).
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Sets the userPrincipalName property value. User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
