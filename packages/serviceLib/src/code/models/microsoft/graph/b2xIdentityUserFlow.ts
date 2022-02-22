import {IdentityProvider, IdentityProviderBase, IdentityUserFlow, IdentityUserFlowAttributeAssignment, UserFlowApiConnectorConfiguration, UserFlowLanguageConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class B2xIdentityUserFlow extends IdentityUserFlow implements Parsable {
    /** Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.  */
    private _apiConnectorConfiguration?: UserFlowApiConnectorConfiguration | undefined;
    /** The identity providers included in the user flow.  */
    private _identityProviders?: IdentityProvider[] | undefined;
    /** The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.  */
    private _languages?: UserFlowLanguageConfiguration[] | undefined;
    /** The user attribute assignments included in the user flow.  */
    private _userAttributeAssignments?: IdentityUserFlowAttributeAssignment[] | undefined;
    private _userFlowIdentityProviders?: IdentityProviderBase[] | undefined;
    /**
     * Instantiates a new b2xIdentityUserFlow and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @returns a userFlowApiConnectorConfiguration
     */
    public get apiConnectorConfiguration() {
        return this._apiConnectorConfiguration;
    };
    /**
     * Gets the identityProviders property value. The identity providers included in the user flow.
     * @returns a identityProvider
     */
    public get identityProviders() {
        return this._identityProviders;
    };
    /**
     * Gets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @returns a userFlowLanguageConfiguration
     */
    public get languages() {
        return this._languages;
    };
    /**
     * Gets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
     * @returns a identityUserFlowAttributeAssignment
     */
    public get userAttributeAssignments() {
        return this._userAttributeAssignments;
    };
    /**
     * Gets the userFlowIdentityProviders property value. 
     * @returns a identityProviderBase
     */
    public get userFlowIdentityProviders() {
        return this._userFlowIdentityProviders;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["apiConnectorConfiguration", (o, n) => { (o as unknown as B2xIdentityUserFlow).apiConnectorConfiguration = n.getObjectValue<UserFlowApiConnectorConfiguration>(UserFlowApiConnectorConfiguration); }],
            ["identityProviders", (o, n) => { (o as unknown as B2xIdentityUserFlow).identityProviders = n.getCollectionOfObjectValues<IdentityProvider>(IdentityProvider); }],
            ["languages", (o, n) => { (o as unknown as B2xIdentityUserFlow).languages = n.getCollectionOfObjectValues<UserFlowLanguageConfiguration>(UserFlowLanguageConfiguration); }],
            ["userAttributeAssignments", (o, n) => { (o as unknown as B2xIdentityUserFlow).userAttributeAssignments = n.getCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>(IdentityUserFlowAttributeAssignment); }],
            ["userFlowIdentityProviders", (o, n) => { (o as unknown as B2xIdentityUserFlow).userFlowIdentityProviders = n.getCollectionOfObjectValues<IdentityProviderBase>(IdentityProviderBase); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UserFlowApiConnectorConfiguration>("apiConnectorConfiguration", this.apiConnectorConfiguration);
        writer.writeCollectionOfObjectValues<IdentityProvider>("identityProviders", this.identityProviders);
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfiguration>("languages", this.languages);
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>("userAttributeAssignments", this.userAttributeAssignments);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("userFlowIdentityProviders", this.userFlowIdentityProviders);
    };
    /**
     * Sets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @param value Value to set for the apiConnectorConfiguration property.
     */
    public set apiConnectorConfiguration(value: UserFlowApiConnectorConfiguration | undefined) {
        this._apiConnectorConfiguration = value;
    };
    /**
     * Sets the identityProviders property value. The identity providers included in the user flow.
     * @param value Value to set for the identityProviders property.
     */
    public set identityProviders(value: IdentityProvider[] | undefined) {
        this._identityProviders = value;
    };
    /**
     * Sets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @param value Value to set for the languages property.
     */
    public set languages(value: UserFlowLanguageConfiguration[] | undefined) {
        this._languages = value;
    };
    /**
     * Sets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
     * @param value Value to set for the userAttributeAssignments property.
     */
    public set userAttributeAssignments(value: IdentityUserFlowAttributeAssignment[] | undefined) {
        this._userAttributeAssignments = value;
    };
    /**
     * Sets the userFlowIdentityProviders property value. 
     * @param value Value to set for the userFlowIdentityProviders property.
     */
    public set userFlowIdentityProviders(value: IdentityProviderBase[] | undefined) {
        this._userFlowIdentityProviders = value;
    };
}
