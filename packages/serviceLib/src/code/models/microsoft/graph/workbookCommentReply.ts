import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookCommentReply extends Entity implements Parsable {
    /** The content of a comment reply.  */
    private _content?: string | undefined;
    /** Indicates the type for the comment reply.  */
    private _contentType?: string | undefined;
    /**
     * Instantiates a new workbookCommentReply and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content of a comment reply.
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content of a comment reply.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the contentType property value. Indicates the type for the comment reply.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. Indicates the type for the comment reply.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["content", (o, n) => { (o as unknown as WorkbookCommentReply).content = n.getStringValue(); }],
            ["contentType", (o, n) => { (o as unknown as WorkbookCommentReply).contentType = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentType", this.contentType);
    };
}
