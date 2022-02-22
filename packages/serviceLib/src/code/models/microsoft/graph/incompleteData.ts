import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncompleteData implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The service does not have source data before the specified time.  */
    private _missingDataBeforeDateTime?: Date | undefined;
    /** Some data was not recorded due to excessive activity.  */
    private _wasThrottled?: boolean | undefined;
    /**
     * Instantiates a new incompleteData and sets the default values.
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
     * Gets the missingDataBeforeDateTime property value. The service does not have source data before the specified time.
     * @returns a Date
     */
    public get missingDataBeforeDateTime() {
        return this._missingDataBeforeDateTime;
    };
    /**
     * Gets the wasThrottled property value. Some data was not recorded due to excessive activity.
     * @returns a boolean
     */
    public get wasThrottled() {
        return this._wasThrottled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["missingDataBeforeDateTime", (o, n) => { (o as unknown as IncompleteData).missingDataBeforeDateTime = n.getDateValue(); }],
            ["wasThrottled", (o, n) => { (o as unknown as IncompleteData).wasThrottled = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("missingDataBeforeDateTime", this.missingDataBeforeDateTime);
        writer.writeBooleanValue("wasThrottled", this.wasThrottled);
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
     * Sets the missingDataBeforeDateTime property value. The service does not have source data before the specified time.
     * @param value Value to set for the missingDataBeforeDateTime property.
     */
    public set missingDataBeforeDateTime(value: Date | undefined) {
        this._missingDataBeforeDateTime = value;
    };
    /**
     * Sets the wasThrottled property value. Some data was not recorded due to excessive activity.
     * @param value Value to set for the wasThrottled property.
     */
    public set wasThrottled(value: boolean | undefined) {
        this._wasThrottled = value;
    };
}
