import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceAction implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Allowed Actions  */
    private _allowedResourceActions?: string[] | undefined;
    /** Not Allowed Actions.  */
    private _notAllowedResourceActions?: string[] | undefined;
    /**
     * Instantiates a new resourceAction and sets the default values.
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
     * Gets the allowedResourceActions property value. Allowed Actions
     * @returns a string
     */
    public get allowedResourceActions() {
        return this._allowedResourceActions;
    };
    /**
     * Gets the notAllowedResourceActions property value. Not Allowed Actions.
     * @returns a string
     */
    public get notAllowedResourceActions() {
        return this._notAllowedResourceActions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowedResourceActions", (o, n) => { (o as unknown as ResourceAction).allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); }],
            ["notAllowedResourceActions", (o, n) => { (o as unknown as ResourceAction).notAllowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        writer.writeCollectionOfPrimitiveValues<string>("notAllowedResourceActions", this.notAllowedResourceActions);
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
     * Sets the allowedResourceActions property value. Allowed Actions
     * @param value Value to set for the allowedResourceActions property.
     */
    public set allowedResourceActions(value: string[] | undefined) {
        this._allowedResourceActions = value;
    };
    /**
     * Sets the notAllowedResourceActions property value. Not Allowed Actions.
     * @param value Value to set for the notAllowedResourceActions property.
     */
    public set notAllowedResourceActions(value: string[] | undefined) {
        this._notAllowedResourceActions = value;
    };
}
