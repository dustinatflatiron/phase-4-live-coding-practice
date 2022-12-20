class ActorsController < ApplicationController
    def index
        actors = Actor.all
        render json: actors, index: true
    end
end
