import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignmentOrder implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A list of identityUserFlowAttribute object identifiers that determine the order in which attributes should be collected within a user flow.  */
    private _order?: string[] | undefined;
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
     * Instantiates a new assignmentOrder and sets the default values.
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
            ["order", (o, n) => { (o as unknown as AssignmentOrder).order = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Gets the order property value. A list of identityUserFlowAttribute object identifiers that determine the order in which attributes should be collected within a user flow.
     * @returns a string
     */
    public get order() {
        return this._order;
    };
    /**
     * Sets the order property value. A list of identityUserFlowAttribute object identifiers that determine the order in which attributes should be collected within a user flow.
     * @param value Value to set for the order property.
     */
    public set order(value: string[] | undefined) {
        this._order = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("order", this.order);
        writer.writeAdditionalData(this.additionalData);
    };
}
