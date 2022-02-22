import {AppConsentRequestScope, Entity, UserConsentRequest} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppConsentRequest extends Entity implements Parsable {
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.  */
    private _appDisplayName?: string | undefined;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby.  */
    private _appId?: string | undefined;
    /** A list of pending scopes waiting for approval. Required.  */
    private _pendingScopes?: AppConsentRequestScope[] | undefined;
    /** A list of pending user consent requests.  */
    private _userConsentRequests?: UserConsentRequest[] | undefined;
    /**
     * Instantiates a new appConsentRequest and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Gets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Gets the pendingScopes property value. A list of pending scopes waiting for approval. Required.
     * @returns a appConsentRequestScope
     */
    public get pendingScopes() {
        return this._pendingScopes;
    };
    /**
     * Gets the userConsentRequests property value. A list of pending user consent requests.
     * @returns a userConsentRequest
     */
    public get userConsentRequests() {
        return this._userConsentRequests;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appDisplayName", (o, n) => { (o as unknown as AppConsentRequest).appDisplayName = n.getStringValue(); }],
            ["appId", (o, n) => { (o as unknown as AppConsentRequest).appId = n.getStringValue(); }],
            ["pendingScopes", (o, n) => { (o as unknown as AppConsentRequest).pendingScopes = n.getCollectionOfObjectValues<AppConsentRequestScope>(AppConsentRequestScope); }],
            ["userConsentRequests", (o, n) => { (o as unknown as AppConsentRequest).userConsentRequests = n.getCollectionOfObjectValues<UserConsentRequest>(UserConsentRequest); }],
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
        writer.writeCollectionOfObjectValues<AppConsentRequestScope>("pendingScopes", this.pendingScopes);
        writer.writeCollectionOfObjectValues<UserConsentRequest>("userConsentRequests", this.userConsentRequests);
    };
    /**
     * Sets the appDisplayName property value. The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Sets the appId property value. The identifier of the application. Required. Supports $filter (eq only) and $orderby.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Sets the pendingScopes property value. A list of pending scopes waiting for approval. Required.
     * @param value Value to set for the pendingScopes property.
     */
    public set pendingScopes(value: AppConsentRequestScope[] | undefined) {
        this._pendingScopes = value;
    };
    /**
     * Sets the userConsentRequests property value. A list of pending user consent requests.
     * @param value Value to set for the userConsentRequests property.
     */
    public set userConsentRequests(value: UserConsentRequest[] | undefined) {
        this._userConsentRequests = value;
    };
}
