import {ConditionalAccessSessionControl} from './index';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInFrequencySessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** Possible values are: days, hours.  */
    private _type?: SigninFrequencyType | undefined;
    /** The number of days or hours.  */
    private _value?: number | undefined;
    /**
     * Instantiates a new signInFrequencySessionControl and sets the default values.
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
            ["type", (o, n) => { (o as unknown as SignInFrequencySessionControl).type = n.getEnumValue<SigninFrequencyType>(SigninFrequencyType); }],
            ["value", (o, n) => { (o as unknown as SignInFrequencySessionControl).value = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<SigninFrequencyType>("type", this.type);
        writer.writeNumberValue("value", this.value);
    };
    /**
     * Gets the type property value. Possible values are: days, hours.
     * @returns a signinFrequencyType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Possible values are: days, hours.
     * @param value Value to set for the type property.
     */
    public set type(value: SigninFrequencyType | undefined) {
        this._type = value;
    };
    /**
     * Gets the value property value. The number of days or hours.
     * @returns a integer
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The number of days or hours.
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
    };
}
