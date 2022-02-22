import {DeviceAndAppManagementAssignmentTarget, Entity, InstallIntent, MobileAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileAppAssignment extends Entity implements Parsable {
    /** The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.  */
    private _intent?: InstallIntent | undefined;
    /** The settings for target assignment defined by the admin.  */
    private _settings?: MobileAppAssignmentSettings | undefined;
    /** The target group assignment defined by the admin.  */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new mobileAppAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the intent property value. The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @returns a installIntent
     */
    public get intent() {
        return this._intent;
    };
    /**
     * Gets the settings property value. The settings for target assignment defined by the admin.
     * @returns a mobileAppAssignmentSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Gets the target property value. The target group assignment defined by the admin.
     * @returns a deviceAndAppManagementAssignmentTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["intent", (o, n) => { (o as unknown as MobileAppAssignment).intent = n.getEnumValue<InstallIntent>(InstallIntent); }],
            ["settings", (o, n) => { (o as unknown as MobileAppAssignment).settings = n.getObjectValue<MobileAppAssignmentSettings>(MobileAppAssignmentSettings); }],
            ["target", (o, n) => { (o as unknown as MobileAppAssignment).target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(DeviceAndAppManagementAssignmentTarget); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<InstallIntent>("intent", this.intent);
        writer.writeObjectValue<MobileAppAssignmentSettings>("settings", this.settings);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", this.target);
    };
    /**
     * Sets the intent property value. The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @param value Value to set for the intent property.
     */
    public set intent(value: InstallIntent | undefined) {
        this._intent = value;
    };
    /**
     * Sets the settings property value. The settings for target assignment defined by the admin.
     * @param value Value to set for the settings property.
     */
    public set settings(value: MobileAppAssignmentSettings | undefined) {
        this._settings = value;
    };
    /**
     * Sets the target property value. The target group assignment defined by the admin.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        this._target = value;
    };
}
