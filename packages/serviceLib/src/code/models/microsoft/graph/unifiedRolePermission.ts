import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRolePermission implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Set of tasks that can be performed on a resource. Required.  */
    private _allowedResourceActions?: string[] | undefined;
    /** Optional constraints that must be met for the permission to be effective.  */
    private _condition?: string | undefined;
    /** Set of tasks that may not be performed on a resource. Not yet supported.  */
    private _excludedResourceActions?: string[] | undefined;
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
     * Gets the allowedResourceActions property value. Set of tasks that can be performed on a resource. Required.
     * @returns a string
     */
    public get allowedResourceActions() {
        return this._allowedResourceActions;
    };
    /**
     * Sets the allowedResourceActions property value. Set of tasks that can be performed on a resource. Required.
     * @param value Value to set for the allowedResourceActions property.
     */
    public set allowedResourceActions(value: string[] | undefined) {
        this._allowedResourceActions = value;
    };
    /**
     * Gets the condition property value. Optional constraints that must be met for the permission to be effective.
     * @returns a string
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Sets the condition property value. Optional constraints that must be met for the permission to be effective.
     * @param value Value to set for the condition property.
     */
    public set condition(value: string | undefined) {
        this._condition = value;
    };
    /**
     * Instantiates a new unifiedRolePermission and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the excludedResourceActions property value. Set of tasks that may not be performed on a resource. Not yet supported.
     * @returns a string
     */
    public get excludedResourceActions() {
        return this._excludedResourceActions;
    };
    /**
     * Sets the excludedResourceActions property value. Set of tasks that may not be performed on a resource. Not yet supported.
     * @param value Value to set for the excludedResourceActions property.
     */
    public set excludedResourceActions(value: string[] | undefined) {
        this._excludedResourceActions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowedResourceActions", (o, n) => { (o as unknown as UnifiedRolePermission).allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); }],
            ["condition", (o, n) => { (o as unknown as UnifiedRolePermission).condition = n.getStringValue(); }],
            ["excludedResourceActions", (o, n) => { (o as unknown as UnifiedRolePermission).excludedResourceActions = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        writer.writeStringValue("condition", this.condition);
        writer.writeCollectionOfPrimitiveValues<string>("excludedResourceActions", this.excludedResourceActions);
        writer.writeAdditionalData(this.additionalData);
    };
}
