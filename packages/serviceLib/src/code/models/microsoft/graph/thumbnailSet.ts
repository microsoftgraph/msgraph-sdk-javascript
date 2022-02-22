import {Entity, Thumbnail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThumbnailSet extends Entity implements Parsable {
    /** A 1920x1920 scaled thumbnail.  */
    private _large?: Thumbnail | undefined;
    /** A 176x176 scaled thumbnail.  */
    private _medium?: Thumbnail | undefined;
    /** A 48x48 cropped thumbnail.  */
    private _small?: Thumbnail | undefined;
    /** A custom thumbnail image or the original image used to generate other thumbnails.  */
    private _source?: Thumbnail | undefined;
    /**
     * Instantiates a new thumbnailSet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the large property value. A 1920x1920 scaled thumbnail.
     * @returns a thumbnail
     */
    public get large() {
        return this._large;
    };
    /**
     * Gets the medium property value. A 176x176 scaled thumbnail.
     * @returns a thumbnail
     */
    public get medium() {
        return this._medium;
    };
    /**
     * Gets the small property value. A 48x48 cropped thumbnail.
     * @returns a thumbnail
     */
    public get small() {
        return this._small;
    };
    /**
     * Gets the source property value. A custom thumbnail image or the original image used to generate other thumbnails.
     * @returns a thumbnail
     */
    public get source() {
        return this._source;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["large", (o, n) => { (o as unknown as ThumbnailSet).large = n.getObjectValue<Thumbnail>(Thumbnail); }],
            ["medium", (o, n) => { (o as unknown as ThumbnailSet).medium = n.getObjectValue<Thumbnail>(Thumbnail); }],
            ["small", (o, n) => { (o as unknown as ThumbnailSet).small = n.getObjectValue<Thumbnail>(Thumbnail); }],
            ["source", (o, n) => { (o as unknown as ThumbnailSet).source = n.getObjectValue<Thumbnail>(Thumbnail); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Thumbnail>("large", this.large);
        writer.writeObjectValue<Thumbnail>("medium", this.medium);
        writer.writeObjectValue<Thumbnail>("small", this.small);
        writer.writeObjectValue<Thumbnail>("source", this.source);
    };
    /**
     * Sets the large property value. A 1920x1920 scaled thumbnail.
     * @param value Value to set for the large property.
     */
    public set large(value: Thumbnail | undefined) {
        this._large = value;
    };
    /**
     * Sets the medium property value. A 176x176 scaled thumbnail.
     * @param value Value to set for the medium property.
     */
    public set medium(value: Thumbnail | undefined) {
        this._medium = value;
    };
    /**
     * Sets the small property value. A 48x48 cropped thumbnail.
     * @param value Value to set for the small property.
     */
    public set small(value: Thumbnail | undefined) {
        this._small = value;
    };
    /**
     * Sets the source property value. A custom thumbnail image or the original image used to generate other thumbnails.
     * @param value Value to set for the source property.
     */
    public set source(value: Thumbnail | undefined) {
        this._source = value;
    };
}
