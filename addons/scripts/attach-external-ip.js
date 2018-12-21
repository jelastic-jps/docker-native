var ipQuotas = jelastic.billing.account.GetQuotas(appid, session, [
   'environment.externalip.enabled',
   'environment.externalip.maxcount',
   'environment.externalip.maxcount.per.node'
].join(";"));

if (ipQuotas.result != 0) return resp;

if (ipQuotas.array[0].value != 0 && ipQuotas.array[1].value > 0 && ipQuotas.array[2].value > 0) {
    return jelastic.environment.control.AttachExtIp({
        envName: "${env.envName}",
        nodeId: ${nodes.cp.master.id}
    })
};

return {
    result: 0
};
