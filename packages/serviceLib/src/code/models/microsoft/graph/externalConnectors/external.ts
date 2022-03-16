import {createExternalConnectionFromDiscriminatorValue} from './createExternalConnectionFromDiscriminatorValue';
import {ExternalConnection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class External implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _connections?: ExternalConnection[] | undefined;
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
     * Gets the connections property value. 
     * @returns a externalConnection
     */
    public get connections() {
        return this._connections;
    };
    /**
     * Sets the connections property value. 
     * @param value Value to set for the connections property.
     */
    public set connections(value: ExternalConnection[] | undefined) {
        this._connections = value;
    };
    /**
     * Instantiates a new External and sets the default values.
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
            ["connections", (o, n) => { (o as unknown as External).connections = n.getCollectionOfObjectValues<ExternalConnection>(createExternalConnectionFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ExternalConnection>("connections", this.connections);
        writer.writeAdditionalData(this.additionalData);
    };
}
