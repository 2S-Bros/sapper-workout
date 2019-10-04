// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `exercises.js` rather than `exercises.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const exercises = [
  {
    id: "1",
    title: "Pull-ups",
    intensity: 2,
    tags: ["back", "arms"],
    description: "pull your body up and down on a bar. winning!"
  },
  {
    id: "2",
    title: "Pushups",
    intensity: 2,
    tags: ["chest", "arms"],
    description: "push up and down on the ground. winning!"
  },
  {
    id: "3",
    title: "Body Squats",
    intensity: 2,
    tags: ["legs"],
    description: "squat up and down on the ground. winning!"
  }
]

export default exercises
