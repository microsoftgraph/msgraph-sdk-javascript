import {Entity, ServiceHealth, ServiceHealthIssue, ServiceUpdateMessage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceAnnouncement extends Entity implements Parsable {
    /** A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.  */
    private _healthOverviews?: ServiceHealth[] | undefined;
    /** A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.  */
    private _issues?: ServiceHealthIssue[] | undefined;
    /** A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.  */
    private _messages?: ServiceUpdateMessage[] | undefined;
    /**
     * Instantiates a new serviceAnnouncement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the healthOverviews property value. A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a serviceHealth
     */
    public get healthOverviews() {
        return this._healthOverviews;
    };
    /**
     * Gets the issues property value. A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a serviceHealthIssue
     */
    public get issues() {
        return this._issues;
    };
    /**
     * Gets the messages property value. A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @returns a serviceUpdateMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["healthOverviews", (o, n) => { (o as unknown as ServiceAnnouncement).healthOverviews = n.getCollectionOfObjectValues<ServiceHealth>(ServiceHealth); }],
            ["issues", (o, n) => { (o as unknown as ServiceAnnouncement).issues = n.getCollectionOfObjectValues<ServiceHealthIssue>(ServiceHealthIssue); }],
            ["messages", (o, n) => { (o as unknown as ServiceAnnouncement).messages = n.getCollectionOfObjectValues<ServiceUpdateMessage>(ServiceUpdateMessage); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ServiceHealth>("healthOverviews", this.healthOverviews);
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("issues", this.issues);
        writer.writeCollectionOfObjectValues<ServiceUpdateMessage>("messages", this.messages);
    };
    /**
     * Sets the healthOverviews property value. A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the healthOverviews property.
     */
    public set healthOverviews(value: ServiceHealth[] | undefined) {
        this._healthOverviews = value;
    };
    /**
     * Sets the issues property value. A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the issues property.
     */
    public set issues(value: ServiceHealthIssue[] | undefined) {
        this._issues = value;
    };
    /**
     * Sets the messages property value. A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ServiceUpdateMessage[] | undefined) {
        this._messages = value;
    };
}
