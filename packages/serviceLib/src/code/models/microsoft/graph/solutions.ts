import {BookingBusiness} from './bookingBusiness';
import {BookingCurrency} from './bookingCurrency';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solutions implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _bookingBusinesses?: BookingBusiness[] | undefined;
    private _bookingCurrencies?: BookingCurrency[] | undefined;
    /**
     * Instantiates a new solutions and sets the default values.
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
     * Gets the bookingBusinesses property value. 
     * @returns a bookingBusiness
     */
    public get bookingBusinesses() {
        return this._bookingBusinesses;
    };
    /**
     * Gets the bookingCurrencies property value. 
     * @returns a bookingCurrency
     */
    public get bookingCurrencies() {
        return this._bookingCurrencies;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bookingBusinesses", (o, n) => { (o as unknown as Solutions).bookingBusinesses = n.getCollectionOfObjectValues<BookingBusiness>(BookingBusiness); }],
            ["bookingCurrencies", (o, n) => { (o as unknown as Solutions).bookingCurrencies = n.getCollectionOfObjectValues<BookingCurrency>(BookingCurrency); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<BookingBusiness>("bookingBusinesses", this.bookingBusinesses);
        writer.writeCollectionOfObjectValues<BookingCurrency>("bookingCurrencies", this.bookingCurrencies);
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
     * Sets the bookingBusinesses property value. 
     * @param value Value to set for the bookingBusinesses property.
     */
    public set bookingBusinesses(value: BookingBusiness[] | undefined) {
        this._bookingBusinesses = value;
    };
    /**
     * Sets the bookingCurrencies property value. 
     * @param value Value to set for the bookingCurrencies property.
     */
    public set bookingCurrencies(value: BookingCurrency[] | undefined) {
        this._bookingCurrencies = value;
    };
}
