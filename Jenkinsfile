pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Format') {
            steps {
                sh 'npm run format'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Code Coverage') {
            steps {
                sh 'npm run test:cov'
                publishHTML(target: [
                    reportDir: './coverage/lcov-report',
                    reportFiles: 'index.html',
                    reportName: 'Jest Coverage Report'
                ])
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}