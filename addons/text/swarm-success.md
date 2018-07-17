### Create docker-machine remote connection
```
docker-machine create --driver generic \
--generic-ip-address=${nodes.cp.first.extIPs[0]} \
--generic-ssh-key ~/.ssh/id_rsa \
--engine-storage-driver overlay ${env.envName}
```

### Connect to the environment
```
eval $(docker-machine env ${env.envName})
```

### Add a Manager node to the cluster
```
docker swarm join \
--token ${this.manager} \
${nodes.cp.first.extIPs[0]}:2377
```

### Add a Worker node to the cluster
```
docker swarm join \
--token ${this.worker} \
${nodes.cp.first.extIPs[0]}:2377
```
