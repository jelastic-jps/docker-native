![Docker Swarm Logo](/images/docker-swarm-logo.png) 

Prepackaged Docker Swarm cluster with out-of-box automatic vertical and horizontal scaling.

## What is Docker Swarm Package

A **Swarm** cluster represents a set of [Docker Engine](https://github.com/jelastic-jps/docker-native/tree/master/docker-engine) nodes run in a _swarm_ mode, which constitutes a fault-tolerant platform with built-in cluster management features to keep your dockerized services running and available. Within Jelastic, it is provided as an environment of two layers with the following node roles: 
* [_Manager_](https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/#manager-nodes) - maintains the desired state of your swarm and all services running on it
* [_Worker_](https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/#worker-nodes) - receives and executes tasks, dispatched from Manager nodes

This automation package creates Docker Swarm cluster with any desired number of automatically scaled _Manager_ and _Worker_ nodes. Also, it includes an additional option to deploy services from a specified [compose file](https://docs.docker.com/compose/compose-file/).

## Auto-Scaling Configuration

The Jelastic Docker Swarm package is preconfigured to automatically adjust the number of included nodes based on current load (up to 10 instances per layer by default) according to the following conditions:
* +1 node if RAM usage is >70% for at least 5 minutes
* -1 node if RAM usage <40% for at least 5 minutes

These modifications are automatically applied to both _Manager_ and _Worker_ environment layers, whilst you receive the appropriate email notification upon each executed scaling operation. Herewith, the minimal count of nodes won’t fall below the values you’ve specified during your Docker Swarm cluster creation.

In case you’d like to tune the default automatic scaling parameters, refer to the appropriate triggers’ settings within the [Automatic Horizontal Scaling](https://docs.jelastic.com/automatic-horizontal-scaling) section.

## Docker Swarm Installation

Log into your Jelastic account and [import](https://docs.jelastic.com/environment-import) link to the _manifest.jps_ file from the repo’s file list above:

![Docker Swarm Installation](/images/docker-swarm-installation.png)

Here, you need to specify some details to get the cluster you need:
* **Manager** - number of manager nodes to be included into cluster (with [Public IP](https://docs.jelastic.com/public-ipv4) being automatically attached to each container)
* **Worker** - number of worker nodes to be included into cluster
* choose deployment type:
  - **_Clean Cluster_** - to create a bare cluster and subsequently deploy the required services manually 
  - **_Deploy Stack YML_** - to instantly deploy the necessary Docker Swarm services with _[docker stack deploy](https://docs.docker.com/engine/reference/commandline/stack_deploy/)_ by specifying link to the appropriate [compose YAML file](https://docs.docker.com/compose/compose-file/):

![Docker Swarm Deploy](/images/docker-swarm-deploy.png)

* **Environment** - type a name for your environment
* **Display Name** - optionally, specify [alias](https://docs.jelastic.com/environment-aliases) to be displayed for environment
* **Region** - choose the preferable [region](https://docs.jelastic.com/environment-regions) from the list (if several options are available)

Click **Install** and wait a few minutes for Jelastic to automatically perform all the required actions.

## Docker Swarm Connection

After the successful installation, your cluster can be accessed in two ways for further management:

* by establishing remote connection with [Docker machine](https://docs.docker.com/machine/overview/) and generic driver - execute the appropriate commands from the installation success frame (this info is also duplicated via email) to _Create docker-machine remote connection_ and _Connect to the environment_: 

![Docker Swarm Remote Connection](/images/docker-swarm-remote-connection.png)

* through Jelastic SSH Gate - just [connect](https://docs.jelastic.com/ssh-access) to your account and enter _Manager_ node within your Docker Swarm environment to start working

![Docker Swarm SSH Connection](/images/docker-swarm-ssh-connection.png)

## Requirements

* For Docker Swarm cluster creation, the appropriate Platform should run Jelastic 5.0.5 version with the Native Dockers support enabled. This feature availability depends on a cluster administrator - you can search for a suitable provider within the [Jelastic Cloud Union](https://jelastic.cloud/?versions=5.0) catalog.
* The included option of [Public IP](http://docs.jelastic.com/public-ipv4) attachment is provided for billing users only, thus you need to convert your account beforehand.
* In order to be successfully installed, the current Docker Swarm solution also requires a [public SSH key](https://docs.jelastic.com/ssh-add-key) being attached to your Jelastic account (with the corresponding private key handled at your local machine for further connection to the cluster). 
