// TODO: Maybe transform this is a function

const requireContext = require.context('.', false, /\.(png|jpe?g|svg)$/)

const images: { [key: string]: string } = {}

requireContext.keys().forEach((fileName: string) => {
  const key = fileName.replace('./', '')
  images[key] = requireContext(fileName)
})

export default images
