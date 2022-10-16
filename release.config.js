module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/tg112/github-actions-react-cicd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
}