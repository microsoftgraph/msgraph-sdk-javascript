import {ActionState} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceActionResult implements Parsable {
    /** Action name  */
    private _actionName?: string | undefined;
    /** State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported.  */
    private _actionState?: ActionState | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Time the action state was last updated  */
    private _lastUpdatedDateTime?: Date | undefined;
    /** Time the action was initiated  */
    private _startDateTime?: Date | undefined;
    /**
     * Instantiates a new deviceActionResult and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the actionName property value. Action name
     * @returns a string
     */
    public get actionName() {
        return this._actionName;
    };
    /**
     * Gets the actionState property value. State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported.
     * @returns a actionState
     */
    public get actionState() {
        return this._actionState;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Time the action state was last updated
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Gets the startDateTime property value. Time the action was initiated
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["actionName", (o, n) => { (o as unknown as DeviceActionResult).actionName = n.getStringValue(); }],
            ["actionState", (o, n) => { (o as unknown as DeviceActionResult).actionState = n.getEnumValue<ActionState>(ActionState); }],
            ["lastUpdatedDateTime", (o, n) => { (o as unknown as DeviceActionResult).lastUpdatedDateTime = n.getDateValue(); }],
            ["startDateTime", (o, n) => { (o as unknown as DeviceActionResult).startDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("actionName", this.actionName);
        writer.writeEnumValue<ActionState>("actionState", this.actionState);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the actionName property value. Action name
     * @param value Value to set for the actionName property.
     */
    public set actionName(value: string | undefined) {
        this._actionName = value;
    };
    /**
     * Sets the actionState property value. State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported.
     * @param value Value to set for the actionState property.
     */
    public set actionState(value: ActionState | undefined) {
        this._actionState = value;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Time the action state was last updated
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Sets the startDateTime property value. Time the action was initiated
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
