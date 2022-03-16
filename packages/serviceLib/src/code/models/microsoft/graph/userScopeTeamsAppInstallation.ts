import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {Chat, TeamsAppInstallation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserScopeTeamsAppInstallation extends TeamsAppInstallation implements Parsable {
    /** The chat between the user and Teams app.  */
    private _chat?: Chat | undefined;
    /**
     * Gets the chat property value. The chat between the user and Teams app.
     * @returns a chat
     */
    public get chat() {
        return this._chat;
    };
    /**
     * Sets the chat property value. The chat between the user and Teams app.
     * @param value Value to set for the chat property.
     */
    public set chat(value: Chat | undefined) {
        this._chat = value;
    };
    /**
     * Instantiates a new userScopeTeamsAppInstallation and sets the default values.
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
            ["chat", (o, n) => { (o as unknown as UserScopeTeamsAppInstallation).chat = n.getObjectValue<Chat>(createChatFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Chat>("chat", this.chat);
    };
}
