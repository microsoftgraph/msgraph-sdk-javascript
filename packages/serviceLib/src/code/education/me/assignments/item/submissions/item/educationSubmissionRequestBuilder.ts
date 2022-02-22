import {EducationSubmission} from '../../../../../../models/microsoft/graph/';
import {OutcomesRequestBuilder} from './outcomes/';
import {EducationOutcomeRequestBuilder} from './outcomes/item/';
import {ReassignRequestBuilder} from './reassign/';
import {ResourcesRequestBuilder} from './resources/';
import {EducationSubmissionResourceRequestBuilder as ic9d760fc7666ff30121831d0ad0267913c607d6cc3c0945ca70d19f78af4f709} from './resources/item/';
import {ReturnRequestBuilder} from './return_escaped/';
import {SetUpResourcesFolderRequestBuilder} from './setUpResourcesFolder/';
import {SubmitRequestBuilder} from './submit/';
import {SubmittedResourcesRequestBuilder} from './submittedResources/';
import {EducationSubmissionResourceRequestBuilder as i3a5aae13019b2841262d620f1b01e1ed1120658e1a0b352f2ed17dbb24e27754} from './submittedResources/item/';
import {UnsubmitRequestBuilder} from './unsubmit/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}  */
export class EducationSubmissionRequestBuilder {
    public get outcomes(): OutcomesRequestBuilder {
        return new OutcomesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get reassign(): ReassignRequestBuilder {
        return new ReassignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get return_escaped(): ReturnRequestBuilder {
        return new ReturnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get setUpResourcesFolder(): SetUpResourcesFolderRequestBuilder {
        return new SetUpResourcesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get submit(): SubmitRequestBuilder {
        return new SubmitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get submittedResources(): SubmittedResourcesRequestBuilder {
        return new SubmittedResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unsubmit(): UnsubmitRequestBuilder {
        return new UnsubmitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new EducationSubmissionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/me/assignments/{educationAssignment_id}/submissions/{educationSubmission_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationSubmission | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationSubmission
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationSubmission | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<EducationSubmission>(requestInfo, EducationSubmission, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.me.assignments.item.submissions.item.outcomes.item collection
     * @param id Unique identifier of the item
     * @returns a educationOutcomeRequestBuilder
     */
    public outcomesById(id: string) : EducationOutcomeRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationOutcome_id"] = id
        return new EducationOutcomeRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationSubmission | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.me.assignments.item.submissions.item.resources.item collection
     * @param id Unique identifier of the item
     * @returns a educationSubmissionResourceRequestBuilder
     */
    public resourcesById(id: string) : ic9d760fc7666ff30121831d0ad0267913c607d6cc3c0945ca70d19f78af4f709 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource_id"] = id
        return new ic9d760fc7666ff30121831d0ad0267913c607d6cc3c0945ca70d19f78af4f709(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.me.assignments.item.submissions.item.submittedResources.item collection
     * @param id Unique identifier of the item
     * @returns a educationSubmissionResourceRequestBuilder
     */
    public submittedResourcesById(id: string) : i3a5aae13019b2841262d620f1b01e1ed1120658e1a0b352f2ed17dbb24e27754 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource_id"] = id
        return new i3a5aae13019b2841262d620f1b01e1ed1120658e1a0b352f2ed17dbb24e27754(urlTplParams, this.requestAdapter);
    };
}
