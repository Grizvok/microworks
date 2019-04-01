FROM golang:1.12.1-alpine

WORKDIR /go/src/github.com/grizvok/go-message
COPY . .

RUN apk add --no-cache git mercurial

RUN go get -d -v ./...
RUN go install -v ./...

RUN apk del git mercurial

CMD ["go", "run", "main.go"]

