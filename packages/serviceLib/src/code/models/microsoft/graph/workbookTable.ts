import {Entity, WorkbookTableColumn, WorkbookTableRow, WorkbookTableSort, WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookTable extends Entity implements Parsable {
    /** Represents a collection of all the columns in the table. Read-only.  */
    private _columns?: WorkbookTableColumn[] | undefined;
    /** Indicates whether the first column contains special formatting.  */
    private _highlightFirstColumn?: boolean | undefined;
    /** Indicates whether the last column contains special formatting.  */
    private _highlightLastColumn?: boolean | undefined;
    /** Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.  */
    private _legacyId?: string | undefined;
    /** Name of the table.  */
    private _name?: string | undefined;
    /** Represents a collection of all the rows in the table. Read-only.  */
    private _rows?: WorkbookTableRow[] | undefined;
    /** Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.  */
    private _showBandedColumns?: boolean | undefined;
    /** Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.  */
    private _showBandedRows?: boolean | undefined;
    /** Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.  */
    private _showFilterButton?: boolean | undefined;
    /** Indicates whether the header row is visible or not. This value can be set to show or remove the header row.  */
    private _showHeaders?: boolean | undefined;
    /** Indicates whether the total row is visible or not. This value can be set to show or remove the total row.  */
    private _showTotals?: boolean | undefined;
    /** Represents the sorting for the table. Read-only.  */
    private _sort?: WorkbookTableSort | undefined;
    /** Constant value that represents the Table style. The possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.  */
    private _style?: string | undefined;
    /** The worksheet containing the current table. Read-only.  */
    private _worksheet?: WorkbookWorksheet | undefined;
    /**
     * Instantiates a new workbookTable and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the columns property value. Represents a collection of all the columns in the table. Read-only.
     * @returns a workbookTableColumn
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Gets the highlightFirstColumn property value. Indicates whether the first column contains special formatting.
     * @returns a boolean
     */
    public get highlightFirstColumn() {
        return this._highlightFirstColumn;
    };
    /**
     * Gets the highlightLastColumn property value. Indicates whether the last column contains special formatting.
     * @returns a boolean
     */
    public get highlightLastColumn() {
        return this._highlightLastColumn;
    };
    /**
     * Gets the legacyId property value. Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     * @returns a string
     */
    public get legacyId() {
        return this._legacyId;
    };
    /**
     * Gets the name property value. Name of the table.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the rows property value. Represents a collection of all the rows in the table. Read-only.
     * @returns a workbookTableRow
     */
    public get rows() {
        return this._rows;
    };
    /**
     * Gets the showBandedColumns property value. Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
     * @returns a boolean
     */
    public get showBandedColumns() {
        return this._showBandedColumns;
    };
    /**
     * Gets the showBandedRows property value. Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
     * @returns a boolean
     */
    public get showBandedRows() {
        return this._showBandedRows;
    };
    /**
     * Gets the showFilterButton property value. Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
     * @returns a boolean
     */
    public get showFilterButton() {
        return this._showFilterButton;
    };
    /**
     * Gets the showHeaders property value. Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
     * @returns a boolean
     */
    public get showHeaders() {
        return this._showHeaders;
    };
    /**
     * Gets the showTotals property value. Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
     * @returns a boolean
     */
    public get showTotals() {
        return this._showTotals;
    };
    /**
     * Gets the sort property value. Represents the sorting for the table. Read-only.
     * @returns a workbookTableSort
     */
    public get sort() {
        return this._sort;
    };
    /**
     * Gets the style property value. Constant value that represents the Table style. The possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
     * @returns a string
     */
    public get style() {
        return this._style;
    };
    /**
     * Gets the worksheet property value. The worksheet containing the current table. Read-only.
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
            ["columns", (o, n) => { (o as unknown as WorkbookTable).columns = n.getCollectionOfObjectValues<WorkbookTableColumn>(WorkbookTableColumn); }],
            ["highlightFirstColumn", (o, n) => { (o as unknown as WorkbookTable).highlightFirstColumn = n.getBooleanValue(); }],
            ["highlightLastColumn", (o, n) => { (o as unknown as WorkbookTable).highlightLastColumn = n.getBooleanValue(); }],
            ["legacyId", (o, n) => { (o as unknown as WorkbookTable).legacyId = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as WorkbookTable).name = n.getStringValue(); }],
            ["rows", (o, n) => { (o as unknown as WorkbookTable).rows = n.getCollectionOfObjectValues<WorkbookTableRow>(WorkbookTableRow); }],
            ["showBandedColumns", (o, n) => { (o as unknown as WorkbookTable).showBandedColumns = n.getBooleanValue(); }],
            ["showBandedRows", (o, n) => { (o as unknown as WorkbookTable).showBandedRows = n.getBooleanValue(); }],
            ["showFilterButton", (o, n) => { (o as unknown as WorkbookTable).showFilterButton = n.getBooleanValue(); }],
            ["showHeaders", (o, n) => { (o as unknown as WorkbookTable).showHeaders = n.getBooleanValue(); }],
            ["showTotals", (o, n) => { (o as unknown as WorkbookTable).showTotals = n.getBooleanValue(); }],
            ["sort", (o, n) => { (o as unknown as WorkbookTable).sort = n.getObjectValue<WorkbookTableSort>(WorkbookTableSort); }],
            ["style", (o, n) => { (o as unknown as WorkbookTable).style = n.getStringValue(); }],
            ["worksheet", (o, n) => { (o as unknown as WorkbookTable).worksheet = n.getObjectValue<WorkbookWorksheet>(WorkbookWorksheet); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WorkbookTableColumn>("columns", this.columns);
        writer.writeBooleanValue("highlightFirstColumn", this.highlightFirstColumn);
        writer.writeBooleanValue("highlightLastColumn", this.highlightLastColumn);
        writer.writeStringValue("legacyId", this.legacyId);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<WorkbookTableRow>("rows", this.rows);
        writer.writeBooleanValue("showBandedColumns", this.showBandedColumns);
        writer.writeBooleanValue("showBandedRows", this.showBandedRows);
        writer.writeBooleanValue("showFilterButton", this.showFilterButton);
        writer.writeBooleanValue("showHeaders", this.showHeaders);
        writer.writeBooleanValue("showTotals", this.showTotals);
        writer.writeObjectValue<WorkbookTableSort>("sort", this.sort);
        writer.writeStringValue("style", this.style);
        writer.writeObjectValue<WorkbookWorksheet>("worksheet", this.worksheet);
    };
    /**
     * Sets the columns property value. Represents a collection of all the columns in the table. Read-only.
     * @param value Value to set for the columns property.
     */
    public set columns(value: WorkbookTableColumn[] | undefined) {
        this._columns = value;
    };
    /**
     * Sets the highlightFirstColumn property value. Indicates whether the first column contains special formatting.
     * @param value Value to set for the highlightFirstColumn property.
     */
    public set highlightFirstColumn(value: boolean | undefined) {
        this._highlightFirstColumn = value;
    };
    /**
     * Sets the highlightLastColumn property value. Indicates whether the last column contains special formatting.
     * @param value Value to set for the highlightLastColumn property.
     */
    public set highlightLastColumn(value: boolean | undefined) {
        this._highlightLastColumn = value;
    };
    /**
     * Sets the legacyId property value. Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed. This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     * @param value Value to set for the legacyId property.
     */
    public set legacyId(value: string | undefined) {
        this._legacyId = value;
    };
    /**
     * Sets the name property value. Name of the table.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the rows property value. Represents a collection of all the rows in the table. Read-only.
     * @param value Value to set for the rows property.
     */
    public set rows(value: WorkbookTableRow[] | undefined) {
        this._rows = value;
    };
    /**
     * Sets the showBandedColumns property value. Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
     * @param value Value to set for the showBandedColumns property.
     */
    public set showBandedColumns(value: boolean | undefined) {
        this._showBandedColumns = value;
    };
    /**
     * Sets the showBandedRows property value. Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
     * @param value Value to set for the showBandedRows property.
     */
    public set showBandedRows(value: boolean | undefined) {
        this._showBandedRows = value;
    };
    /**
     * Sets the showFilterButton property value. Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
     * @param value Value to set for the showFilterButton property.
     */
    public set showFilterButton(value: boolean | undefined) {
        this._showFilterButton = value;
    };
    /**
     * Sets the showHeaders property value. Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
     * @param value Value to set for the showHeaders property.
     */
    public set showHeaders(value: boolean | undefined) {
        this._showHeaders = value;
    };
    /**
     * Sets the showTotals property value. Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
     * @param value Value to set for the showTotals property.
     */
    public set showTotals(value: boolean | undefined) {
        this._showTotals = value;
    };
    /**
     * Sets the sort property value. Represents the sorting for the table. Read-only.
     * @param value Value to set for the sort property.
     */
    public set sort(value: WorkbookTableSort | undefined) {
        this._sort = value;
    };
    /**
     * Sets the style property value. Constant value that represents the Table style. The possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
     * @param value Value to set for the style property.
     */
    public set style(value: string | undefined) {
        this._style = value;
    };
    /**
     * Sets the worksheet property value. The worksheet containing the current table. Read-only.
     * @param value Value to set for the worksheet property.
     */
    public set worksheet(value: WorkbookWorksheet | undefined) {
        this._worksheet = value;
    };
}
