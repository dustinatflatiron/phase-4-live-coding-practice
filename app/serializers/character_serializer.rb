class CharacterSerializer < ActiveModel::Serializer
  attributes :name, :actor

  def actor 
    ActorSerializer.new(self.object.actor)
  end
end
