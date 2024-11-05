pipeline {
    agent any
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                script {
                    bat "docker build -t devopsminiproject ."
                }
            }
        }
        stage('Docker Run') {
            steps {
                script {
                    bat "docker run -d -p 5173:5173 devopsminiproject:latest"
                }
            }
        }
    }
}