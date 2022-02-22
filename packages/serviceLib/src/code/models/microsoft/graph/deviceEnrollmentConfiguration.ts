import {EnrollmentConfigurationAssignment, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentConfiguration extends Entity implements Parsable {
    /** The list of group assignments for the device configuration profile  */
    private _assignments?: EnrollmentConfigurationAssignment[] | undefined;
    /** Created date time in UTC of the device enrollment configuration  */
    private _createdDateTime?: Date | undefined;
    /** The description of the device enrollment configuration  */
    private _description?: string | undefined;
    /** The display name of the device enrollment configuration  */
    private _displayName?: string | undefined;
    /** Last modified date time in UTC of the device enrollment configuration  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.  */
    private _priority?: number | undefined;
    /** The version of the device enrollment configuration  */
    private _version?: number | undefined;
    /**
     * Instantiates a new deviceEnrollmentConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignments property value. The list of group assignments for the device configuration profile
     * @returns a enrollmentConfigurationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the createdDateTime property value. Created date time in UTC of the device enrollment configuration
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. The description of the device enrollment configuration
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The display name of the device enrollment configuration
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lastModifiedDateTime property value. Last modified date time in UTC of the device enrollment configuration
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the priority property value. Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Gets the version property value. The version of the device enrollment configuration
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignments", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).assignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignment>(EnrollmentConfigurationAssignment); }],
            ["createdDateTime", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).lastModifiedDateTime = n.getDateValue(); }],
            ["priority", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).priority = n.getNumberValue(); }],
            ["version", (o, n) => { (o as unknown as DeviceEnrollmentConfiguration).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignment>("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("priority", this.priority);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Sets the assignments property value. The list of group assignments for the device configuration profile
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EnrollmentConfigurationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the createdDateTime property value. Created date time in UTC of the device enrollment configuration
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. The description of the device enrollment configuration
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The display name of the device enrollment configuration
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last modified date time in UTC of the device enrollment configuration
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the priority property value. Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Sets the version property value. The version of the device enrollment configuration
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
}
