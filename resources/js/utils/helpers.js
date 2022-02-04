export const getError = error => {
  const errorMessage = 'API Error, please try again!'

  if (error.name === 'Fetch User') {
    return error.message
  }

  if (!error.response) {
    if (error.config) {
      console.error(`API ${error.config.url} not found`)
    }
    return error.message ?? errorMessage
  }

  if (import.meta.env.NODE_ENV === 'development') {
    console.error(error.message)
    console.error(error.response.data)
    console.error(error.response.status)
    console.error(error.response.headers)
  }

  if (error.response.data && error.response.data.errors) {
    return error.response.data.errors
  }

  return error.message ?? errorMessage
}
