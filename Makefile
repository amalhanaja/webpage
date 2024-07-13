BUILD_IMAGE ?= node:22-alpine

VERSION := latest
IMAGE_TAG := webpage:$(VERSION)

build-image:
	@podman build --no-cache \
        --secret id=gh_access_token,env=GH_ACCESS_TOKEN \
        --secret id=wakatime_shareable_coding_activity_table,env=WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL \
		-t $(IMAGE_TAG) .

run:
	@podman run --rm -it --name webpage \
		--secret gh_access_token,type=env,target=GH_ACCESS_TOKEN \
        --secret wakatime_shareable_coding_activity_table,type=env,target=WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL \
		-p 3000:3000 \
		$(IMAGE_TAG)