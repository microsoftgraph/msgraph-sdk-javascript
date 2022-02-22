import {AuthenticationMethodsRegistrationCampaign} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistrationEnforcement implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Run campaigns to remind users to set up targeted authentication methods.  */
    private _authenticationMethodsRegistrationCampaign?: AuthenticationMethodsRegistrationCampaign | undefined;
    /**
     * Instantiates a new registrationEnforcement and sets the default values.
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
     * Gets the authenticationMethodsRegistrationCampaign property value. Run campaigns to remind users to set up targeted authentication methods.
     * @returns a authenticationMethodsRegistrationCampaign
     */
    public get authenticationMethodsRegistrationCampaign() {
        return this._authenticationMethodsRegistrationCampaign;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["authenticationMethodsRegistrationCampaign", (o, n) => { (o as unknown as RegistrationEnforcement).authenticationMethodsRegistrationCampaign = n.getObjectValue<AuthenticationMethodsRegistrationCampaign>(AuthenticationMethodsRegistrationCampaign); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AuthenticationMethodsRegistrationCampaign>("authenticationMethodsRegistrationCampaign", this.authenticationMethodsRegistrationCampaign);
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
     * Sets the authenticationMethodsRegistrationCampaign property value. Run campaigns to remind users to set up targeted authentication methods.
     * @param value Value to set for the authenticationMethodsRegistrationCampaign property.
     */
    public set authenticationMethodsRegistrationCampaign(value: AuthenticationMethodsRegistrationCampaign | undefined) {
        this._authenticationMethodsRegistrationCampaign = value;
    };
}
