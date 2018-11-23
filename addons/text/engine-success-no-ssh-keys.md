You can use Jelastic [SSH Gate](https://docs.jelastic.com/ssh-gate) to establish connection to any node within your account.

### Connect the engine to a swarm cluster
```
docker swarm join --token $TOKEN $HOST:$PORT
```
