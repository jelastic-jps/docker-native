### Create docker-machine remote connection
```
docker-machine create --driver generic \
--generic-ip-address=${nodes.cp.first.extIPs[0]} \
--generic-ssh-key ~/.ssh/id_rsa \
--engine-storage-driver overlay ${env.envName}
```

### Connect to the environemnt
```
eval $(docker-machine env ${env.envName})
```

### Add a Manager node to the cluster
```
docker swarm join \
--token ${settings.manager_token} \
${nodes.cp.first.extIPs[0]}:2377
```

### Add a Woker node to the cluster
```
docker swarm join \
--token ${settings.worker_token} \
${nodes.cp.first.extIPs[0]}:2377
```

