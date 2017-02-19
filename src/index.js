// initialise app
import app from './app'

const PORT = process.env.PORT || 3030  // use environment or default to 3030

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
