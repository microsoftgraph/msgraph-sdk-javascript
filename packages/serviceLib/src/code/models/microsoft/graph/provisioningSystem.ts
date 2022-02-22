import {DetailsInfo, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningSystem extends Identity implements Parsable {
    /** Details of the system.  */
    private _details?: DetailsInfo | undefined;
    /**
     * Instantiates a new provisioningSystem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the details property value. Details of the system.
     * @returns a detailsInfo
     */
    public get details() {
        return this._details;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["details", (o, n) => { (o as unknown as ProvisioningSystem).details = n.getObjectValue<DetailsInfo>(DetailsInfo); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DetailsInfo>("details", this.details);
    };
    /**
     * Sets the details property value. Details of the system.
     * @param value Value to set for the details property.
     */
    public set details(value: DetailsInfo | undefined) {
        this._details = value;
    };
}
