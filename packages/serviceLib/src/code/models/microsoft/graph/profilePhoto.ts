import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProfilePhoto extends Entity implements Parsable {
    /** The height of the photo. Read-only.  */
    private _height?: number | undefined;
    /** The width of the photo. Read-only.  */
    private _width?: number | undefined;
    /**
     * Instantiates a new profilePhoto and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the height property value. The height of the photo. Read-only.
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Gets the width property value. The width of the photo. Read-only.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["height", (o, n) => { (o as unknown as ProfilePhoto).height = n.getNumberValue(); }],
            ["width", (o, n) => { (o as unknown as ProfilePhoto).width = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("height", this.height);
        writer.writeNumberValue("width", this.width);
    };
    /**
     * Sets the height property value. The height of the photo. Read-only.
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Sets the width property value. The width of the photo. Read-only.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
