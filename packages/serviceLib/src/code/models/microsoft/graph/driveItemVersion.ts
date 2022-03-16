import {BaseItemVersion} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemVersion extends BaseItemVersion implements Parsable {
    /** The content stream for this version of the item.  */
    private _content?: string | undefined;
    /** Indicates the size of the content stream for this version of the item.  */
    private _size?: number | undefined;
    /**
     * Instantiates a new driveItemVersion and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The content stream for this version of the item.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content stream for this version of the item.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["content", (o, n) => { (o as unknown as DriveItemVersion).content = n.getStringValue(); }],
            ["size", (o, n) => { (o as unknown as DriveItemVersion).size = n.getNumberValue(); }],
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
        writer.writeNumberValue("size", this.size);
    };
    /**
     * Gets the size property value. Indicates the size of the content stream for this version of the item.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Indicates the size of the content stream for this version of the item.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
}
