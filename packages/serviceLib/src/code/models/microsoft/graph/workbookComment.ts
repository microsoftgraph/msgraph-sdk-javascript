import {Entity, WorkbookCommentReply} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookComment extends Entity implements Parsable {
    /** The content of comment.  */
    private _content?: string | undefined;
    /** Indicates the type for the comment.  */
    private _contentType?: string | undefined;
    /** Read-only. Nullable.  */
    private _replies?: WorkbookCommentReply[] | undefined;
    /**
     * Instantiates a new workbookComment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content of comment.
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Gets the contentType property value. Indicates the type for the comment.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the replies property value. Read-only. Nullable.
     * @returns a workbookCommentReply
     */
    public get replies() {
        return this._replies;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["content", (o, n) => { (o as unknown as WorkbookComment).content = n.getStringValue(); }],
            ["contentType", (o, n) => { (o as unknown as WorkbookComment).contentType = n.getStringValue(); }],
            ["replies", (o, n) => { (o as unknown as WorkbookComment).replies = n.getCollectionOfObjectValues<WorkbookCommentReply>(WorkbookCommentReply); }],
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
        writer.writeCollectionOfObjectValues<WorkbookCommentReply>("replies", this.replies);
    };
    /**
     * Sets the content property value. The content of comment.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Sets the contentType property value. Indicates the type for the comment.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the replies property value. Read-only. Nullable.
     * @param value Value to set for the replies property.
     */
    public set replies(value: WorkbookCommentReply[] | undefined) {
        this._replies = value;
    };
}
