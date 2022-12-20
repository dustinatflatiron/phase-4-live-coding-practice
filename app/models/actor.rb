class Actor < ApplicationRecord
    has_many :characters
    has_many :movies, through: :characters

    validates_uniqueness_of :name

end
