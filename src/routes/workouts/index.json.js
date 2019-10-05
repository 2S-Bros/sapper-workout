import workouts from "./_workouts.js"

const contents = JSON.stringify(
  workouts.map(workout => {
    return {
      name: workout.name,
      id: workout.id
    }
  })
)

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  })

  res.end(contents)
}
