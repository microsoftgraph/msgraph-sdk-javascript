import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryObject extends Entity implements Parsable {
    private _deletedDateTime?: Date | undefined;
    /**
     * Instantiates a new directoryObject and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deletedDateTime property value. 
     * @returns a Date
     */
    public get deletedDateTime() {
        return this._deletedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["deletedDateTime", (o, n) => { (o as unknown as DirectoryObject).deletedDateTime = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
    };
    /**
     * Sets the deletedDateTime property value. 
     * @param value Value to set for the deletedDateTime property.
     */
    public set deletedDateTime(value: Date | undefined) {
        this._deletedDateTime = value;
    };
}
