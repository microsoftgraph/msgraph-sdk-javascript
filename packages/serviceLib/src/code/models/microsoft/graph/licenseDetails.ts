import {Entity, ServicePlanInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseDetails extends Entity implements Parsable {
    /** Information about the service plans assigned with the license. Read-only, Not nullable  */
    private _servicePlans?: ServicePlanInfo[] | undefined;
    /** Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only  */
    private _skuId?: string | undefined;
    /** Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only  */
    private _skuPartNumber?: string | undefined;
    /**
     * Instantiates a new licenseDetails and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the servicePlans property value. Information about the service plans assigned with the license. Read-only, Not nullable
     * @returns a servicePlanInfo
     */
    public get servicePlans() {
        return this._servicePlans;
    };
    /**
     * Gets the skuId property value. Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Gets the skuPartNumber property value. Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
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
            ["servicePlans", (o, n) => { (o as unknown as LicenseDetails).servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(ServicePlanInfo); }],
            ["skuId", (o, n) => { (o as unknown as LicenseDetails).skuId = n.getStringValue(); }],
            ["skuPartNumber", (o, n) => { (o as unknown as LicenseDetails).skuPartNumber = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ServicePlanInfo>("servicePlans", this.servicePlans);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("skuPartNumber", this.skuPartNumber);
    };
    /**
     * Sets the servicePlans property value. Information about the service plans assigned with the license. Read-only, Not nullable
     * @param value Value to set for the servicePlans property.
     */
    public set servicePlans(value: ServicePlanInfo[] | undefined) {
        this._servicePlans = value;
    };
    /**
     * Sets the skuId property value. Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
    /**
     * Sets the skuPartNumber property value. Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
     * @param value Value to set for the skuPartNumber property.
     */
    public set skuPartNumber(value: string | undefined) {
        this._skuPartNumber = value;
    };
}
