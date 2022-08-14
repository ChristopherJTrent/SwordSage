cd /home/arkevorkhat/src/docker/foundryServer
sleep 5 
./assets/FoundryVTT/foundryvtt &
./assets/ngrok http 40000 >/dev/null &
sleep 5
node $HOME/src/javascript/typescript/foundryUpdate/bin/index.js
