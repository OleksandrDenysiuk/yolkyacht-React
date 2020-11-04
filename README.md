# alliedyacht
Allied Yacht Transportation


# Google Kubernetes Engine Deployment
Instructions how to deploy Allied Yacht on Google Cloud Kubernetes Engine

B - browser
C - command line

1. B 
   In Google Cloud Engine create new project and store its identificator, f.e.: resolute-grin-259917

2. B
   In Google Cloud Engine select Kubernetes Engine and create new cluster.
   Leave all parameters default except two:
      time zone  - select: us-west1-a
      default-pool - number of nodes: 1

3. C
   Login in Google Cloud via:
      gcloud auth login
   Allow Google Cloud SDK app all it ask

4. C
   Set working project:
        gcloud config set project resolute-grin-259917

5. C
   To handle client-web part of application as static files
      a) build it:
         cd client-web						- goto to the client-web directory
         npm run build						- build
      b) create in ./server directory new 'public' directory and copy all files from /client-web/build to /server/public

6. C
   Create Docker image to be pushed on the server:

        docker build -f ./server/Dockerfile-Google-Dev -t alliedyacht-dev .
        docker build -f ./server/Dockerfile-Google-Prod -t alliedyacht-prod .
        docker-compose -f docker-compose.dev.yml up --build
                - create docker images with docker-compose from file
                - if under building Docker image "no space" error occured then remove local images:
                  docker rmi $(docker images -q) -f
                  docker rm $(docker ps -q -f 'status=exited')
                  docker rmi $(docker images -q -f "dangling=true")
                  docker volume rm $(docker volume ls -qf dangling=true)

        docker tag alliedyacht-dev gcr.io/resolute-grin-259917/alliedyacht-dev
        docker tag alliedyacht-prod gcr.io/resolute-grin-259917/alliedyacht-prod
								- tag image with server-project image

        docker push gcr.io/resolute-grin-259917/alliedyacht-dev
        docker push gcr.io/resolute-grin-259917/alliedyacht-prod
								- push tagged image on corresponding server/progect


   Useful commands for images managing:
        docker-compose down					- stop run docker containers on local computer
        docker images 						- list of images on local computer
        docker rmi $(docker images -q) -f			- remove all docker images on local computer
        gcloud container images list-tags gcr.io/resolute-grin-259917/google_dev_yolkyacht_server
								- list images with hash on Google Cloud for server arc.io, 
								  project resolute-grin-259917 with tag google_dev_yolkyacht_server
        gcloud container images delete gcr.io/resolute-grin-259917/google_dev_yolkyacht_server@sha256:dd7c49484406 --force-delete-tags
								- remove docker tagged image with hash from google cloud

7. B
   In Google Cloud Engine select Container Repository - Images

8. B
   Select image and version and via "thee dot" menu select Deploy.
   Select early created cluster and leave all defaults.
   Deployment take up to five minutes.

9. B
   In Google Cloud Engine select Kubernetes Engine and then Workloads
   Click Create Load Balancer and specify required port: 5000 for server part of AlliedYacht.
   After creation it will show public IP and port - application is available outside.

   