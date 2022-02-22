import {OrganizationalBrandingLocalization, OrganizationalBrandingProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizationalBranding extends OrganizationalBrandingProperties implements Parsable {
    /** Add different branding based on a locale.  */
    private _localizations?: OrganizationalBrandingLocalization[] | undefined;
    /**
     * Instantiates a new organizationalBranding and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the localizations property value. Add different branding based on a locale.
     * @returns a organizationalBrandingLocalization
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["localizations", (o, n) => { (o as unknown as OrganizationalBranding).localizations = n.getCollectionOfObjectValues<OrganizationalBrandingLocalization>(OrganizationalBrandingLocalization); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalization>("localizations", this.localizations);
    };
    /**
     * Sets the localizations property value. Add different branding based on a locale.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: OrganizationalBrandingLocalization[] | undefined) {
        this._localizations = value;
    };
}
