import { RequestOption } from "@microsoft/kiota-abstractions";

export interface TelemetryHandlerOptions{
    telemetryConfigurator: (url: string, requestInit: RequestInit, requestOptions?: Record<string, RequestOption>) => void
}