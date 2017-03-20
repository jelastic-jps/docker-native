- @rs: SSH key as input - продумать / реализовать - P3
- @am: добавить свой драйвер - https://github.com/docker/machine/tree/master/drivers - P1 
- @am: сюда интегрироваться - https://github.com/docker/labs/blob/master/swarm-mode/cloud-quick-start/swarm.sh - P3
- @sk: разобраться с extIP заменой и вернуть --advertise-addr ${this.ip} - P1
- @dt: нам надо сертифицированный пакет сделать чтобы докер демон нормально запускался по умолчанию - так же как томкат и прочие как это лучше сделать? пример реализации через systemd
https://github.com/docker/docker/blob/master/contrib/init/systemd/docker.service.rpm - P2