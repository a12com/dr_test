# Task

## Project Instructions

The following project is divided into three parts that deals with working with Docker, CI/CD pipeline and Helm/Terraform.

### Part 1: Working with Docker

This section will guide you on how to build and run a simple Node.js application using Docker that prints out "Hello, World!" when run.

1. Create a simple Dockerfile for the Node.js application.
2. Build a Docker image from this Dockerfile.
3. Run a container from the created image and ensure the application works.
4. Push the created Docker image to Docker Hub (pushed to https://hub.docker.com/r/a12com/node-hello)

Please ensure to provide the link to the Docker image.

### Part 2: Working with CI/CD

This section focuses on creating a CI/CD pipeline using GitHub Actions. 

1. Create a simple pipeline that clones the repository with the application from Part 1.
2. Setup the pipeline to run unit tests for the Node.js application.
3. The pipeline should be able to build the Docker image.
4. It should also push the image to Docker Hub.

Please ensure to provide the YAML file for the GitHub Actions pipeline 

### Part 3: Working with Helm and Terraform

In this section, you will be deploying the Node.js application in a Kubernetes cluster using Helm and Terraform.

1. Create a simple Helm chart for deploying the Node.js application in Kubernetes.
(Include a `values.yaml` file for customization)

2. Use Terraform to create a Kubernetes cluster (for simplicity, a local cluster with kind or minikube can be used).

3. Deploy the application by using the created Helm chart in the created cluster.

4. Expose the application using a Kubernetes Service
5. Provide the configuration files for Helm and Terraform.

### Notes:

- All parts of the task should be completed and documented in a single GitHub repository.
- The repository should include a README file detailing all steps to reproduce the tasks.
- Provide the link to the repository upon completion of the task.

# How to use

## Docker

1. docker pull a12com/node-hello
Following step will start container and attach it to 8888 port of host machine:
3. docker run -p 8888:8888 -d a12com/node-hello
Test on any *nix OS:
4. curl localhost:8888
Test on windows (start > powershell):
4. Invoke-WebRequest -Uri "http://localhost:8888"

## CI

1. To test, firstly copy (https://github.com/a12com/dr_test/blob/main/.github/workflows/ci.yml) to your repo into .github/workflows folder
2. In Settings add DOCKERHUB_USERNAME and DOCKERHUB_TOKEN secrets
3. In Actions run Docker build & push

## CD

1. Follow these instrunctions to deploy AKS using terraform https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-terraform?pivots=development-environment-azure-cli
2. Follow these instruction to login to AKS https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-terraform?pivots=development-environment-azure-cli
3. cd helm/node-hello && helm upgrade -i --create-namespace --namespace node node-hello .
