# --------------------
# Builder
# --------------------
FROM node:10-alpine AS builder

WORKDIR /src
COPY /src .
RUN npm install && \
    npm test && rm -rf node_modules && \
    npm install --production

# --------------------
# Runtime
# --------------------
FROM node:10-alpine AS runtime

WORKDIR /src
COPY --from=builder /src .

EXPOSE 8080

CMD ["npm", "start"]
