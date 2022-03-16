import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {createUserAttributeValuesItemFromDiscriminatorValue} from './createUserAttributeValuesItemFromDiscriminatorValue';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {Entity, IdentityUserFlowAttribute, UserAttributeValuesItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityUserFlowAttributeAssignment extends Entity implements Parsable {
    /** The display name of the identityUserFlowAttribute within a user flow.  */
    private _displayName?: string | undefined;
    /** Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.  */
    private _isOptional?: boolean | undefined;
    /** Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.  */
    private _requiresVerification?: boolean | undefined;
    /** The user attribute that you want to add to your user flow.  */
    private _userAttribute?: IdentityUserFlowAttribute | undefined;
    /** The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.  */
    private _userAttributeValues?: UserAttributeValuesItem[] | undefined;
    /** The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.  */
    private _userInputType?: IdentityUserFlowAttributeInputType | undefined;
    /**
     * Instantiates a new identityUserFlowAttributeAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name of the identityUserFlowAttribute within a user flow.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the identityUserFlowAttribute within a user flow.
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
            ["displayName", (o, n) => { (o as unknown as IdentityUserFlowAttributeAssignment).displayName = n.getStringValue(); }],
            ["isOptional", (o, n) => { (o as unknown as IdentityUserFlowAttributeAssignment).isOptional = n.getBooleanValue(); }],
            ["requiresVerification", (o, n) => { (o as unknown as IdentityUserFlowAttributeAssignment).requiresVerification = n.getBooleanValue(); }],
            ["userAttribute", (o, n) => { (o as unknown as IdentityUserFlowAttributeAssignment).userAttribute = n.getObjectValue<IdentityUserFlowAttribute>(createIdentityUserFlowAttributeFromDiscriminatorValue); }],
            ["userAttributeValues", (o, n) => { (o as unknown as IdentityUserFlowAttributeAssignment).userAttributeValues = n.getCollectionOfObjectValues<UserAttributeValuesItem>(createUserAttributeValuesItemFromDiscriminatorValue); }],
            ["userInputType", (o, n) => { (o as unknown as IdentityUserFlowAttributeAssignment).userInputType = n.getEnumValue<IdentityUserFlowAttributeInputType>(IdentityUserFlowAttributeInputType); }],
        ]);
    };
    /**
     * Gets the isOptional property value. Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
     * @returns a boolean
     */
    public get isOptional() {
        return this._isOptional;
    };
    /**
     * Sets the isOptional property value. Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
     * @param value Value to set for the isOptional property.
     */
    public set isOptional(value: boolean | undefined) {
        this._isOptional = value;
    };
    /**
     * Gets the requiresVerification property value. Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
     * @returns a boolean
     */
    public get requiresVerification() {
        return this._requiresVerification;
    };
    /**
     * Sets the requiresVerification property value. Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
     * @param value Value to set for the requiresVerification property.
     */
    public set requiresVerification(value: boolean | undefined) {
        this._requiresVerification = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isOptional", this.isOptional);
        writer.writeBooleanValue("requiresVerification", this.requiresVerification);
        writer.writeObjectValue<IdentityUserFlowAttribute>("userAttribute", this.userAttribute);
        writer.writeCollectionOfObjectValues<UserAttributeValuesItem>("userAttributeValues", this.userAttributeValues);
        writer.writeEnumValue<IdentityUserFlowAttributeInputType>("userInputType", this.userInputType);
    };
    /**
     * Gets the userAttribute property value. The user attribute that you want to add to your user flow.
     * @returns a identityUserFlowAttribute
     */
    public get userAttribute() {
        return this._userAttribute;
    };
    /**
     * Sets the userAttribute property value. The user attribute that you want to add to your user flow.
     * @param value Value to set for the userAttribute property.
     */
    public set userAttribute(value: IdentityUserFlowAttribute | undefined) {
        this._userAttribute = value;
    };
    /**
     * Gets the userAttributeValues property value. The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
     * @returns a userAttributeValuesItem
     */
    public get userAttributeValues() {
        return this._userAttributeValues;
    };
    /**
     * Sets the userAttributeValues property value. The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
     * @param value Value to set for the userAttributeValues property.
     */
    public set userAttributeValues(value: UserAttributeValuesItem[] | undefined) {
        this._userAttributeValues = value;
    };
    /**
     * Gets the userInputType property value. The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.
     * @returns a identityUserFlowAttributeInputType
     */
    public get userInputType() {
        return this._userInputType;
    };
    /**
     * Sets the userInputType property value. The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.
     * @param value Value to set for the userInputType property.
     */
    public set userInputType(value: IdentityUserFlowAttributeInputType | undefined) {
        this._userInputType = value;
    };
}
