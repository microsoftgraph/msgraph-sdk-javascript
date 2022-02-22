import {CertificateAuthority, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificateBasedAuthConfiguration extends Entity implements Parsable {
    /** Collection of certificate authorities which creates a trusted certificate chain.  */
    private _certificateAuthorities?: CertificateAuthority[] | undefined;
    /**
     * Instantiates a new certificateBasedAuthConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the certificateAuthorities property value. Collection of certificate authorities which creates a trusted certificate chain.
     * @returns a certificateAuthority
     */
    public get certificateAuthorities() {
        return this._certificateAuthorities;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["certificateAuthorities", (o, n) => { (o as unknown as CertificateBasedAuthConfiguration).certificateAuthorities = n.getCollectionOfObjectValues<CertificateAuthority>(CertificateAuthority); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<CertificateAuthority>("certificateAuthorities", this.certificateAuthorities);
    };
    /**
     * Sets the certificateAuthorities property value. Collection of certificate authorities which creates a trusted certificate chain.
     * @param value Value to set for the certificateAuthorities property.
     */
    public set certificateAuthorities(value: CertificateAuthority[] | undefined) {
        this._certificateAuthorities = value;
    };
}
