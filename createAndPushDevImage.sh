docker rmi $(docker images -q) -f
cd ./client-web/
npm run build
cd ..
cd ./server/public/
rm -R *
cd ..
cd ..
cp -R ./client-web/build/ ./server/public/
docker build -f ./server/Dockerfile-Google-Dev -t alliedyacht-dev .
docker tag alliedyacht-dev gcr.io/resolute-grin-259917/alliedyacht-dev
docker push gcr.io/resolute-grin-259917/alliedyacht-dev
