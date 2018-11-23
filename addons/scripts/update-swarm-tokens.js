ctl = jelastic.env.control, envName = '${env.envName}', _ = {}, _.envName = envName, _.session = session

cmd = 'docker swarm join-token -q ', _.commandList = [{
    command: cmd + 'manager'
}, {
    command: cmd + 'worker'
}]

nodeId = getParam('nodeId')
debug = []

if (nodeId) {
    _.nodeId = nodeId
    resp = ctl.ExecCmdById(_)
    debug.push(resp);
} else {
    //return success or request next manager 
    nodes = ctl.GetEnvInfo(envName, session).nodes
    for (i = 0; i < nodes.length; i++){
        if (nodes[i].nodeGroup != 'cp') continue; 
        _.nodeId = nodes[i].id

        resp = ctl.ExecCmdById(_)
        debug.push(resp);

        if (resp.result == 0) break
    }
}

//checking the last response from the cycle
if (resp.result != 0) return resp

tokens = resp.responses[0].out.split('\n')
manager = tokens[0]
worker = tokens[1]

db = jelastic.data.base

//define table for swarm tokens 
resp = db.DefineType(new String('swarmTokens'), {appid: 'string(32)', manager:'string', worker:'string'}, 'appid')
if (resp.result != 0 && resp.result != 1002) return resp

//waiting for 1 second after the new type was defined (temporary issue)   
if (resp.result == 0) java.lang.Thread.sleep(1000)

envAppid = '${env.appid}'
resp = db.DeleteObjectsByCriteria('swarmTokens', {appid: envAppid})
if (resp.result != 0 && resp.result != 1004) return resp 

return db.CreateObject('swarmTokens', {appid: envAppid, manager: manager, worker: worker})
