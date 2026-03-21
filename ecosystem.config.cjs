module.exports = {
  apps: [
    {
      name: 'recipeasy',
      script: './backend/server.js',
      cwd: '/var/www/recipeasy',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      restart_delay: 3000,
      max_restarts: 10
    }
  ]
}
