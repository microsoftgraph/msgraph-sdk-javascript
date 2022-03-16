import {createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue} from './createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue';
import {Entity, SelfServiceSignUpAuthenticationFlowConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationFlowsPolicy extends Entity implements Parsable {
    /** Inherited property. A description of the policy. Optional. Read-only.  */
    private _description?: string | undefined;
    /** Inherited property. The human-readable name of the policy. Optional. Read-only.  */
    private _displayName?: string | undefined;
    /** Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. Optional. Read-only.  */
    private _selfServiceSignUp?: SelfServiceSignUpAuthenticationFlowConfiguration | undefined;
    /**
     * Instantiates a new authenticationFlowsPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Inherited property. A description of the policy. Optional. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Inherited property. A description of the policy. Optional. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Inherited property. The human-readable name of the policy. Optional. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Inherited property. The human-readable name of the policy. Optional. Read-only.
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
            ["description", (o, n) => { (o as unknown as AuthenticationFlowsPolicy).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as AuthenticationFlowsPolicy).displayName = n.getStringValue(); }],
            ["selfServiceSignUp", (o, n) => { (o as unknown as AuthenticationFlowsPolicy).selfServiceSignUp = n.getObjectValue<SelfServiceSignUpAuthenticationFlowConfiguration>(createSelfServiceSignUpAuthenticationFlowConfigurationFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the selfServiceSignUp property value. Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. Optional. Read-only.
     * @returns a selfServiceSignUpAuthenticationFlowConfiguration
     */
    public get selfServiceSignUp() {
        return this._selfServiceSignUp;
    };
    /**
     * Sets the selfServiceSignUp property value. Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled or disabled. Optional. Read-only.
     * @param value Value to set for the selfServiceSignUp property.
     */
    public set selfServiceSignUp(value: SelfServiceSignUpAuthenticationFlowConfiguration | undefined) {
        this._selfServiceSignUp = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<SelfServiceSignUpAuthenticationFlowConfiguration>("selfServiceSignUp", this.selfServiceSignUp);
    };
}
