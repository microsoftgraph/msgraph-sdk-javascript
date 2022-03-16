import {AppliedConditionalAccessPolicyResult} from './appliedConditionalAccessPolicyResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppliedConditionalAccessPolicy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Refers to the Name of the conditional access policy (example: 'Require MFA for Salesforce').  */
    private _displayName?: string | undefined;
    /** Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor authentication').  */
    private _enforcedGrantControls?: string[] | undefined;
    /** Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls').  */
    private _enforcedSessionControls?: string[] | undefined;
    /** An identifier of the conditional access policy.  */
    private _id?: string | undefined;
    /** Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state), unknown, unknownFutureValue.  */
    private _result?: AppliedConditionalAccessPolicyResult | undefined;
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
     * Instantiates a new appliedConditionalAccessPolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the displayName property value. Refers to the Name of the conditional access policy (example: 'Require MFA for Salesforce').
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Refers to the Name of the conditional access policy (example: 'Require MFA for Salesforce').
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the enforcedGrantControls property value. Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor authentication').
     * @returns a string
     */
    public get enforcedGrantControls() {
        return this._enforcedGrantControls;
    };
    /**
     * Sets the enforcedGrantControls property value. Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor authentication').
     * @param value Value to set for the enforcedGrantControls property.
     */
    public set enforcedGrantControls(value: string[] | undefined) {
        this._enforcedGrantControls = value;
    };
    /**
     * Gets the enforcedSessionControls property value. Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls').
     * @returns a string
     */
    public get enforcedSessionControls() {
        return this._enforcedSessionControls;
    };
    /**
     * Sets the enforcedSessionControls property value. Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls').
     * @param value Value to set for the enforcedSessionControls property.
     */
    public set enforcedSessionControls(value: string[] | undefined) {
        this._enforcedSessionControls = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["displayName", (o, n) => { (o as unknown as AppliedConditionalAccessPolicy).displayName = n.getStringValue(); }],
            ["enforcedGrantControls", (o, n) => { (o as unknown as AppliedConditionalAccessPolicy).enforcedGrantControls = n.getCollectionOfPrimitiveValues<string>(); }],
            ["enforcedSessionControls", (o, n) => { (o as unknown as AppliedConditionalAccessPolicy).enforcedSessionControls = n.getCollectionOfPrimitiveValues<string>(); }],
            ["id", (o, n) => { (o as unknown as AppliedConditionalAccessPolicy).id = n.getStringValue(); }],
            ["result", (o, n) => { (o as unknown as AppliedConditionalAccessPolicy).result = n.getEnumValue<AppliedConditionalAccessPolicyResult>(AppliedConditionalAccessPolicyResult); }],
        ]);
    };
    /**
     * Gets the id property value. An identifier of the conditional access policy.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. An identifier of the conditional access policy.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the result property value. Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state), unknown, unknownFutureValue.
     * @returns a appliedConditionalAccessPolicyResult
     */
    public get result() {
        return this._result;
    };
    /**
     * Sets the result property value. Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state), unknown, unknownFutureValue.
     * @param value Value to set for the result property.
     */
    public set result(value: AppliedConditionalAccessPolicyResult | undefined) {
        this._result = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("enforcedGrantControls", this.enforcedGrantControls);
        writer.writeCollectionOfPrimitiveValues<string>("enforcedSessionControls", this.enforcedSessionControls);
        writer.writeStringValue("id", this.id);
        writer.writeEnumValue<AppliedConditionalAccessPolicyResult>("result", this.result);
        writer.writeAdditionalData(this.additionalData);
    };
}
