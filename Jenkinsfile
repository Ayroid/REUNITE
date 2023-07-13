pipeline {
  agent {
    docker {
      image 'docker'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }


  stages {
    stage('Pull and Run') {
      steps {
        script {
          def dockerImage = 'ayroid/lostfoundfe'
          def dockerTag = 'latest' // Specify the desired tag of the Docker image

          // Pull the Docker image from Docker Hub
          docker.image("${dockerImage}:${dockerTag}").pull()

          // Run the Docker image as a container
          def customContainer = docker.container("${dockerImage}:${dockerTag}")
          customContainer.run('-p 8080:80 -d') // Customize the container's port mapping and other options as needed
        }
      }
    }
  }
}
