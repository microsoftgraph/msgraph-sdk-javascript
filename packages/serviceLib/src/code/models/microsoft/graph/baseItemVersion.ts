import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {Entity, IdentitySet, PublicationFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BaseItemVersion extends Entity implements Parsable {
    /** Identity of the user which last modified the version. Read-only.  */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the version was last modified. Read-only.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Indicates the publication status of this particular version. Read-only.  */
    private _publication?: PublicationFacet | undefined;
    /**
     * Instantiates a new baseItemVersion and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["lastModifiedBy", (o, n) => { (o as unknown as BaseItemVersion).lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as BaseItemVersion).lastModifiedDateTime = n.getDateValue(); }],
            ["publication", (o, n) => { (o as unknown as BaseItemVersion).publication = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user which last modified the version. Read-only.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user which last modified the version. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time the version was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time the version was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the publication property value. Indicates the publication status of this particular version. Read-only.
     * @returns a publicationFacet
     */
    public get publication() {
        return this._publication;
    };
    /**
     * Sets the publication property value. Indicates the publication status of this particular version. Read-only.
     * @param value Value to set for the publication property.
     */
    public set publication(value: PublicationFacet | undefined) {
        this._publication = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<PublicationFacet>("publication", this.publication);
    };
}
