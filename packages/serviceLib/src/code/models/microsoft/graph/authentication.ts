import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {AuthenticationMethod, Entity, Fido2AuthenticationMethod, MicrosoftAuthenticatorAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Authentication extends Entity implements Parsable {
    private _fido2Methods?: Fido2AuthenticationMethod[] | undefined;
    private _methods?: AuthenticationMethod[] | undefined;
    private _microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    private _windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new authentication and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the fido2Methods property value. 
     * @returns a fido2AuthenticationMethod
     */
    public get fido2Methods() {
        return this._fido2Methods;
    };
    /**
     * Sets the fido2Methods property value. 
     * @param value Value to set for the fido2Methods property.
     */
    public set fido2Methods(value: Fido2AuthenticationMethod[] | undefined) {
        this._fido2Methods = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["fido2Methods", (o, n) => { (o as unknown as Authentication).fido2Methods = n.getCollectionOfObjectValues<Fido2AuthenticationMethod>(createFido2AuthenticationMethodFromDiscriminatorValue); }],
            ["methods", (o, n) => { (o as unknown as Authentication).methods = n.getCollectionOfObjectValues<AuthenticationMethod>(createAuthenticationMethodFromDiscriminatorValue); }],
            ["microsoftAuthenticatorMethods", (o, n) => { (o as unknown as Authentication).microsoftAuthenticatorMethods = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>(createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue); }],
            ["windowsHelloForBusinessMethods", (o, n) => { (o as unknown as Authentication).windowsHelloForBusinessMethods = n.getCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>(createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Gets the methods property value. 
     * @returns a authenticationMethod
     */
    public get methods() {
        return this._methods;
    };
    /**
     * Sets the methods property value. 
     * @param value Value to set for the methods property.
     */
    public set methods(value: AuthenticationMethod[] | undefined) {
        this._methods = value;
    };
    /**
     * Gets the microsoftAuthenticatorMethods property value. 
     * @returns a microsoftAuthenticatorAuthenticationMethod
     */
    public get microsoftAuthenticatorMethods() {
        return this._microsoftAuthenticatorMethods;
    };
    /**
     * Sets the microsoftAuthenticatorMethods property value. 
     * @param value Value to set for the microsoftAuthenticatorMethods property.
     */
    public set microsoftAuthenticatorMethods(value: MicrosoftAuthenticatorAuthenticationMethod[] | undefined) {
        this._microsoftAuthenticatorMethods = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethod>("fido2Methods", this.fido2Methods);
        writer.writeCollectionOfObjectValues<AuthenticationMethod>("methods", this.methods);
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>("microsoftAuthenticatorMethods", this.microsoftAuthenticatorMethods);
        writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>("windowsHelloForBusinessMethods", this.windowsHelloForBusinessMethods);
    };
    /**
     * Gets the windowsHelloForBusinessMethods property value. 
     * @returns a windowsHelloForBusinessAuthenticationMethod
     */
    public get windowsHelloForBusinessMethods() {
        return this._windowsHelloForBusinessMethods;
    };
    /**
     * Sets the windowsHelloForBusinessMethods property value. 
     * @param value Value to set for the windowsHelloForBusinessMethods property.
     */
    public set windowsHelloForBusinessMethods(value: WindowsHelloForBusinessAuthenticationMethod[] | undefined) {
        this._windowsHelloForBusinessMethods = value;
    };
}
