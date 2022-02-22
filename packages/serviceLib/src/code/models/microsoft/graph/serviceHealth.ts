import {Entity, ServiceHealthIssue, ServiceHealthStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealth extends Entity implements Parsable {
    /** A collection of issues that happened on the service, with detailed information for each issue.  */
    private _issues?: ServiceHealthIssue[] | undefined;
    /** The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant.  */
    private _service?: string | undefined;
    /** Show the overral service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.  */
    private _status?: ServiceHealthStatus | undefined;
    /**
     * Instantiates a new serviceHealth and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the issues property value. A collection of issues that happened on the service, with detailed information for each issue.
     * @returns a serviceHealthIssue
     */
    public get issues() {
        return this._issues;
    };
    /**
     * Gets the service property value. The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Gets the status property value. Show the overral service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @returns a serviceHealthStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["issues", (o, n) => { (o as unknown as ServiceHealth).issues = n.getCollectionOfObjectValues<ServiceHealthIssue>(ServiceHealthIssue); }],
            ["service", (o, n) => { (o as unknown as ServiceHealth).service = n.getStringValue(); }],
            ["status", (o, n) => { (o as unknown as ServiceHealth).status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("issues", this.issues);
        writer.writeStringValue("service", this.service);
        writer.writeEnumValue<ServiceHealthStatus>("status", this.status);
    };
    /**
     * Sets the issues property value. A collection of issues that happened on the service, with detailed information for each issue.
     * @param value Value to set for the issues property.
     */
    public set issues(value: ServiceHealthIssue[] | undefined) {
        this._issues = value;
    };
    /**
     * Sets the service property value. The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Sets the status property value. Show the overral service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values.
     * @param value Value to set for the status property.
     */
    public set status(value: ServiceHealthStatus | undefined) {
        this._status = value;
    };
}
