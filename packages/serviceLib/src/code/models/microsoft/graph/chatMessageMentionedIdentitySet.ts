import {createTeamworkConversationIdentityFromDiscriminatorValue} from './createTeamworkConversationIdentityFromDiscriminatorValue';
import {IdentitySet, TeamworkConversationIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageMentionedIdentitySet extends IdentitySet implements Parsable {
    /** If present, represents a conversation (for example, team or channel) @mentioned in a message.  */
    private _conversation?: TeamworkConversationIdentity | undefined;
    /**
     * Instantiates a new chatMessageMentionedIdentitySet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversation property value. If present, represents a conversation (for example, team or channel) @mentioned in a message.
     * @returns a teamworkConversationIdentity
     */
    public get conversation() {
        return this._conversation;
    };
    /**
     * Sets the conversation property value. If present, represents a conversation (for example, team or channel) @mentioned in a message.
     * @param value Value to set for the conversation property.
     */
    public set conversation(value: TeamworkConversationIdentity | undefined) {
        this._conversation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["conversation", (o, n) => { (o as unknown as ChatMessageMentionedIdentitySet).conversation = n.getObjectValue<TeamworkConversationIdentity>(createTeamworkConversationIdentityFromDiscriminatorValue); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamworkConversationIdentity>("conversation", this.conversation);
    };
}
