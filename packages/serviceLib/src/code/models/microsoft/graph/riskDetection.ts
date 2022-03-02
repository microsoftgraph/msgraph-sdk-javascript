import {ActivityType, Entity, RiskDetail, RiskDetectionTimingType, RiskLevel, RiskState, SignInLocation, TokenIssuerType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskDetection extends Entity implements Parsable {
    /** Indicates the activity type the detected risk is linked to. Possible values are: signin, user, unknownFutureValue.  */
    private _activity?: ActivityType | undefined;
    /** Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z  */
    private _activityDateTime?: Date | undefined;
    /** Additional information associated with the risk detection in JSON format. For example, '[{/'Key/':/'userAgent/',/'Value/':/'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36/'}]'. Possible keys in the additionalInfo JSON string are: userAgent, alertUrl, relatedEventTimeInUtc, relatedUserAgent, deviceInformation, relatedLocation, requestId, correlationId, lastActivityTimeInUtc, malwareName, clientLocation, clientIp, riskReasons. For more information about riskReasons and possible values, see riskReasons values.  */
    private _additionalInfo?: string | undefined;
    /** Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.  */
    private _correlationId?: string | undefined;
    /** Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 looks like this: 2014-01-01T00:00:00Z  */
    private _detectedDateTime?: Date | undefined;
    /** Timing of the detected risk (real-time/offline). Possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.  */
    private _detectionTimingType?: RiskDetectionTimingType | undefined;
    /** Provides the IP address of the client from where the risk occurred.  */
    private _ipAddress?: string | undefined;
    /** Date and time that the risk detection was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z  */
    private _lastUpdatedDateTime?: Date | undefined;
    /** Location of the sign-in.  */
    private _location?: SignInLocation | undefined;
    /** Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.  */
    private _requestId?: string | undefined;
    /** Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.  */
    private _riskDetail?: RiskDetail | undefined;
    /** The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, passwordSpray, impossibleTravel, newCountry, anomalousToken, tokenIssuerAnomaly,suspiciousBrowser, riskyIPAddress, mcasSuspiciousInboxManipulationRules, suspiciousInboxForwarding, and unknownFutureValue. If the risk detection is a premium detection, will show generic. For more information about each value, see riskEventType values.  */
    private _riskEventType?: string | undefined;
    /** Level of the detected risk. Possible values are: low, medium, high, hidden, none, unknownFutureValue.  */
    private _riskLevel?: RiskLevel | undefined;
    /** The state of a detected risky user or sign-in. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.  */
    private _riskState?: RiskState | undefined;
    /** Source of the risk detection. For example, activeDirectory.  */
    private _source?: string | undefined;
    /** Indicates the type of token issuer for the detected sign-in risk. Possible values are: AzureAD, ADFederationServices, UnknownFutureValue.  */
    private _tokenIssuerType?: TokenIssuerType | undefined;
    /** The user principal name (UPN) of the user.  */
    private _userDisplayName?: string | undefined;
    /** Unique ID of the user.  */
    private _userId?: string | undefined;
    /** The user principal name (UPN) of the user.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new riskDetection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the activity property value. Indicates the activity type the detected risk is linked to. Possible values are: signin, user, unknownFutureValue.
     * @returns a activityType
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Gets the activityDateTime property value. Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Gets the additionalInfo property value. Additional information associated with the risk detection in JSON format. For example, '[{/'Key/':/'userAgent/',/'Value/':/'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36/'}]'. Possible keys in the additionalInfo JSON string are: userAgent, alertUrl, relatedEventTimeInUtc, relatedUserAgent, deviceInformation, relatedLocation, requestId, correlationId, lastActivityTimeInUtc, malwareName, clientLocation, clientIp, riskReasons. For more information about riskReasons and possible values, see riskReasons values.
     * @returns a string
     */
    public get additionalInfo() {
        return this._additionalInfo;
    };
    /**
     * Gets the correlationId property value. Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Gets the detectedDateTime property value. Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 looks like this: 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get detectedDateTime() {
        return this._detectedDateTime;
    };
    /**
     * Gets the detectionTimingType property value. Timing of the detected risk (real-time/offline). Possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     * @returns a riskDetectionTimingType
     */
    public get detectionTimingType() {
        return this._detectionTimingType;
    };
    /**
     * Gets the ipAddress property value. Provides the IP address of the client from where the risk occurred.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Date and time that the risk detection was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Gets the location property value. Location of the sign-in.
     * @returns a signInLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Gets the requestId property value. Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @returns a string
     */
    public get requestId() {
        return this._requestId;
    };
    /**
     * Gets the riskDetail property value. Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Gets the riskEventType property value. The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, passwordSpray, impossibleTravel, newCountry, anomalousToken, tokenIssuerAnomaly,suspiciousBrowser, riskyIPAddress, mcasSuspiciousInboxManipulationRules, suspiciousInboxForwarding, and unknownFutureValue. If the risk detection is a premium detection, will show generic. For more information about each value, see riskEventType values.
     * @returns a string
     */
    public get riskEventType() {
        return this._riskEventType;
    };
    /**
     * Gets the riskLevel property value. Level of the detected risk. Possible values are: low, medium, high, hidden, none, unknownFutureValue.
     * @returns a riskLevel
     */
    public get riskLevel() {
        return this._riskLevel;
    };
    /**
     * Gets the riskState property value. The state of a detected risky user or sign-in. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Gets the source property value. Source of the risk detection. For example, activeDirectory.
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Gets the tokenIssuerType property value. Indicates the type of token issuer for the detected sign-in risk. Possible values are: AzureAD, ADFederationServices, UnknownFutureValue.
     * @returns a tokenIssuerType
     */
    public get tokenIssuerType() {
        return this._tokenIssuerType;
    };
    /**
     * Gets the userDisplayName property value. The user principal name (UPN) of the user.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Gets the userId property value. Unique ID of the user.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the user.
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
            ["activity", (o, n) => { (o as unknown as RiskDetection).activity = n.getEnumValue<ActivityType>(ActivityType); }],
            ["activityDateTime", (o, n) => { (o as unknown as RiskDetection).activityDateTime = n.getDateValue(); }],
            ["additionalInfo", (o, n) => { (o as unknown as RiskDetection).additionalInfo = n.getStringValue(); }],
            ["correlationId", (o, n) => { (o as unknown as RiskDetection).correlationId = n.getStringValue(); }],
            ["detectedDateTime", (o, n) => { (o as unknown as RiskDetection).detectedDateTime = n.getDateValue(); }],
            ["detectionTimingType", (o, n) => { (o as unknown as RiskDetection).detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType); }],
            ["ipAddress", (o, n) => { (o as unknown as RiskDetection).ipAddress = n.getStringValue(); }],
            ["lastUpdatedDateTime", (o, n) => { (o as unknown as RiskDetection).lastUpdatedDateTime = n.getDateValue(); }],
            ["location", (o, n) => { (o as unknown as RiskDetection).location = n.getObjectValue<SignInLocation>(SignInLocation); }],
            ["requestId", (o, n) => { (o as unknown as RiskDetection).requestId = n.getStringValue(); }],
            ["riskDetail", (o, n) => { (o as unknown as RiskDetection).riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); }],
            ["riskEventType", (o, n) => { (o as unknown as RiskDetection).riskEventType = n.getStringValue(); }],
            ["riskLevel", (o, n) => { (o as unknown as RiskDetection).riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); }],
            ["riskState", (o, n) => { (o as unknown as RiskDetection).riskState = n.getEnumValue<RiskState>(RiskState); }],
            ["source", (o, n) => { (o as unknown as RiskDetection).source = n.getStringValue(); }],
            ["tokenIssuerType", (o, n) => { (o as unknown as RiskDetection).tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType); }],
            ["userDisplayName", (o, n) => { (o as unknown as RiskDetection).userDisplayName = n.getStringValue(); }],
            ["userId", (o, n) => { (o as unknown as RiskDetection).userId = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as RiskDetection).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ActivityType>("activity", this.activity);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("additionalInfo", this.additionalInfo);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("detectedDateTime", this.detectedDateTime);
        writer.writeEnumValue<RiskDetectionTimingType>("detectionTimingType", this.detectionTimingType);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeObjectValue<SignInLocation>("location", this.location);
        writer.writeStringValue("requestId", this.requestId);
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        writer.writeStringValue("riskEventType", this.riskEventType);
        writer.writeEnumValue<RiskLevel>("riskLevel", this.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        writer.writeStringValue("source", this.source);
        writer.writeEnumValue<TokenIssuerType>("tokenIssuerType", this.tokenIssuerType);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Sets the activity property value. Indicates the activity type the detected risk is linked to. Possible values are: signin, user, unknownFutureValue.
     * @param value Value to set for the activity property.
     */
    public set activity(value: ActivityType | undefined) {
        this._activity = value;
    };
    /**
     * Sets the activityDateTime property value. Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        this._activityDateTime = value;
    };
    /**
     * Sets the additionalInfo property value. Additional information associated with the risk detection in JSON format. For example, '[{/'Key/':/'userAgent/',/'Value/':/'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36/'}]'. Possible keys in the additionalInfo JSON string are: userAgent, alertUrl, relatedEventTimeInUtc, relatedUserAgent, deviceInformation, relatedLocation, requestId, correlationId, lastActivityTimeInUtc, malwareName, clientLocation, clientIp, riskReasons. For more information about riskReasons and possible values, see riskReasons values.
     * @param value Value to set for the additionalInfo property.
     */
    public set additionalInfo(value: string | undefined) {
        this._additionalInfo = value;
    };
    /**
     * Sets the correlationId property value. Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Sets the detectedDateTime property value. Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 looks like this: 2014-01-01T00:00:00Z
     * @param value Value to set for the detectedDateTime property.
     */
    public set detectedDateTime(value: Date | undefined) {
        this._detectedDateTime = value;
    };
    /**
     * Sets the detectionTimingType property value. Timing of the detected risk (real-time/offline). Possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     * @param value Value to set for the detectionTimingType property.
     */
    public set detectionTimingType(value: RiskDetectionTimingType | undefined) {
        this._detectionTimingType = value;
    };
    /**
     * Sets the ipAddress property value. Provides the IP address of the client from where the risk occurred.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Date and time that the risk detection was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Sets the location property value. Location of the sign-in.
     * @param value Value to set for the location property.
     */
    public set location(value: SignInLocation | undefined) {
        this._location = value;
    };
    /**
     * Sets the requestId property value. Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @param value Value to set for the requestId property.
     */
    public set requestId(value: string | undefined) {
        this._requestId = value;
    };
    /**
     * Sets the riskDetail property value. Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        this._riskDetail = value;
    };
    /**
     * Sets the riskEventType property value. The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, passwordSpray, impossibleTravel, newCountry, anomalousToken, tokenIssuerAnomaly,suspiciousBrowser, riskyIPAddress, mcasSuspiciousInboxManipulationRules, suspiciousInboxForwarding, and unknownFutureValue. If the risk detection is a premium detection, will show generic. For more information about each value, see riskEventType values.
     * @param value Value to set for the riskEventType property.
     */
    public set riskEventType(value: string | undefined) {
        this._riskEventType = value;
    };
    /**
     * Sets the riskLevel property value. Level of the detected risk. Possible values are: low, medium, high, hidden, none, unknownFutureValue.
     * @param value Value to set for the riskLevel property.
     */
    public set riskLevel(value: RiskLevel | undefined) {
        this._riskLevel = value;
    };
    /**
     * Sets the riskState property value. The state of a detected risky user or sign-in. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     * @param value Value to set for the riskState property.
     */
    public set riskState(value: RiskState | undefined) {
        this._riskState = value;
    };
    /**
     * Sets the source property value. Source of the risk detection. For example, activeDirectory.
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Sets the tokenIssuerType property value. Indicates the type of token issuer for the detected sign-in risk. Possible values are: AzureAD, ADFederationServices, UnknownFutureValue.
     * @param value Value to set for the tokenIssuerType property.
     */
    public set tokenIssuerType(value: TokenIssuerType | undefined) {
        this._tokenIssuerType = value;
    };
    /**
     * Sets the userDisplayName property value. The user principal name (UPN) of the user.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Sets the userId property value. Unique ID of the user.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the user.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
