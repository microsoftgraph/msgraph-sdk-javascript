import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceOperation extends Entity implements Parsable {
    /** Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.  */
    private _actionName?: string | undefined;
    /** Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.  */
    private _description?: string | undefined;
    /** Name of the Resource this operation is performed on.  */
    private _resourceName?: string | undefined;
    /**
     * Gets the actionName property value. Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
     * @returns a string
     */
    public get actionName() {
        return this._actionName;
    };
    /**
     * Sets the actionName property value. Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
     * @param value Value to set for the actionName property.
     */
    public set actionName(value: string | undefined) {
        this._actionName = value;
    };
    /**
     * Instantiates a new resourceOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
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
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["actionName", (o, n) => { (o as unknown as ResourceOperation).actionName = n.getStringValue(); }],
            ["description", (o, n) => { (o as unknown as ResourceOperation).description = n.getStringValue(); }],
            ["resourceName", (o, n) => { (o as unknown as ResourceOperation).resourceName = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the resourceName property value. Name of the Resource this operation is performed on.
     * @returns a string
     */
    public get resourceName() {
        return this._resourceName;
    };
    /**
     * Sets the resourceName property value. Name of the Resource this operation is performed on.
     * @param value Value to set for the resourceName property.
     */
    public set resourceName(value: string | undefined) {
        this._resourceName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("actionName", this.actionName);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("resourceName", this.resourceName);
    };
}
