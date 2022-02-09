/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path= "./../shims.d.ts" />

export { BatchRequestBody, RequestData, BatchRequestContent, BatchRequestData, BatchRequestStep } from "./content/BatchRequestContent";
export { BatchResponseBody, BatchResponseContent } from "./content/BatchResponseContent";

export { AuthenticationHandler } from "./middleware/AuthenticationHandler";
export { HTTPMessageHandler } from "./middleware/HTTPMessageHandler";
export { Middleware } from "./middleware/IMiddleware";
export { RetryHandler } from "./middleware/RetryHandler";
export { RedirectHandler } from "./middleware/RedirectHandler";
export { TelemetryHandler } from "./middleware/TelemetryHandler";
export { MiddlewareFactory } from "./middleware/MiddlewareFactory";
export { AuthenticationHandlerOptions } from "./middleware/options/AuthenticationHandlerOptions";
export { MiddlewareOptions } from "./middleware/options/IMiddlewareOptions";
export { RetryHandlerOptions, ShouldRetry } from "./middleware/options/RetryHandlerOptions";
export { RedirectHandlerOptions, ShouldRedirect } from "./middleware/options/RedirectHandlerOptions";
export { FeatureUsageFlag, TelemetryHandlerOptions } from "./middleware/options/TelemetryHandlerOptions";
export { ChaosHandlerOptions } from "./middleware/options/ChaosHandlerOptions";
export { ChaosStrategy } from "./middleware/options/ChaosStrategy";
export { ChaosHandler } from "./middleware/ChaosHandler";

export { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions, SliceType } from "./tasks/LargeFileUploadTask";
export { OneDriveLargeFileUploadOptions, OneDriveLargeFileUploadTask } from "./tasks/OneDriveLargeFileUploadTask";
export { getValidRangeSize } from "./tasks/OneDriveLargeFileUploadTaskUtil";
export { StreamUpload } from "./tasks/FileUploadTask/FileObjectClasses/StreamUpload";
export { FileUpload } from "./tasks/FileUploadTask/FileObjectClasses/FileUpload";
export { UploadResult } from "./tasks/FileUploadTask/UploadResult";
export { UploadEventHandlers } from "./tasks/FileUploadTask/Interfaces/IUploadEventHandlers";
export { Range } from "./tasks/FileUploadTask/Range";
export { GraphRequestOptions, PageCollection, PageIterator, PageIteratorCallback } from "./tasks/PageIterator";

export { Client } from "./Client";
export { CustomAuthenticationProvider } from "./CustomAuthenticationProvider";
export { GraphError } from "./GraphError";
export { GraphClientError } from "./GraphClientError";
export { GraphRequest, URLComponents } from "./GraphRequest";
export { AuthProvider } from "./IAuthProvider";
export { AuthenticationProvider } from "./IAuthenticationProvider";
export { AuthenticationProviderOptions } from "./IAuthenticationProviderOptions";
export { AuthProviderCallback } from "./IAuthProviderCallback";
export { ClientOptions } from "./IClientOptions";
export { Context } from "./IContext";
export { FetchOptions, NodeFetchInit } from "./IFetchOptions";
export { GraphRequestCallback } from "./IGraphRequestCallback";
export { Options } from "./IOptions";
export { ResponseType } from "./ResponseType";
