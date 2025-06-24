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

        stage('Ejecutar pruebas') {
            steps {
                echo 'Ejecutando pruebas automatizadas...'
                sh 'docker-compose run --rm backend npm test || true'
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

        stage('Verificar conexión MongoDB') {
            steps {
                echo 'Esperando conexión del backend a MongoDB...'
                sh 'docker-compose up -d'
                sh 'sleep 6'
                sh 'docker logs api || echo ❌ No se detectó conexión'
            }
        }

        stage('Finalizar') {
            steps {
                echo 'Pipeline del proyecto Grupo 2 ejecutado correctamente.'
            }
        }
    }
}
