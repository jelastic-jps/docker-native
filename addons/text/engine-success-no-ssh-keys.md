To further operate it via docker-machine, add [public SSH keys](https://docs.jelastic.com/ssh-add-key) to your Jelastic account and apply them with the _Import Public SSH Keys_ add-on for the correspoding node. 

Alternatively, you can use Jelastic [SSH Gate](https://docs.jelastic.com/ssh-gate) to establish connection to any node within your account.

### Create remote connection
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

### Connect the engine to a swarm cluster
```
docker swarm join --token $TOKEN $HOST:$PORT
```
