import {Entity, ResourceReference, ResourceVisualization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Trending extends Entity implements Parsable {
    private _lastModifiedDateTime?: Date | undefined;
    /** Used for navigating to the trending document.  */
    private _resource?: Entity | undefined;
    /** Reference properties of the trending document, such as the url and type of the document.  */
    private _resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience.  */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /** Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.  */
    private _weight?: number | undefined;
    /**
     * Instantiates a new trending and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the lastModifiedDateTime property value. 
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the resource property value. Used for navigating to the trending document.
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Gets the resourceReference property value. Reference properties of the trending document, such as the url and type of the document.
     * @returns a resourceReference
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Gets the resourceVisualization property value. Properties that you can use to visualize the document in your experience.
     * @returns a resourceVisualization
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Gets the weight property value. Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
     * @returns a double
     */
    public get weight() {
        return this._weight;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["lastModifiedDateTime", (o, n) => { (o as unknown as Trending).lastModifiedDateTime = n.getDateValue(); }],
            ["resource", (o, n) => { (o as unknown as Trending).resource = n.getObjectValue<Entity>(Entity); }],
            ["resourceReference", (o, n) => { (o as unknown as Trending).resourceReference = n.getObjectValue<ResourceReference>(ResourceReference); }],
            ["resourceVisualization", (o, n) => { (o as unknown as Trending).resourceVisualization = n.getObjectValue<ResourceVisualization>(ResourceVisualization); }],
            ["weight", (o, n) => { (o as unknown as Trending).weight = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<Entity>("resource", this.resource);
        writer.writeObjectValue<ResourceReference>("resourceReference", this.resourceReference);
        writer.writeObjectValue<ResourceVisualization>("resourceVisualization", this.resourceVisualization);
        writer.writeNumberValue("weight", this.weight);
    };
    /**
     * Sets the lastModifiedDateTime property value. 
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the resource property value. Used for navigating to the trending document.
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Sets the resourceReference property value. Reference properties of the trending document, such as the url and type of the document.
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        this._resourceReference = value;
    };
    /**
     * Sets the resourceVisualization property value. Properties that you can use to visualize the document in your experience.
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        this._resourceVisualization = value;
    };
    /**
     * Sets the weight property value. Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        this._weight = value;
    };
}
