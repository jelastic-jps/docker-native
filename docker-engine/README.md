![Docker Engine Logo](/images/docker-engine-logo.png)

# Docker Engine

The package for the automatic installation of Docker Engine (CE) as a standalone node or a swarm member.

## What is Docker Engine Package

The **Docker Engine** package by Jelastic creates an [isolated worker node](https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/) with the Docker Community Edition (CE) engine being run inside, which is someway similar to launching it within a separate virtual machine (VM). Herewith, the Platform additionally provides [automatic vertical scaling](https://docs.jelastic.com/automatic-vertical-scaling) for all such worker nodes and allows paying only for the actually used capacities. 

Upon this package installation, you can choose among several Docker Engine deployment modes to run it as either:
* _a standalone bare node_ - to set up a separate ‘clean’ Docker Engine (with possibility to automatically install Portainer management GUI)
* _a automatic application deployment_ - to install standalone Docker Engine node with the required Docker service already launched (through the compose file)
* _a swarm member_ - to connect to the already existing Docker Swarm cluster as _Manager_ or _Worker_ node (the appropriate _[join tokens](https://docs.docker.com/engine/swarm/join-nodes/#join-as-a-worker-node)_ is required)

## Docker Engine Installation

Log into your Jelastic account and [import](https://docs.jelastic.com/environment-import) link to the _manifest.jps_ within this repo root (this package is also delivered through [Jelastic Marketplace](https://docs.jelastic.com/marketplace)):

![Docker Engine Installation](/images/docker-engine-installation.png)

> **Note:** Docker Engine container is automatically provisioned with a [Public IP](http://docs.jelastic.com/public-ipv4) address to allow remote access to it via _docker-machine_.

Here, you need to provide some details on the desired Docker Engine environment parameters:
* choose the preferred installation type
  * _**Create a clean standalone engine**_ - to create a bare node with just a Docker daemon run inside; optionally, you could tick the **Install Portainer UI** option to install the same-named web-based Engine management tool

![Docker Engine Standalone](/images/docker-engine-standalone.png)

  * _**Connect to an existing swarm cluster**_ - to automatically include the newly created Docker Engine container into the existing Docker Swarm cluster (with either Manager or Worker role) through providing the appropriate cluster _Join Token_ and _Host IP_

![Docker Engine Connect Swarm](/images/docker-engine-connect-swarm.png)

  * _**Deploy containers from compose.yml**_ - to automatically deploy application from the specified custom repository

![Docker Engine Deploy](/images/docker-engine-deploy.png)

* **Environment** - type a name for your environment
* **Display Name** - optionally, specify an [environment alias](https://docs.jelastic.com/environment-aliases)

Click **Install** and wait a few minutes for Jelastic to automatically perform all the required configurations.

## Connecting to Docker Engine

After the successful installation, your Docker Engine can be accessed in two ways for further management:

* by establishing remote connection with [Docker machine](https://docs.docker.com/machine/overview/) and generic driver - execute the appropriate commands from the installation success frame (this info is also duplicated via email) to _Create remote connection_ and _Connect to the environment_: 

  ![Docker Swarm Remote Connection](/images/docker-engine-remote-connect.png)

* through Jelastic SSH Gate - just [connect](https://docs.jelastic.com/ssh-access) to your account and enter the appropriate node to start working

  ![Docker Swarm SSH Connection](/images/docker-engine-ssh-connect.png)

## Requirements

Before installing the package, please consider the following points:

* For Docker Engine server creation, the appropriate Platform should run Jelastic 5.0.5 version with the Native Dockers support enabled. This feature availability depends on a cluster administrator - you can search for a suitable provider within the [Jelastic Cloud Union](https://jelastic.cloud/?versions=5.0) catalog.
* The included option of [Public IP](http://docs.jelastic.com/public-ipv4) attachment is provided for billing users only, thus you need to convert your account beforehand.
* In order to be successfully installed, the current Docker Engine solution also requires a [public SSH key](https://docs.jelastic.com/ssh-add-key) being attached to your Jelastic account (with the corresponding private key handled at your local machine for further connection to the server). 
