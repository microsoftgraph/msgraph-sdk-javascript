import {WorkbookFilter} from '../../../../../../../../models/microsoft/graph/';
import {ApplyRequestBuilder} from './apply/';
import {ApplyBottomItemsFilterRequestBuilder} from './applyBottomItemsFilter/';
import {ApplyBottomPercentFilterRequestBuilder} from './applyBottomPercentFilter/';
import {ApplyCellColorFilterRequestBuilder} from './applyCellColorFilter/';
import {ApplyCustomFilterRequestBuilder} from './applyCustomFilter/';
import {ApplyDynamicFilterRequestBuilder} from './applyDynamicFilter/';
import {ApplyFontColorFilterRequestBuilder} from './applyFontColorFilter/';
import {ApplyIconFilterRequestBuilder} from './applyIconFilter/';
import {ApplyTopItemsFilterRequestBuilder} from './applyTopItemsFilter/';
import {ApplyTopPercentFilterRequestBuilder} from './applyTopPercentFilter/';
import {ApplyValuesFilterRequestBuilder} from './applyValuesFilter/';
import {ClearRequestBuilder} from './clear/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter  */
export class FilterRequestBuilder {
    public get apply(): ApplyRequestBuilder {
        return new ApplyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyBottomItemsFilter(): ApplyBottomItemsFilterRequestBuilder {
        return new ApplyBottomItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyBottomPercentFilter(): ApplyBottomPercentFilterRequestBuilder {
        return new ApplyBottomPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyCellColorFilter(): ApplyCellColorFilterRequestBuilder {
        return new ApplyCellColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyCustomFilter(): ApplyCustomFilterRequestBuilder {
        return new ApplyCustomFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyDynamicFilter(): ApplyDynamicFilterRequestBuilder {
        return new ApplyDynamicFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyFontColorFilter(): ApplyFontColorFilterRequestBuilder {
        return new ApplyFontColorFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyIconFilter(): ApplyIconFilterRequestBuilder {
        return new ApplyIconFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyTopItemsFilter(): ApplyTopItemsFilterRequestBuilder {
        return new ApplyTopItemsFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyTopPercentFilter(): ApplyTopPercentFilterRequestBuilder {
        return new ApplyTopPercentFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get applyValuesFilter(): ApplyValuesFilterRequestBuilder {
        return new ApplyValuesFilterRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new FilterRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook/tables/{workbookTable_id}/columns/{workbookTableColumn_id}/filter{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the filter applied to the column. Read-only.
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
     * Retrieve the filter applied to the column. Read-only.
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
     * Retrieve the filter applied to the column. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookFilter | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Retrieve the filter applied to the column. Read-only.
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
     * Retrieve the filter applied to the column. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFilter
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFilter | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookFilter>(requestInfo, WorkbookFilter, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Retrieve the filter applied to the column. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookFilter | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
