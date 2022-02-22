import {Agreement, AgreementAcceptance, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsOfUseContainer extends Entity implements Parsable {
    /** Represents the current status of a user's response to a company's customizable terms of use agreement.  */
    private _agreementAcceptances?: AgreementAcceptance[] | undefined;
    /** Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD).  */
    private _agreements?: Agreement[] | undefined;
    /**
     * Instantiates a new termsOfUseContainer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the agreementAcceptances property value. Represents the current status of a user's response to a company's customizable terms of use agreement.
     * @returns a agreementAcceptance
     */
    public get agreementAcceptances() {
        return this._agreementAcceptances;
    };
    /**
     * Gets the agreements property value. Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD).
     * @returns a agreement
     */
    public get agreements() {
        return this._agreements;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["agreementAcceptances", (o, n) => { (o as unknown as TermsOfUseContainer).agreementAcceptances = n.getCollectionOfObjectValues<AgreementAcceptance>(AgreementAcceptance); }],
            ["agreements", (o, n) => { (o as unknown as TermsOfUseContainer).agreements = n.getCollectionOfObjectValues<Agreement>(Agreement); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("agreementAcceptances", this.agreementAcceptances);
        writer.writeCollectionOfObjectValues<Agreement>("agreements", this.agreements);
    };
    /**
     * Sets the agreementAcceptances property value. Represents the current status of a user's response to a company's customizable terms of use agreement.
     * @param value Value to set for the agreementAcceptances property.
     */
    public set agreementAcceptances(value: AgreementAcceptance[] | undefined) {
        this._agreementAcceptances = value;
    };
    /**
     * Sets the agreements property value. Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD).
     * @param value Value to set for the agreements property.
     */
    public set agreements(value: Agreement[] | undefined) {
        this._agreements = value;
    };
}
