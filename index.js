'use strict'

const Just = require('just')

exports.name = 'just'
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  // Prepare the options array.
  options = options || {}
  options.root = {page: str}

  // Construct the template.
  const template = new Just(options)

  // Build the Promise to render the template.
  return new Promise((resolve, reject) => {
    template.render('page', locals, (err, output) => {
      if (err) {
        return reject(err)
      }
      resolve(output)
    })
  })
}
