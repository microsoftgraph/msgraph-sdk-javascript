import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {createBookingCurrencyFromDiscriminatorValue} from './createBookingCurrencyFromDiscriminatorValue';
import {BookingBusiness, BookingCurrency} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SolutionsRoot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _bookingBusinesses?: BookingBusiness[] | undefined;
    private _bookingCurrencies?: BookingCurrency[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the bookingBusinesses property value. 
     * @returns a bookingBusiness
     */
    public get bookingBusinesses() {
        return this._bookingBusinesses;
    };
    /**
     * Sets the bookingBusinesses property value. 
     * @param value Value to set for the bookingBusinesses property.
     */
    public set bookingBusinesses(value: BookingBusiness[] | undefined) {
        this._bookingBusinesses = value;
    };
    /**
     * Gets the bookingCurrencies property value. 
     * @returns a bookingCurrency
     */
    public get bookingCurrencies() {
        return this._bookingCurrencies;
    };
    /**
     * Sets the bookingCurrencies property value. 
     * @param value Value to set for the bookingCurrencies property.
     */
    public set bookingCurrencies(value: BookingCurrency[] | undefined) {
        this._bookingCurrencies = value;
    };
    /**
     * Instantiates a new SolutionsRoot and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["bookingBusinesses", (o, n) => { (o as unknown as SolutionsRoot).bookingBusinesses = n.getCollectionOfObjectValues<BookingBusiness>(createBookingBusinessFromDiscriminatorValue); }],
            ["bookingCurrencies", (o, n) => { (o as unknown as SolutionsRoot).bookingCurrencies = n.getCollectionOfObjectValues<BookingCurrency>(createBookingCurrencyFromDiscriminatorValue); }],
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
}
