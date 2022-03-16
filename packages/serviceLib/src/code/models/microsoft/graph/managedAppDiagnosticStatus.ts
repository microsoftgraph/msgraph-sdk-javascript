import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents diagnostics status.  */
export class ManagedAppDiagnosticStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Instruction on how to mitigate a failed validation  */
    private _mitigationInstruction?: string | undefined;
    /** The state of the operation  */
    private _state?: string | undefined;
    /** The validation friendly name  */
    private _validationName?: string | undefined;
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
     * Instantiates a new managedAppDiagnosticStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["mitigationInstruction", (o, n) => { (o as unknown as ManagedAppDiagnosticStatus).mitigationInstruction = n.getStringValue(); }],
            ["state", (o, n) => { (o as unknown as ManagedAppDiagnosticStatus).state = n.getStringValue(); }],
            ["validationName", (o, n) => { (o as unknown as ManagedAppDiagnosticStatus).validationName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the mitigationInstruction property value. Instruction on how to mitigate a failed validation
     * @returns a string
     */
    public get mitigationInstruction() {
        return this._mitigationInstruction;
    };
    /**
     * Sets the mitigationInstruction property value. Instruction on how to mitigate a failed validation
     * @param value Value to set for the mitigationInstruction property.
     */
    public set mitigationInstruction(value: string | undefined) {
        this._mitigationInstruction = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("mitigationInstruction", this.mitigationInstruction);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("validationName", this.validationName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state of the operation
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of the operation
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the validationName property value. The validation friendly name
     * @returns a string
     */
    public get validationName() {
        return this._validationName;
    };
    /**
     * Sets the validationName property value. The validation friendly name
     * @param value Value to set for the validationName property.
     */
    public set validationName(value: string | undefined) {
        this._validationName = value;
    };
}
