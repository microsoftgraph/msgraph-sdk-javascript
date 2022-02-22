import {PermissionScope, PreAuthorizedApplication} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApiApplication implements Parsable {
    /** When true, allows an application to use claims mapping without specifying a custom signing key.  */
    private _acceptMappedClaims?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. If you set the appID of the client app to this value, the user only consents once to the client app. Azure AD knows that consenting to the client means implicitly consenting to the web API and automatically provisions service principals for both APIs at the same time. Both the client and the web API app must be registered in the same tenant.  */
    private _knownClientApplications?: string[] | undefined;
    /** The definition of the delegated permissions exposed by the web API represented by this application registration. These delegated permissions may be requested by a client application, and may be granted by users or administrators during consent. Delegated permissions are sometimes referred to as OAuth 2.0 scopes.  */
    private _oauth2PermissionScopes?: PermissionScope[] | undefined;
    /** Lists the client applications that are pre-authorized with the specified delegated permissions to access this application's APIs. Users are not required to consent to any pre-authorized application (for the permissions specified). However, any additional permissions not listed in preAuthorizedApplications (requested through incremental consent for example) will require user consent.  */
    private _preAuthorizedApplications?: PreAuthorizedApplication[] | undefined;
    /** Specifies the access token version expected by this resource. This changes the version and format of the JWT produced independent of the endpoint or client used to request the access token.  The endpoint used, v1.0 or v2.0, is chosen by the client and only impacts the version of id_tokens. Resources need to explicitly configure requestedAccessTokenVersion to indicate the supported access token format.  Possible values for requestedAccessTokenVersion are 1, 2, or null. If the value is null, this defaults to 1, which corresponds to the v1.0 endpoint.  If signInAudience on the application is configured as AzureADandPersonalMicrosoftAccount, the value for this property must be 2  */
    private _requestedAccessTokenVersion?: number | undefined;
    /**
     * Instantiates a new apiApplication and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the acceptMappedClaims property value. When true, allows an application to use claims mapping without specifying a custom signing key.
     * @returns a boolean
     */
    public get acceptMappedClaims() {
        return this._acceptMappedClaims;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the knownClientApplications property value. Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. If you set the appID of the client app to this value, the user only consents once to the client app. Azure AD knows that consenting to the client means implicitly consenting to the web API and automatically provisions service principals for both APIs at the same time. Both the client and the web API app must be registered in the same tenant.
     * @returns a string
     */
    public get knownClientApplications() {
        return this._knownClientApplications;
    };
    /**
     * Gets the oauth2PermissionScopes property value. The definition of the delegated permissions exposed by the web API represented by this application registration. These delegated permissions may be requested by a client application, and may be granted by users or administrators during consent. Delegated permissions are sometimes referred to as OAuth 2.0 scopes.
     * @returns a permissionScope
     */
    public get oauth2PermissionScopes() {
        return this._oauth2PermissionScopes;
    };
    /**
     * Gets the preAuthorizedApplications property value. Lists the client applications that are pre-authorized with the specified delegated permissions to access this application's APIs. Users are not required to consent to any pre-authorized application (for the permissions specified). However, any additional permissions not listed in preAuthorizedApplications (requested through incremental consent for example) will require user consent.
     * @returns a preAuthorizedApplication
     */
    public get preAuthorizedApplications() {
        return this._preAuthorizedApplications;
    };
    /**
     * Gets the requestedAccessTokenVersion property value. Specifies the access token version expected by this resource. This changes the version and format of the JWT produced independent of the endpoint or client used to request the access token.  The endpoint used, v1.0 or v2.0, is chosen by the client and only impacts the version of id_tokens. Resources need to explicitly configure requestedAccessTokenVersion to indicate the supported access token format.  Possible values for requestedAccessTokenVersion are 1, 2, or null. If the value is null, this defaults to 1, which corresponds to the v1.0 endpoint.  If signInAudience on the application is configured as AzureADandPersonalMicrosoftAccount, the value for this property must be 2
     * @returns a integer
     */
    public get requestedAccessTokenVersion() {
        return this._requestedAccessTokenVersion;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["acceptMappedClaims", (o, n) => { (o as unknown as ApiApplication).acceptMappedClaims = n.getBooleanValue(); }],
            ["knownClientApplications", (o, n) => { (o as unknown as ApiApplication).knownClientApplications = n.getCollectionOfPrimitiveValues<string>(); }],
            ["oauth2PermissionScopes", (o, n) => { (o as unknown as ApiApplication).oauth2PermissionScopes = n.getCollectionOfObjectValues<PermissionScope>(PermissionScope); }],
            ["preAuthorizedApplications", (o, n) => { (o as unknown as ApiApplication).preAuthorizedApplications = n.getCollectionOfObjectValues<PreAuthorizedApplication>(PreAuthorizedApplication); }],
            ["requestedAccessTokenVersion", (o, n) => { (o as unknown as ApiApplication).requestedAccessTokenVersion = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("acceptMappedClaims", this.acceptMappedClaims);
        writer.writeCollectionOfPrimitiveValues<string>("knownClientApplications", this.knownClientApplications);
        writer.writeCollectionOfObjectValues<PermissionScope>("oauth2PermissionScopes", this.oauth2PermissionScopes);
        writer.writeCollectionOfObjectValues<PreAuthorizedApplication>("preAuthorizedApplications", this.preAuthorizedApplications);
        writer.writeNumberValue("requestedAccessTokenVersion", this.requestedAccessTokenVersion);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the acceptMappedClaims property value. When true, allows an application to use claims mapping without specifying a custom signing key.
     * @param value Value to set for the acceptMappedClaims property.
     */
    public set acceptMappedClaims(value: boolean | undefined) {
        this._acceptMappedClaims = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the knownClientApplications property value. Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. If you set the appID of the client app to this value, the user only consents once to the client app. Azure AD knows that consenting to the client means implicitly consenting to the web API and automatically provisions service principals for both APIs at the same time. Both the client and the web API app must be registered in the same tenant.
     * @param value Value to set for the knownClientApplications property.
     */
    public set knownClientApplications(value: string[] | undefined) {
        this._knownClientApplications = value;
    };
    /**
     * Sets the oauth2PermissionScopes property value. The definition of the delegated permissions exposed by the web API represented by this application registration. These delegated permissions may be requested by a client application, and may be granted by users or administrators during consent. Delegated permissions are sometimes referred to as OAuth 2.0 scopes.
     * @param value Value to set for the oauth2PermissionScopes property.
     */
    public set oauth2PermissionScopes(value: PermissionScope[] | undefined) {
        this._oauth2PermissionScopes = value;
    };
    /**
     * Sets the preAuthorizedApplications property value. Lists the client applications that are pre-authorized with the specified delegated permissions to access this application's APIs. Users are not required to consent to any pre-authorized application (for the permissions specified). However, any additional permissions not listed in preAuthorizedApplications (requested through incremental consent for example) will require user consent.
     * @param value Value to set for the preAuthorizedApplications property.
     */
    public set preAuthorizedApplications(value: PreAuthorizedApplication[] | undefined) {
        this._preAuthorizedApplications = value;
    };
    /**
     * Sets the requestedAccessTokenVersion property value. Specifies the access token version expected by this resource. This changes the version and format of the JWT produced independent of the endpoint or client used to request the access token.  The endpoint used, v1.0 or v2.0, is chosen by the client and only impacts the version of id_tokens. Resources need to explicitly configure requestedAccessTokenVersion to indicate the supported access token format.  Possible values for requestedAccessTokenVersion are 1, 2, or null. If the value is null, this defaults to 1, which corresponds to the v1.0 endpoint.  If signInAudience on the application is configured as AzureADandPersonalMicrosoftAccount, the value for this property must be 2
     * @param value Value to set for the requestedAccessTokenVersion property.
     */
    public set requestedAccessTokenVersion(value: number | undefined) {
        this._requestedAccessTokenVersion = value;
    };
}
