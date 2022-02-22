import {Entity, PrintServiceEndpoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintService extends Entity implements Parsable {
    /** Endpoints that can be used to access the service. Read-only. Nullable.  */
    private _endpoints?: PrintServiceEndpoint[] | undefined;
    /**
     * Instantiates a new printService and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endpoints property value. Endpoints that can be used to access the service. Read-only. Nullable.
     * @returns a printServiceEndpoint
     */
    public get endpoints() {
        return this._endpoints;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["endpoints", (o, n) => { (o as unknown as PrintService).endpoints = n.getCollectionOfObjectValues<PrintServiceEndpoint>(PrintServiceEndpoint); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PrintServiceEndpoint>("endpoints", this.endpoints);
    };
    /**
     * Sets the endpoints property value. Endpoints that can be used to access the service. Read-only. Nullable.
     * @param value Value to set for the endpoints property.
     */
    public set endpoints(value: PrintServiceEndpoint[] | undefined) {
        this._endpoints = value;
    };
}
