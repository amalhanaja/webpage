# syntax = docker/dockerfile:1.2

FROM node:22-alpine

# Setting working directory
WORKDIR /app 

# Copy all local files into working directory
COPY . .

# Install pnpm
RUN npm i -g pnpm

# Perform  install
RUN pnpm install

ENV NODE_ENV=production

# Build App
RUN --mount=type=secret,id=gh_access_token \
    --mount=type=secret,id=wakatime_shareable_coding_activity_table \
    export GH_ACCESS_TOKEN=$(cat /run/secrets/gh_access_token) \
    export WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL=$(cat /run/secrets/wakatime_shareable_coding_activity_table)

RUN pnpm build

# Remove dev dependencies
RUN pnpm prune --production

# Expose port 3000 by default sveltekit running on port 3000
EXPOSE 3000

# RUN using node
ENTRYPOINT ["node", "build"]
