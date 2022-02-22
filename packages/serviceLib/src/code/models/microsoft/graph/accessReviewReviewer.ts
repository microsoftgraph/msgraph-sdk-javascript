import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewReviewer extends Entity implements Parsable {
    /** The date when the reviewer was added for the access review.  */
    private _createdDateTime?: Date | undefined;
    /** Name of reviewer.  */
    private _displayName?: string | undefined;
    /** User principal name of the reviewer.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new accessReviewReviewer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date when the reviewer was added for the access review.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the displayName property value. Name of reviewer.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the userPrincipalName property value. User principal name of the reviewer.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as AccessReviewReviewer).createdDateTime = n.getDateValue(); }],
            ["displayName", (o, n) => { (o as unknown as AccessReviewReviewer).displayName = n.getStringValue(); }],
            ["userPrincipalName", (o, n) => { (o as unknown as AccessReviewReviewer).userPrincipalName = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Sets the createdDateTime property value. The date when the reviewer was added for the access review.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the displayName property value. Name of reviewer.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the userPrincipalName property value. User principal name of the reviewer.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
