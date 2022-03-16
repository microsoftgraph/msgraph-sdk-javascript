import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseUnitsDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The number of units that are enabled for the active subscription of the service SKU.  */
    private _enabled?: number | undefined;
    /** The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted.  */
    private _suspended?: number | undefined;
    /** The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state).  */
    private _warning?: number | undefined;
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
     * Instantiates a new licenseUnitsDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the enabled property value. The number of units that are enabled for the active subscription of the service SKU.
     * @returns a integer
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. The number of units that are enabled for the active subscription of the service SKU.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: number | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["enabled", (o, n) => { (o as unknown as LicenseUnitsDetail).enabled = n.getNumberValue(); }],
            ["suspended", (o, n) => { (o as unknown as LicenseUnitsDetail).suspended = n.getNumberValue(); }],
            ["warning", (o, n) => { (o as unknown as LicenseUnitsDetail).warning = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("enabled", this.enabled);
        writer.writeNumberValue("suspended", this.suspended);
        writer.writeNumberValue("warning", this.warning);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the suspended property value. The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted.
     * @returns a integer
     */
    public get suspended() {
        return this._suspended;
    };
    /**
     * Sets the suspended property value. The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted.
     * @param value Value to set for the suspended property.
     */
    public set suspended(value: number | undefined) {
        this._suspended = value;
    };
    /**
     * Gets the warning property value. The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state).
     * @returns a integer
     */
    public get warning() {
        return this._warning;
    };
    /**
     * Sets the warning property value. The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state).
     * @param value Value to set for the warning property.
     */
    public set warning(value: number | undefined) {
        this._warning = value;
    };
}
