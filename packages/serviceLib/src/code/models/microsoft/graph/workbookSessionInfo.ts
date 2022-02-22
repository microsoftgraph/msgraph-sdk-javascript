import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookSessionInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Id of the workbook session.  */
    private _id?: string | undefined;
    /** true for persistent session. false for non-persistent session (view mode)  */
    private _persistChanges?: boolean | undefined;
    /**
     * Instantiates a new workbookSessionInfo and sets the default values.
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
     * Gets the id property value. Id of the workbook session.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Gets the persistChanges property value. true for persistent session. false for non-persistent session (view mode)
     * @returns a boolean
     */
    public get persistChanges() {
        return this._persistChanges;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["id", (o, n) => { (o as unknown as WorkbookSessionInfo).id = n.getStringValue(); }],
            ["persistChanges", (o, n) => { (o as unknown as WorkbookSessionInfo).persistChanges = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("persistChanges", this.persistChanges);
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
     * Sets the id property value. Id of the workbook session.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Sets the persistChanges property value. true for persistent session. false for non-persistent session (view mode)
     * @param value Value to set for the persistChanges property.
     */
    public set persistChanges(value: boolean | undefined) {
        this._persistChanges = value;
    };
}
