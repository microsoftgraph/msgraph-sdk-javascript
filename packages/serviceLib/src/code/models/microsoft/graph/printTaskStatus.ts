import {PrintTaskProcessingState} from './printTaskProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A human-readable description of the current processing state of the printTask.  */
    private _description?: string | undefined;
    /** The current processing state of the printTask. Valid values are described in the following table.  */
    private _state?: PrintTaskProcessingState | undefined;
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
     * Instantiates a new printTaskStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the description property value. A human-readable description of the current processing state of the printTask.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the current processing state of the printTask.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["description", (o, n) => { (o as unknown as PrintTaskStatus).description = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as PrintTaskStatus).state = n.getEnumValue<PrintTaskProcessingState>(PrintTaskProcessingState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeEnumValue<PrintTaskProcessingState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The current processing state of the printTask. Valid values are described in the following table.
     * @returns a printTaskProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The current processing state of the printTask. Valid values are described in the following table.
     * @param value Value to set for the state property.
     */
    public set state(value: PrintTaskProcessingState | undefined) {
        this._state = value;
    };
}
