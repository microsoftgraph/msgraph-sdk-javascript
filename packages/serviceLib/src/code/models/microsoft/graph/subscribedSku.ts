import {Entity, LicenseUnitsDetail, ServicePlanInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubscribedSku extends Entity implements Parsable {
    /** For example, 'User' or 'Company'.  */
    private _appliesTo?: string | undefined;
    /** Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.  */
    private _capabilityStatus?: string | undefined;
    /** The number of licenses that have been assigned.  */
    private _consumedUnits?: number | undefined;
    /** Information about the number and status of prepaid licenses.  */
    private _prepaidUnits?: LicenseUnitsDetail | undefined;
    /** Information about the service plans that are available with the SKU. Not nullable  */
    private _servicePlans?: ServicePlanInfo[] | undefined;
    /** The unique identifier (GUID) for the service SKU.  */
    private _skuId?: string | undefined;
    /** The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.  */
    private _skuPartNumber?: string | undefined;
    /**
     * Instantiates a new subscribedSku and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the appliesTo property value. For example, 'User' or 'Company'.
     * @returns a string
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Gets the capabilityStatus property value. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
     * @returns a string
     */
    public get capabilityStatus() {
        return this._capabilityStatus;
    };
    /**
     * Gets the consumedUnits property value. The number of licenses that have been assigned.
     * @returns a integer
     */
    public get consumedUnits() {
        return this._consumedUnits;
    };
    /**
     * Gets the prepaidUnits property value. Information about the number and status of prepaid licenses.
     * @returns a licenseUnitsDetail
     */
    public get prepaidUnits() {
        return this._prepaidUnits;
    };
    /**
     * Gets the servicePlans property value. Information about the service plans that are available with the SKU. Not nullable
     * @returns a servicePlanInfo
     */
    public get servicePlans() {
        return this._servicePlans;
    };
    /**
     * Gets the skuId property value. The unique identifier (GUID) for the service SKU.
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Gets the skuPartNumber property value. The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
     * @returns a string
     */
    public get skuPartNumber() {
        return this._skuPartNumber;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["appliesTo", (o, n) => { (o as unknown as SubscribedSku).appliesTo = n.getStringValue(); }],
            ["capabilityStatus", (o, n) => { (o as unknown as SubscribedSku).capabilityStatus = n.getStringValue(); }],
            ["consumedUnits", (o, n) => { (o as unknown as SubscribedSku).consumedUnits = n.getNumberValue(); }],
            ["prepaidUnits", (o, n) => { (o as unknown as SubscribedSku).prepaidUnits = n.getObjectValue<LicenseUnitsDetail>(LicenseUnitsDetail); }],
            ["servicePlans", (o, n) => { (o as unknown as SubscribedSku).servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(ServicePlanInfo); }],
            ["skuId", (o, n) => { (o as unknown as SubscribedSku).skuId = n.getStringValue(); }],
            ["skuPartNumber", (o, n) => { (o as unknown as SubscribedSku).skuPartNumber = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appliesTo", this.appliesTo);
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeNumberValue("consumedUnits", this.consumedUnits);
        writer.writeObjectValue<LicenseUnitsDetail>("prepaidUnits", this.prepaidUnits);
        writer.writeCollectionOfObjectValues<ServicePlanInfo>("servicePlans", this.servicePlans);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("skuPartNumber", this.skuPartNumber);
    };
    /**
     * Sets the appliesTo property value. For example, 'User' or 'Company'.
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: string | undefined) {
        this._appliesTo = value;
    };
    /**
     * Sets the capabilityStatus property value. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
     * @param value Value to set for the capabilityStatus property.
     */
    public set capabilityStatus(value: string | undefined) {
        this._capabilityStatus = value;
    };
    /**
     * Sets the consumedUnits property value. The number of licenses that have been assigned.
     * @param value Value to set for the consumedUnits property.
     */
    public set consumedUnits(value: number | undefined) {
        this._consumedUnits = value;
    };
    /**
     * Sets the prepaidUnits property value. Information about the number and status of prepaid licenses.
     * @param value Value to set for the prepaidUnits property.
     */
    public set prepaidUnits(value: LicenseUnitsDetail | undefined) {
        this._prepaidUnits = value;
    };
    /**
     * Sets the servicePlans property value. Information about the service plans that are available with the SKU. Not nullable
     * @param value Value to set for the servicePlans property.
     */
    public set servicePlans(value: ServicePlanInfo[] | undefined) {
        this._servicePlans = value;
    };
    /**
     * Sets the skuId property value. The unique identifier (GUID) for the service SKU.
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
    /**
     * Sets the skuPartNumber property value. The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
     * @param value Value to set for the skuPartNumber property.
     */
    public set skuPartNumber(value: string | undefined) {
        this._skuPartNumber = value;
    };
}
