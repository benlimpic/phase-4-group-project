

puts "Planting seeds..."


User.create!(
    username: "username",
    password_digest: BCrypt::Password.create('password'),
    image_url: "url",
    bio: "Howdy, I'm a new user!"
)

# -------------------------------------

Project.create!(
    title: "Pirate Voyage",
    summary: "Prepare for our voyage!",
    color: "#303AD0",
    user_id: 1
)
Project.create!(
    title: "Rocket Man",
    summary: "Ready for Launch?",
    color: "#50D01B",
    user_id: 1
)
Project.create!(
    title: "Can You Farm?",
    summary: "A girl's gotta eat!",
    color: "#F6D514",
    user_id: 1
)

# -------------------------------------

Task.create!(
    title: "Steal a boat!",
    status: "InProgress",
    summary: "We are gonna need a bigger boat.. swipe one!",
    priority: "Critical",
    column: 1,
    project_id: 1,
    user_id: 1
)
Task.create!(
    title: "Hire a Crew!",
    status: "InProgress",
    summary: "We need a salty crew of pirates...",
    priority: "Normal",
    column: 1,
    project_id: 1,
    user_id: 1
)
Task.create!(
    title: "Draw a map!",
    status: "InProgress",
    summary: "Just make something up...",
    priority: "Low",
    column: 1,
    project_id: 1,
    user_id: 1
)



Task.create!(
    title: "Build A Rocket!",
    status: "InProgress",
    summary: "This rocket looks a little rough.. should be fine!",
    priority: "Critical",
    column: 1,
    project_id: 2,
    user_id: 1
)
Task.create!(
    title: "Train a crew!",
    status: "InProgress",
    summary: "Calling all Astronauts...",
    priority: "Normal",
    column: 1,
    project_id: 2,
    user_id: 1
)
Task.create!(
    title: "Don't Explode!",
    status: "InProgress",
    summary: "This should be easy...",
    priority: "Low",
    column: 1,
    project_id: 2,
    user_id: 1
)



Task.create!(
    title: "Get Dirt!",
    status: "InProgress",
    summary: "Buy some land I guess...",
    priority: "Critical",
    column: 1,
    project_id: 3,
    user_id: 1
)
Task.create!(
    title: "Put seeds in ground...",
    status: "InProgress",
    summary: "Just poke em in there",
    priority: "Normal",
    column: 1,
    project_id: 3,
    user_id: 1
)
Task.create!(
    title: "Don't kill plants..",
    status: "InProgress",
    summary: "This should be easy...",
    priority: "Low",
    column: 1,
    project_id: 3,
    user_id: 1
)


puts "Growing crops..."