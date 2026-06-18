/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path= "../../shims.d.ts" />
export type { BatchRequestStep, BatchRequestData, RequestData, BatchRequestBody } from "../content/BatchRequestContent";
export { BatchResponseContent } from "../content/BatchResponseContent";

export { AuthenticationHandler } from "../middleware/AuthenticationHandler";
export { HTTPMessageHandler } from "../middleware/HTTPMessageHandler";
export type { Middleware } from "../middleware/IMiddleware";
export { RetryHandler } from "../middleware/RetryHandler";
export { RedirectHandler } from "../middleware/RedirectHandler";
export { TelemetryHandler } from "../middleware/TelemetryHandler";
export { MiddlewareFactory } from "../middleware/MiddlewareFactory";
export { AuthenticationHandlerOptions } from "../middleware/options/AuthenticationHandlerOptions";
export type { MiddlewareOptions } from "../middleware/options/IMiddlewareOptions";
export type { ShouldRetry } from "../middleware/options/RetryHandlerOptions";
export { RetryHandlerOptions } from "../middleware/options/RetryHandlerOptions";
export type { ShouldRedirect } from "../middleware/options/RedirectHandlerOptions";
export { RedirectHandlerOptions } from "../middleware/options/RedirectHandlerOptions";
export { FeatureUsageFlag, TelemetryHandlerOptions } from "../middleware/options/TelemetryHandlerOptions";
export { ChaosHandlerOptions } from "../middleware/options/ChaosHandlerOptions";
export { ChaosStrategy } from "../middleware/options/ChaosStrategy";
export { ChaosHandler } from "../middleware/ChaosHandler";

export type { SliceType, LargeFileUploadTaskOptions, LargeFileUploadSession, FileObject } from "../tasks/LargeFileUploadTask";
export { LargeFileUploadTask } from "../tasks/LargeFileUploadTask";
export type { OneDriveLargeFileUploadOptions } from "../tasks/OneDriveLargeFileUploadTask";
export { OneDriveLargeFileUploadTask } from "../tasks/OneDriveLargeFileUploadTask";
export { getValidRangeSize } from "../tasks/OneDriveLargeFileUploadTaskUtil";
export { StreamUpload } from "../tasks/FileUploadTask/FileObjectClasses/StreamUpload";
export { FileUpload } from "../tasks/FileUploadTask/FileObjectClasses/FileUpload";
export { UploadResult } from "../tasks/FileUploadTask/UploadResult";
export type { UploadEventHandlers } from "../tasks/FileUploadTask/Interfaces/IUploadEventHandlers";
export { Range } from "../tasks/FileUploadTask/Range";
export type { PageIteratorCallback, PageCollection, GraphRequestOptions } from "../tasks/PageIterator";
export { PageIterator } from "../tasks/PageIterator";

export { Client } from "../Client";
export { CustomAuthenticationProvider } from "../CustomAuthenticationProvider";
export { GraphError } from "../GraphError";
export { GraphClientError } from "../GraphClientError";
export { GraphRequest } from "../GraphRequest";
export type { AuthProvider } from "../IAuthProvider";
export type { AuthenticationProvider } from "../IAuthenticationProvider";
export type { AuthenticationProviderOptions } from "../IAuthenticationProviderOptions";
export type { AuthProviderCallback } from "../IAuthProviderCallback";
export type { ClientOptions } from "../IClientOptions";
export type { Context } from "../IContext";
export type { NodeFetchInit, FetchOptions } from "../IFetchOptions";
export type { GraphRequestCallback } from "../IGraphRequestCallback";
export type { Options } from "../IOptions";
export { ResponseType } from "../ResponseType";
