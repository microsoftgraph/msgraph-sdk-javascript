import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/microsoft/graph/';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * Instantiates a new importRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the importedWindowsAutopilotDeviceIdentities property value. 
     * @returns a importedWindowsAutopilotDeviceIdentity
     */
    public get importedWindowsAutopilotDeviceIdentities() {
        return this._importedWindowsAutopilotDeviceIdentities;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["importedWindowsAutopilotDeviceIdentities", (o, n) => { (o as unknown as ImportRequestBody).importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(ImportedWindowsAutopilotDeviceIdentity); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", this.importedWindowsAutopilotDeviceIdentities);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the importedWindowsAutopilotDeviceIdentities property value. 
     * @param value Value to set for the importedWindowsAutopilotDeviceIdentities property.
     */
    public set importedWindowsAutopilotDeviceIdentities(value: ImportedWindowsAutopilotDeviceIdentity[] | undefined) {
        this._importedWindowsAutopilotDeviceIdentities = value;
    };
}
