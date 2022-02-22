import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesExtensionAttributes implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** First customizable extension attribute.  */
    private _extensionAttribute1?: string | undefined;
    /** Tenth customizable extension attribute.  */
    private _extensionAttribute10?: string | undefined;
    /** Eleventh customizable extension attribute.  */
    private _extensionAttribute11?: string | undefined;
    /** Twelfth customizable extension attribute.  */
    private _extensionAttribute12?: string | undefined;
    /** Thirteenth customizable extension attribute.  */
    private _extensionAttribute13?: string | undefined;
    /** Fourteenth customizable extension attribute.  */
    private _extensionAttribute14?: string | undefined;
    /** Fifteenth customizable extension attribute.  */
    private _extensionAttribute15?: string | undefined;
    /** Second customizable extension attribute.  */
    private _extensionAttribute2?: string | undefined;
    /** Third customizable extension attribute.  */
    private _extensionAttribute3?: string | undefined;
    /** Fourth customizable extension attribute.  */
    private _extensionAttribute4?: string | undefined;
    /** Fifth customizable extension attribute.  */
    private _extensionAttribute5?: string | undefined;
    /** Sixth customizable extension attribute.  */
    private _extensionAttribute6?: string | undefined;
    /** Seventh customizable extension attribute.  */
    private _extensionAttribute7?: string | undefined;
    /** Eighth customizable extension attribute.  */
    private _extensionAttribute8?: string | undefined;
    /** Ninth customizable extension attribute.  */
    private _extensionAttribute9?: string | undefined;
    /**
     * Instantiates a new onPremisesExtensionAttributes and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the extensionAttribute1 property value. First customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute1() {
        return this._extensionAttribute1;
    };
    /**
     * Gets the extensionAttribute10 property value. Tenth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute10() {
        return this._extensionAttribute10;
    };
    /**
     * Gets the extensionAttribute11 property value. Eleventh customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute11() {
        return this._extensionAttribute11;
    };
    /**
     * Gets the extensionAttribute12 property value. Twelfth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute12() {
        return this._extensionAttribute12;
    };
    /**
     * Gets the extensionAttribute13 property value. Thirteenth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute13() {
        return this._extensionAttribute13;
    };
    /**
     * Gets the extensionAttribute14 property value. Fourteenth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute14() {
        return this._extensionAttribute14;
    };
    /**
     * Gets the extensionAttribute15 property value. Fifteenth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute15() {
        return this._extensionAttribute15;
    };
    /**
     * Gets the extensionAttribute2 property value. Second customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute2() {
        return this._extensionAttribute2;
    };
    /**
     * Gets the extensionAttribute3 property value. Third customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute3() {
        return this._extensionAttribute3;
    };
    /**
     * Gets the extensionAttribute4 property value. Fourth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute4() {
        return this._extensionAttribute4;
    };
    /**
     * Gets the extensionAttribute5 property value. Fifth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute5() {
        return this._extensionAttribute5;
    };
    /**
     * Gets the extensionAttribute6 property value. Sixth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute6() {
        return this._extensionAttribute6;
    };
    /**
     * Gets the extensionAttribute7 property value. Seventh customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute7() {
        return this._extensionAttribute7;
    };
    /**
     * Gets the extensionAttribute8 property value. Eighth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute8() {
        return this._extensionAttribute8;
    };
    /**
     * Gets the extensionAttribute9 property value. Ninth customizable extension attribute.
     * @returns a string
     */
    public get extensionAttribute9() {
        return this._extensionAttribute9;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["extensionAttribute1", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute1 = n.getStringValue(); }],
            ["extensionAttribute10", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute10 = n.getStringValue(); }],
            ["extensionAttribute11", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute11 = n.getStringValue(); }],
            ["extensionAttribute12", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute12 = n.getStringValue(); }],
            ["extensionAttribute13", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute13 = n.getStringValue(); }],
            ["extensionAttribute14", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute14 = n.getStringValue(); }],
            ["extensionAttribute15", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute15 = n.getStringValue(); }],
            ["extensionAttribute2", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute2 = n.getStringValue(); }],
            ["extensionAttribute3", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute3 = n.getStringValue(); }],
            ["extensionAttribute4", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute4 = n.getStringValue(); }],
            ["extensionAttribute5", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute5 = n.getStringValue(); }],
            ["extensionAttribute6", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute6 = n.getStringValue(); }],
            ["extensionAttribute7", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute7 = n.getStringValue(); }],
            ["extensionAttribute8", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute8 = n.getStringValue(); }],
            ["extensionAttribute9", (o, n) => { (o as unknown as OnPremisesExtensionAttributes).extensionAttribute9 = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("extensionAttribute1", this.extensionAttribute1);
        writer.writeStringValue("extensionAttribute10", this.extensionAttribute10);
        writer.writeStringValue("extensionAttribute11", this.extensionAttribute11);
        writer.writeStringValue("extensionAttribute12", this.extensionAttribute12);
        writer.writeStringValue("extensionAttribute13", this.extensionAttribute13);
        writer.writeStringValue("extensionAttribute14", this.extensionAttribute14);
        writer.writeStringValue("extensionAttribute15", this.extensionAttribute15);
        writer.writeStringValue("extensionAttribute2", this.extensionAttribute2);
        writer.writeStringValue("extensionAttribute3", this.extensionAttribute3);
        writer.writeStringValue("extensionAttribute4", this.extensionAttribute4);
        writer.writeStringValue("extensionAttribute5", this.extensionAttribute5);
        writer.writeStringValue("extensionAttribute6", this.extensionAttribute6);
        writer.writeStringValue("extensionAttribute7", this.extensionAttribute7);
        writer.writeStringValue("extensionAttribute8", this.extensionAttribute8);
        writer.writeStringValue("extensionAttribute9", this.extensionAttribute9);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the extensionAttribute1 property value. First customizable extension attribute.
     * @param value Value to set for the extensionAttribute1 property.
     */
    public set extensionAttribute1(value: string | undefined) {
        this._extensionAttribute1 = value;
    };
    /**
     * Sets the extensionAttribute10 property value. Tenth customizable extension attribute.
     * @param value Value to set for the extensionAttribute10 property.
     */
    public set extensionAttribute10(value: string | undefined) {
        this._extensionAttribute10 = value;
    };
    /**
     * Sets the extensionAttribute11 property value. Eleventh customizable extension attribute.
     * @param value Value to set for the extensionAttribute11 property.
     */
    public set extensionAttribute11(value: string | undefined) {
        this._extensionAttribute11 = value;
    };
    /**
     * Sets the extensionAttribute12 property value. Twelfth customizable extension attribute.
     * @param value Value to set for the extensionAttribute12 property.
     */
    public set extensionAttribute12(value: string | undefined) {
        this._extensionAttribute12 = value;
    };
    /**
     * Sets the extensionAttribute13 property value. Thirteenth customizable extension attribute.
     * @param value Value to set for the extensionAttribute13 property.
     */
    public set extensionAttribute13(value: string | undefined) {
        this._extensionAttribute13 = value;
    };
    /**
     * Sets the extensionAttribute14 property value. Fourteenth customizable extension attribute.
     * @param value Value to set for the extensionAttribute14 property.
     */
    public set extensionAttribute14(value: string | undefined) {
        this._extensionAttribute14 = value;
    };
    /**
     * Sets the extensionAttribute15 property value. Fifteenth customizable extension attribute.
     * @param value Value to set for the extensionAttribute15 property.
     */
    public set extensionAttribute15(value: string | undefined) {
        this._extensionAttribute15 = value;
    };
    /**
     * Sets the extensionAttribute2 property value. Second customizable extension attribute.
     * @param value Value to set for the extensionAttribute2 property.
     */
    public set extensionAttribute2(value: string | undefined) {
        this._extensionAttribute2 = value;
    };
    /**
     * Sets the extensionAttribute3 property value. Third customizable extension attribute.
     * @param value Value to set for the extensionAttribute3 property.
     */
    public set extensionAttribute3(value: string | undefined) {
        this._extensionAttribute3 = value;
    };
    /**
     * Sets the extensionAttribute4 property value. Fourth customizable extension attribute.
     * @param value Value to set for the extensionAttribute4 property.
     */
    public set extensionAttribute4(value: string | undefined) {
        this._extensionAttribute4 = value;
    };
    /**
     * Sets the extensionAttribute5 property value. Fifth customizable extension attribute.
     * @param value Value to set for the extensionAttribute5 property.
     */
    public set extensionAttribute5(value: string | undefined) {
        this._extensionAttribute5 = value;
    };
    /**
     * Sets the extensionAttribute6 property value. Sixth customizable extension attribute.
     * @param value Value to set for the extensionAttribute6 property.
     */
    public set extensionAttribute6(value: string | undefined) {
        this._extensionAttribute6 = value;
    };
    /**
     * Sets the extensionAttribute7 property value. Seventh customizable extension attribute.
     * @param value Value to set for the extensionAttribute7 property.
     */
    public set extensionAttribute7(value: string | undefined) {
        this._extensionAttribute7 = value;
    };
    /**
     * Sets the extensionAttribute8 property value. Eighth customizable extension attribute.
     * @param value Value to set for the extensionAttribute8 property.
     */
    public set extensionAttribute8(value: string | undefined) {
        this._extensionAttribute8 = value;
    };
    /**
     * Sets the extensionAttribute9 property value. Ninth customizable extension attribute.
     * @param value Value to set for the extensionAttribute9 property.
     */
    public set extensionAttribute9(value: string | undefined) {
        this._extensionAttribute9 = value;
    };
}
