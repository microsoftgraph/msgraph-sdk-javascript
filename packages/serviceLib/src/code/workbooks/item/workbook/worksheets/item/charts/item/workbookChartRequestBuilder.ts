import {WorkbookChart} from '../../../../../../../models/microsoft/graph/';
import {AxesRequestBuilder} from './axes/';
import {DataLabelsRequestBuilder} from './dataLabels/';
import {FormatRequestBuilder} from './format/';
import {ImageRequestBuilder} from './image/';
import {ImageWithWidthRequestBuilder} from './imageWithWidth/';
import {ImageWithWidthWithHeightRequestBuilder} from './imageWithWidthWithHeight/';
import {ImageWithWidthWithHeightWithFittingModeRequestBuilder} from './imageWithWidthWithHeightWithFittingMode/';
import {LegendRequestBuilder} from './legend/';
import {SeriesRequestBuilder} from './series/';
import {WorkbookChartSeriesRequestBuilder} from './series/item/';
import {SetDataRequestBuilder} from './setData/';
import {SetPositionRequestBuilder} from './setPosition/';
import {TitleRequestBuilder} from './title/';
import {WorksheetRequestBuilder} from './worksheet/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}  */
export class WorkbookChartRequestBuilder {
    public get axes(): AxesRequestBuilder {
        return new AxesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dataLabels(): DataLabelsRequestBuilder {
        return new DataLabelsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get format(): FormatRequestBuilder {
        return new FormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get legend(): LegendRequestBuilder {
        return new LegendRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get series(): SeriesRequestBuilder {
        return new SeriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get setData(): SetDataRequestBuilder {
        return new SetDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get setPosition(): SetPositionRequestBuilder {
        return new SetPositionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get title(): TitleRequestBuilder {
        return new TitleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get worksheet(): WorksheetRequestBuilder {
        return new WorksheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WorkbookChartRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook/worksheets/{workbookWorksheet_id}/charts/{workbookChart_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Returns collection of charts that are part of the worksheet. Read-only.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookChart | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Returns collection of charts that are part of the worksheet. Read-only.
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
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChart
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookChart | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookChart>(requestInfo, WorkbookChart, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image()
     * @returns a imageRequestBuilder
     */
    public image() : ImageRequestBuilder {
        return new ImageRequestBuilder(this.pathParameters, this.requestAdapter);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image(width={width})
     * @param width Usage: width={width}
     * @returns a imageWithWidthRequestBuilder
     */
    public imageWithWidth(width: number | undefined) : ImageWithWidthRequestBuilder {
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthRequestBuilder(this.pathParameters, this.requestAdapter, width);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image(width={width},height={height})
     * @param height Usage: height={height}
     * @param width Usage: width={width}
     * @returns a imageWithWidthWithHeightRequestBuilder
     */
    public imageWithWidthWithHeight(width: number | undefined, height: number | undefined) : ImageWithWidthWithHeightRequestBuilder {
        if(!height) throw new Error("height cannot be undefined");
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthWithHeightRequestBuilder(this.pathParameters, this.requestAdapter, width, height);
    };
    /**
     * Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.image(width={width},height={height},fittingMode='{fittingMode}')
     * @param fittingMode Usage: fittingMode={fittingMode}
     * @param height Usage: height={height}
     * @param width Usage: width={width}
     * @returns a imageWithWidthWithHeightWithFittingModeRequestBuilder
     */
    public imageWithWidthWithHeightWithFittingMode(width: number | undefined, height: number | undefined, fittingMode: string | undefined) : ImageWithWidthWithHeightWithFittingModeRequestBuilder {
        if(!fittingMode) throw new Error("fittingMode cannot be undefined");
        if(!height) throw new Error("height cannot be undefined");
        if(!width) throw new Error("width cannot be undefined");
        return new ImageWithWidthWithHeightWithFittingModeRequestBuilder(this.pathParameters, this.requestAdapter, width, height, fittingMode);
    };
    /**
     * Returns collection of charts that are part of the worksheet. Read-only.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookChart | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.workbooks.item.workbook.worksheets.item.charts.item.series.item collection
     * @param id Unique identifier of the item
     * @returns a workbookChartSeriesRequestBuilder
     */
    public seriesById(id: string) : WorkbookChartSeriesRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["workbookChartSeries_id"] = id
        return new WorkbookChartSeriesRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
