import exercises from "./_exercises.js"

const contents = JSON.stringify(
  exercises.map(exercise => {
    return {
      name: exercise.name,
      id: exercise.id
    }
  })
)

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  })

  res.end(contents)
}
