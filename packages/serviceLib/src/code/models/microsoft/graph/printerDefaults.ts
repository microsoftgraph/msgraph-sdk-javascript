import {PrintColorMode, PrintDuplexMode, PrintFinishing, PrintMultipageLayout, PrintOrientation, PrintQuality, PrintScaling} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterDefaults implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The default color mode to use when printing the document. Valid values are described in the following table.  */
    private _colorMode?: PrintColorMode | undefined;
    /** The default content (MIME) type to use when processing documents.  */
    private _contentType?: string | undefined;
    /** The default number of copies printed per job.  */
    private _copiesPerJob?: number | undefined;
    /** The default resolution in DPI to use when printing the job.  */
    private _dpi?: number | undefined;
    /** The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table.  */
    private _duplexMode?: PrintDuplexMode | undefined;
    /** The default set of finishings to apply to print jobs. Valid values are described in the following table.  */
    private _finishings?: PrintFinishing[] | undefined;
    /** The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.  */
    private _fitPdfToPage?: boolean | undefined;
    /** The default input bin that serves as the paper source.  */
    private _inputBin?: string | undefined;
    /** The default media (such as paper) color to print the document on.  */
    private _mediaColor?: string | undefined;
    /** The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.  */
    private _mediaSize?: string | undefined;
    /** The default media (such as paper) type to print the document on.  */
    private _mediaType?: string | undefined;
    /** The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.  */
    private _multipageLayout?: PrintMultipageLayout | undefined;
    /** The default orientation to use when printing the document. Valid values are described in the following table.  */
    private _orientation?: PrintOrientation | undefined;
    /** The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.  */
    private _outputBin?: string | undefined;
    /** The default number of document pages to print on each sheet.  */
    private _pagesPerSheet?: number | undefined;
    /** The default quality to use when printing the document. Valid values are described in the following table.  */
    private _quality?: PrintQuality | undefined;
    /** Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table.  */
    private _scaling?: PrintScaling | undefined;
    /**
     * Instantiates a new printerDefaults and sets the default values.
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
     * Gets the colorMode property value. The default color mode to use when printing the document. Valid values are described in the following table.
     * @returns a printColorMode
     */
    public get colorMode() {
        return this._colorMode;
    };
    /**
     * Gets the contentType property value. The default content (MIME) type to use when processing documents.
     * @returns a string
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Gets the copiesPerJob property value. The default number of copies printed per job.
     * @returns a integer
     */
    public get copiesPerJob() {
        return this._copiesPerJob;
    };
    /**
     * Gets the dpi property value. The default resolution in DPI to use when printing the job.
     * @returns a integer
     */
    public get dpi() {
        return this._dpi;
    };
    /**
     * Gets the duplexMode property value. The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table.
     * @returns a printDuplexMode
     */
    public get duplexMode() {
        return this._duplexMode;
    };
    /**
     * Gets the finishings property value. The default set of finishings to apply to print jobs. Valid values are described in the following table.
     * @returns a printFinishing
     */
    public get finishings() {
        return this._finishings;
    };
    /**
     * Gets the fitPdfToPage property value. The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     * @returns a boolean
     */
    public get fitPdfToPage() {
        return this._fitPdfToPage;
    };
    /**
     * Gets the inputBin property value. The default input bin that serves as the paper source.
     * @returns a string
     */
    public get inputBin() {
        return this._inputBin;
    };
    /**
     * Gets the mediaColor property value. The default media (such as paper) color to print the document on.
     * @returns a string
     */
    public get mediaColor() {
        return this._mediaColor;
    };
    /**
     * Gets the mediaSize property value. The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     * @returns a string
     */
    public get mediaSize() {
        return this._mediaSize;
    };
    /**
     * Gets the mediaType property value. The default media (such as paper) type to print the document on.
     * @returns a string
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Gets the multipageLayout property value. The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
     * @returns a printMultipageLayout
     */
    public get multipageLayout() {
        return this._multipageLayout;
    };
    /**
     * Gets the orientation property value. The default orientation to use when printing the document. Valid values are described in the following table.
     * @returns a printOrientation
     */
    public get orientation() {
        return this._orientation;
    };
    /**
     * Gets the outputBin property value. The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     * @returns a string
     */
    public get outputBin() {
        return this._outputBin;
    };
    /**
     * Gets the pagesPerSheet property value. The default number of document pages to print on each sheet.
     * @returns a integer
     */
    public get pagesPerSheet() {
        return this._pagesPerSheet;
    };
    /**
     * Gets the quality property value. The default quality to use when printing the document. Valid values are described in the following table.
     * @returns a printQuality
     */
    public get quality() {
        return this._quality;
    };
    /**
     * Gets the scaling property value. Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table.
     * @returns a printScaling
     */
    public get scaling() {
        return this._scaling;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["colorMode", (o, n) => { (o as unknown as PrinterDefaults).colorMode = n.getEnumValue<PrintColorMode>(PrintColorMode); }],
            ["contentType", (o, n) => { (o as unknown as PrinterDefaults).contentType = n.getStringValue(); }],
            ["copiesPerJob", (o, n) => { (o as unknown as PrinterDefaults).copiesPerJob = n.getNumberValue(); }],
            ["dpi", (o, n) => { (o as unknown as PrinterDefaults).dpi = n.getNumberValue(); }],
            ["duplexMode", (o, n) => { (o as unknown as PrinterDefaults).duplexMode = n.getEnumValue<PrintDuplexMode>(PrintDuplexMode); }],
            ["finishings", (o, n) => { (o as unknown as PrinterDefaults).finishings = n.getEnumValues<PrintFinishing>(PrintFinishing); }],
            ["fitPdfToPage", (o, n) => { (o as unknown as PrinterDefaults).fitPdfToPage = n.getBooleanValue(); }],
            ["inputBin", (o, n) => { (o as unknown as PrinterDefaults).inputBin = n.getStringValue(); }],
            ["mediaColor", (o, n) => { (o as unknown as PrinterDefaults).mediaColor = n.getStringValue(); }],
            ["mediaSize", (o, n) => { (o as unknown as PrinterDefaults).mediaSize = n.getStringValue(); }],
            ["mediaType", (o, n) => { (o as unknown as PrinterDefaults).mediaType = n.getStringValue(); }],
            ["multipageLayout", (o, n) => { (o as unknown as PrinterDefaults).multipageLayout = n.getEnumValue<PrintMultipageLayout>(PrintMultipageLayout); }],
            ["orientation", (o, n) => { (o as unknown as PrinterDefaults).orientation = n.getEnumValue<PrintOrientation>(PrintOrientation); }],
            ["outputBin", (o, n) => { (o as unknown as PrinterDefaults).outputBin = n.getStringValue(); }],
            ["pagesPerSheet", (o, n) => { (o as unknown as PrinterDefaults).pagesPerSheet = n.getNumberValue(); }],
            ["quality", (o, n) => { (o as unknown as PrinterDefaults).quality = n.getEnumValue<PrintQuality>(PrintQuality); }],
            ["scaling", (o, n) => { (o as unknown as PrinterDefaults).scaling = n.getEnumValue<PrintScaling>(PrintScaling); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<PrintColorMode>("colorMode", this.colorMode);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeNumberValue("copiesPerJob", this.copiesPerJob);
        writer.writeNumberValue("dpi", this.dpi);
        writer.writeEnumValue<PrintDuplexMode>("duplexMode", this.duplexMode);
        this.finishings && writer.writeEnumValue<PrintFinishing>("finishings", ...this.finishings);
        writer.writeBooleanValue("fitPdfToPage", this.fitPdfToPage);
        writer.writeStringValue("inputBin", this.inputBin);
        writer.writeStringValue("mediaColor", this.mediaColor);
        writer.writeStringValue("mediaSize", this.mediaSize);
        writer.writeStringValue("mediaType", this.mediaType);
        writer.writeEnumValue<PrintMultipageLayout>("multipageLayout", this.multipageLayout);
        writer.writeEnumValue<PrintOrientation>("orientation", this.orientation);
        writer.writeStringValue("outputBin", this.outputBin);
        writer.writeNumberValue("pagesPerSheet", this.pagesPerSheet);
        writer.writeEnumValue<PrintQuality>("quality", this.quality);
        writer.writeEnumValue<PrintScaling>("scaling", this.scaling);
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
     * Sets the colorMode property value. The default color mode to use when printing the document. Valid values are described in the following table.
     * @param value Value to set for the colorMode property.
     */
    public set colorMode(value: PrintColorMode | undefined) {
        this._colorMode = value;
    };
    /**
     * Sets the contentType property value. The default content (MIME) type to use when processing documents.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: string | undefined) {
        this._contentType = value;
    };
    /**
     * Sets the copiesPerJob property value. The default number of copies printed per job.
     * @param value Value to set for the copiesPerJob property.
     */
    public set copiesPerJob(value: number | undefined) {
        this._copiesPerJob = value;
    };
    /**
     * Sets the dpi property value. The default resolution in DPI to use when printing the job.
     * @param value Value to set for the dpi property.
     */
    public set dpi(value: number | undefined) {
        this._dpi = value;
    };
    /**
     * Sets the duplexMode property value. The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the following table.
     * @param value Value to set for the duplexMode property.
     */
    public set duplexMode(value: PrintDuplexMode | undefined) {
        this._duplexMode = value;
    };
    /**
     * Sets the finishings property value. The default set of finishings to apply to print jobs. Valid values are described in the following table.
     * @param value Value to set for the finishings property.
     */
    public set finishings(value: PrintFinishing[] | undefined) {
        this._finishings = value;
    };
    /**
     * Sets the fitPdfToPage property value. The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let the printer decide how to lay out impressions.
     * @param value Value to set for the fitPdfToPage property.
     */
    public set fitPdfToPage(value: boolean | undefined) {
        this._fitPdfToPage = value;
    };
    /**
     * Sets the inputBin property value. The default input bin that serves as the paper source.
     * @param value Value to set for the inputBin property.
     */
    public set inputBin(value: string | undefined) {
        this._inputBin = value;
    };
    /**
     * Sets the mediaColor property value. The default media (such as paper) color to print the document on.
     * @param value Value to set for the mediaColor property.
     */
    public set mediaColor(value: string | undefined) {
        this._mediaColor = value;
    };
    /**
     * Sets the mediaSize property value. The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in the printerCapabilities topic.
     * @param value Value to set for the mediaSize property.
     */
    public set mediaSize(value: string | undefined) {
        this._mediaSize = value;
    };
    /**
     * Sets the mediaType property value. The default media (such as paper) type to print the document on.
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: string | undefined) {
        this._mediaType = value;
    };
    /**
     * Sets the multipageLayout property value. The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the following table.
     * @param value Value to set for the multipageLayout property.
     */
    public set multipageLayout(value: PrintMultipageLayout | undefined) {
        this._multipageLayout = value;
    };
    /**
     * Sets the orientation property value. The default orientation to use when printing the document. Valid values are described in the following table.
     * @param value Value to set for the orientation property.
     */
    public set orientation(value: PrintOrientation | undefined) {
        this._orientation = value;
    };
    /**
     * Sets the outputBin property value. The default output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
     * @param value Value to set for the outputBin property.
     */
    public set outputBin(value: string | undefined) {
        this._outputBin = value;
    };
    /**
     * Sets the pagesPerSheet property value. The default number of document pages to print on each sheet.
     * @param value Value to set for the pagesPerSheet property.
     */
    public set pagesPerSheet(value: number | undefined) {
        this._pagesPerSheet = value;
    };
    /**
     * Sets the quality property value. The default quality to use when printing the document. Valid values are described in the following table.
     * @param value Value to set for the quality property.
     */
    public set quality(value: PrintQuality | undefined) {
        this._quality = value;
    };
    /**
     * Sets the scaling property value. Specifies how the printer scales the document data to fit the requested media. Valid values are described in the following table.
     * @param value Value to set for the scaling property.
     */
    public set scaling(value: PrintScaling | undefined) {
        this._scaling = value;
    };
}
