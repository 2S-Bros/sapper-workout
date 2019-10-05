const workouts = [
  {
    id: "1",
    name: "full body workout",
    intensity: 2,
    description: "A basic workout for the whole body. winning!",
    exercises: [
      {
        id: "1",
        name: "Pull-ups",
        intensity: 2,
        categories: ["back", "arms"],
        description: "pull your body up and down on a bar. winning!"
      },
      {
        id: "2",
        name: "Pushups",
        intensity: 2,
        categories: ["chest", "arms"],
        description: "push up and down on the ground. winning!"
      },
      {
        id: "3",
        name: "Body Squats",
        intensity: 2,
        categories: ["legs"],
        description: "squat up and down on the ground. winning!"
      }
    ]
  },
  {
    id: "1",
    name: "leg workout",
    intensity: 2,
    description: "A basic workout for legs. winning!",
    exercises: [
      {
        id: "1",
        name: "Body Squats",
        intensity: 2,
        categories: ["legs"],
        description: "squat up and down on the ground. winning!"
      },
      {
        id: "2",
        name: "Run up the stairs",
        intensity: 3,
        categories: ["legs", "cardio"],
        description: "run up and down stairs until you throw up. winning!"
      }
    ]
  }
]

export default workouts
