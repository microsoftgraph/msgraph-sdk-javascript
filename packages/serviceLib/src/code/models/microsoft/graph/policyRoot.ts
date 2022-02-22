import {ActivityBasedTimeoutPolicy, AdminConsentRequestPolicy, AuthenticationFlowsPolicy, AuthenticationMethodsPolicy, AuthorizationPolicy, ClaimsMappingPolicy, ConditionalAccessPolicy, Entity, FeatureRolloutPolicy, HomeRealmDiscoveryPolicy, IdentitySecurityDefaultsEnforcementPolicy, PermissionGrantPolicy, TokenIssuancePolicy, TokenLifetimePolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PolicyRoot extends Entity implements Parsable {
    /** The policy that controls the idle time out for web sessions for applications.  */
    private _activityBasedTimeoutPolicies?: ActivityBasedTimeoutPolicy[] | undefined;
    /** The policy by which consent requests are created and managed for the entire tenant.  */
    private _adminConsentRequestPolicy?: AdminConsentRequestPolicy | undefined;
    /** The policy configuration of the self-service sign-up experience of external users.  */
    private _authenticationFlowsPolicy?: AuthenticationFlowsPolicy | undefined;
    /** The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD).  */
    private _authenticationMethodsPolicy?: AuthenticationMethodsPolicy | undefined;
    /** The policy that controls Azure AD authorization settings.  */
    private _authorizationPolicy?: AuthorizationPolicy | undefined;
    /** The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.  */
    private _claimsMappingPolicies?: ClaimsMappingPolicy[] | undefined;
    /** The custom rules that define an access scenario.  */
    private _conditionalAccessPolicies?: ConditionalAccessPolicy[] | undefined;
    /** The feature rollout policy associated with a directory object.  */
    private _featureRolloutPolicies?: FeatureRolloutPolicy[] | undefined;
    /** The policy to control Azure AD authentication behavior for federated users.  */
    private _homeRealmDiscoveryPolicies?: HomeRealmDiscoveryPolicy[] | undefined;
    /** The policy that represents the security defaults that protect against common attacks.  */
    private _identitySecurityDefaultsEnforcementPolicy?: IdentitySecurityDefaultsEnforcementPolicy | undefined;
    /** The policy that specifies the conditions under which consent can be granted.  */
    private _permissionGrantPolicies?: PermissionGrantPolicy[] | undefined;
    /** The policy that specifies the characteristics of SAML tokens issued by Azure AD.  */
    private _tokenIssuancePolicies?: TokenIssuancePolicy[] | undefined;
    /** The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.  */
    private _tokenLifetimePolicies?: TokenLifetimePolicy[] | undefined;
    /**
     * Instantiates a new policyRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the activityBasedTimeoutPolicies property value. The policy that controls the idle time out for web sessions for applications.
     * @returns a activityBasedTimeoutPolicy
     */
    public get activityBasedTimeoutPolicies() {
        return this._activityBasedTimeoutPolicies;
    };
    /**
     * Gets the adminConsentRequestPolicy property value. The policy by which consent requests are created and managed for the entire tenant.
     * @returns a adminConsentRequestPolicy
     */
    public get adminConsentRequestPolicy() {
        return this._adminConsentRequestPolicy;
    };
    /**
     * Gets the authenticationFlowsPolicy property value. The policy configuration of the self-service sign-up experience of external users.
     * @returns a authenticationFlowsPolicy
     */
    public get authenticationFlowsPolicy() {
        return this._authenticationFlowsPolicy;
    };
    /**
     * Gets the authenticationMethodsPolicy property value. The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD).
     * @returns a authenticationMethodsPolicy
     */
    public get authenticationMethodsPolicy() {
        return this._authenticationMethodsPolicy;
    };
    /**
     * Gets the authorizationPolicy property value. The policy that controls Azure AD authorization settings.
     * @returns a authorizationPolicy
     */
    public get authorizationPolicy() {
        return this._authorizationPolicy;
    };
    /**
     * Gets the claimsMappingPolicies property value. The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.
     * @returns a claimsMappingPolicy
     */
    public get claimsMappingPolicies() {
        return this._claimsMappingPolicies;
    };
    /**
     * Gets the conditionalAccessPolicies property value. The custom rules that define an access scenario.
     * @returns a conditionalAccessPolicy
     */
    public get conditionalAccessPolicies() {
        return this._conditionalAccessPolicies;
    };
    /**
     * Gets the featureRolloutPolicies property value. The feature rollout policy associated with a directory object.
     * @returns a featureRolloutPolicy
     */
    public get featureRolloutPolicies() {
        return this._featureRolloutPolicies;
    };
    /**
     * Gets the homeRealmDiscoveryPolicies property value. The policy to control Azure AD authentication behavior for federated users.
     * @returns a homeRealmDiscoveryPolicy
     */
    public get homeRealmDiscoveryPolicies() {
        return this._homeRealmDiscoveryPolicies;
    };
    /**
     * Gets the identitySecurityDefaultsEnforcementPolicy property value. The policy that represents the security defaults that protect against common attacks.
     * @returns a identitySecurityDefaultsEnforcementPolicy
     */
    public get identitySecurityDefaultsEnforcementPolicy() {
        return this._identitySecurityDefaultsEnforcementPolicy;
    };
    /**
     * Gets the permissionGrantPolicies property value. The policy that specifies the conditions under which consent can be granted.
     * @returns a permissionGrantPolicy
     */
    public get permissionGrantPolicies() {
        return this._permissionGrantPolicies;
    };
    /**
     * Gets the tokenIssuancePolicies property value. The policy that specifies the characteristics of SAML tokens issued by Azure AD.
     * @returns a tokenIssuancePolicy
     */
    public get tokenIssuancePolicies() {
        return this._tokenIssuancePolicies;
    };
    /**
     * Gets the tokenLifetimePolicies property value. The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.
     * @returns a tokenLifetimePolicy
     */
    public get tokenLifetimePolicies() {
        return this._tokenLifetimePolicies;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["activityBasedTimeoutPolicies", (o, n) => { (o as unknown as PolicyRoot).activityBasedTimeoutPolicies = n.getCollectionOfObjectValues<ActivityBasedTimeoutPolicy>(ActivityBasedTimeoutPolicy); }],
            ["adminConsentRequestPolicy", (o, n) => { (o as unknown as PolicyRoot).adminConsentRequestPolicy = n.getObjectValue<AdminConsentRequestPolicy>(AdminConsentRequestPolicy); }],
            ["authenticationFlowsPolicy", (o, n) => { (o as unknown as PolicyRoot).authenticationFlowsPolicy = n.getObjectValue<AuthenticationFlowsPolicy>(AuthenticationFlowsPolicy); }],
            ["authenticationMethodsPolicy", (o, n) => { (o as unknown as PolicyRoot).authenticationMethodsPolicy = n.getObjectValue<AuthenticationMethodsPolicy>(AuthenticationMethodsPolicy); }],
            ["authorizationPolicy", (o, n) => { (o as unknown as PolicyRoot).authorizationPolicy = n.getObjectValue<AuthorizationPolicy>(AuthorizationPolicy); }],
            ["claimsMappingPolicies", (o, n) => { (o as unknown as PolicyRoot).claimsMappingPolicies = n.getCollectionOfObjectValues<ClaimsMappingPolicy>(ClaimsMappingPolicy); }],
            ["conditionalAccessPolicies", (o, n) => { (o as unknown as PolicyRoot).conditionalAccessPolicies = n.getCollectionOfObjectValues<ConditionalAccessPolicy>(ConditionalAccessPolicy); }],
            ["featureRolloutPolicies", (o, n) => { (o as unknown as PolicyRoot).featureRolloutPolicies = n.getCollectionOfObjectValues<FeatureRolloutPolicy>(FeatureRolloutPolicy); }],
            ["homeRealmDiscoveryPolicies", (o, n) => { (o as unknown as PolicyRoot).homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues<HomeRealmDiscoveryPolicy>(HomeRealmDiscoveryPolicy); }],
            ["identitySecurityDefaultsEnforcementPolicy", (o, n) => { (o as unknown as PolicyRoot).identitySecurityDefaultsEnforcementPolicy = n.getObjectValue<IdentitySecurityDefaultsEnforcementPolicy>(IdentitySecurityDefaultsEnforcementPolicy); }],
            ["permissionGrantPolicies", (o, n) => { (o as unknown as PolicyRoot).permissionGrantPolicies = n.getCollectionOfObjectValues<PermissionGrantPolicy>(PermissionGrantPolicy); }],
            ["tokenIssuancePolicies", (o, n) => { (o as unknown as PolicyRoot).tokenIssuancePolicies = n.getCollectionOfObjectValues<TokenIssuancePolicy>(TokenIssuancePolicy); }],
            ["tokenLifetimePolicies", (o, n) => { (o as unknown as PolicyRoot).tokenLifetimePolicies = n.getCollectionOfObjectValues<TokenLifetimePolicy>(TokenLifetimePolicy); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ActivityBasedTimeoutPolicy>("activityBasedTimeoutPolicies", this.activityBasedTimeoutPolicies);
        writer.writeObjectValue<AdminConsentRequestPolicy>("adminConsentRequestPolicy", this.adminConsentRequestPolicy);
        writer.writeObjectValue<AuthenticationFlowsPolicy>("authenticationFlowsPolicy", this.authenticationFlowsPolicy);
        writer.writeObjectValue<AuthenticationMethodsPolicy>("authenticationMethodsPolicy", this.authenticationMethodsPolicy);
        writer.writeObjectValue<AuthorizationPolicy>("authorizationPolicy", this.authorizationPolicy);
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicy>("claimsMappingPolicies", this.claimsMappingPolicies);
        writer.writeCollectionOfObjectValues<ConditionalAccessPolicy>("conditionalAccessPolicies", this.conditionalAccessPolicies);
        writer.writeCollectionOfObjectValues<FeatureRolloutPolicy>("featureRolloutPolicies", this.featureRolloutPolicies);
        writer.writeCollectionOfObjectValues<HomeRealmDiscoveryPolicy>("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeObjectValue<IdentitySecurityDefaultsEnforcementPolicy>("identitySecurityDefaultsEnforcementPolicy", this.identitySecurityDefaultsEnforcementPolicy);
        writer.writeCollectionOfObjectValues<PermissionGrantPolicy>("permissionGrantPolicies", this.permissionGrantPolicies);
        writer.writeCollectionOfObjectValues<TokenIssuancePolicy>("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues<TokenLifetimePolicy>("tokenLifetimePolicies", this.tokenLifetimePolicies);
    };
    /**
     * Sets the activityBasedTimeoutPolicies property value. The policy that controls the idle time out for web sessions for applications.
     * @param value Value to set for the activityBasedTimeoutPolicies property.
     */
    public set activityBasedTimeoutPolicies(value: ActivityBasedTimeoutPolicy[] | undefined) {
        this._activityBasedTimeoutPolicies = value;
    };
    /**
     * Sets the adminConsentRequestPolicy property value. The policy by which consent requests are created and managed for the entire tenant.
     * @param value Value to set for the adminConsentRequestPolicy property.
     */
    public set adminConsentRequestPolicy(value: AdminConsentRequestPolicy | undefined) {
        this._adminConsentRequestPolicy = value;
    };
    /**
     * Sets the authenticationFlowsPolicy property value. The policy configuration of the self-service sign-up experience of external users.
     * @param value Value to set for the authenticationFlowsPolicy property.
     */
    public set authenticationFlowsPolicy(value: AuthenticationFlowsPolicy | undefined) {
        this._authenticationFlowsPolicy = value;
    };
    /**
     * Sets the authenticationMethodsPolicy property value. The authentication methods and the users that are allowed to use them to sign in and perform multi-factor authentication (MFA) in Azure Active Directory (Azure AD).
     * @param value Value to set for the authenticationMethodsPolicy property.
     */
    public set authenticationMethodsPolicy(value: AuthenticationMethodsPolicy | undefined) {
        this._authenticationMethodsPolicy = value;
    };
    /**
     * Sets the authorizationPolicy property value. The policy that controls Azure AD authorization settings.
     * @param value Value to set for the authorizationPolicy property.
     */
    public set authorizationPolicy(value: AuthorizationPolicy | undefined) {
        this._authorizationPolicy = value;
    };
    /**
     * Sets the claimsMappingPolicies property value. The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.
     * @param value Value to set for the claimsMappingPolicies property.
     */
    public set claimsMappingPolicies(value: ClaimsMappingPolicy[] | undefined) {
        this._claimsMappingPolicies = value;
    };
    /**
     * Sets the conditionalAccessPolicies property value. The custom rules that define an access scenario.
     * @param value Value to set for the conditionalAccessPolicies property.
     */
    public set conditionalAccessPolicies(value: ConditionalAccessPolicy[] | undefined) {
        this._conditionalAccessPolicies = value;
    };
    /**
     * Sets the featureRolloutPolicies property value. The feature rollout policy associated with a directory object.
     * @param value Value to set for the featureRolloutPolicies property.
     */
    public set featureRolloutPolicies(value: FeatureRolloutPolicy[] | undefined) {
        this._featureRolloutPolicies = value;
    };
    /**
     * Sets the homeRealmDiscoveryPolicies property value. The policy to control Azure AD authentication behavior for federated users.
     * @param value Value to set for the homeRealmDiscoveryPolicies property.
     */
    public set homeRealmDiscoveryPolicies(value: HomeRealmDiscoveryPolicy[] | undefined) {
        this._homeRealmDiscoveryPolicies = value;
    };
    /**
     * Sets the identitySecurityDefaultsEnforcementPolicy property value. The policy that represents the security defaults that protect against common attacks.
     * @param value Value to set for the identitySecurityDefaultsEnforcementPolicy property.
     */
    public set identitySecurityDefaultsEnforcementPolicy(value: IdentitySecurityDefaultsEnforcementPolicy | undefined) {
        this._identitySecurityDefaultsEnforcementPolicy = value;
    };
    /**
     * Sets the permissionGrantPolicies property value. The policy that specifies the conditions under which consent can be granted.
     * @param value Value to set for the permissionGrantPolicies property.
     */
    public set permissionGrantPolicies(value: PermissionGrantPolicy[] | undefined) {
        this._permissionGrantPolicies = value;
    };
    /**
     * Sets the tokenIssuancePolicies property value. The policy that specifies the characteristics of SAML tokens issued by Azure AD.
     * @param value Value to set for the tokenIssuancePolicies property.
     */
    public set tokenIssuancePolicies(value: TokenIssuancePolicy[] | undefined) {
        this._tokenIssuancePolicies = value;
    };
    /**
     * Sets the tokenLifetimePolicies property value. The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.
     * @param value Value to set for the tokenLifetimePolicies property.
     */
    public set tokenLifetimePolicies(value: TokenLifetimePolicy[] | undefined) {
        this._tokenLifetimePolicies = value;
    };
}
