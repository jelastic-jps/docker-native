![Docker Engine Logo](/images/docker-engine-logo.png) 

A standalone Docker Engine with automatic vertical scaling.

## What is Docker Engine Package

**Docker Engine** by Jelastic represents a basic Docker node with preconfigured [automatic vertical scaling](https://docs.jelastic.com/automatic-vertical-scaling) and full compatibility to native Docker ecosystem. 

During this package deployment, you can choose between the following options:
* to set up a separate standalone Docker Engine (either a bare server or with the required Docker service run inside)
* to connect the created node to the already existing Docker Swarm cluster with _Manager_ or _Worker_ role (you are provided with the appropriate _[join tokens](https://docs.docker.com/engine/swarm/join-nodes/#join-as-a-worker-node)_ upon installation)

## Docker Engine Installation

Log into your Jelastic account and [import](https://docs.jelastic.com/environment-import) link to the _manifest.jps_ file from the repo’s file list above:

![Docker Engine Installation](/images/docker-engine-installation.png)

Here, you need to specify the next details:
* **Nodes** - number of containers to constitute your Engine server (where [Public IP](https://docs.jelastic.com/public-ipv4) is automatically attached to each container)
* choose deployment type:
  - _**Clean Engine**_ - to create bare Engine node(s) with Docker daemon run inside
  - _**Deploy Compose YML**_ - to deploy application from the linked repo:

  ![Docker Engine Deploy](/images/docker-engine-deploy.png)

  - _**Connect to Swarm**_ - to automatically include Docker Engine into the existing Docker Swarm (as either Manager or Worker node) by providing the appropriate _Join Token_ and _Host IP_ (i.e. [Public IP](https://docs.jelastic.com/public-ipv4) address of the Swarm manager node).
  
  ![Docker Engine Connect Swarm](/images/docker-engine-connect-swarm.png)

* **Environment** - type a name for your environment
* **Display Name** - optionally, specify [alias](https://docs.jelastic.com/environment-aliases) to be displayed for environment
* **Region** - choose the preferable [region](https://docs.jelastic.com/environment-regions) from the list (if several options are available)

Click **Install** and wait a few minutes for Jelastic to automatically perform all the required actions.

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
