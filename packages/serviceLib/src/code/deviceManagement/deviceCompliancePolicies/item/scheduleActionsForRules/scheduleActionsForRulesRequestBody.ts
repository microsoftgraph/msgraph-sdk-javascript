import {DeviceComplianceScheduledActionForRule} from '../../../../models/microsoft/graph/';
import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from '../../../../models/microsoft/graph/createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the scheduleActionsForRules method.  */
export class ScheduleActionsForRulesRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _deviceComplianceScheduledActionForRules?: DeviceComplianceScheduledActionForRule[] | undefined;
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
     * Instantiates a new scheduleActionsForRulesRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the deviceComplianceScheduledActionForRules property value. 
     * @returns a deviceComplianceScheduledActionForRule
     */
    public get deviceComplianceScheduledActionForRules() {
        return this._deviceComplianceScheduledActionForRules;
    };
    /**
     * Sets the deviceComplianceScheduledActionForRules property value. 
     * @param value Value to set for the deviceComplianceScheduledActionForRules property.
     */
    public set deviceComplianceScheduledActionForRules(value: DeviceComplianceScheduledActionForRule[] | undefined) {
        this._deviceComplianceScheduledActionForRules = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["deviceComplianceScheduledActionForRules", (o, n) => { (o as unknown as ScheduleActionsForRulesRequestBody).deviceComplianceScheduledActionForRules = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("deviceComplianceScheduledActionForRules", this.deviceComplianceScheduledActionForRules);
        writer.writeAdditionalData(this.additionalData);
    };
}
