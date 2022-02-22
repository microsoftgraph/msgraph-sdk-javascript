import {IntegerRange, PrintColorMode, PrintDuplexMode, PrinterFeedOrientation, PrintFinishing, PrintMultipageLayout, PrintOrientation, PrintQuality, PrintScaling} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCapabilities implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** A list of supported bottom margins(in microns) for the printer.  */
    private _bottomMargins?: number[] | undefined;
    /** True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.  */
    private _collation?: boolean | undefined;
    /** The color modes supported by the printer. Valid values are described in the following table.  */
    private _colorModes?: PrintColorMode[] | undefined;
    /** A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types.  */
    private _contentTypes?: string[] | undefined;
    /** The range of copies per job supported by the printer.  */
    private _copiesPerJob?: IntegerRange | undefined;
    /** The list of print resolutions in DPI that are supported by the printer.  */
    private _dpis?: number[] | undefined;
    /** The list of duplex modes that are supported by the printer. Valid values are described in the following table.  */
    private _duplexModes?: PrintDuplexMode[] | undefined;
    /** The list of feed orientations that are supported by the printer.  */
    private _feedOrientations?: PrinterFeedOrientation[] | undefined;
    /** Finishing processes the printer supports for a printed document.  */
    private _finishings?: PrintFinishing[] | undefined;
    /** Supported input bins for the printer.  */
    private _inputBins?: string[] | undefined;
    /** True if color printing is supported by the printer; false otherwise. Read-only.  */
    private _isColorPrintingSupported?: boolean | undefined;
    /** True if the printer supports printing by page ranges; false otherwise.  */
    private _isPageRangeSupported?: boolean | undefined;
    /** A list of supported left margins(in microns) for the printer.  */
    private _leftMargins?: number[] | undefined;
    /** The media (i.e., paper) colors supported by the printer.  */
    private _mediaColors?: string[] | undefined;
    /** The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table.  */
    private _mediaSizes?: string[] | undefined;
    /** The media types supported by the printer.  */
    private _mediaTypes?: string[] | undefined;
    /** The presentation directions supported by the printer. Supported values are described in the following table.  */
    private _multipageLayouts?: PrintMultipageLayout[] | undefined;
    /** The print orientations supported by the printer. Valid values are described in the following table.  */
    private _orientations?: PrintOrientation[] | undefined;
    /** The printer's supported output bins (trays).  */
    private _outputBins?: string[] | undefined;
    /** Supported number of Input Pages to impose upon a single Impression.  */
    private _pagesPerSheet?: number[] | undefined;
    /** The print qualities supported by the printer.  */
    private _qualities?: PrintQuality[] | undefined;
    /** A list of supported right margins(in microns) for the printer.  */
    private _rightMargins?: number[] | undefined;
    /** Supported print scalings.  */
    private _scalings?: PrintScaling[] | undefined;
    /** True if the printer supports scaling PDF pages to match the print media size; false otherwise.  */
    private _supportsFitPdfToPage?: boolean | undefined;
    /** A list of supported top margins(in microns) for the printer.  */
    private _topMargins?: number[] | undefined;
    /**
     * Instantiates a new printerCapabilities and sets the default values.
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
     * Gets the bottomMargins property value. A list of supported bottom margins(in microns) for the printer.
     * @returns a integer
     */
    public get bottomMargins() {
        return this._bottomMargins;
    };
    /**
     * Gets the collation property value. True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.
     * @returns a boolean
     */
    public get collation() {
        return this._collation;
    };
    /**
     * Gets the colorModes property value. The color modes supported by the printer. Valid values are described in the following table.
     * @returns a printColorMode
     */
    public get colorModes() {
        return this._colorModes;
    };
    /**
     * Gets the contentTypes property value. A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types.
     * @returns a string
     */
    public get contentTypes() {
        return this._contentTypes;
    };
    /**
     * Gets the copiesPerJob property value. The range of copies per job supported by the printer.
     * @returns a integerRange
     */
    public get copiesPerJob() {
        return this._copiesPerJob;
    };
    /**
     * Gets the dpis property value. The list of print resolutions in DPI that are supported by the printer.
     * @returns a integer
     */
    public get dpis() {
        return this._dpis;
    };
    /**
     * Gets the duplexModes property value. The list of duplex modes that are supported by the printer. Valid values are described in the following table.
     * @returns a printDuplexMode
     */
    public get duplexModes() {
        return this._duplexModes;
    };
    /**
     * Gets the feedOrientations property value. The list of feed orientations that are supported by the printer.
     * @returns a printerFeedOrientation
     */
    public get feedOrientations() {
        return this._feedOrientations;
    };
    /**
     * Gets the finishings property value. Finishing processes the printer supports for a printed document.
     * @returns a printFinishing
     */
    public get finishings() {
        return this._finishings;
    };
    /**
     * Gets the inputBins property value. Supported input bins for the printer.
     * @returns a string
     */
    public get inputBins() {
        return this._inputBins;
    };
    /**
     * Gets the isColorPrintingSupported property value. True if color printing is supported by the printer; false otherwise. Read-only.
     * @returns a boolean
     */
    public get isColorPrintingSupported() {
        return this._isColorPrintingSupported;
    };
    /**
     * Gets the isPageRangeSupported property value. True if the printer supports printing by page ranges; false otherwise.
     * @returns a boolean
     */
    public get isPageRangeSupported() {
        return this._isPageRangeSupported;
    };
    /**
     * Gets the leftMargins property value. A list of supported left margins(in microns) for the printer.
     * @returns a integer
     */
    public get leftMargins() {
        return this._leftMargins;
    };
    /**
     * Gets the mediaColors property value. The media (i.e., paper) colors supported by the printer.
     * @returns a string
     */
    public get mediaColors() {
        return this._mediaColors;
    };
    /**
     * Gets the mediaSizes property value. The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table.
     * @returns a string
     */
    public get mediaSizes() {
        return this._mediaSizes;
    };
    /**
     * Gets the mediaTypes property value. The media types supported by the printer.
     * @returns a string
     */
    public get mediaTypes() {
        return this._mediaTypes;
    };
    /**
     * Gets the multipageLayouts property value. The presentation directions supported by the printer. Supported values are described in the following table.
     * @returns a printMultipageLayout
     */
    public get multipageLayouts() {
        return this._multipageLayouts;
    };
    /**
     * Gets the orientations property value. The print orientations supported by the printer. Valid values are described in the following table.
     * @returns a printOrientation
     */
    public get orientations() {
        return this._orientations;
    };
    /**
     * Gets the outputBins property value. The printer's supported output bins (trays).
     * @returns a string
     */
    public get outputBins() {
        return this._outputBins;
    };
    /**
     * Gets the pagesPerSheet property value. Supported number of Input Pages to impose upon a single Impression.
     * @returns a integer
     */
    public get pagesPerSheet() {
        return this._pagesPerSheet;
    };
    /**
     * Gets the qualities property value. The print qualities supported by the printer.
     * @returns a printQuality
     */
    public get qualities() {
        return this._qualities;
    };
    /**
     * Gets the rightMargins property value. A list of supported right margins(in microns) for the printer.
     * @returns a integer
     */
    public get rightMargins() {
        return this._rightMargins;
    };
    /**
     * Gets the scalings property value. Supported print scalings.
     * @returns a printScaling
     */
    public get scalings() {
        return this._scalings;
    };
    /**
     * Gets the supportsFitPdfToPage property value. True if the printer supports scaling PDF pages to match the print media size; false otherwise.
     * @returns a boolean
     */
    public get supportsFitPdfToPage() {
        return this._supportsFitPdfToPage;
    };
    /**
     * Gets the topMargins property value. A list of supported top margins(in microns) for the printer.
     * @returns a integer
     */
    public get topMargins() {
        return this._topMargins;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bottomMargins", (o, n) => { (o as unknown as PrinterCapabilities).bottomMargins = n.getCollectionOfPrimitiveValues<number>(); }],
            ["collation", (o, n) => { (o as unknown as PrinterCapabilities).collation = n.getBooleanValue(); }],
            ["colorModes", (o, n) => { (o as unknown as PrinterCapabilities).colorModes = n.getEnumValues<PrintColorMode>(PrintColorMode); }],
            ["contentTypes", (o, n) => { (o as unknown as PrinterCapabilities).contentTypes = n.getCollectionOfPrimitiveValues<string>(); }],
            ["copiesPerJob", (o, n) => { (o as unknown as PrinterCapabilities).copiesPerJob = n.getObjectValue<IntegerRange>(IntegerRange); }],
            ["dpis", (o, n) => { (o as unknown as PrinterCapabilities).dpis = n.getCollectionOfPrimitiveValues<number>(); }],
            ["duplexModes", (o, n) => { (o as unknown as PrinterCapabilities).duplexModes = n.getEnumValues<PrintDuplexMode>(PrintDuplexMode); }],
            ["feedOrientations", (o, n) => { (o as unknown as PrinterCapabilities).feedOrientations = n.getEnumValues<PrinterFeedOrientation>(PrinterFeedOrientation); }],
            ["finishings", (o, n) => { (o as unknown as PrinterCapabilities).finishings = n.getEnumValues<PrintFinishing>(PrintFinishing); }],
            ["inputBins", (o, n) => { (o as unknown as PrinterCapabilities).inputBins = n.getCollectionOfPrimitiveValues<string>(); }],
            ["isColorPrintingSupported", (o, n) => { (o as unknown as PrinterCapabilities).isColorPrintingSupported = n.getBooleanValue(); }],
            ["isPageRangeSupported", (o, n) => { (o as unknown as PrinterCapabilities).isPageRangeSupported = n.getBooleanValue(); }],
            ["leftMargins", (o, n) => { (o as unknown as PrinterCapabilities).leftMargins = n.getCollectionOfPrimitiveValues<number>(); }],
            ["mediaColors", (o, n) => { (o as unknown as PrinterCapabilities).mediaColors = n.getCollectionOfPrimitiveValues<string>(); }],
            ["mediaSizes", (o, n) => { (o as unknown as PrinterCapabilities).mediaSizes = n.getCollectionOfPrimitiveValues<string>(); }],
            ["mediaTypes", (o, n) => { (o as unknown as PrinterCapabilities).mediaTypes = n.getCollectionOfPrimitiveValues<string>(); }],
            ["multipageLayouts", (o, n) => { (o as unknown as PrinterCapabilities).multipageLayouts = n.getEnumValues<PrintMultipageLayout>(PrintMultipageLayout); }],
            ["orientations", (o, n) => { (o as unknown as PrinterCapabilities).orientations = n.getEnumValues<PrintOrientation>(PrintOrientation); }],
            ["outputBins", (o, n) => { (o as unknown as PrinterCapabilities).outputBins = n.getCollectionOfPrimitiveValues<string>(); }],
            ["pagesPerSheet", (o, n) => { (o as unknown as PrinterCapabilities).pagesPerSheet = n.getCollectionOfPrimitiveValues<number>(); }],
            ["qualities", (o, n) => { (o as unknown as PrinterCapabilities).qualities = n.getEnumValues<PrintQuality>(PrintQuality); }],
            ["rightMargins", (o, n) => { (o as unknown as PrinterCapabilities).rightMargins = n.getCollectionOfPrimitiveValues<number>(); }],
            ["scalings", (o, n) => { (o as unknown as PrinterCapabilities).scalings = n.getEnumValues<PrintScaling>(PrintScaling); }],
            ["supportsFitPdfToPage", (o, n) => { (o as unknown as PrinterCapabilities).supportsFitPdfToPage = n.getBooleanValue(); }],
            ["topMargins", (o, n) => { (o as unknown as PrinterCapabilities).topMargins = n.getCollectionOfPrimitiveValues<number>(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<number>("bottomMargins", this.bottomMargins);
        writer.writeBooleanValue("collation", this.collation);
        this.colorModes && writer.writeEnumValue<PrintColorMode>("colorModes", ...this.colorModes);
        writer.writeCollectionOfPrimitiveValues<string>("contentTypes", this.contentTypes);
        writer.writeObjectValue<IntegerRange>("copiesPerJob", this.copiesPerJob);
        writer.writeCollectionOfPrimitiveValues<number>("dpis", this.dpis);
        this.duplexModes && writer.writeEnumValue<PrintDuplexMode>("duplexModes", ...this.duplexModes);
        this.feedOrientations && writer.writeEnumValue<PrinterFeedOrientation>("feedOrientations", ...this.feedOrientations);
        this.finishings && writer.writeEnumValue<PrintFinishing>("finishings", ...this.finishings);
        writer.writeCollectionOfPrimitiveValues<string>("inputBins", this.inputBins);
        writer.writeBooleanValue("isColorPrintingSupported", this.isColorPrintingSupported);
        writer.writeBooleanValue("isPageRangeSupported", this.isPageRangeSupported);
        writer.writeCollectionOfPrimitiveValues<number>("leftMargins", this.leftMargins);
        writer.writeCollectionOfPrimitiveValues<string>("mediaColors", this.mediaColors);
        writer.writeCollectionOfPrimitiveValues<string>("mediaSizes", this.mediaSizes);
        writer.writeCollectionOfPrimitiveValues<string>("mediaTypes", this.mediaTypes);
        this.multipageLayouts && writer.writeEnumValue<PrintMultipageLayout>("multipageLayouts", ...this.multipageLayouts);
        this.orientations && writer.writeEnumValue<PrintOrientation>("orientations", ...this.orientations);
        writer.writeCollectionOfPrimitiveValues<string>("outputBins", this.outputBins);
        writer.writeCollectionOfPrimitiveValues<number>("pagesPerSheet", this.pagesPerSheet);
        this.qualities && writer.writeEnumValue<PrintQuality>("qualities", ...this.qualities);
        writer.writeCollectionOfPrimitiveValues<number>("rightMargins", this.rightMargins);
        this.scalings && writer.writeEnumValue<PrintScaling>("scalings", ...this.scalings);
        writer.writeBooleanValue("supportsFitPdfToPage", this.supportsFitPdfToPage);
        writer.writeCollectionOfPrimitiveValues<number>("topMargins", this.topMargins);
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
     * Sets the bottomMargins property value. A list of supported bottom margins(in microns) for the printer.
     * @param value Value to set for the bottomMargins property.
     */
    public set bottomMargins(value: number[] | undefined) {
        this._bottomMargins = value;
    };
    /**
     * Sets the collation property value. True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.
     * @param value Value to set for the collation property.
     */
    public set collation(value: boolean | undefined) {
        this._collation = value;
    };
    /**
     * Sets the colorModes property value. The color modes supported by the printer. Valid values are described in the following table.
     * @param value Value to set for the colorModes property.
     */
    public set colorModes(value: PrintColorMode[] | undefined) {
        this._colorModes = value;
    };
    /**
     * Sets the contentTypes property value. A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print service supports printing all of these MIME types.
     * @param value Value to set for the contentTypes property.
     */
    public set contentTypes(value: string[] | undefined) {
        this._contentTypes = value;
    };
    /**
     * Sets the copiesPerJob property value. The range of copies per job supported by the printer.
     * @param value Value to set for the copiesPerJob property.
     */
    public set copiesPerJob(value: IntegerRange | undefined) {
        this._copiesPerJob = value;
    };
    /**
     * Sets the dpis property value. The list of print resolutions in DPI that are supported by the printer.
     * @param value Value to set for the dpis property.
     */
    public set dpis(value: number[] | undefined) {
        this._dpis = value;
    };
    /**
     * Sets the duplexModes property value. The list of duplex modes that are supported by the printer. Valid values are described in the following table.
     * @param value Value to set for the duplexModes property.
     */
    public set duplexModes(value: PrintDuplexMode[] | undefined) {
        this._duplexModes = value;
    };
    /**
     * Sets the feedOrientations property value. The list of feed orientations that are supported by the printer.
     * @param value Value to set for the feedOrientations property.
     */
    public set feedOrientations(value: PrinterFeedOrientation[] | undefined) {
        this._feedOrientations = value;
    };
    /**
     * Sets the finishings property value. Finishing processes the printer supports for a printed document.
     * @param value Value to set for the finishings property.
     */
    public set finishings(value: PrintFinishing[] | undefined) {
        this._finishings = value;
    };
    /**
     * Sets the inputBins property value. Supported input bins for the printer.
     * @param value Value to set for the inputBins property.
     */
    public set inputBins(value: string[] | undefined) {
        this._inputBins = value;
    };
    /**
     * Sets the isColorPrintingSupported property value. True if color printing is supported by the printer; false otherwise. Read-only.
     * @param value Value to set for the isColorPrintingSupported property.
     */
    public set isColorPrintingSupported(value: boolean | undefined) {
        this._isColorPrintingSupported = value;
    };
    /**
     * Sets the isPageRangeSupported property value. True if the printer supports printing by page ranges; false otherwise.
     * @param value Value to set for the isPageRangeSupported property.
     */
    public set isPageRangeSupported(value: boolean | undefined) {
        this._isPageRangeSupported = value;
    };
    /**
     * Sets the leftMargins property value. A list of supported left margins(in microns) for the printer.
     * @param value Value to set for the leftMargins property.
     */
    public set leftMargins(value: number[] | undefined) {
        this._leftMargins = value;
    };
    /**
     * Sets the mediaColors property value. The media (i.e., paper) colors supported by the printer.
     * @param value Value to set for the mediaColors property.
     */
    public set mediaColors(value: string[] | undefined) {
        this._mediaColors = value;
    };
    /**
     * Sets the mediaSizes property value. The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are in the following table.
     * @param value Value to set for the mediaSizes property.
     */
    public set mediaSizes(value: string[] | undefined) {
        this._mediaSizes = value;
    };
    /**
     * Sets the mediaTypes property value. The media types supported by the printer.
     * @param value Value to set for the mediaTypes property.
     */
    public set mediaTypes(value: string[] | undefined) {
        this._mediaTypes = value;
    };
    /**
     * Sets the multipageLayouts property value. The presentation directions supported by the printer. Supported values are described in the following table.
     * @param value Value to set for the multipageLayouts property.
     */
    public set multipageLayouts(value: PrintMultipageLayout[] | undefined) {
        this._multipageLayouts = value;
    };
    /**
     * Sets the orientations property value. The print orientations supported by the printer. Valid values are described in the following table.
     * @param value Value to set for the orientations property.
     */
    public set orientations(value: PrintOrientation[] | undefined) {
        this._orientations = value;
    };
    /**
     * Sets the outputBins property value. The printer's supported output bins (trays).
     * @param value Value to set for the outputBins property.
     */
    public set outputBins(value: string[] | undefined) {
        this._outputBins = value;
    };
    /**
     * Sets the pagesPerSheet property value. Supported number of Input Pages to impose upon a single Impression.
     * @param value Value to set for the pagesPerSheet property.
     */
    public set pagesPerSheet(value: number[] | undefined) {
        this._pagesPerSheet = value;
    };
    /**
     * Sets the qualities property value. The print qualities supported by the printer.
     * @param value Value to set for the qualities property.
     */
    public set qualities(value: PrintQuality[] | undefined) {
        this._qualities = value;
    };
    /**
     * Sets the rightMargins property value. A list of supported right margins(in microns) for the printer.
     * @param value Value to set for the rightMargins property.
     */
    public set rightMargins(value: number[] | undefined) {
        this._rightMargins = value;
    };
    /**
     * Sets the scalings property value. Supported print scalings.
     * @param value Value to set for the scalings property.
     */
    public set scalings(value: PrintScaling[] | undefined) {
        this._scalings = value;
    };
    /**
     * Sets the supportsFitPdfToPage property value. True if the printer supports scaling PDF pages to match the print media size; false otherwise.
     * @param value Value to set for the supportsFitPdfToPage property.
     */
    public set supportsFitPdfToPage(value: boolean | undefined) {
        this._supportsFitPdfToPage = value;
    };
    /**
     * Sets the topMargins property value. A list of supported top margins(in microns) for the printer.
     * @param value Value to set for the topMargins property.
     */
    public set topMargins(value: number[] | undefined) {
        this._topMargins = value;
    };
}
