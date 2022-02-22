import {AgreementFileLocalization, AgreementFileProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFile extends AgreementFileProperties implements Parsable {
    /** The localized version of the terms of use agreement files attached to the agreement.  */
    private _localizations?: AgreementFileLocalization[] | undefined;
    /**
     * Instantiates a new agreementFile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the localizations property value. The localized version of the terms of use agreement files attached to the agreement.
     * @returns a agreementFileLocalization
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
            ["localizations", (o, n) => { (o as unknown as AgreementFile).localizations = n.getCollectionOfObjectValues<AgreementFileLocalization>(AgreementFileLocalization); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("localizations", this.localizations);
    };
    /**
     * Sets the localizations property value. The localized version of the terms of use agreement files attached to the agreement.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: AgreementFileLocalization[] | undefined) {
        this._localizations = value;
    };
}
