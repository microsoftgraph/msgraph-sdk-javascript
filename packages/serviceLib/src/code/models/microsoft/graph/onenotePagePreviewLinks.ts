import {createExternalLinkFromDiscriminatorValue} from './createExternalLinkFromDiscriminatorValue';
import {ExternalLink} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnenotePagePreviewLinks implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _previewImageUrl?: ExternalLink | undefined;
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
     * Instantiates a new onenotePagePreviewLinks and sets the default values.
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
            ["previewImageUrl", (o, n) => { (o as unknown as OnenotePagePreviewLinks).previewImageUrl = n.getObjectValue<ExternalLink>(createExternalLinkFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the previewImageUrl property value. 
     * @returns a externalLink
     */
    public get previewImageUrl() {
        return this._previewImageUrl;
    };
    /**
     * Sets the previewImageUrl property value. 
     * @param value Value to set for the previewImageUrl property.
     */
    public set previewImageUrl(value: ExternalLink | undefined) {
        this._previewImageUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ExternalLink>("previewImageUrl", this.previewImageUrl);
        writer.writeAdditionalData(this.additionalData);
    };
}
