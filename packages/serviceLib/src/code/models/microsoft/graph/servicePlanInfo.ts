import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePlanInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant.  */
    private _appliesTo?: string | undefined;
    /** The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.  */
    private _provisioningStatus?: string | undefined;
    /** The unique identifier of the service plan.  */
    private _servicePlanId?: string | undefined;
    /** The name of the service plan.  */
    private _servicePlanName?: string | undefined;
    /**
     * Instantiates a new servicePlanInfo and sets the default values.
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
     * Gets the appliesTo property value. The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant.
     * @returns a string
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Gets the provisioningStatus property value. The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.
     * @returns a string
     */
    public get provisioningStatus() {
        return this._provisioningStatus;
    };
    /**
     * Gets the servicePlanId property value. The unique identifier of the service plan.
     * @returns a string
     */
    public get servicePlanId() {
        return this._servicePlanId;
    };
    /**
     * Gets the servicePlanName property value. The name of the service plan.
     * @returns a string
     */
    public get servicePlanName() {
        return this._servicePlanName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["appliesTo", (o, n) => { (o as unknown as ServicePlanInfo).appliesTo = n.getStringValue(); }],
            ["provisioningStatus", (o, n) => { (o as unknown as ServicePlanInfo).provisioningStatus = n.getStringValue(); }],
            ["servicePlanId", (o, n) => { (o as unknown as ServicePlanInfo).servicePlanId = n.getStringValue(); }],
            ["servicePlanName", (o, n) => { (o as unknown as ServicePlanInfo).servicePlanName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("appliesTo", this.appliesTo);
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        writer.writeStringValue("servicePlanName", this.servicePlanName);
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
     * Sets the appliesTo property value. The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant.
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: string | undefined) {
        this._appliesTo = value;
    };
    /**
     * Sets the provisioningStatus property value. The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.
     * @param value Value to set for the provisioningStatus property.
     */
    public set provisioningStatus(value: string | undefined) {
        this._provisioningStatus = value;
    };
    /**
     * Sets the servicePlanId property value. The unique identifier of the service plan.
     * @param value Value to set for the servicePlanId property.
     */
    public set servicePlanId(value: string | undefined) {
        this._servicePlanId = value;
    };
    /**
     * Sets the servicePlanName property value. The name of the service plan.
     * @param value Value to set for the servicePlanName property.
     */
    public set servicePlanName(value: string | undefined) {
        this._servicePlanName = value;
    };
}
