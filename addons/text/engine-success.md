### Create remote connection
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

### Connect the engine to a swarm cluster
```
docker swarm join --token $TOKEN $HOST:$PORT
```
