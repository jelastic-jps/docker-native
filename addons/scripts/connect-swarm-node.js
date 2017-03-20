//@req(id, role)

resp = jelastic.data.base.GetObjectsByCriteria('swarmTokens', {appid:'${env.appid}'})
if (resp.result != 0) return resp 
if (resp.objects.length == 0) return {result: 99, error: "not tokens found", type: "error"}

return {
    result:0,
    onAfterReturn : {
        connectNode: {
            id: id,
            token: resp.objects[0][role]
        }
    }
}
