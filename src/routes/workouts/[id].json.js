import workouts from "./_workouts.js"

const lookup = new Map()
workouts.forEach(workout => {
  lookup.set(workout.id, JSON.stringify(workout))
})

export function get(req, res, next) {
  const { id } = req.params

  if (lookup.has(id)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    })

    res.end(lookup.get(id))
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    })

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    )
  }
}
