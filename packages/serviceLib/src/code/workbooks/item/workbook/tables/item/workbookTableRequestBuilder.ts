import {WorkbookTable} from '../../../../../models/microsoft/graph/';
import {ClearFiltersRequestBuilder} from './clearFilters/';
import {ColumnsRequestBuilder} from './columns/';
import {WorkbookTableColumnRequestBuilder} from './columns/item/';
import {ConvertToRangeRequestBuilder} from './convertToRange/';
import {DataBodyRangeRequestBuilder} from './dataBodyRange/';
import {HeaderRowRangeRequestBuilder} from './headerRowRange/';
import {RangeRequestBuilder} from './range/';
import {ReapplyFiltersRequestBuilder} from './reapplyFilters/';
import {RowsRequestBuilder} from './rows/';
import {WorkbookTableRowRequestBuilder} from './rows/item/';
import {SortRequestBuilder} from './sort/';
import {TotalRowRangeRequestBuilder} from './totalRowRange/';
import {WorksheetRequestBuilder} from './worksheet/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}  */
export class WorkbookTableRequestBuilder {
    public get clearFilters(): ClearFiltersRequestBuilder {
        return new ClearFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get convertToRange(): ConvertToRangeRequestBuilder {
        return new ConvertToRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get reapplyFilters(): ReapplyFiltersRequestBuilder {
        return new ReapplyFiltersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get rows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sort(): SortRequestBuilder {
        return new SortRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.tables.item.columns.item collection
     * @param id Unique identifier of the item
     * @returns a workbookTableColumnRequestBuilder
     */
    public columnsById(id: string) : WorkbookTableColumnRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTableColumn_id"] = id
        return new WorkbookTableColumnRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkbookTableRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook/tables/{workbookTable_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookTable | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.dataBodyRange()
     * @returns a dataBodyRangeRequestBuilder
     */
    public dataBodyRange() : DataBodyRangeRequestBuilder {
        return new DataBodyRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookTable
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookTable | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookTable>(requestInfo, WorkbookTable, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.headerRowRange()
     * @returns a headerRowRangeRequestBuilder
     */
    public headerRowRange() : HeaderRowRangeRequestBuilder {
        return new HeaderRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Represents a collection of tables associated with the workbook. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookTable | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.range()
     * @returns a rangeRequestBuilder
     */
    public range() : RangeRequestBuilder {
        return new RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.tables.item.rows.item collection
     * @param id Unique identifier of the item
     * @returns a workbookTableRowRequestBuilder
     */
    public rowsById(id: string) : WorkbookTableRowRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTableRow_id"] = id
        return new WorkbookTableRowRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.totalRowRange()
     * @returns a totalRowRangeRequestBuilder
     */
    public totalRowRange() : TotalRowRangeRequestBuilder {
        return new TotalRowRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    };
}
