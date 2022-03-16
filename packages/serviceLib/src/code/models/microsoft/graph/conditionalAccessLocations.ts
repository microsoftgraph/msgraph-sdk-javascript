import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessLocations implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Location IDs excluded from scope of policy.  */
    private _excludeLocations?: string[] | undefined;
    /** Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted.  */
    private _includeLocations?: string[] | undefined;
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
     * Instantiates a new conditionalAccessLocations and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the excludeLocations property value. Location IDs excluded from scope of policy.
     * @returns a string
     */
    public get excludeLocations() {
        return this._excludeLocations;
    };
    /**
     * Sets the excludeLocations property value. Location IDs excluded from scope of policy.
     * @param value Value to set for the excludeLocations property.
     */
    public set excludeLocations(value: string[] | undefined) {
        this._excludeLocations = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["excludeLocations", (o, n) => { (o as unknown as ConditionalAccessLocations).excludeLocations = n.getCollectionOfPrimitiveValues<string>(); }],
            ["includeLocations", (o, n) => { (o as unknown as ConditionalAccessLocations).includeLocations = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the includeLocations property value. Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted.
     * @returns a string
     */
    public get includeLocations() {
        return this._includeLocations;
    };
    /**
     * Sets the includeLocations property value. Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted.
     * @param value Value to set for the includeLocations property.
     */
    public set includeLocations(value: string[] | undefined) {
        this._includeLocations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("excludeLocations", this.excludeLocations);
        writer.writeCollectionOfPrimitiveValues<string>("includeLocations", this.includeLocations);
        writer.writeAdditionalData(this.additionalData);
    };
}
