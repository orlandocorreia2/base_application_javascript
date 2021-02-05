FROM node:12

LABEL maintainer 'Orlando Nascimento <ocnasicmento2@gmail.com>'

WORKDIR /usr/src/app

RUN apt-get update \
  && apt-get install -yq --no-install-recommends \
  # TOOLS
  nano \
  curl \
  git \
  unzip \
  #REACT
  && npm install -g create-react-app \
  # CLEAR 
  && apt-get clean

ENTRYPOINT ["/bin/ping"]
CMD ["localhost"]