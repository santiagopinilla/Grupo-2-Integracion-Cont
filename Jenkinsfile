pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "grupo2-pipeline"
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Construir contenedores') {
            steps {
                echo 'Construyendo contenedores backend y frontend...'
                sh 'docker-compose build --no-cache'
            }
        }

        stage('Verificar backend') {
            steps {
                echo 'Listando archivos del contenedor backend...'
                sh 'docker-compose run --rm backend ls -l /usr/src/app || true'
            }
        }

        stage('Verificar frontend') {
            steps {
                echo 'Listando archivos del contenedor frontend...'
                sh 'docker-compose run --rm frontend ls -l /usr/share/nginx/html || true'
            }
        }

        stage('Finalizar') {
            steps {
                echo 'Pipeline del proyecto Grupo 2 ejecutado correctamente.'
            }
        }
    }
}
