docker rmi $(docker images -q) -f
cd ./client-web/
npm run build
cd ..
cd ./server/public/
rm -R *
cd ..
cd ..
cp -R ./client-web/build/ ./server/public/
docker build -f ./server/Dockerfile-Google-Prod -t alliedyacht-prod .
docker tag alliedyacht-prod gcr.io/resolute-grin-259917/alliedyacht-prod
docker push gcr.io/resolute-grin-259917/alliedyacht-prod
