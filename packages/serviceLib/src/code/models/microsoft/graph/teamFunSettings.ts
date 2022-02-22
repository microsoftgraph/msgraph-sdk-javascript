import {GiphyRatingType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamFunSettings implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** If set to true, enables users to include custom memes.  */
    private _allowCustomMemes?: boolean | undefined;
    /** If set to true, enables Giphy use.  */
    private _allowGiphy?: boolean | undefined;
    /** If set to true, enables users to include stickers and memes.  */
    private _allowStickersAndMemes?: boolean | undefined;
    /** Giphy content rating. Possible values are: moderate, strict.  */
    private _giphyContentRating?: GiphyRatingType | undefined;
    /**
     * Instantiates a new teamFunSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the allowCustomMemes property value. If set to true, enables users to include custom memes.
     * @returns a boolean
     */
    public get allowCustomMemes() {
        return this._allowCustomMemes;
    };
    /**
     * Gets the allowGiphy property value. If set to true, enables Giphy use.
     * @returns a boolean
     */
    public get allowGiphy() {
        return this._allowGiphy;
    };
    /**
     * Gets the allowStickersAndMemes property value. If set to true, enables users to include stickers and memes.
     * @returns a boolean
     */
    public get allowStickersAndMemes() {
        return this._allowStickersAndMemes;
    };
    /**
     * Gets the giphyContentRating property value. Giphy content rating. Possible values are: moderate, strict.
     * @returns a giphyRatingType
     */
    public get giphyContentRating() {
        return this._giphyContentRating;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["allowCustomMemes", (o, n) => { (o as unknown as TeamFunSettings).allowCustomMemes = n.getBooleanValue(); }],
            ["allowGiphy", (o, n) => { (o as unknown as TeamFunSettings).allowGiphy = n.getBooleanValue(); }],
            ["allowStickersAndMemes", (o, n) => { (o as unknown as TeamFunSettings).allowStickersAndMemes = n.getBooleanValue(); }],
            ["giphyContentRating", (o, n) => { (o as unknown as TeamFunSettings).giphyContentRating = n.getEnumValue<GiphyRatingType>(GiphyRatingType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowCustomMemes", this.allowCustomMemes);
        writer.writeBooleanValue("allowGiphy", this.allowGiphy);
        writer.writeBooleanValue("allowStickersAndMemes", this.allowStickersAndMemes);
        writer.writeEnumValue<GiphyRatingType>("giphyContentRating", this.giphyContentRating);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the allowCustomMemes property value. If set to true, enables users to include custom memes.
     * @param value Value to set for the allowCustomMemes property.
     */
    public set allowCustomMemes(value: boolean | undefined) {
        this._allowCustomMemes = value;
    };
    /**
     * Sets the allowGiphy property value. If set to true, enables Giphy use.
     * @param value Value to set for the allowGiphy property.
     */
    public set allowGiphy(value: boolean | undefined) {
        this._allowGiphy = value;
    };
    /**
     * Sets the allowStickersAndMemes property value. If set to true, enables users to include stickers and memes.
     * @param value Value to set for the allowStickersAndMemes property.
     */
    public set allowStickersAndMemes(value: boolean | undefined) {
        this._allowStickersAndMemes = value;
    };
    /**
     * Sets the giphyContentRating property value. Giphy content rating. Possible values are: moderate, strict.
     * @param value Value to set for the giphyContentRating property.
     */
    public set giphyContentRating(value: GiphyRatingType | undefined) {
        this._giphyContentRating = value;
    };
}
