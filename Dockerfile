FROM node:22-alpine AS builder

# Setting working directory
WORKDIR /app 

# Copy all local files into working directory
COPY . .

# Install pnpm
RUN npm i -g pnpm

# Perform  install
RUN pnpm install

# Build App
RUN pnpm build

# Remove dev dependencies
RUN pnpm prune --production

FROM node:22-alpine AS runner

# Copy build directory
COPY --from=builder /app/build build

# Expose port 3000 by default sveltekit running on port 3000
EXPOSE 3000

ARG github_access_token
ARG wakatime_shareable_coding_activity_table_url

# set ENV to production
ENV NODE_ENV=production
ENV GH_ACCESS_TOKEN=${github_access_token}
ENV WAKATIME_SHAREABLE_CODING_ACTIVITY_TABLE_URL=${wakatime_shareable_coding_activity_table_url}

# RUN using node
CMD [ "node", "build" ]

