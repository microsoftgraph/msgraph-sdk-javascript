import {Entity, ResourceReference, ResourceVisualization, UsageDetails} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UsedInsight extends Entity implements Parsable {
    /** Information about when the item was last viewed or modified by the user. Read only.  */
    private _lastUsed?: UsageDetails | undefined;
    /** Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.  */
    private _resource?: Entity | undefined;
    /** Reference properties of the used document, such as the url and type of the document. Read-only  */
    private _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only  */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /**
     * Instantiates a new usedInsight and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the lastUsed property value. Information about when the item was last viewed or modified by the user. Read only.
     * @returns a usageDetails
     */
    public get lastUsed() {
        return this._lastUsed;
    };
    /**
     * Gets the resource property value. Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Gets the resourceReference property value. Reference properties of the used document, such as the url and type of the document. Read-only
     * @returns a resourceReference
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @returns a resourceVisualization
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["lastUsed", (o, n) => { (o as unknown as UsedInsight).lastUsed = n.getObjectValue<UsageDetails>(UsageDetails); }],
            ["resource", (o, n) => { (o as unknown as UsedInsight).resource = n.getObjectValue<Entity>(Entity); }],
            ["resourceReference", (o, n) => { (o as unknown as UsedInsight).resourceReference = n.getObjectValue<ResourceReference>(ResourceReference); }],
            ["resourceVisualization", (o, n) => { (o as unknown as UsedInsight).resourceVisualization = n.getObjectValue<ResourceVisualization>(ResourceVisualization); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UsageDetails>("lastUsed", this.lastUsed);
        writer.writeObjectValue<Entity>("resource", this.resource);
        writer.writeObjectValue<ResourceReference>("resourceReference", this.resourceReference);
        writer.writeObjectValue<ResourceVisualization>("resourceVisualization", this.resourceVisualization);
    };
    /**
     * Sets the lastUsed property value. Information about when the item was last viewed or modified by the user. Read only.
     * @param value Value to set for the lastUsed property.
     */
    public set lastUsed(value: UsageDetails | undefined) {
        this._lastUsed = value;
    };
    /**
     * Sets the resource property value. Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the used document, such as the url and type of the document. Read-only
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        this._resourceReference = value;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience. Read-only
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        this._resourceVisualization = value;
    };
}
