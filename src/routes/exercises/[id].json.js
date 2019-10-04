import exercises from "./_exercises.js"

const lookup = new Map()
exercises.forEach(exercise => {
  lookup.set(exercise.id, JSON.stringify(exercise))
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
