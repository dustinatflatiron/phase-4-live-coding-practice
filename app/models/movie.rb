class Movie < ApplicationRecord
    has_many :characters
    has_many :actors, through: :characters

    validates_uniqueness_of :title
end
