import {AccessReviewSet, AppConsentApprovalRoute, EntitlementManagement, TermsOfUseContainer} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityGovernance implements Parsable {
    private _accessReviews?: AccessReviewSet | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _appConsent?: AppConsentApprovalRoute | undefined;
    private _entitlementManagement?: EntitlementManagement | undefined;
    private _termsOfUse?: TermsOfUseContainer | undefined;
    /**
     * Instantiates a new IdentityGovernance and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the accessReviews property value. 
     * @returns a accessReviewSet
     */
    public get accessReviews() {
        return this._accessReviews;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the appConsent property value. 
     * @returns a appConsentApprovalRoute
     */
    public get appConsent() {
        return this._appConsent;
    };
    /**
     * Gets the entitlementManagement property value. 
     * @returns a entitlementManagement
     */
    public get entitlementManagement() {
        return this._entitlementManagement;
    };
    /**
     * Gets the termsOfUse property value. 
     * @returns a termsOfUseContainer
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
            ["accessReviews", (o, n) => { (o as unknown as IdentityGovernance).accessReviews = n.getObjectValue<AccessReviewSet>(AccessReviewSet); }],
            ["appConsent", (o, n) => { (o as unknown as IdentityGovernance).appConsent = n.getObjectValue<AppConsentApprovalRoute>(AppConsentApprovalRoute); }],
            ["entitlementManagement", (o, n) => { (o as unknown as IdentityGovernance).entitlementManagement = n.getObjectValue<EntitlementManagement>(EntitlementManagement); }],
            ["termsOfUse", (o, n) => { (o as unknown as IdentityGovernance).termsOfUse = n.getObjectValue<TermsOfUseContainer>(TermsOfUseContainer); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AccessReviewSet>("accessReviews", this.accessReviews);
        writer.writeObjectValue<AppConsentApprovalRoute>("appConsent", this.appConsent);
        writer.writeObjectValue<EntitlementManagement>("entitlementManagement", this.entitlementManagement);
        writer.writeObjectValue<TermsOfUseContainer>("termsOfUse", this.termsOfUse);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the accessReviews property value. 
     * @param value Value to set for the accessReviews property.
     */
    public set accessReviews(value: AccessReviewSet | undefined) {
        this._accessReviews = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the appConsent property value. 
     * @param value Value to set for the appConsent property.
     */
    public set appConsent(value: AppConsentApprovalRoute | undefined) {
        this._appConsent = value;
    };
    /**
     * Sets the entitlementManagement property value. 
     * @param value Value to set for the entitlementManagement property.
     */
    public set entitlementManagement(value: EntitlementManagement | undefined) {
        this._entitlementManagement = value;
    };
    /**
     * Sets the termsOfUse property value. 
     * @param value Value to set for the termsOfUse property.
     */
    public set termsOfUse(value: TermsOfUseContainer | undefined) {
        this._termsOfUse = value;
    };
}
