// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_exercises.js` rather than `exercises.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const exercises = [
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

export default exercises
