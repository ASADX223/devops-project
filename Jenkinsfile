pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t my-devops-app .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker rm -f my-devops-container || true'
                sh 'docker run -d -p 7005:80 --name my-devops-container my-devops-app'
            }
        }

    }
}
