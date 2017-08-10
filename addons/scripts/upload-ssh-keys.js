resp = jelastic.users.account.GetSSHKeys(appid, session, false)
if (resp.result != 0 || resp.keys == null) return resp
kl = resp.keys.length
if (kl == 0) return {
    result: 0,
    onAfterReturn: "no-ssh-keys"
}

//uploading all public keys
cmd = [], add = 'echo $key >> ~/.ssh/authorized_keys'
for (i = 0; i < kl; i++) {
    key = resp.keys[i].publicKey
    cmd.unshift(add)
    if (key.indexOf('ssh-rsa') == 0) {
        cmd.unshift('key=\"' + key + '\"')
    } else {
        cmd.unshift('echo -e \"' + key + '\" > /tmp/key.pub; key=$(ssh-keygen -i -f /tmp/key.pub); rm -f /tmp/key.pub')
    }
}

return {
    result: 0,
    onAfterReturn: {
        'cmd[cp,worker]': cmd
    }
}
