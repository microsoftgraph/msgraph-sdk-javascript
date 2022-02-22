import {ItemBody, PostType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssuePost implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The published time of the post.  */
    private _createdDateTime?: Date | undefined;
    /** The content of the service issue post.  */
    private _description?: ItemBody | undefined;
    /** The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.  */
    private _postType?: PostType | undefined;
    /**
     * Instantiates a new serviceHealthIssuePost and sets the default values.
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
     * Gets the createdDateTime property value. The published time of the post.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. The content of the service issue post.
     * @returns a itemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the postType property value. The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.
     * @returns a postType
     */
    public get postType() {
        return this._postType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["createdDateTime", (o, n) => { (o as unknown as ServiceHealthIssuePost).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as ServiceHealthIssuePost).description = n.getObjectValue<ItemBody>(ItemBody); }],
            ["postType", (o, n) => { (o as unknown as ServiceHealthIssuePost).postType = n.getEnumValue<PostType>(PostType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<ItemBody>("description", this.description);
        writer.writeEnumValue<PostType>("postType", this.postType);
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
     * Sets the createdDateTime property value. The published time of the post.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. The content of the service issue post.
     * @param value Value to set for the description property.
     */
    public set description(value: ItemBody | undefined) {
        this._description = value;
    };
    /**
     * Sets the postType property value. The post type of the service issue historical post. Possible values are: regular, quick, strategic, unknownFutureValue.
     * @param value Value to set for the postType property.
     */
    public set postType(value: PostType | undefined) {
        this._postType = value;
    };
}
