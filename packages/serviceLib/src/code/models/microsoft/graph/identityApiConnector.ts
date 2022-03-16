import {createApiAuthenticationConfigurationBaseFromDiscriminatorValue} from './createApiAuthenticationConfigurationBaseFromDiscriminatorValue';
import {ApiAuthenticationConfigurationBase, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityApiConnector extends Entity implements Parsable {
    /** The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.  */
    private _authenticationConfiguration?: ApiAuthenticationConfigurationBase | undefined;
    /** The name of the API connector.  */
    private _displayName?: string | undefined;
    /** The URL of the API endpoint to call.  */
    private _targetUrl?: string | undefined;
    /**
     * Gets the authenticationConfiguration property value. The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
     * @returns a apiAuthenticationConfigurationBase
     */
    public get authenticationConfiguration() {
        return this._authenticationConfiguration;
    };
    /**
     * Sets the authenticationConfiguration property value. The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
     * @param value Value to set for the authenticationConfiguration property.
     */
    public set authenticationConfiguration(value: ApiAuthenticationConfigurationBase | undefined) {
        this._authenticationConfiguration = value;
    };
    /**
     * Instantiates a new identityApiConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The name of the API connector.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the API connector.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["authenticationConfiguration", (o, n) => { (o as unknown as IdentityApiConnector).authenticationConfiguration = n.getObjectValue<ApiAuthenticationConfigurationBase>(createApiAuthenticationConfigurationBaseFromDiscriminatorValue); }],
            ["displayName", (o, n) => { (o as unknown as IdentityApiConnector).displayName = n.getStringValue(); }],
            ["targetUrl", (o, n) => { (o as unknown as IdentityApiConnector).targetUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ApiAuthenticationConfigurationBase>("authenticationConfiguration", this.authenticationConfiguration);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("targetUrl", this.targetUrl);
    };
    /**
     * Gets the targetUrl property value. The URL of the API endpoint to call.
     * @returns a string
     */
    public get targetUrl() {
        return this._targetUrl;
    };
    /**
     * Sets the targetUrl property value. The URL of the API endpoint to call.
     * @param value Value to set for the targetUrl property.
     */
    public set targetUrl(value: string | undefined) {
        this._targetUrl = value;
    };
}
