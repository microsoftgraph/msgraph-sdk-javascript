import {ApplicationType} from './applicationType';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionAppLearningSummary extends Entity implements Parsable {
    /** Application Name  */
    private _applicationName?: string | undefined;
    /** Application Type. Possible values are: universal, desktop.  */
    private _applicationType?: ApplicationType | undefined;
    /** Device Count  */
    private _deviceCount?: number | undefined;
    /**
     * Gets the applicationName property value. Application Name
     * @returns a string
     */
    public get applicationName() {
        return this._applicationName;
    };
    /**
     * Sets the applicationName property value. Application Name
     * @param value Value to set for the applicationName property.
     */
    public set applicationName(value: string | undefined) {
        this._applicationName = value;
    };
    /**
     * Gets the applicationType property value. Application Type. Possible values are: universal, desktop.
     * @returns a applicationType
     */
    public get applicationType() {
        return this._applicationType;
    };
    /**
     * Sets the applicationType property value. Application Type. Possible values are: universal, desktop.
     * @param value Value to set for the applicationType property.
     */
    public set applicationType(value: ApplicationType | undefined) {
        this._applicationType = value;
    };
    /**
     * Instantiates a new windowsInformationProtectionAppLearningSummary and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceCount property value. Device Count
     * @returns a integer
     */
    public get deviceCount() {
        return this._deviceCount;
    };
    /**
     * Sets the deviceCount property value. Device Count
     * @param value Value to set for the deviceCount property.
     */
    public set deviceCount(value: number | undefined) {
        this._deviceCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["applicationName", (o, n) => { (o as unknown as WindowsInformationProtectionAppLearningSummary).applicationName = n.getStringValue(); }],
            ["applicationType", (o, n) => { (o as unknown as WindowsInformationProtectionAppLearningSummary).applicationType = n.getEnumValue<ApplicationType>(ApplicationType); }],
            ["deviceCount", (o, n) => { (o as unknown as WindowsInformationProtectionAppLearningSummary).deviceCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("applicationName", this.applicationName);
        writer.writeEnumValue<ApplicationType>("applicationType", this.applicationType);
        writer.writeNumberValue("deviceCount", this.deviceCount);
    };
}
