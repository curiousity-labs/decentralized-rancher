FROM node:17.4.0

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install
RUN mkdir -p /nft-rancher-api && cp -a /tmp/node_modules /nft-rancher-api/



WORKDIR /nft-rancher-api
ADD . /nft-rancher-api

CMD ["npm", "run", "develop"]