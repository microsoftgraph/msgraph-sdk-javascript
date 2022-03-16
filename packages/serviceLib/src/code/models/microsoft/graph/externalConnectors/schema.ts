import {Entity} from '../';
import {createPropertyFromDiscriminatorValue} from './createPropertyFromDiscriminatorValue';
import {Property} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Schema extends Entity implements Parsable {
    /** Must be set to microsoft.graph.externalConnector.externalItem. Required.  */
    private _baseType?: string | undefined;
    /** The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128.  */
    private _properties?: Property[] | undefined;
    /**
     * Gets the baseType property value. Must be set to microsoft.graph.externalConnector.externalItem. Required.
     * @returns a string
     */
    public get baseType() {
        return this._baseType;
    };
    /**
     * Sets the baseType property value. Must be set to microsoft.graph.externalConnector.externalItem. Required.
     * @param value Value to set for the baseType property.
     */
    public set baseType(value: string | undefined) {
        this._baseType = value;
    };
    /**
     * Instantiates a new schema and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["baseType", (o, n) => { (o as unknown as Schema).baseType = n.getStringValue(); }],
            ["properties", (o, n) => { (o as unknown as Schema).properties = n.getCollectionOfObjectValues<Property>(createPropertyFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the properties property value. The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128.
     * @returns a property
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. The properties defined for the items in the connection. The minimum number of properties is one, the maximum is 128.
     * @param value Value to set for the properties property.
     */
    public set properties(value: Property[] | undefined) {
        this._properties = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("baseType", this.baseType);
        writer.writeCollectionOfObjectValues<Property>("properties", this.properties);
    };
}
