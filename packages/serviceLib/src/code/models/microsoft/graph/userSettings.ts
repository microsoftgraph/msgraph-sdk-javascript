import {createShiftPreferencesFromDiscriminatorValue} from './createShiftPreferencesFromDiscriminatorValue';
import {Entity, ShiftPreferences} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSettings extends Entity implements Parsable {
    /** Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.  */
    private _contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /** When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.  */
    private _contributionToContentDiscoveryDisabled?: boolean | undefined;
    /** The shift preferences for the user.  */
    private _shiftPreferences?: ShiftPreferences | undefined;
    /**
     * Instantiates a new userSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contributionToContentDiscoveryAsOrganizationDisabled property value. Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
     * @returns a boolean
     */
    public get contributionToContentDiscoveryAsOrganizationDisabled() {
        return this._contributionToContentDiscoveryAsOrganizationDisabled;
    };
    /**
     * Sets the contributionToContentDiscoveryAsOrganizationDisabled property value. Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
     * @param value Value to set for the contributionToContentDiscoveryAsOrganizationDisabled property.
     */
    public set contributionToContentDiscoveryAsOrganizationDisabled(value: boolean | undefined) {
        this._contributionToContentDiscoveryAsOrganizationDisabled = value;
    };
    /**
     * Gets the contributionToContentDiscoveryDisabled property value. When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.
     * @returns a boolean
     */
    public get contributionToContentDiscoveryDisabled() {
        return this._contributionToContentDiscoveryDisabled;
    };
    /**
     * Sets the contributionToContentDiscoveryDisabled property value. When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.
     * @param value Value to set for the contributionToContentDiscoveryDisabled property.
     */
    public set contributionToContentDiscoveryDisabled(value: boolean | undefined) {
        this._contributionToContentDiscoveryDisabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["contributionToContentDiscoveryAsOrganizationDisabled", (o, n) => { (o as unknown as UserSettings).contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue(); }],
            ["contributionToContentDiscoveryDisabled", (o, n) => { (o as unknown as UserSettings).contributionToContentDiscoveryDisabled = n.getBooleanValue(); }],
            ["shiftPreferences", (o, n) => { (o as unknown as UserSettings).shiftPreferences = n.getObjectValue<ShiftPreferences>(createShiftPreferencesFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", this.contributionToContentDiscoveryAsOrganizationDisabled);
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", this.contributionToContentDiscoveryDisabled);
        writer.writeObjectValue<ShiftPreferences>("shiftPreferences", this.shiftPreferences);
    };
    /**
     * Gets the shiftPreferences property value. The shift preferences for the user.
     * @returns a shiftPreferences
     */
    public get shiftPreferences() {
        return this._shiftPreferences;
    };
    /**
     * Sets the shiftPreferences property value. The shift preferences for the user.
     * @param value Value to set for the shiftPreferences property.
     */
    public set shiftPreferences(value: ShiftPreferences | undefined) {
        this._shiftPreferences = value;
    };
}
