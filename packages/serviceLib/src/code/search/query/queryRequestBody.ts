import {SearchRequest} from '../../models/microsoft/graph/';
import {createSearchRequestFromDiscriminatorValue} from '../../models/microsoft/graph/createSearchRequestFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the query method.  */
export class QueryRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _requests?: SearchRequest[] | undefined;
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
     * Instantiates a new queryRequestBody and sets the default values.
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
            ["requests", (o, n) => { (o as unknown as QueryRequestBody).requests = n.getCollectionOfObjectValues<SearchRequest>(createSearchRequestFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the requests property value. 
     * @returns a searchRequest
     */
    public get requests() {
        return this._requests;
    };
    /**
     * Sets the requests property value. 
     * @param value Value to set for the requests property.
     */
    public set requests(value: SearchRequest[] | undefined) {
        this._requests = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<SearchRequest>("requests", this.requests);
        writer.writeAdditionalData(this.additionalData);
    };
}
