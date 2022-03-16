import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProvider extends Entity implements Parsable {
    /** The client ID for the application. This is the client ID obtained when registering the application with the identity provider. Required. Not nullable.  */
    private _clientId?: string | undefined;
    /** The client secret for the application. This is the client secret obtained when registering the application with the identity provider. This is write-only. A read operation will return ****.  Required. Not nullable.  */
    private _clientSecret?: string | undefined;
    /** The display name of the identity provider. Not nullable.  */
    private _name?: string | undefined;
    /** The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat, OpenIDConnect. Not nullable.  */
    private _type?: string | undefined;
    /**
     * Gets the clientId property value. The client ID for the application. This is the client ID obtained when registering the application with the identity provider. Required. Not nullable.
     * @returns a string
     */
    public get clientId() {
        return this._clientId;
    };
    /**
     * Sets the clientId property value. The client ID for the application. This is the client ID obtained when registering the application with the identity provider. Required. Not nullable.
     * @param value Value to set for the clientId property.
     */
    public set clientId(value: string | undefined) {
        this._clientId = value;
    };
    /**
     * Gets the clientSecret property value. The client secret for the application. This is the client secret obtained when registering the application with the identity provider. This is write-only. A read operation will return ****.  Required. Not nullable.
     * @returns a string
     */
    public get clientSecret() {
        return this._clientSecret;
    };
    /**
     * Sets the clientSecret property value. The client secret for the application. This is the client secret obtained when registering the application with the identity provider. This is write-only. A read operation will return ****.  Required. Not nullable.
     * @param value Value to set for the clientSecret property.
     */
    public set clientSecret(value: string | undefined) {
        this._clientSecret = value;
    };
    /**
     * Instantiates a new identityProvider and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["clientId", (o, n) => { (o as unknown as IdentityProvider).clientId = n.getStringValue(); }],
            ["clientSecret", (o, n) => { (o as unknown as IdentityProvider).clientSecret = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as IdentityProvider).name = n.getStringValue(); }],
            ["type", (o, n) => { (o as unknown as IdentityProvider).type = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the name property value. The display name of the identity provider. Not nullable.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the identity provider. Not nullable.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("clientId", this.clientId);
        writer.writeStringValue("clientSecret", this.clientSecret);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
    };
    /**
     * Gets the type property value. The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat, OpenIDConnect. Not nullable.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat, OpenIDConnect. Not nullable.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
