import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesConditionalAccessSettings extends Entity implements Parsable {
    /** Indicates if on premises conditional access is enabled for this organization  */
    private _enabled?: boolean | undefined;
    /** User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy.  */
    private _excludedGroups?: string[] | undefined;
    /** User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access.  */
    private _includedGroups?: string[] | undefined;
    /** Override the default access rule when allowing a device to ensure access is granted.  */
    private _overrideDefaultRule?: boolean | undefined;
    /**
     * Instantiates a new onPremisesConditionalAccessSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the enabled property value. Indicates if on premises conditional access is enabled for this organization
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates if on premises conditional access is enabled for this organization
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * Gets the excludedGroups property value. User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy.
     * @returns a string
     */
    public get excludedGroups() {
        return this._excludedGroups;
    };
    /**
     * Sets the excludedGroups property value. User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy.
     * @param value Value to set for the excludedGroups property.
     */
    public set excludedGroups(value: string[] | undefined) {
        this._excludedGroups = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["enabled", (o, n) => { (o as unknown as OnPremisesConditionalAccessSettings).enabled = n.getBooleanValue(); }],
            ["excludedGroups", (o, n) => { (o as unknown as OnPremisesConditionalAccessSettings).excludedGroups = n.getCollectionOfPrimitiveValues<string>(); }],
            ["includedGroups", (o, n) => { (o as unknown as OnPremisesConditionalAccessSettings).includedGroups = n.getCollectionOfPrimitiveValues<string>(); }],
            ["overrideDefaultRule", (o, n) => { (o as unknown as OnPremisesConditionalAccessSettings).overrideDefaultRule = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Gets the includedGroups property value. User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access.
     * @returns a string
     */
    public get includedGroups() {
        return this._includedGroups;
    };
    /**
     * Sets the includedGroups property value. User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access.
     * @param value Value to set for the includedGroups property.
     */
    public set includedGroups(value: string[] | undefined) {
        this._includedGroups = value;
    };
    /**
     * Gets the overrideDefaultRule property value. Override the default access rule when allowing a device to ensure access is granted.
     * @returns a boolean
     */
    public get overrideDefaultRule() {
        return this._overrideDefaultRule;
    };
    /**
     * Sets the overrideDefaultRule property value. Override the default access rule when allowing a device to ensure access is granted.
     * @param value Value to set for the overrideDefaultRule property.
     */
    public set overrideDefaultRule(value: boolean | undefined) {
        this._overrideDefaultRule = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeCollectionOfPrimitiveValues<string>("excludedGroups", this.excludedGroups);
        writer.writeCollectionOfPrimitiveValues<string>("includedGroups", this.includedGroups);
        writer.writeBooleanValue("overrideDefaultRule", this.overrideDefaultRule);
    };
}
