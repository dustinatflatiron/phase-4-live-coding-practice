class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :box_office_earnings
  has_many :characters
end
