import {ItemReference} from '../../../../../models/microsoft/graph/';
import {createItemReferenceFromDiscriminatorValue} from '../../../../../models/microsoft/graph/createItemReferenceFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyToDefaultContentLocation method.  */
export class CopyToDefaultContentLocationRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _destinationFileName?: string | undefined;
    private _sourceFile?: ItemReference | undefined;
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
     * Instantiates a new copyToDefaultContentLocationRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the destinationFileName property value. 
     * @returns a string
     */
    public get destinationFileName() {
        return this._destinationFileName;
    };
    /**
     * Sets the destinationFileName property value. 
     * @param value Value to set for the destinationFileName property.
     */
    public set destinationFileName(value: string | undefined) {
        this._destinationFileName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["destinationFileName", (o, n) => { (o as unknown as CopyToDefaultContentLocationRequestBody).destinationFileName = n.getStringValue(); }],
            ["sourceFile", (o, n) => { (o as unknown as CopyToDefaultContentLocationRequestBody).sourceFile = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("destinationFileName", this.destinationFileName);
        writer.writeObjectValue<ItemReference>("sourceFile", this.sourceFile);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceFile property value. 
     * @returns a itemReference
     */
    public get sourceFile() {
        return this._sourceFile;
    };
    /**
     * Sets the sourceFile property value. 
     * @param value Value to set for the sourceFile property.
     */
    public set sourceFile(value: ItemReference | undefined) {
        this._sourceFile = value;
    };
}
