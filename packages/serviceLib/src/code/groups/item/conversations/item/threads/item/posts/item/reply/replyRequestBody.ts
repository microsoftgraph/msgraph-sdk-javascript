import {Post} from '../../../../../../../../../models/microsoft/graph/';
import {createPostFromDiscriminatorValue} from '../../../../../../../../../models/microsoft/graph/createPostFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method.  */
export class ReplyRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _post?: Post | undefined;
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
     * Instantiates a new replyRequestBody and sets the default values.
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
            ["post", (o, n) => { (o as unknown as ReplyRequestBody).post = n.getObjectValue<Post>(createPostFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the post property value. 
     * @returns a post
     */
    public get post() {
        return this._post;
    };
    /**
     * Sets the post property value. 
     * @param value Value to set for the Post property.
     */
    public set post(value: Post | undefined) {
        this._post = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Post>("post", this.post);
        writer.writeAdditionalData(this.additionalData);
    };
}
