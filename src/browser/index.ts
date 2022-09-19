/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path= "../../shims.d.ts" />
export { BaseBearerTokenAuthenticationProvider, AccessTokenProvider, RequestOption } from "@microsoft/kiota-abstractions";
export { RetryHandler, RedirectHandler, TelemetryHandler, RetryHandlerOptions, HttpClient, TelemetryHandlerOptions, TelemetryHandlerOptionsKey, RetryHandlerOptionKey } from "@microsoft/kiota-http-fetchlibrary";

export { BatchRequestBody, RequestData, BatchRequestContent, BatchRequestData, BatchRequestStep } from "../content/BatchRequestContent";
export { BatchResponseBody, BatchResponseContent } from "../content/BatchResponseContent";

export { FeatureUsageFlag } from "../middleware/Telemetry/TelemetryFeatureUsageFlag";
export { ChaosHandlerOptions } from "../middleware/options/ChaosHandlerOptions";
export { ChaosStrategy } from "../middleware/options/ChaosStrategy";
export { ChaosHandler } from "../middleware/ChaosHandler";

export { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions, SliceType } from "../tasks/LargeFileUploadTask";
export { OneDriveLargeFileUploadOptions, OneDriveLargeFileUploadTask } from "../tasks/OneDriveLargeFileUploadTask";
export { getValidRangeSize } from "../tasks/OneDriveLargeFileUploadTaskUtil";
export { StreamUpload } from "../tasks/FileUploadTask/FileObjectClasses/StreamUpload";
export { FileUpload } from "../tasks/FileUploadTask/FileObjectClasses/FileUpload";
export { UploadResult } from "../tasks/FileUploadTask/UploadResult";
export { UploadEventHandlers } from "../tasks/FileUploadTask/Interfaces/IUploadEventHandlers";
export { Range } from "../tasks/FileUploadTask/Range";
export { GraphRequestOptions, PageCollection, PageIterator, PageIteratorCallback } from "../tasks/PageIterator";

export { Client } from "../Client";
export { GraphError } from "../GraphError";
export { GraphClientError } from "../GraphClientError";
export { GraphRequest, URLComponents } from "../GraphRequest";

export { ClientOptions } from "../IClientOptions";
export { FetchOptions, NodeFetchInit } from "../IFetchOptions";
export { GraphRequestCallback } from "../IGraphRequestCallback";

export { ResponseType } from "../ResponseType";
export { SimpleAuthenticationProvider } from "../authentication/SimpleAuthentication/SimpleAuthenticationProvider";
export { SimpleAccessTokenProvider } from "../authentication/SimpleAuthentication/SimpleAccessTokenProvider";

export { GraphBaseClient } from "../requestBuilderUtils/GraphBaseClient";
export { GraphSDKConfig } from "../requestBuilderUtils/GraphSDKConfig";

export { coreSdkVersionValue, getGraphTelemetryCallback, CORE_PRODUCT_NAME, graphTelemetryCallback } from "../middleware/Telemetry/TelemetryUtil";
export { GraphTelemetryConfig } from "../middleware/Telemetry/GraphTelemetryConfig";

export { getDefaultMiddlewareChain } from "./MiddlewareFactory";
export { GRAPH_API_VERSION, GRAPH_BASE_URL, GRAPH_URLS } from "../Constants";
export { isCustomHost, isGraphURL, updateAndReturnAllAllowedHosts } from "../GraphRequestUtil";

export { QueryOptions } from "../QueryOptions";
export { getGraphRestSDKClient, GraphRestSDKClient } from "../rest/graphRestClient";
export { GraphApis } from "../rest/graphAPIs";

