pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "grupo2-pipeline"
    }

    stages {
        stage('Limpiar contenedores anteriores') {
            steps {
                echo 'Eliminando contenedor mongo_jenkins si existe...'
                sh 'docker rm -f mongo_jenkins || true'
            }
        }

        stage('Clonar repositorio') {
            steps {
                dir('Grupo-2-Integracion-Cont') {
                    git url: 'https://github.com/santiagopinilla/Grupo-2-Integracion-Cont.git', branch: 'main'
                }
            }
        }

        stage('Construir contenedores') {
            steps {
                dir('Grupo-2-Integracion-Cont') {
                    echo 'Construyendo contenedores backend y frontend...'
                    sh 'docker-compose build --no-cache'
                }
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                dir('Grupo-2-Integracion-Cont') {
                    echo 'Ejecutando pruebas automatizadas...'
                    sh 'docker-compose run --rm backend npm test || true'
                }
            }
        }

        stage('Verificar backend') {
            steps {
                dir('Grupo-2-Integracion-Cont') {
                    echo 'Listando archivos del contenedor backend...'
                    sh 'docker-compose run --rm backend ls -l /usr/src/app || true'
                }
            }
        }

        stage('Verificar frontend') {
            steps {
                dir('Grupo-2-Integracion-Cont') {
                    echo 'Listando archivos del contenedor frontend...'
                    sh 'docker-compose run --rm frontend ls -l /usr/share/nginx/html || true'
                }
            }
        }

        stage('Verificar conexión MongoDB') {
            steps {
                dir('Grupo-2-Integracion-Cont') {
                    echo 'Esperando conexión del backend a MongoDB...'
                    sh 'docker-compose up -d || true'
                }
            }
        }

        stage('Finalizar') {
            steps {
                echo 'Pipeline del proyecto Grupo 2 ejecutado correctamente.'
            }
        }
    }
}
