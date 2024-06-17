FROM node:18-alpine AS builder

# Setting working directory
WORKDIR /app 

# Copy all local files into working directory
COPY . .

# Install pnpm
RUN npm i -g pnpm

# Perform clean install
RUN pnpm prune
RUN pnpm install

# Build App
RUN pnpm build

FROM node:18-alpine AS runner

# Copy build directory
COPY --from=builder /app/build build

# Expose port 3000 by default sveltekit running on port 3000
EXPOSE 3000

# set NODE_ENV to production
ENV NODE_ENV=production

# RUN using node
CMD [ "node", "build" ]

