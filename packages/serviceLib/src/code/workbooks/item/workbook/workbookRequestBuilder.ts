import {Workbook} from '../../../models/microsoft/graph/';
import {ApplicationRequestBuilder} from './application/';
import {CloseSessionRequestBuilder} from './closeSession/';
import {CommentsRequestBuilder} from './comments/';
import {WorkbookCommentRequestBuilder} from './comments/item/';
import {CreateSessionRequestBuilder} from './createSession/';
import {FunctionsRequestBuilder} from './functions/';
import {NamesRequestBuilder} from './names/';
import {WorkbookNamedItemRequestBuilder} from './names/item/';
import {OperationsRequestBuilder} from './operations/';
import {WorkbookOperationRequestBuilder} from './operations/item/';
import {RefreshSessionRequestBuilder} from './refreshSession/';
import {SessionInfoResourceWithKeyRequestBuilder} from './sessionInfoResourceWithKey/';
import {TableRowOperationResultWithKeyRequestBuilder} from './tableRowOperationResultWithKey/';
import {TablesRequestBuilder} from './tables/';
import {WorkbookTableRequestBuilder} from './tables/item/';
import {WorksheetsRequestBuilder} from './worksheets/';
import {WorkbookWorksheetRequestBuilder} from './worksheets/item/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook  */
export class WorkbookRequestBuilder {
    public get application(): ApplicationRequestBuilder {
        return new ApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get closeSession(): CloseSessionRequestBuilder {
        return new CloseSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get comments(): CommentsRequestBuilder {
        return new CommentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get createSession(): CreateSessionRequestBuilder {
        return new CreateSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get functions(): FunctionsRequestBuilder {
        return new FunctionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get names(): NamesRequestBuilder {
        return new NamesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get refreshSession(): RefreshSessionRequestBuilder {
        return new RefreshSessionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get tables(): TablesRequestBuilder {
        return new TablesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get worksheets(): WorksheetsRequestBuilder {
        return new WorksheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.comments.item collection
     * @param id Unique identifier of the item
     * @returns a workbookCommentRequestBuilder
     */
    public commentsById(id: string) : WorkbookCommentRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookComment_id"] = id
        return new WorkbookCommentRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WorkbookRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook{?expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[]
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Workbook | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
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
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Workbook
     */
    public get(q?: {
                    expand?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Workbook | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Workbook>(requestInfo, Workbook, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.names.item collection
     * @param id Unique identifier of the item
     * @returns a workbookNamedItemRequestBuilder
     */
    public namesById(id: string) : WorkbookNamedItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookNamedItem_id"] = id
        return new WorkbookNamedItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.operations.item collection
     * @param id Unique identifier of the item
     * @returns a workbookOperationRequestBuilder
     */
    public operationsById(id: string) : WorkbookOperationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookOperation_id"] = id
        return new WorkbookOperationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Workbook | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/microsoft.graph.sessionInfoResource(key='{key}')
     * @param key Usage: key={key}
     * @returns a sessionInfoResourceWithKeyRequestBuilder
     */
    public sessionInfoResourceWithKey(key: string | undefined) : SessionInfoResourceWithKeyRequestBuilder {
        if(!key) throw new Error("key cannot be undefined");
        return new SessionInfoResourceWithKeyRequestBuilder(this.pathParameters, this.requestAdapter, key);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/microsoft.graph.tableRowOperationResult(key='{key}')
     * @param key Usage: key={key}
     * @returns a tableRowOperationResultWithKeyRequestBuilder
     */
    public tableRowOperationResultWithKey(key: string | undefined) : TableRowOperationResultWithKeyRequestBuilder {
        if(!key) throw new Error("key cannot be undefined");
        return new TableRowOperationResultWithKeyRequestBuilder(this.pathParameters, this.requestAdapter, key);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.tables.item collection
     * @param id Unique identifier of the item
     * @returns a workbookTableRequestBuilder
     */
    public tablesById(id: string) : WorkbookTableRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookTable_id"] = id
        return new WorkbookTableRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.worksheets.item collection
     * @param id Unique identifier of the item
     * @returns a workbookWorksheetRequestBuilder
     */
    public worksheetsById(id: string) : WorkbookWorksheetRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookWorksheet_id"] = id
        return new WorkbookWorksheetRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
