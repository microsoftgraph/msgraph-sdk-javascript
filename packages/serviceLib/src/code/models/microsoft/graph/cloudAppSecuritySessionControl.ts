import {CloudAppSecuritySessionControlType, ConditionalAccessSessionControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudAppSecuritySessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** Possible values are: mcasConfigured, monitorOnly, blockDownloads, unknownFutureValue. For more information, see Deploy Conditional Access App Control for featured apps.  */
    private _cloudAppSecurityType?: CloudAppSecuritySessionControlType | undefined;
    /**
     * Instantiates a new cloudAppSecuritySessionControl and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the cloudAppSecurityType property value. Possible values are: mcasConfigured, monitorOnly, blockDownloads, unknownFutureValue. For more information, see Deploy Conditional Access App Control for featured apps.
     * @returns a cloudAppSecuritySessionControlType
     */
    public get cloudAppSecurityType() {
        return this._cloudAppSecurityType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["cloudAppSecurityType", (o, n) => { (o as unknown as CloudAppSecuritySessionControl).cloudAppSecurityType = n.getEnumValue<CloudAppSecuritySessionControlType>(CloudAppSecuritySessionControlType); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<CloudAppSecuritySessionControlType>("cloudAppSecurityType", this.cloudAppSecurityType);
    };
    /**
     * Sets the cloudAppSecurityType property value. Possible values are: mcasConfigured, monitorOnly, blockDownloads, unknownFutureValue. For more information, see Deploy Conditional Access App Control for featured apps.
     * @param value Value to set for the cloudAppSecurityType property.
     */
    public set cloudAppSecurityType(value: CloudAppSecuritySessionControlType | undefined) {
        this._cloudAppSecurityType = value;
    };
}
