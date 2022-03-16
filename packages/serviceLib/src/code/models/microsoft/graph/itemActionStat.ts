import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemActionStat implements AdditionalDataHolder, Parsable {
    /** The number of times the action took place. Read-only.  */
    private _actionCount?: number | undefined;
    /** The number of distinct actors that performed the action. Read-only.  */
    private _actorCount?: number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /**
     * Gets the actionCount property value. The number of times the action took place. Read-only.
     * @returns a integer
     */
    public get actionCount() {
        return this._actionCount;
    };
    /**
     * Sets the actionCount property value. The number of times the action took place. Read-only.
     * @param value Value to set for the actionCount property.
     */
    public set actionCount(value: number | undefined) {
        this._actionCount = value;
    };
    /**
     * Gets the actorCount property value. The number of distinct actors that performed the action. Read-only.
     * @returns a integer
     */
    public get actorCount() {
        return this._actorCount;
    };
    /**
     * Sets the actorCount property value. The number of distinct actors that performed the action. Read-only.
     * @param value Value to set for the actorCount property.
     */
    public set actorCount(value: number | undefined) {
        this._actorCount = value;
    };
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
     * Instantiates a new itemActionStat and sets the default values.
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
            ["actionCount", (o, n) => { (o as unknown as ItemActionStat).actionCount = n.getNumberValue(); }],
            ["actorCount", (o, n) => { (o as unknown as ItemActionStat).actorCount = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("actionCount", this.actionCount);
        writer.writeNumberValue("actorCount", this.actorCount);
        writer.writeAdditionalData(this.additionalData);
    };
}
