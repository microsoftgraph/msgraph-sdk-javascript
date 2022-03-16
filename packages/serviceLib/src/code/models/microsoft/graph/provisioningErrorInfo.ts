import {ProvisioningStatusErrorCategory} from './provisioningStatusErrorCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningErrorInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Additional details in case of error.  */
    private _additionalDetails?: string | undefined;
    /** Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue  */
    private _errorCategory?: ProvisioningStatusErrorCategory | undefined;
    /** Unique error code if any occurred. Learn more  */
    private _errorCode?: string | undefined;
    /** Summarizes the status and describes why the status happened.  */
    private _reason?: string | undefined;
    /** Provides the resolution for the corresponding error.  */
    private _recommendedAction?: string | undefined;
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
     * Gets the additionalDetails property value. Additional details in case of error.
     * @returns a string
     */
    public get additionalDetails() {
        return this._additionalDetails;
    };
    /**
     * Sets the additionalDetails property value. Additional details in case of error.
     * @param value Value to set for the additionalDetails property.
     */
    public set additionalDetails(value: string | undefined) {
        this._additionalDetails = value;
    };
    /**
     * Instantiates a new provisioningErrorInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the errorCategory property value. Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue
     * @returns a provisioningStatusErrorCategory
     */
    public get errorCategory() {
        return this._errorCategory;
    };
    /**
     * Sets the errorCategory property value. Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue
     * @param value Value to set for the errorCategory property.
     */
    public set errorCategory(value: ProvisioningStatusErrorCategory | undefined) {
        this._errorCategory = value;
    };
    /**
     * Gets the errorCode property value. Unique error code if any occurred. Learn more
     * @returns a string
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. Unique error code if any occurred. Learn more
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: string | undefined) {
        this._errorCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["additionalDetails", (o, n) => { (o as unknown as ProvisioningErrorInfo).additionalDetails = n.getStringValue(); }],
            ["errorCategory", (o, n) => { (o as unknown as ProvisioningErrorInfo).errorCategory = n.getEnumValue<ProvisioningStatusErrorCategory>(ProvisioningStatusErrorCategory); }],
            ["errorCode", (o, n) => { (o as unknown as ProvisioningErrorInfo).errorCode = n.getStringValue(); }],
            ["reason", (o, n) => { (o as unknown as ProvisioningErrorInfo).reason = n.getStringValue(); }],
            ["recommendedAction", (o, n) => { (o as unknown as ProvisioningErrorInfo).recommendedAction = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the reason property value. Summarizes the status and describes why the status happened.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Summarizes the status and describes why the status happened.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        this._reason = value;
    };
    /**
     * Gets the recommendedAction property value. Provides the resolution for the corresponding error.
     * @returns a string
     */
    public get recommendedAction() {
        return this._recommendedAction;
    };
    /**
     * Sets the recommendedAction property value. Provides the resolution for the corresponding error.
     * @param value Value to set for the recommendedAction property.
     */
    public set recommendedAction(value: string | undefined) {
        this._recommendedAction = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        writer.writeEnumValue<ProvisioningStatusErrorCategory>("errorCategory", this.errorCategory);
        writer.writeStringValue("errorCode", this.errorCode);
        writer.writeStringValue("reason", this.reason);
        writer.writeStringValue("recommendedAction", this.recommendedAction);
        writer.writeAdditionalData(this.additionalData);
    };
}
