import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentSettings extends Entity implements Parsable {
    /** Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false.  */
    private _submissionAnimationDisabled?: boolean | undefined;
    /**
     * Instantiates a new educationAssignmentSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the submissionAnimationDisabled property value. Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false.
     * @returns a boolean
     */
    public get submissionAnimationDisabled() {
        return this._submissionAnimationDisabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["submissionAnimationDisabled", (o, n) => { (o as unknown as EducationAssignmentSettings).submissionAnimationDisabled = n.getBooleanValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("submissionAnimationDisabled", this.submissionAnimationDisabled);
    };
    /**
     * Sets the submissionAnimationDisabled property value. Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false.
     * @param value Value to set for the submissionAnimationDisabled property.
     */
    public set submissionAnimationDisabled(value: boolean | undefined) {
        this._submissionAnimationDisabled = value;
    };
}
