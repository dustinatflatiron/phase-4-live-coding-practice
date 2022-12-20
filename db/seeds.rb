Movie.destroy_all
Actor.destroy_all
Character.destroy_all

ed = Actor.create(name: "Edward Norton")

20.times do 
    a = Actor.create(name: Faker::Name.name)
end

actor_ids = Actor.all.map {|a| a.id}

20.times do 
    m = Movie.create(title: Faker::Movie.title, box_office_earnings: rand(30000000..300000000), director: Faker::Name.name)
    if m.valid?
        rand(1..5).times do
            m.characters.create(name: Faker::Name.name, actor_id: actor_ids.sample)
        end
    end
end

10.times do 
    m = Movie.create(title: Faker::Movie.title, box_office_earnings: rand(30000000..300000000), director: Faker::Name.name)
    if m.valid?
        rand(1..3).times do 
            m.characters.create(name: Faker::Name.name, actor_id: actor_ids.sample)
        end
        Character.create(
            name: Faker::Name.name,
            movie: m,
            actor: ed
        )
    end
end
