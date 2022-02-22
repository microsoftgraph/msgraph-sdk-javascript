import {Entity} from '../../../../../../models/microsoft/graph/';
import {CalendarSharingMessageRequestBuilder} from './calendarSharingMessage/';
import {ManagedAppProtectionRequestBuilder} from './managedAppProtection/';
import {MobileAppContentFileRequestBuilder} from './mobileAppContentFile/';
import {PrintDocumentRequestBuilder} from './printDocument/';
import {PrintJobRequestBuilder} from './printJob/';
import {RefRequestBuilder} from './ref/';
import {ScheduleChangeRequestRequestBuilder} from './scheduleChangeRequest/';
import {TargetedManagedAppProtectionRequestBuilder} from './targetedManagedAppProtection/';
import {WindowsInformationProtectionRequestBuilder} from './windowsInformationProtection/';
import {WorkbookRangeRequestBuilder} from './workbookRange/';
import {WorkbookRangeFillRequestBuilder} from './workbookRangeFill/';
import {WorkbookRangeFormatRequestBuilder} from './workbookRangeFormat/';
import {WorkbookRangeSortRequestBuilder} from './workbookRangeSort/';
import {WorkbookRangeViewRequestBuilder} from './workbookRangeView/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod  */
export class LastSharedMethodRequestBuilder {
    public get calendarSharingMessage(): CalendarSharingMessageRequestBuilder {
        return new CalendarSharingMessageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get managedAppProtection(): ManagedAppProtectionRequestBuilder {
        return new ManagedAppProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mobileAppContentFile(): MobileAppContentFileRequestBuilder {
        return new MobileAppContentFileRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get printDocument(): PrintDocumentRequestBuilder {
        return new PrintDocumentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get printJob(): PrintJobRequestBuilder {
        return new PrintJobRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get scheduleChangeRequest(): ScheduleChangeRequestRequestBuilder {
        return new ScheduleChangeRequestRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get targetedManagedAppProtection(): TargetedManagedAppProtectionRequestBuilder {
        return new TargetedManagedAppProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get windowsInformationProtection(): WindowsInformationProtectionRequestBuilder {
        return new WindowsInformationProtectionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbookRange(): WorkbookRangeRequestBuilder {
        return new WorkbookRangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbookRangeFill(): WorkbookRangeFillRequestBuilder {
        return new WorkbookRangeFillRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbookRangeFormat(): WorkbookRangeFormatRequestBuilder {
        return new WorkbookRangeFormatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbookRangeSort(): WorkbookRangeSortRequestBuilder {
        return new WorkbookRangeSortRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workbookRangeView(): WorkbookRangeViewRequestBuilder {
        return new WorkbookRangeViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new LastSharedMethodRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/insights/shared/{sharedInsight_id}/lastSharedMethod{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Get lastSharedMethod from users
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
     * Get lastSharedMethod from users
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Entity
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Entity | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Entity>(requestInfo, Entity, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
