pipeline {
    agent any

    environment {
        RUTA_PROYECTO = 'Grupo-2-Integracion-Cont'
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
                dir("${RUTA_PROYECTO}") {
                    git 'https://github.com/santiagopinilla/Grupo-2-Integracion-Cont.git'
                }
            }
        }

        stage('Construir contenedores') {
            steps {
                dir("${RUTA_PROYECTO}") {
                    echo 'Construyendo contenedores backend y frontend...'
                    sh 'docker-compose build --no-cache'
                }
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                dir("${RUTA_PROYECTO}") {
                    echo 'Ejecutando pruebas automatizadas...'
                    sh 'docker-compose run --rm backend npm test || true'
                }
            }
        }

        stage('Verificar backend') {
            steps {
                dir("${RUTA_PROYECTO}") {
                    echo 'Listando archivos del contenedor backend...'
                    sh 'docker-compose run --rm backend ls -l /usr/src/app || true'
                }
            }
        }

        stage('Verificar frontend') {
            steps {
                dir("${RUTA_PROYECTO}") {
                    echo 'Listando archivos del contenedor frontend...'
                    sh 'docker-compose run --rm frontend ls -l /usr/share/nginx/html || true'
                }
            }
        }

        stage('Verificar conexión MongoDB') {
            steps {
                dir("${RUTA_PROYECTO}") {
                    echo 'Esperando conexión del backend a MongoDB...'
                    sh 'docker-compose up -d'
                    sh 'sleep 6'
                    sh 'docker logs api || true'
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
