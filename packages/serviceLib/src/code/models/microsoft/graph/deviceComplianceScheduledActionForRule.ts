import {DeviceComplianceActionItem, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceComplianceScheduledActionForRule extends Entity implements Parsable {
    /** Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired.  */
    private _ruleName?: string | undefined;
    /** The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.  */
    private _scheduledActionConfigurations?: DeviceComplianceActionItem[] | undefined;
    /**
     * Instantiates a new deviceComplianceScheduledActionForRule and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the ruleName property value. Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired.
     * @returns a string
     */
    public get ruleName() {
        return this._ruleName;
    };
    /**
     * Gets the scheduledActionConfigurations property value. The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @returns a deviceComplianceActionItem
     */
    public get scheduledActionConfigurations() {
        return this._scheduledActionConfigurations;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["ruleName", (o, n) => { (o as unknown as DeviceComplianceScheduledActionForRule).ruleName = n.getStringValue(); }],
            ["scheduledActionConfigurations", (o, n) => { (o as unknown as DeviceComplianceScheduledActionForRule).scheduledActionConfigurations = n.getCollectionOfObjectValues<DeviceComplianceActionItem>(DeviceComplianceActionItem); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("ruleName", this.ruleName);
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItem>("scheduledActionConfigurations", this.scheduledActionConfigurations);
    };
    /**
     * Sets the ruleName property value. Name of the rule which this scheduled action applies to. Currently scheduled actions are created per policy instead of per rule, thus RuleName is always set to default value PasswordRequired.
     * @param value Value to set for the ruleName property.
     */
    public set ruleName(value: string | undefined) {
        this._ruleName = value;
    };
    /**
     * Sets the scheduledActionConfigurations property value. The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @param value Value to set for the scheduledActionConfigurations property.
     */
    public set scheduledActionConfigurations(value: DeviceComplianceActionItem[] | undefined) {
        this._scheduledActionConfigurations = value;
    };
}
