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

## Kubernetes Cluster

Collection of nodes + a master to manage them

## Node

VM that will run our container

## Pod

Like a Container. Can run multible container

## Deployment

Monitors the pods, makes sure they are running

## Service





