pipeline {
  agent any

  stages {
    stage('Pull and Run') {
      steps {
        script {
          // Set the Docker image and tag
          def dockerImage = 'ayroid/lostfoundbe'
          def dockerTag = 'latest'

          // Pull the Docker image from Docker Hub
          docker.withRegistry('https://registry.hub.docker.com', 'ayroid/XFt39AzkNs+Ft3%') {
            def image = docker.image("${dockerImage}:${dockerTag}")
            image.pull()

            // Run the Docker image as a container
            def container = image.run('-p 8080:80')
          }
        }
      }
    }
  }
}
