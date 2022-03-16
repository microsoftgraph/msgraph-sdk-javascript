import {DriveItemUploadableProperties} from '../../../models/microsoft/graph/';
import {createDriveItemUploadablePropertiesFromDiscriminatorValue} from '../../../models/microsoft/graph/createDriveItemUploadablePropertiesFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createUploadSession method.  */
export class CreateUploadSessionRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _item?: DriveItemUploadableProperties | undefined;
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
     * Instantiates a new createUploadSessionRequestBody and sets the default values.
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
            ["item", (o, n) => { (o as unknown as CreateUploadSessionRequestBody).item = n.getObjectValue<DriveItemUploadableProperties>(createDriveItemUploadablePropertiesFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the item property value. 
     * @returns a driveItemUploadableProperties
     */
    public get item() {
        return this._item;
    };
    /**
     * Sets the item property value. 
     * @param value Value to set for the item property.
     */
    public set item(value: DriveItemUploadableProperties | undefined) {
        this._item = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DriveItemUploadableProperties>("item", this.item);
        writer.writeAdditionalData(this.additionalData);
    };
}
