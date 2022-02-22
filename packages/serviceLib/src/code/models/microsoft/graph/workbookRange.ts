import {Entity, Json, WorkbookRangeFormat, WorkbookRangeSort, WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookRange extends Entity implements Parsable {
    /** Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.  */
    private _address?: string | undefined;
    /** Represents range reference for the specified range in the language of the user. Read-only.  */
    private _addressLocal?: string | undefined;
    /** Number of cells in the range. Read-only.  */
    private _cellCount?: number | undefined;
    /** Represents the total number of columns in the range. Read-only.  */
    private _columnCount?: number | undefined;
    /** Represents if all columns of the current range are hidden.  */
    private _columnHidden?: boolean | undefined;
    /** Represents the column number of the first cell in the range. Zero-indexed. Read-only.  */
    private _columnIndex?: number | undefined;
    /** Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.  */
    private _format?: WorkbookRangeFormat | undefined;
    /** Represents the formula in A1-style notation.  */
    private _formulas?: Json | undefined;
    /** Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.  */
    private _formulasLocal?: Json | undefined;
    /** Represents the formula in R1C1-style notation.  */
    private _formulasR1C1?: Json | undefined;
    /** Represents if all cells of the current range are hidden. Read-only.  */
    private _hidden?: boolean | undefined;
    /** Represents Excel's number format code for the given cell.  */
    private _numberFormat?: Json | undefined;
    /** Returns the total number of rows in the range. Read-only.  */
    private _rowCount?: number | undefined;
    /** Represents if all rows of the current range are hidden.  */
    private _rowHidden?: boolean | undefined;
    /** Returns the row number of the first cell in the range. Zero-indexed. Read-only.  */
    private _rowIndex?: number | undefined;
    /** The worksheet containing the current range. Read-only.  */
    private _sort?: WorkbookRangeSort | undefined;
    /** Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.  */
    private _text?: Json | undefined;
    /** Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.  */
    private _values?: Json | undefined;
    /** Represents the type of data of each cell. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only.  */
    private _valueTypes?: Json | undefined;
    /** The worksheet containing the current range. Read-only.  */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookRange and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the address property value. Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Gets the addressLocal property value. Represents range reference for the specified range in the language of the user. Read-only.
     * @returns a string
     */
    public get addressLocal() {
        return this._addressLocal;
    };
    /**
     * Gets the cellCount property value. Number of cells in the range. Read-only.
     * @returns a integer
     */
    public get cellCount() {
        return this._cellCount;
    };
    /**
     * Gets the columnCount property value. Represents the total number of columns in the range. Read-only.
     * @returns a integer
     */
    public get columnCount() {
        return this._columnCount;
    };
    /**
     * Gets the columnHidden property value. Represents if all columns of the current range are hidden.
     * @returns a boolean
     */
    public get columnHidden() {
        return this._columnHidden;
    };
    /**
     * Gets the columnIndex property value. Represents the column number of the first cell in the range. Zero-indexed. Read-only.
     * @returns a integer
     */
    public get columnIndex() {
        return this._columnIndex;
    };
    /**
     * Gets the format property value. Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
     * @returns a workbookRangeFormat
     */
    public get format() {
        return this._format;
    };
    /**
     * Gets the formulas property value. Represents the formula in A1-style notation.
     * @returns a Json
     */
    public get formulas() {
        return this._formulas;
    };
    /**
     * Gets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     * @returns a Json
     */
    public get formulasLocal() {
        return this._formulasLocal;
    };
    /**
     * Gets the formulasR1C1 property value. Represents the formula in R1C1-style notation.
     * @returns a Json
     */
    public get formulasR1C1() {
        return this._formulasR1C1;
    };
    /**
     * Gets the hidden property value. Represents if all cells of the current range are hidden. Read-only.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Gets the numberFormat property value. Represents Excel's number format code for the given cell.
     * @returns a Json
     */
    public get numberFormat() {
        return this._numberFormat;
    };
    /**
     * Gets the rowCount property value. Returns the total number of rows in the range. Read-only.
     * @returns a integer
     */
    public get rowCount() {
        return this._rowCount;
    };
    /**
     * Gets the rowHidden property value. Represents if all rows of the current range are hidden.
     * @returns a boolean
     */
    public get rowHidden() {
        return this._rowHidden;
    };
    /**
     * Gets the rowIndex property value. Returns the row number of the first cell in the range. Zero-indexed. Read-only.
     * @returns a integer
     */
    public get rowIndex() {
        return this._rowIndex;
    };
    /**
     * Gets the sort property value. The worksheet containing the current range. Read-only.
     * @returns a workbookRangeSort
     */
    public get sort() {
        return this._sort;
    };
    /**
     * Gets the text property value. Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
     * @returns a Json
     */
    public get text() {
        return this._text;
    };
    /**
     * Gets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Gets the valueTypes property value. Represents the type of data of each cell. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only.
     * @returns a Json
     */
    public get valueTypes() {
        return this._valueTypes;
    };
    /**
     * Gets the worksheet property value. The worksheet containing the current range. Read-only.
     * @returns a workbookWorksheet
     */
    public get worksheet() {
        return this._worksheet;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["address", (o, n) => { (o as unknown as WorkbookRange).address = n.getStringValue(); }],
            ["addressLocal", (o, n) => { (o as unknown as WorkbookRange).addressLocal = n.getStringValue(); }],
            ["cellCount", (o, n) => { (o as unknown as WorkbookRange).cellCount = n.getNumberValue(); }],
            ["columnCount", (o, n) => { (o as unknown as WorkbookRange).columnCount = n.getNumberValue(); }],
            ["columnHidden", (o, n) => { (o as unknown as WorkbookRange).columnHidden = n.getBooleanValue(); }],
            ["columnIndex", (o, n) => { (o as unknown as WorkbookRange).columnIndex = n.getNumberValue(); }],
            ["format", (o, n) => { (o as unknown as WorkbookRange).format = n.getObjectValue<WorkbookRangeFormat>(WorkbookRangeFormat); }],
            ["formulas", (o, n) => { (o as unknown as WorkbookRange).formulas = n.getObjectValue<Json>(Json); }],
            ["formulasLocal", (o, n) => { (o as unknown as WorkbookRange).formulasLocal = n.getObjectValue<Json>(Json); }],
            ["formulasR1C1", (o, n) => { (o as unknown as WorkbookRange).formulasR1C1 = n.getObjectValue<Json>(Json); }],
            ["hidden", (o, n) => { (o as unknown as WorkbookRange).hidden = n.getBooleanValue(); }],
            ["numberFormat", (o, n) => { (o as unknown as WorkbookRange).numberFormat = n.getObjectValue<Json>(Json); }],
            ["rowCount", (o, n) => { (o as unknown as WorkbookRange).rowCount = n.getNumberValue(); }],
            ["rowHidden", (o, n) => { (o as unknown as WorkbookRange).rowHidden = n.getBooleanValue(); }],
            ["rowIndex", (o, n) => { (o as unknown as WorkbookRange).rowIndex = n.getNumberValue(); }],
            ["sort", (o, n) => { (o as unknown as WorkbookRange).sort = n.getObjectValue<WorkbookRangeSort>(WorkbookRangeSort); }],
            ["text", (o, n) => { (o as unknown as WorkbookRange).text = n.getObjectValue<Json>(Json); }],
            ["values", (o, n) => { (o as unknown as WorkbookRange).values = n.getObjectValue<Json>(Json); }],
            ["valueTypes", (o, n) => { (o as unknown as WorkbookRange).valueTypes = n.getObjectValue<Json>(Json); }],
            ["worksheet", (o, n) => { (o as unknown as WorkbookRange).worksheet = n.getObjectValue<WorkbookWorksheet>(WorkbookWorksheet); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("addressLocal", this.addressLocal);
        writer.writeNumberValue("cellCount", this.cellCount);
        writer.writeNumberValue("columnCount", this.columnCount);
        writer.writeBooleanValue("columnHidden", this.columnHidden);
        writer.writeNumberValue("columnIndex", this.columnIndex);
        writer.writeObjectValue<WorkbookRangeFormat>("format", this.format);
        writer.writeObjectValue<Json>("formulas", this.formulas);
        writer.writeObjectValue<Json>("formulasLocal", this.formulasLocal);
        writer.writeObjectValue<Json>("formulasR1C1", this.formulasR1C1);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeObjectValue<Json>("numberFormat", this.numberFormat);
        writer.writeNumberValue("rowCount", this.rowCount);
        writer.writeBooleanValue("rowHidden", this.rowHidden);
        writer.writeNumberValue("rowIndex", this.rowIndex);
        writer.writeObjectValue<WorkbookRangeSort>("sort", this.sort);
        writer.writeObjectValue<Json>("text", this.text);
        writer.writeObjectValue<Json>("values", this.values);
        writer.writeObjectValue<Json>("valueTypes", this.valueTypes);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", this.worksheet);
    };
    /**
     * Sets the address property value. Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Sets the addressLocal property value. Represents range reference for the specified range in the language of the user. Read-only.
     * @param value Value to set for the addressLocal property.
     */
    public set addressLocal(value: string | undefined) {
        this._addressLocal = value;
    };
    /**
     * Sets the cellCount property value. Number of cells in the range. Read-only.
     * @param value Value to set for the cellCount property.
     */
    public set cellCount(value: number | undefined) {
        this._cellCount = value;
    };
    /**
     * Sets the columnCount property value. Represents the total number of columns in the range. Read-only.
     * @param value Value to set for the columnCount property.
     */
    public set columnCount(value: number | undefined) {
        this._columnCount = value;
    };
    /**
     * Sets the columnHidden property value. Represents if all columns of the current range are hidden.
     * @param value Value to set for the columnHidden property.
     */
    public set columnHidden(value: boolean | undefined) {
        this._columnHidden = value;
    };
    /**
     * Sets the columnIndex property value. Represents the column number of the first cell in the range. Zero-indexed. Read-only.
     * @param value Value to set for the columnIndex property.
     */
    public set columnIndex(value: number | undefined) {
        this._columnIndex = value;
    };
    /**
     * Sets the format property value. Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
     * @param value Value to set for the format property.
     */
    public set format(value: WorkbookRangeFormat | undefined) {
        this._format = value;
    };
    /**
     * Sets the formulas property value. Represents the formula in A1-style notation.
     * @param value Value to set for the formulas property.
     */
    public set formulas(value: Json | undefined) {
        this._formulas = value;
    };
    /**
     * Sets the formulasLocal property value. Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     * @param value Value to set for the formulasLocal property.
     */
    public set formulasLocal(value: Json | undefined) {
        this._formulasLocal = value;
    };
    /**
     * Sets the formulasR1C1 property value. Represents the formula in R1C1-style notation.
     * @param value Value to set for the formulasR1C1 property.
     */
    public set formulasR1C1(value: Json | undefined) {
        this._formulasR1C1 = value;
    };
    /**
     * Sets the hidden property value. Represents if all cells of the current range are hidden. Read-only.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Sets the numberFormat property value. Represents Excel's number format code for the given cell.
     * @param value Value to set for the numberFormat property.
     */
    public set numberFormat(value: Json | undefined) {
        this._numberFormat = value;
    };
    /**
     * Sets the rowCount property value. Returns the total number of rows in the range. Read-only.
     * @param value Value to set for the rowCount property.
     */
    public set rowCount(value: number | undefined) {
        this._rowCount = value;
    };
    /**
     * Sets the rowHidden property value. Represents if all rows of the current range are hidden.
     * @param value Value to set for the rowHidden property.
     */
    public set rowHidden(value: boolean | undefined) {
        this._rowHidden = value;
    };
    /**
     * Sets the rowIndex property value. Returns the row number of the first cell in the range. Zero-indexed. Read-only.
     * @param value Value to set for the rowIndex property.
     */
    public set rowIndex(value: number | undefined) {
        this._rowIndex = value;
    };
    /**
     * Sets the sort property value. The worksheet containing the current range. Read-only.
     * @param value Value to set for the sort property.
     */
    public set sort(value: WorkbookRangeSort | undefined) {
        this._sort = value;
    };
    /**
     * Sets the text property value. Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
     * @param value Value to set for the text property.
     */
    public set text(value: Json | undefined) {
        this._text = value;
    };
    /**
     * Sets the values property value. Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
    /**
     * Sets the valueTypes property value. Represents the type of data of each cell. The possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error. Read-only.
     * @param value Value to set for the valueTypes property.
     */
    public set valueTypes(value: Json | undefined) {
        this._valueTypes = value;
    };
    /**
     * Sets the worksheet property value. The worksheet containing the current range. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        this._worksheet = value;
    };
}
