import {BoundingRectWithAnotherRangeRequestBuilder} from './boundingRectWithAnotherRange/';
import {CellWithRowWithColumnRequestBuilder} from './cellWithRowWithColumn/';
import {ClearRequestBuilder} from './clear/';
import {ColumnsAfterRequestBuilder} from './columnsAfter/';
import {ColumnsAfterWithCountRequestBuilder} from './columnsAfterWithCount/';
import {ColumnsBeforeRequestBuilder} from './columnsBefore/';
import {ColumnsBeforeWithCountRequestBuilder} from './columnsBeforeWithCount/';
import {ColumnWithColumnRequestBuilder} from './columnWithColumn/';
import {DeleteRequestBuilder} from './delete/';
import {EntireColumnRequestBuilder} from './entireColumn/';
import {EntireRowRequestBuilder} from './entireRow/';
import {InsertRequestBuilder} from './insert/';
import {IntersectionWithAnotherRangeRequestBuilder} from './intersectionWithAnotherRange/';
import {LastCellRequestBuilder} from './lastCell/';
import {LastColumnRequestBuilder} from './lastColumn/';
import {LastRowRequestBuilder} from './lastRow/';
import {MergeRequestBuilder} from './merge/';
import {OffsetRangeWithRowOffsetWithColumnOffsetRequestBuilder} from './offsetRangeWithRowOffsetWithColumnOffset/';
import {ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder} from './resizedRangeWithDeltaRowsWithDeltaColumns/';
import {RowsAboveRequestBuilder} from './rowsAbove/';
import {RowsAboveWithCountRequestBuilder} from './rowsAboveWithCount/';
import {RowsBelowRequestBuilder} from './rowsBelow/';
import {RowsBelowWithCountRequestBuilder} from './rowsBelowWithCount/';
import {RowWithRowRequestBuilder} from './rowWithRow/';
import {UnmergeRequestBuilder} from './unmerge/';
import {UsedRangeRequestBuilder} from './usedRange/';
import {UsedRangeWithValuesOnlyRequestBuilder} from './usedRangeWithValuesOnly/';
import {VisibleViewRequestBuilder} from './visibleView/';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange  */
export class WorkbookRangeRequestBuilder {
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get delete(): DeleteRequestBuilder {
        return new DeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get insert(): InsertRequestBuilder {
        return new InsertRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get merge(): MergeRequestBuilder {
        return new MergeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get unmerge(): UnmergeRequestBuilder {
        return new UnmergeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.boundingRect(anotherRange='{anotherRange}')
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @returns a boundingRectWithAnotherRangeRequestBuilder
     */
    public boundingRectWithAnotherRange(anotherRange: string | undefined) : BoundingRectWithAnotherRangeRequestBuilder {
        if(!anotherRange) throw new Error("anotherRange cannot be undefined");
        return new BoundingRectWithAnotherRangeRequestBuilder(this.pathParameters, this.requestAdapter, anotherRange);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.cell(row={row},column={column})
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellWithRowWithColumnRequestBuilder
     */
    public cellWithRowWithColumn(row: number | undefined, column: number | undefined) : CellWithRowWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellWithRowWithColumnRequestBuilder(this.pathParameters, this.requestAdapter, row, column);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.columnsAfter()
     * @returns a columnsAfterRequestBuilder
     */
    public columnsAfter() : ColumnsAfterRequestBuilder {
        return new ColumnsAfterRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.columnsAfter(count={count})
     * @param count Usage: count={count}
     * @returns a columnsAfterWithCountRequestBuilder
     */
    public columnsAfterWithCount(count: number | undefined) : ColumnsAfterWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new ColumnsAfterWithCountRequestBuilder(this.pathParameters, this.requestAdapter, count);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.columnsBefore()
     * @returns a columnsBeforeRequestBuilder
     */
    public columnsBefore() : ColumnsBeforeRequestBuilder {
        return new ColumnsBeforeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.columnsBefore(count={count})
     * @param count Usage: count={count}
     * @returns a columnsBeforeWithCountRequestBuilder
     */
    public columnsBeforeWithCount(count: number | undefined) : ColumnsBeforeWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new ColumnsBeforeWithCountRequestBuilder(this.pathParameters, this.requestAdapter, count);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.column(column={column})
     * @param column Usage: column={column}
     * @returns a columnWithColumnRequestBuilder
     */
    public columnWithColumn(column: number | undefined) : ColumnWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        return new ColumnWithColumnRequestBuilder(this.pathParameters, this.requestAdapter, column);
    };
    /**
     * Instantiates a new WorkbookRangeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/insights/shared/{sharedInsight_id}/lastSharedMethod/microsoft.graph.workbookRange";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.entireColumn()
     * @returns a entireColumnRequestBuilder
     */
    public entireColumn() : EntireColumnRequestBuilder {
        return new EntireColumnRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.entireRow()
     * @returns a entireRowRequestBuilder
     */
    public entireRow() : EntireRowRequestBuilder {
        return new EntireRowRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.intersection(anotherRange='{anotherRange}')
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @returns a intersectionWithAnotherRangeRequestBuilder
     */
    public intersectionWithAnotherRange(anotherRange: string | undefined) : IntersectionWithAnotherRangeRequestBuilder {
        if(!anotherRange) throw new Error("anotherRange cannot be undefined");
        return new IntersectionWithAnotherRangeRequestBuilder(this.pathParameters, this.requestAdapter, anotherRange);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.lastCell()
     * @returns a lastCellRequestBuilder
     */
    public lastCell() : LastCellRequestBuilder {
        return new LastCellRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.lastColumn()
     * @returns a lastColumnRequestBuilder
     */
    public lastColumn() : LastColumnRequestBuilder {
        return new LastColumnRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.lastRow()
     * @returns a lastRowRequestBuilder
     */
    public lastRow() : LastRowRequestBuilder {
        return new LastRowRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.offsetRange(rowOffset={rowOffset},columnOffset={columnOffset})
     * @param columnOffset Usage: columnOffset={columnOffset}
     * @param rowOffset Usage: rowOffset={rowOffset}
     * @returns a offsetRangeWithRowOffsetWithColumnOffsetRequestBuilder
     */
    public offsetRangeWithRowOffsetWithColumnOffset(rowOffset: number | undefined, columnOffset: number | undefined) : OffsetRangeWithRowOffsetWithColumnOffsetRequestBuilder {
        if(!columnOffset) throw new Error("columnOffset cannot be undefined");
        if(!rowOffset) throw new Error("rowOffset cannot be undefined");
        return new OffsetRangeWithRowOffsetWithColumnOffsetRequestBuilder(this.pathParameters, this.requestAdapter, rowOffset, columnOffset);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.resizedRange(deltaRows={deltaRows},deltaColumns={deltaColumns})
     * @param deltaColumns Usage: deltaColumns={deltaColumns}
     * @param deltaRows Usage: deltaRows={deltaRows}
     * @returns a resizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder
     */
    public resizedRangeWithDeltaRowsWithDeltaColumns(deltaRows: number | undefined, deltaColumns: number | undefined) : ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder {
        if(!deltaColumns) throw new Error("deltaColumns cannot be undefined");
        if(!deltaRows) throw new Error("deltaRows cannot be undefined");
        return new ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder(this.pathParameters, this.requestAdapter, deltaRows, deltaColumns);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.rowsAbove()
     * @returns a rowsAboveRequestBuilder
     */
    public rowsAbove() : RowsAboveRequestBuilder {
        return new RowsAboveRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.rowsAbove(count={count})
     * @param count Usage: count={count}
     * @returns a rowsAboveWithCountRequestBuilder
     */
    public rowsAboveWithCount(count: number | undefined) : RowsAboveWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new RowsAboveWithCountRequestBuilder(this.pathParameters, this.requestAdapter, count);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.rowsBelow()
     * @returns a rowsBelowRequestBuilder
     */
    public rowsBelow() : RowsBelowRequestBuilder {
        return new RowsBelowRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.rowsBelow(count={count})
     * @param count Usage: count={count}
     * @returns a rowsBelowWithCountRequestBuilder
     */
    public rowsBelowWithCount(count: number | undefined) : RowsBelowWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new RowsBelowWithCountRequestBuilder(this.pathParameters, this.requestAdapter, count);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.row(row={row})
     * @param row Usage: row={row}
     * @returns a rowWithRowRequestBuilder
     */
    public rowWithRow(row: number | undefined) : RowWithRowRequestBuilder {
        if(!row) throw new Error("row cannot be undefined");
        return new RowWithRowRequestBuilder(this.pathParameters, this.requestAdapter, row);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.usedRange()
     * @returns a usedRangeRequestBuilder
     */
    public usedRange() : UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.usedRange(valuesOnly={valuesOnly})
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.pathParameters, this.requestAdapter, valuesOnly);
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRange/microsoft.graph.visibleView()
     * @returns a visibleViewRequestBuilder
     */
    public visibleView() : VisibleViewRequestBuilder {
        return new VisibleViewRequestBuilder(this.pathParameters, this.requestAdapter);
    };
}
