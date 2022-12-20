class ActorSerializer < ActiveModel::Serializer
  attributes :name
  attribute :id, if: :is_actor_index

  def is_actor_index
    @instance_options[:index]
  end 
end
