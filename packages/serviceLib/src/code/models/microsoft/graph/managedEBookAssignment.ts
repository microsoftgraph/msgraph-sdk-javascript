import {DeviceAndAppManagementAssignmentTarget, Entity, InstallIntent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedEBookAssignment extends Entity implements Parsable {
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.  */
    private _installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook.  */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new managedEBookAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the installIntent property value. The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @returns a installIntent
     */
    public get installIntent() {
        return this._installIntent;
    };
    /**
     * Gets the target property value. The assignment target for eBook.
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
            ["installIntent", (o, n) => { (o as unknown as ManagedEBookAssignment).installIntent = n.getEnumValue<InstallIntent>(InstallIntent); }],
            ["target", (o, n) => { (o as unknown as ManagedEBookAssignment).target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(DeviceAndAppManagementAssignmentTarget); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<InstallIntent>("installIntent", this.installIntent);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", this.target);
    };
    /**
     * Sets the installIntent property value. The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @param value Value to set for the installIntent property.
     */
    public set installIntent(value: InstallIntent | undefined) {
        this._installIntent = value;
    };
    /**
     * Sets the target property value. The assignment target for eBook.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        this._target = value;
    };
}
