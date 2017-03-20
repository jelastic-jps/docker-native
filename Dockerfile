FROM devbeta/jelastic-centos7-base

RUN yum install -y yum-utils
RUN yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
RUN yum makecache fast
RUN yum install -y docker-ce
RUN systemctl enable docker

CMD ["systemctl start docker"]


