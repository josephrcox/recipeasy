const fs = require('fs')
const path = require('path')

// Read backend/.env so env vars survive server reboots without manual intervention
const envFile = path.join(__dirname, 'backend/.env')
const env = { NODE_ENV: 'production', PORT: 3000 }
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf8')
    .split('\n')
    .forEach(line => {
      const eq = line.indexOf('=')
      if (eq > 0) {
        const key = line.slice(0, eq).trim()
        const val = line.slice(eq + 1).trim()
        if (key) env[key] = val
      }
    })
}

module.exports = {
  apps: [
    {
      name: 'recipeasy',
      script: './backend/server.js',
      cwd: '/var/www/recipeasy',
      env,
      restart_delay: 3000,
      max_restarts: 10
    }
  ]
}
