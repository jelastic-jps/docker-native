You can use Jelastic [SSH Gate](https://docs.jelastic.com/ssh-gate) to establish connection to any node within your account.

### Add a Manager node to the cluster
```
docker swarm join --token \
${globals.manager_token} \
${nodes.cp.master.extIPs[0]}:2377
```

### Add a Worker node to the cluster
```
docker swarm join --token \
${globals.worker_token} \
${nodes.cp.master.extIPs[0]}:2377
```
