# Microservices with Node JS and React - Microservices Blog App

Simple blog app for starting with microservices. This is a course from Stephen Grider


<br/>
<br/>

# Technologies

For the Frontend we use React

For the Backend we use Node.js

<br/>
<br/>

# Tips

In order to tell Docker to not include node_modules we create .dockerignore


<br/>
<br/>

# Docker Commands

    1.  docker build -t <your_docker_id/image_name> .
    2.  docker exec -it <docker_id> .
    3.  docker run <image_name>
    4.  docker start <container_id>
    5.  docker system prune
    6.  docker push <docker_id>/posts


<br/>
<br/>

# Kubernetes

 To use kubernetes we need images up and running in order to deploy them on kubernetes cluster.

 In the cluster you have nodes (VM). 
 
<br/>


 ## Config file

 To create a container out of an image we need a config file. We give instructions to kubernetes cluster.

 It starts to try and find Images first from your machine then from the docker/hub.

 [ For the course Pod == container . THIS IS NOT 100% correct , Pors can have more than one container. Course purposes only. ]

 Kubernetes also create a deployment. Deployment is responsible to always maintain the Pods that are been specified on to the config file. If I needed 2 Pods and one crashed, deployment will create a new one

 Inside config we have a service. Its purpose is to handle networking between VM (communication between nodes)

<br/>
<br/>

# Kubernetes Dictionary

### Kubernetes Cluster

Collection of nodes + a master to manage them

### Node

VM that will run our container

### Pod

Like a Container. Can run multible container

### Deployment

Monitors the pods, makes sure they are running. If someone crashes the deployment will create the pod again

 Deployment commands

    1. kubectl get deployments - list of deployments
    2. kubectl describe deployment [depl name] - details of deployment
    3. kubectl apply -f [config file name] - create deployment out of config file
    4. kubectl delete deployment [depl name]
    5. kubectl get deployments - see deployments running
    6. kubectl rollout restart deployment [depl_name] -restart deployment

### Service

Access on a running container


<br/>
<br/>

# Infrastructure File

This  file contains all the configuration, all the code related to the deployment or management of all of our different services .

## k8s
 contains all the kubernetes config file

  ### Instructions

  from ./k8s 

    1. run `kubectl apply -f posts.yaml` to create pod
    2. run `kubectl get pods` to see what pods are running
    3. run `kubectl delete pod <pod_name>` to delete pod
    4. run `kubectl  exec -it <pod_name> [cmd]`  run cmd on <pod_name> container
    5. run `kubectl  logs <pod_name> ` to see logs
    6. run `kubectl  describe pod <pod_name>` info about the pod
    7. run `kubectl rollout restart deployment [depl_name]`



<br/>

# Update .v of docker container

## First way: manually update the config file

    1.  build the new version
    2.  Update the config file of the deployment
    3.  Tell K8s to use the new file `kubectl apply -f < filename >`

## Second way: Push image to docker hub

    1.  Update the config file of the deployment without specifying  image version (on posts-depl)
    2.  From ./posts run " docker build -t <docker-id>/posts . "  to rebuild the image
    3.  Push docker image on docker hub " docker push <docker-id>/posts "
    4.  Tell our deployment to run that version " kubectl rollout restart deployment [depl_name] "





    
