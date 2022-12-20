class Character < ApplicationRecord
    belongs_to :movie
    belongs_to :actor

    validates :name, uniqueness: { scope: :movie_id }
end
