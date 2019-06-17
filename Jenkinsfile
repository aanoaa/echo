def label = "worker-${UUID.randomUUID().toString()}"

podTemplate(label: label, containers: [
  containerTemplate(name: "docker", image: "docker", command: "cat", ttyEnabled: true)
  // containerTemplate(name: "kubectl", image: "lachlanevenson/k8s-kubectl:v1.8.8", command: "cat", ttyEnabled: true),
  // containerTemplate(name: "helm", image: "lachlanevenson/k8s-helm:latest", command: "cat", ttyEnabled: true)
],
volumes: [
  hostPathVolume(mountPath: "/var/run/docker.sock", hostPath: "/var/run/docker.sock")
]) {
  node(label) {
    def myRepo = checkout scm
    def gitCommit = myRepo.GIT_COMMIT
    def gitBranch = myRepo.GIT_BRANCH
    def shortGitCommit = "${gitCommit[0..10]}"
    def previousGitCommit = sh(script: "git rev-parse ${gitCommit}~", returnStdout: true)
    def tag = ${env.BRANCH_NAME}.${env.BUILD_NUMBER}

    stage("Create docker image") {
      container("docker") {
        sh "echo ${gitCommit}"
        sh "echo ${gitBranch}"
        sh "echo ${shortGitCommit}"
        sh "echo ${previousGitCommit}"
        sh "docker build -t aanoaa/echo:${tag}"
      }
    }
    // stage("Run kubectl") {
    //   container("kubectl") {
    //     sh "kubectl get pods"
    //   }
    // }
    // stage("Run helm") {
    //   container("helm") {
    //     sh "helm list"
    //   }
    // }
  }
}
