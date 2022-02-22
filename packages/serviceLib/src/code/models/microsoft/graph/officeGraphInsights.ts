import {Entity, SharedInsight, Trending, UsedInsight} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OfficeGraphInsights extends Entity implements Parsable {
    /** Calculated relationship identifying documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for Business and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.  */
    private _shared?: SharedInsight[] | undefined;
    /** Calculated relationship identifying documents trending around a user. Trending documents are calculated based on activity of the user's closest network of people and include files stored in OneDrive for Business and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.  */
    private _trending?: Trending[] | undefined;
    /** Calculated relationship identifying the latest documents viewed or modified by a user, including OneDrive for Business and SharePoint documents, ranked by recency of use.  */
    private _used?: UsedInsight[] | undefined;
    /**
     * Instantiates a new officeGraphInsights and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the shared property value. Calculated relationship identifying documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for Business and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
     * @returns a sharedInsight
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Gets the trending property value. Calculated relationship identifying documents trending around a user. Trending documents are calculated based on activity of the user's closest network of people and include files stored in OneDrive for Business and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.
     * @returns a trending
     */
    public get trending() {
        return this._trending;
    };
    /**
     * Gets the used property value. Calculated relationship identifying the latest documents viewed or modified by a user, including OneDrive for Business and SharePoint documents, ranked by recency of use.
     * @returns a usedInsight
     */
    public get used() {
        return this._used;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["shared", (o, n) => { (o as unknown as OfficeGraphInsights).shared = n.getCollectionOfObjectValues<SharedInsight>(SharedInsight); }],
            ["trending", (o, n) => { (o as unknown as OfficeGraphInsights).trending = n.getCollectionOfObjectValues<Trending>(Trending); }],
            ["used", (o, n) => { (o as unknown as OfficeGraphInsights).used = n.getCollectionOfObjectValues<UsedInsight>(UsedInsight); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SharedInsight>("shared", this.shared);
        writer.writeCollectionOfObjectValues<Trending>("trending", this.trending);
        writer.writeCollectionOfObjectValues<UsedInsight>("used", this.used);
    };
    /**
     * Sets the shared property value. Calculated relationship identifying documents shared with or by the user. This includes URLs, file attachments, and reference attachments to OneDrive for Business and SharePoint files found in Outlook messages and meetings. This also includes URLs and reference attachments to Teams conversations. Ordered by recency of share.
     * @param value Value to set for the shared property.
     */
    public set shared(value: SharedInsight[] | undefined) {
        this._shared = value;
    };
    /**
     * Sets the trending property value. Calculated relationship identifying documents trending around a user. Trending documents are calculated based on activity of the user's closest network of people and include files stored in OneDrive for Business and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before.
     * @param value Value to set for the trending property.
     */
    public set trending(value: Trending[] | undefined) {
        this._trending = value;
    };
    /**
     * Sets the used property value. Calculated relationship identifying the latest documents viewed or modified by a user, including OneDrive for Business and SharePoint documents, ranked by recency of use.
     * @param value Value to set for the used property.
     */
    public set used(value: UsedInsight[] | undefined) {
        this._used = value;
    };
}
