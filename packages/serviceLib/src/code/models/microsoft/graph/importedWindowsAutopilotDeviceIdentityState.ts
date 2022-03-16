import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportedWindowsAutopilotDeviceIdentityState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Device error code reported by Device Directory Service(DDS).  */
    private _deviceErrorCode?: number | undefined;
    /** Device error name reported by Device Directory Service(DDS).  */
    private _deviceErrorName?: string | undefined;
    /** Device status reported by Device Directory Service(DDS). Possible values are: unknown, pending, partial, complete, error.  */
    private _deviceImportStatus?: ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined;
    /** Device Registration ID for successfully added device reported by Device Directory Service(DDS).  */
    private _deviceRegistrationId?: string | undefined;
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
     * Instantiates a new importedWindowsAutopilotDeviceIdentityState and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the deviceErrorCode property value. Device error code reported by Device Directory Service(DDS).
     * @returns a integer
     */
    public get deviceErrorCode() {
        return this._deviceErrorCode;
    };
    /**
     * Sets the deviceErrorCode property value. Device error code reported by Device Directory Service(DDS).
     * @param value Value to set for the deviceErrorCode property.
     */
    public set deviceErrorCode(value: number | undefined) {
        this._deviceErrorCode = value;
    };
    /**
     * Gets the deviceErrorName property value. Device error name reported by Device Directory Service(DDS).
     * @returns a string
     */
    public get deviceErrorName() {
        return this._deviceErrorName;
    };
    /**
     * Sets the deviceErrorName property value. Device error name reported by Device Directory Service(DDS).
     * @param value Value to set for the deviceErrorName property.
     */
    public set deviceErrorName(value: string | undefined) {
        this._deviceErrorName = value;
    };
    /**
     * Gets the deviceImportStatus property value. Device status reported by Device Directory Service(DDS). Possible values are: unknown, pending, partial, complete, error.
     * @returns a importedWindowsAutopilotDeviceIdentityImportStatus
     */
    public get deviceImportStatus() {
        return this._deviceImportStatus;
    };
    /**
     * Sets the deviceImportStatus property value. Device status reported by Device Directory Service(DDS). Possible values are: unknown, pending, partial, complete, error.
     * @param value Value to set for the deviceImportStatus property.
     */
    public set deviceImportStatus(value: ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined) {
        this._deviceImportStatus = value;
    };
    /**
     * Gets the deviceRegistrationId property value. Device Registration ID for successfully added device reported by Device Directory Service(DDS).
     * @returns a string
     */
    public get deviceRegistrationId() {
        return this._deviceRegistrationId;
    };
    /**
     * Sets the deviceRegistrationId property value. Device Registration ID for successfully added device reported by Device Directory Service(DDS).
     * @param value Value to set for the deviceRegistrationId property.
     */
    public set deviceRegistrationId(value: string | undefined) {
        this._deviceRegistrationId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["deviceErrorCode", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentityState).deviceErrorCode = n.getNumberValue(); }],
            ["deviceErrorName", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentityState).deviceErrorName = n.getStringValue(); }],
            ["deviceImportStatus", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentityState).deviceImportStatus = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>(ImportedWindowsAutopilotDeviceIdentityImportStatus); }],
            ["deviceRegistrationId", (o, n) => { (o as unknown as ImportedWindowsAutopilotDeviceIdentityState).deviceRegistrationId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("deviceErrorCode", this.deviceErrorCode);
        writer.writeStringValue("deviceErrorName", this.deviceErrorName);
        writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>("deviceImportStatus", this.deviceImportStatus);
        writer.writeStringValue("deviceRegistrationId", this.deviceRegistrationId);
        writer.writeAdditionalData(this.additionalData);
    };
}
