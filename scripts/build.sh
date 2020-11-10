#!/bin/bash -x

set -e 

if [[ $(BRANCH) == master ]]; then
    IMAGE = bastibast/$(APP_NAME):$(APP_NAME)
    docker build ../ -t $(IMAGE)

elif [[ $(BRANCH) == develop* ]]; then
    IMAGE = bastibast/$(APP_NAME):$(REVISION)
    docker build ../ -t $(IMAGE)
else
    echo "App not found"
    exit 1
fi

docker push $(IMAGE)

## a