import {createProvisioningErrorInfoFromDiscriminatorValue} from './createProvisioningErrorInfoFromDiscriminatorValue';
import {ProvisioningErrorInfo} from './index';
import {ProvisioningResult} from './provisioningResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStatusInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _errorInformation?: ProvisioningErrorInfo | undefined;
    /** Possible values are: success, warning, failure, skipped, unknownFutureValue.  */
    private _status?: ProvisioningResult | undefined;
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
     * Instantiates a new provisioningStatusInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the errorInformation property value. 
     * @returns a provisioningErrorInfo
     */
    public get errorInformation() {
        return this._errorInformation;
    };
    /**
     * Sets the errorInformation property value. 
     * @param value Value to set for the errorInformation property.
     */
    public set errorInformation(value: ProvisioningErrorInfo | undefined) {
        this._errorInformation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["errorInformation", (o, n) => { (o as unknown as ProvisioningStatusInfo).errorInformation = n.getObjectValue<ProvisioningErrorInfo>(createProvisioningErrorInfoFromDiscriminatorValue); }],
            ["status", (o, n) => { (o as unknown as ProvisioningStatusInfo).status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ProvisioningErrorInfo>("errorInformation", this.errorInformation);
        writer.writeEnumValue<ProvisioningResult>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. Possible values are: success, warning, failure, skipped, unknownFutureValue.
     * @returns a provisioningResult
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Possible values are: success, warning, failure, skipped, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: ProvisioningResult | undefined) {
        this._status = value;
    };
}
