import {AuthenticationMethodState} from './authenticationMethodState';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodConfiguration extends Entity implements Parsable {
    /** The state of the policy. Possible values are: enabled, disabled.  */
    private _state?: AuthenticationMethodState | undefined;
    /**
     * Instantiates a new authenticationMethodConfiguration and sets the default values.
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
            ["state", (o, n) => { (o as unknown as AuthenticationMethodConfiguration).state = n.getEnumValue<AuthenticationMethodState>(AuthenticationMethodState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AuthenticationMethodState>("state", this.state);
    };
    /**
     * Gets the state property value. The state of the policy. Possible values are: enabled, disabled.
     * @returns a authenticationMethodState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of the policy. Possible values are: enabled, disabled.
     * @param value Value to set for the state property.
     */
    public set state(value: AuthenticationMethodState | undefined) {
        this._state = value;
    };
}
