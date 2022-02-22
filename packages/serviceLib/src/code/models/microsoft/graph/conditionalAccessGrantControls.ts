import {ConditionalAccessGrantControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessGrantControls implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.  */
    private _builtInControls?: ConditionalAccessGrantControl[] | undefined;
    /** List of custom controls IDs required by the policy. For more information, see Custom controls.  */
    private _customAuthenticationFactors?: string[] | undefined;
    /** Defines the relationship of the grant controls. Possible values: AND, OR.  */
    private _operator?: string | undefined;
    /** List of terms of use IDs required by the policy.  */
    private _termsOfUse?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessGrantControls and sets the default values.
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
     * Gets the builtInControls property value. List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.
     * @returns a conditionalAccessGrantControl
     */
    public get builtInControls() {
        return this._builtInControls;
    };
    /**
     * Gets the customAuthenticationFactors property value. List of custom controls IDs required by the policy. For more information, see Custom controls.
     * @returns a string
     */
    public get customAuthenticationFactors() {
        return this._customAuthenticationFactors;
    };
    /**
     * Gets the operator property value. Defines the relationship of the grant controls. Possible values: AND, OR.
     * @returns a string
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Gets the termsOfUse property value. List of terms of use IDs required by the policy.
     * @returns a string
     */
    public get termsOfUse() {
        return this._termsOfUse;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["builtInControls", (o, n) => { (o as unknown as ConditionalAccessGrantControls).builtInControls = n.getEnumValues<ConditionalAccessGrantControl>(ConditionalAccessGrantControl); }],
            ["customAuthenticationFactors", (o, n) => { (o as unknown as ConditionalAccessGrantControls).customAuthenticationFactors = n.getCollectionOfPrimitiveValues<string>(); }],
            ["operator", (o, n) => { (o as unknown as ConditionalAccessGrantControls).operator = n.getStringValue(); }],
            ["termsOfUse", (o, n) => { (o as unknown as ConditionalAccessGrantControls).termsOfUse = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        this.builtInControls && writer.writeEnumValue<ConditionalAccessGrantControl>("builtInControls", ...this.builtInControls);
        writer.writeCollectionOfPrimitiveValues<string>("customAuthenticationFactors", this.customAuthenticationFactors);
        writer.writeStringValue("operator", this.operator);
        writer.writeCollectionOfPrimitiveValues<string>("termsOfUse", this.termsOfUse);
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
     * Sets the builtInControls property value. List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.
     * @param value Value to set for the builtInControls property.
     */
    public set builtInControls(value: ConditionalAccessGrantControl[] | undefined) {
        this._builtInControls = value;
    };
    /**
     * Sets the customAuthenticationFactors property value. List of custom controls IDs required by the policy. For more information, see Custom controls.
     * @param value Value to set for the customAuthenticationFactors property.
     */
    public set customAuthenticationFactors(value: string[] | undefined) {
        this._customAuthenticationFactors = value;
    };
    /**
     * Sets the operator property value. Defines the relationship of the grant controls. Possible values: AND, OR.
     * @param value Value to set for the operator property.
     */
    public set operator(value: string | undefined) {
        this._operator = value;
    };
    /**
     * Sets the termsOfUse property value. List of terms of use IDs required by the policy.
     * @param value Value to set for the termsOfUse property.
     */
    public set termsOfUse(value: string[] | undefined) {
        this._termsOfUse = value;
    };
}
