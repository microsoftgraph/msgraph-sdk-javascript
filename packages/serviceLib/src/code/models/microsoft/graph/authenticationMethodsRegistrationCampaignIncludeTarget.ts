import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsRegistrationCampaignIncludeTarget implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The object identifier of an Azure Active Directory user or group.  */
    private _id?: string | undefined;
    /** The authentication method that the user is prompted to register. The value must be microsoftAuthenticator.  */
    private _targetedAuthenticationMethod?: string | undefined;
    /** The type of the authentication method target. Possible values are: user, group, unknownFutureValue.  */
    private _targetType?: AuthenticationMethodTargetType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new authenticationMethodsRegistrationCampaignIncludeTarget and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["id", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaignIncludeTarget).id = n.getStringValue(); }],
            ["targetedAuthenticationMethod", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaignIncludeTarget).targetedAuthenticationMethod = n.getStringValue(); }],
            ["targetType", (o, n) => { (o as unknown as AuthenticationMethodsRegistrationCampaignIncludeTarget).targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); }],
        ]);
    };
    /**
     * Gets the id property value. The object identifier of an Azure Active Directory user or group.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The object identifier of an Azure Active Directory user or group.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("targetedAuthenticationMethod", this.targetedAuthenticationMethod);
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", this.targetType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targetedAuthenticationMethod property value. The authentication method that the user is prompted to register. The value must be microsoftAuthenticator.
     * @returns a string
     */
    public get targetedAuthenticationMethod() {
        return this._targetedAuthenticationMethod;
    };
    /**
     * Sets the targetedAuthenticationMethod property value. The authentication method that the user is prompted to register. The value must be microsoftAuthenticator.
     * @param value Value to set for the targetedAuthenticationMethod property.
     */
    public set targetedAuthenticationMethod(value: string | undefined) {
        this._targetedAuthenticationMethod = value;
    };
    /**
     * Gets the targetType property value. The type of the authentication method target. Possible values are: user, group, unknownFutureValue.
     * @returns a authenticationMethodTargetType
     */
    public get targetType() {
        return this._targetType;
    };
    /**
     * Sets the targetType property value. The type of the authentication method target. Possible values are: user, group, unknownFutureValue.
     * @param value Value to set for the targetType property.
     */
    public set targetType(value: AuthenticationMethodTargetType | undefined) {
        this._targetType = value;
    };
}
