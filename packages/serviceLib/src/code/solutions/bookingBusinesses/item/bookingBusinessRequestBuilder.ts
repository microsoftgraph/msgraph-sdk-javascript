import {BookingBusiness} from '../../../models/microsoft/graph/';
import {AppointmentsRequestBuilder} from './appointments/';
import {BookingAppointmentRequestBuilder as ib43e0a6545a0a1708df4e4f0b081e80dfce2196adaf4a1cf1065447d0ac00f83} from './appointments/item/';
import {CalendarViewRequestBuilder} from './calendarView/';
import {BookingAppointmentRequestBuilder as i762a96e4d62f76b431d838784c156b1adc03f140a8291f40a63be3841c0294f8} from './calendarView/item/';
import {CustomersRequestBuilder} from './customers/';
import {BookingCustomerBaseRequestBuilder} from './customers/item/';
import {CustomQuestionsRequestBuilder} from './customQuestions/';
import {BookingCustomQuestionRequestBuilder} from './customQuestions/item/';
import {PublishRequestBuilder} from './publish/';
import {ServicesRequestBuilder} from './services/';
import {BookingServiceRequestBuilder} from './services/item/';
import {StaffMembersRequestBuilder} from './staffMembers/';
import {BookingStaffMemberBaseRequestBuilder} from './staffMembers/item/';
import {UnpublishRequestBuilder} from './unpublish/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /solutions/bookingBusinesses/{bookingBusiness-id}  */
export class BookingBusinessRequestBuilder {
    public get appointments(): AppointmentsRequestBuilder {
        return new AppointmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get calendarView(): CalendarViewRequestBuilder {
        return new CalendarViewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get customers(): CustomersRequestBuilder {
        return new CustomersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get customQuestions(): CustomQuestionsRequestBuilder {
        return new CustomQuestionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get services(): ServicesRequestBuilder {
        return new ServicesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get staffMembers(): StaffMembersRequestBuilder {
        return new StaffMembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unpublish(): UnpublishRequestBuilder {
        return new UnpublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.appointments.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentRequestBuilder
     */
    public appointmentsById(id: string) : ib43e0a6545a0a1708df4e4f0b081e80dfce2196adaf4a1cf1065447d0ac00f83 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment_id"] = id
        return new ib43e0a6545a0a1708df4e4f0b081e80dfce2196adaf4a1cf1065447d0ac00f83(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.calendarView.item collection
     * @param id Unique identifier of the item
     * @returns a bookingAppointmentRequestBuilder
     */
    public calendarViewById(id: string) : i762a96e4d62f76b431d838784c156b1adc03f140a8291f40a63be3841c0294f8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingAppointment_id"] = id
        return new i762a96e4d62f76b431d838784c156b1adc03f140a8291f40a63be3841c0294f8(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new BookingBusinessRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/solutions/bookingBusinesses/{bookingBusiness_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
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
     * Get bookingBusinesses from solutions
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
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: BookingBusiness | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.customers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomerBaseRequestBuilder
     */
    public customersById(id: string) : BookingCustomerBaseRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomerBase_id"] = id
        return new BookingCustomerBaseRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.customQuestions.item collection
     * @param id Unique identifier of the item
     * @returns a bookingCustomQuestionRequestBuilder
     */
    public customQuestionsById(id: string) : BookingCustomQuestionRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingCustomQuestion_id"] = id
        return new BookingCustomQuestionRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property bookingBusinesses for solutions
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
     * Get bookingBusinesses from solutions
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BookingBusiness
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<BookingBusiness | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<BookingBusiness>(requestInfo, BookingBusiness, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property bookingBusinesses in solutions
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: BookingBusiness | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.services.item collection
     * @param id Unique identifier of the item
     * @returns a bookingServiceRequestBuilder
     */
    public servicesById(id: string) : BookingServiceRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingService_id"] = id
        return new BookingServiceRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.solutions.bookingBusinesses.item.staffMembers.item collection
     * @param id Unique identifier of the item
     * @returns a bookingStaffMemberBaseRequestBuilder
     */
    public staffMembersById(id: string) : BookingStaffMemberBaseRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bookingStaffMemberBase_id"] = id
        return new BookingStaffMemberBaseRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
